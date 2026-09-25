/**
 * Portfolio Interactive Logic & Experience Engine
 * Minimalist Monochrome Glassmorphism
 */

(function () {
  'use strict';

  // Safe LocalStorage helpers for restricted/sandboxed environments
  function safeGetStorage(key, fallback = null) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key);
        return val !== null ? val : fallback;
      }
    } catch (e) {
      // In private/sandboxed mode, storage may be denied
    }
    return fallback;
  }

  function safeSetStorage(key, val) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, String(val));
      }
    } catch (e) {
      // Ignore storage write errors in restricted contexts
    }
  }

  // State Management
  const state = {
    theme: safeGetStorage('theme', 'dark'),
    soundEnabled: safeGetStorage('sound', 'false') === 'true',
    activeFilter: 'all',
    activeType: 'all',
    terminalHistory: [],
    historyIndex: -1,
    audioCtx: null
  };

  // Audio Click Synthesizer (Subtle Haptic Audio via Web Audio API)
  function initAudio() {
    if (!state.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playHapticTick(freq = 800, duration = 0.015) {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!state.audioCtx) return;
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, state.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, state.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, state.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(state.audioCtx.destination);
      osc.start();
      osc.stop(state.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  // Toast Notification System
  function showToast(message, icon = '✓') {
    playHapticTick(1000, 0.03);
    const shelf = document.getElementById('toast-shelf');
    if (!shelf) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="font-weight: 700; color: var(--accent-pure);">${icon}</span>
      <span>${message}</span>
    `;

    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // HTML Escape Helper
  function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // Clipboard Helper
  function copyTextToClipboard(text, successMsg = 'Copied to clipboard!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast('Could not copy text.', '✕');
    }
    document.body.removeChild(el);
  }

  // Theme Management
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcons();

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', state.theme);
        safeSetStorage('theme', state.theme);
        updateThemeIcons();
        playHapticTick(600, 0.03);
        showToast(`Switched to ${state.theme === 'dark' ? 'Obsidian Glass' : 'Pearl White'} theme.`);
      });
    }
  }

  function updateThemeIcons() {
    const moon = document.getElementById('theme-moon-icon');
    const sun = document.getElementById('theme-sun-icon');
    if (moon && sun) {
      if (state.theme === 'light') {
        moon.style.display = 'none';
        sun.style.display = 'block';
      } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
      }
    }
  }

  // Sound Toggle Management
  function initSoundToggle() {
    const btn = document.getElementById('sound-toggle');
    const onIcon = document.getElementById('sound-on-icon');
    const offIcon = document.getElementById('sound-off-icon');

    function updateSoundIcons() {
      if (!onIcon || !offIcon) return;
      if (state.soundEnabled) {
        onIcon.style.display = 'block';
        offIcon.style.display = 'none';
      } else {
        onIcon.style.display = 'none';
        offIcon.style.display = 'block';
      }
    }

    updateSoundIcons();

    if (btn) {
      btn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        safeSetStorage('sound', state.soundEnabled);
        updateSoundIcons();
        if (state.soundEnabled) {
          playHapticTick(900, 0.03);
          showToast('Audio feedback enabled.');
        } else {
          showToast('Audio feedback muted.');
        }
      });
    }
  }

  // Custom Cursor Interaction
  function initCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    });

    function loop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(loop);
    }
    loop();

    // Hover scale effect
    const hoverSelectors = 'a, button, input, textarea, .glass-panel, .cmd-item, .filter-btn';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  // Spotlight Sheen Effect on Cards
  function initSpotlightCards() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // Interactive Constellation Canvas Layer
  function initCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000, radius: 140 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    let particles = [];
    const count = Math.min(Math.floor((width * height) / 14000), 85);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.6;
        this.baseAlpha = Math.random() * 0.35 + 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse avoidance/gravitation
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * 0.8;
          this.y -= Math.sin(angle) * 0.8;
        }
      }

      draw() {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${this.baseAlpha})`
          : `rgba(0, 0, 0, ${this.baseAlpha * 0.8})`;
        ctx.fill();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }
    createParticles();

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${lineAlpha})`
              : `rgba(0, 0, 0, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          const mAlpha = (1 - mdist / mouse.radius) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isDark
            ? `rgba(255, 255, 255, ${mAlpha})`
            : `rgba(0, 0, 0, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    }
    animate();
  }

  // Populate Hero Stats from Config
  function renderHeroStats() {
    const container = document.getElementById('hero-stats-container');
    if (!container || !PORTFOLIO_CONFIG.stats) return;

    container.innerHTML = PORTFOLIO_CONFIG.stats
      .map(
        (stat) => `
      <div class="hero-stat-item">
        <span class="stat-num">${stat.value}</span>
        <span class="stat-desc">${stat.label}</span>
      </div>
    `
      )
      .join('');
  }

  // Populate Featured Projects with Evidence & Proof Badges
  // Populate Featured Projects with Built vs Concept Design Differentiation
  function renderProjects(filter = state.activeFilter, type = state.activeType) {
    const grid = document.getElementById('projects-grid');
    if (!grid || !PORTFOLIO_CONFIG.projects) return;

    let filtered = PORTFOLIO_CONFIG.projects;

    // Filter by projectType (all, built, concept)
    if (type && type !== 'all') {
      filtered = filtered.filter((p) => p.projectType === type);
    }

    // Filter by domain category
    if (filter && filter !== 'all') {
      filtered = filtered.filter((p) => p.category === filter);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; border: 1px dashed var(--glass-border); border-radius: var(--radius-md); background: var(--glass-bg);">
          <p style="color: var(--text-secondary); margin-bottom: 14px; font-family: var(--font-mono); font-size: 0.95rem;">No matching projects found for this filter criteria.</p>
          <button class="btn-glass reset-filter-btn" style="padding: 8px 20px; font-size: 0.85rem;">Reset All Filters</button>
        </div>
      `;
      const resetBtn = grid.querySelector('.reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.activeType = 'all';
          state.activeFilter = 'all';
          document.querySelectorAll('.type-filter-btn').forEach((b) => b.classList.toggle('active', b.getAttribute('data-type') === 'all'));
          document.querySelectorAll('.filter-btn').forEach((b) => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
          renderProjects('all', 'all');
        });
      }
      return;
    }

    grid.innerHTML = filtered
      .map((project) => {
        const isConcept = project.projectType === 'concept';
        const cardClass = isConcept
          ? 'glass-panel spotlight-card project-card card-concept'
          : 'glass-panel spotlight-card project-card card-built';

        return `
      <div class="${cardClass}" data-id="${project.id}">
        ${isConcept ? `
          <div class="concept-watermark-stamp" title="Architectural Concept & System Specification">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 22h20"></path><path d="M12 2l7 19H5z"></path></svg>
            <span>Concept Spec</span>
          </div>
        ` : ''}

        <div class="project-image-box">
          <img src="${project.image}" alt="${escapeHTML(project.title)}" loading="lazy">
        </div>

        <div class="project-header-row">
          <div>
            <h3 class="project-title">${escapeHTML(project.title)}</h3>
            <div class="project-subtitle">${escapeHTML(project.subtitle)}</div>
          </div>
        </div>

        <div class="proof-badge-strip">
          ${isConcept ? `
            <span class="concept-status-pill">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22h20"></path><path d="M12 2l7 19H5z"></path></svg>
              <span>Concept Architecture</span>
            </span>
            ${project.specCode ? `<span class="proof-badge-item schematic-badge">${escapeHTML(project.specCode)}</span>` : ''}
            <span class="proof-badge-item concept-badge">CAD Blueprint</span>
          ` : `
            <span class="built-status-pill">
              <span class="status-dot" style="width: 6px; height: 6px; display: inline-block;"></span>
              <span>${project.hasDemo ? '⚡ Live App & Repo' : '🟢 Verified Repo'}</span>
            </span>
            <span class="proof-badge-item schematic-badge">Architecture Verified</span>
            ${project.stats && project.stats[0] ? `<span class="proof-badge-item test-badge">${escapeHTML(project.stats[0].value)}</span>` : ''}
          `}
        </div>

        ${isConcept && project.conceptNote ? `
          <div class="concept-callout-notice">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>${escapeHTML(project.conceptNote)}</span>
          </div>
        ` : ''}

        <p class="project-description">${escapeHTML(project.description)}</p>

        <div class="project-metrics-row">
          ${project.stats
            .map(
              (s) => `
            <div class="metric-item">
              <span class="val">${escapeHTML(s.value)}</span>
              <span class="lbl">${escapeHTML(s.label)}</span>
            </div>
          `
            )
            .join('')}
        </div>

        <div class="project-tags">
          ${project.tags.map((t) => `<span class="project-tag">${escapeHTML(t)}</span>`).join('')}
        </div>

        <div class="project-footer-actions">
          ${isConcept ? `
            <button class="inspect-concept-btn" data-project-id="${project.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>
              <span>Inspect Concept Blueprint</span>
            </button>

            <div class="concept-no-repo-badge" title="Conceptual architecture and engineering blueprint. No public repository is hosted.">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <span>Specification Only</span>
            </div>
          ` : `
            <button class="inspect-case-btn" data-project-id="${project.id}">
              <span>Inspect Case Study & Proofs</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <div class="project-ext-links">
              ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Source Code on GitHub" aria-label="Source Code">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>` : ''}
              ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Live Preview" aria-label="Live Demo">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>` : ''}
              ${project.apkUrl ? `
              <a href="${project.apkUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Download Signed APK Release" aria-label="Download APK">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>` : ''}
            </div>
          `}
        </div>
      </div>
    `;
      })
      .join('');

    // Rebind spotlight to freshly rendered cards
    initSpotlightCards();

    // Bind modal click buttons
    document.querySelectorAll('.inspect-case-btn, .inspect-concept-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });

    document.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        const id = card.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // Filter Buttons Binding (Dual-Tier Filter: Type & Category)
  function initProjectFilters() {
    // Tier 1: Type Filter (All, Built, Concept)
    const typeButtons = document.querySelectorAll('.type-filter-btn');
    typeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        typeButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeType = btn.getAttribute('data-type');
        playHapticTick(800, 0.02);
        renderProjects(state.activeFilter, state.activeType);
      });
    });

    // Tier 2: Discipline Filter
    const catButtons = document.querySelectorAll('.projects-category-filter .filter-btn');
    catButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        catButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFilter = btn.getAttribute('data-filter');
        playHapticTick(750, 0.02);
        renderProjects(state.activeFilter, state.activeType);
      });
    });
  }

  // Deep Project Modal with Tabbed Proofs, Invariants & Terminal
  function openProjectModal(projectId) {
    playHapticTick(900, 0.025);
    const project = PORTFOLIO_CONFIG.projects.find((p) => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-dynamic-body');
    if (!modal || !body) return;

    const isConcept = project.projectType === 'concept';
    const hasProofs = project.proofs && project.proofs.length > 0;
    const hasInvariants = project.invariants && project.invariants.length > 0;
    const hasTerminal = Boolean(project.terminalProof);

    // For concept designs, architecture blueprint is primary tab
    const defaultTab = isConcept ? 'architecture' : 'proofs';

    body.innerHTML = `
      <div style="margin-bottom: 20px;">
        <div class="proof-badge-strip" style="margin-bottom: 10px;">
          ${isConcept ? `
            <span class="proof-badge-item concept-badge">📐 Architectural Concept & Spec</span>
            ${project.specCode ? `<span class="proof-badge-item schematic-badge">${escapeHTML(project.specCode)}</span>` : ''}
            <span class="proof-badge-item test-badge">Benchmarked Architecture</span>
          ` : `
            <span class="proof-badge-item built-badge">🟢 Verifiable Engineering Build</span>
            <span class="proof-badge-item schematic-badge">Architecture Verified</span>
            ${hasProofs ? `<span class="proof-badge-item test-badge">📸 ${project.proofs.length} Visual Proofs</span>` : ''}
          `}
        </div>

        <h2 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 6px;">${escapeHTML(project.title)}</h2>
        <div style="font-family: var(--font-mono); color: var(--text-secondary); font-size: 0.95rem;">${escapeHTML(project.subtitle)}</div>
      </div>

      ${isConcept ? `
        <div class="modal-concept-banner">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <div>
            <strong style="color: #bfdbfe; font-size: 0.95rem;">Architectural Concept & Technical System Specification</strong><br>
            <span>${escapeHTML(project.conceptNote || 'This system design is an architectural research specification and hardware/software model. It does not have an active public repository or live deployment.')}</span>
          </div>
        </div>
      ` : ''}

      <!-- Proof Tabs Navigation -->
      <div class="proof-tabs-nav" id="modal-tabs-nav">
        ${!isConcept ? `
        <button class="proof-tab-btn active" data-tab="proofs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          <span>Screenshot Proofs (${project.proofs ? project.proofs.length : 0})</span>
        </button>` : ''}

        <button class="proof-tab-btn ${isConcept ? 'active' : ''}" data-tab="architecture">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
          <span>Architecture Blueprint</span>
        </button>

        ${hasInvariants ? `
        <button class="proof-tab-btn" data-tab="invariants">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span>${isConcept ? 'System Invariants & Boundary Policies' : 'Safety & Concurrency Invariants'}</span>
        </button>` : ''}

        ${hasTerminal ? `
        <button class="proof-tab-btn" data-tab="terminal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          <span>${isConcept ? 'Simulation & Test Runner' : 'Test Execution Terminal'}</span>
        </button>` : ''}

        <button class="proof-tab-btn" data-tab="overview">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
          <span>${isConcept ? 'Specification Scope & Highlights' : 'Summary & Highlights'}</span>
        </button>
      </div>

      <!-- Tab 1: Screenshot Proofs (Built only) -->
      ${!isConcept ? `
      <div class="proof-tab-pane active" id="pane-proofs">
        <div class="proof-gallery-grid">
          ${hasProofs ? project.proofs.map((proof, idx) => `
            <div class="proof-card">
              <div class="proof-image-wrapper" data-full-src="${proof.src}" title="Click to view full image in lightbox">
                <img src="${proof.src}" alt="${escapeHTML(proof.title)}" loading="lazy">
              </div>
              <div class="proof-card-body">
                <div class="proof-card-title">
                  <span class="proof-badge-item" style="font-size: 0.7rem; padding: 2px 8px;">Proof #${idx + 1}</span>
                  ${escapeHTML(proof.title)}
                </div>
                <p class="proof-card-caption">${escapeHTML(proof.caption)}</p>
              </div>
            </div>
          `).join('') : `
            <div class="proof-card">
              <div class="proof-image-wrapper" data-full-src="${project.image}">
                <img src="${project.image}" alt="${escapeHTML(project.title)}" loading="lazy">
              </div>
              <div class="proof-card-body">
                <div class="proof-card-title">${escapeHTML(project.title)}</div>
                <p class="proof-card-caption">Primary architectural visualization.</p>
              </div>
            </div>
          `}
        </div>
      </div>` : ''}

      <!-- Tab 2: Architecture Blueprint -->
      <div class="proof-tab-pane ${isConcept ? 'active' : ''}" id="pane-architecture">
        <div style="width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--glass-border); cursor: pointer;" class="proof-image-wrapper" data-full-src="${project.image}" title="Click to expand schematic">
          <img src="${project.image}" alt="${escapeHTML(project.title)}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Component Telemetry & Data Flow
          </h4>
          <div style="background: #08090d; border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 14px 18px; font-family: var(--font-mono); font-size: 0.85rem; color: #a5b4fc; line-height: 1.7; overflow-x: auto; white-space: pre-wrap;">${escapeHTML(project.architecture || 'Data pipeline active.')}</div>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            ${isConcept ? 'Design Rationale & Engineering Challenge' : 'Core Engineering Challenge & Resolution'}
          </h4>
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem; background: var(--glass-bg); border-left: 3px solid var(--accent-pure); padding: 12px 16px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
            ${escapeHTML(project.challenge || '')}
          </p>
        </div>
      </div>

      <!-- Tab 3: Safety & Invariants -->
      ${hasInvariants ? `
      <div class="proof-tab-pane" id="pane-invariants">
        <div style="margin-bottom: 20px;">
          <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            ${isConcept ? 'Enforced System Specifications & Boundary Invariants' : 'Enforced Architectural & Security Invariants'}
          </h4>
          <div class="invariants-list">
            ${project.invariants.map((inv) => `
              <div class="invariant-card">
                <span style="color: #10b981; font-weight: 700; margin-right: 6px;">✔</span>
                ${escapeHTML(inv)}
              </div>
            `).join('')}
          </div>
        </div>
      </div>` : ''}

      <!-- Tab 4: Terminal Test Proof -->
      ${hasTerminal ? `
      <div class="proof-tab-pane" id="pane-terminal">
        <div class="proof-terminal-box">
          <div class="proof-terminal-header">
            <div class="proof-terminal-dots">
              <span class="terminal-dot dot-red"></span>
              <span class="terminal-dot dot-yellow"></span>
              <span class="terminal-dot dot-green"></span>
            </div>
            <span class="proof-terminal-cmd">$ ${escapeHTML(project.terminalProof.command)}</span>
            <button class="proof-terminal-copy-btn" id="copy-test-cmd-btn" data-cmd="${escapeHTML(project.terminalProof.command)}">Copy Command</button>
          </div>
          <div class="proof-terminal-body">${escapeHTML(project.terminalProof.output)}</div>
        </div>
      </div>` : ''}

      <!-- Tab 5: Summary & Highlights -->
      <div class="proof-tab-pane" id="pane-overview">
        <div style="margin-bottom: 22px;">
          <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; margin-bottom: 8px;">${isConcept ? 'System Specification Scope' : 'Executive Summary'}</h4>
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1rem;">${escapeHTML(project.description)}</p>
        </div>

        <div class="project-metrics-row" style="margin-bottom: 22px;">
          ${project.stats
            .map(
              (s) => `
            <div class="metric-item">
              <span class="val" style="font-size: 1.1rem;">${escapeHTML(s.value)}</span>
              <span class="lbl">${escapeHTML(s.label)}</span>
            </div>
          `
            )
            .join('')}
        </div>

        <div style="margin-bottom: 22px;">
          <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; margin-bottom: 12px;">${isConcept ? 'Key Architectural Specifications' : 'Key Engineering Highlights'}</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
            ${project.highlights
              .map(
                (h) => `
              <li style="color: var(--text-secondary); font-size: 0.95rem; position: relative; padding-left: 20px;">
                <span style="position: absolute; left: 0; color: var(--accent-pure);">▹</span>
                ${escapeHTML(h)}
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </div>

      <!-- Modal Footer -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 20px; border-top: 1px solid var(--glass-border); flex-wrap: wrap; gap: 16px; margin-top: 24px;">
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${project.tags.map((t) => `<span class="project-tag">${escapeHTML(t)}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          ${isConcept ? `
            <div class="concept-no-repo-badge" style="font-size: 0.82rem; padding: 7px 14px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <span>Specification Only (No Public Repo)</span>
            </div>

            <button class="btn-primary" id="copy-spec-summary-btn" style="padding: 10px 18px; font-size: 0.88rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy Specification</span>
            </button>
          ` : `
            ${project.apkUrl ? `
              <a href="${project.apkUrl}" target="_blank" rel="noopener noreferrer" class="btn-glass" style="padding: 10px 18px; font-size: 0.88rem; color: #10b981; border-color: rgba(16, 185, 129, 0.35);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Download APK</span>
              </a>
            ` : ''}
            ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-glass" style="padding: 10px 18px; font-size: 0.88rem;">
              <span>GitHub Repository</span>
            </a>` : ''}
            ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 18px; font-size: 0.88rem;">
              <span>Live Demonstration</span>
            </a>` : ''}
          `}
        </div>
      </div>
    `;

    // Bind tab clicks
    document.querySelectorAll('#modal-tabs-nav .proof-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        playHapticTick(700, 0.015);
        document.querySelectorAll('#modal-tabs-nav .proof-tab-btn').forEach((b) => b.classList.remove('active'));
        document.querySelectorAll('.proof-tab-pane').forEach((p) => p.classList.remove('active'));

        btn.classList.add('active');
        const tabKey = btn.getAttribute('data-tab');
        const pane = document.getElementById(`pane-${tabKey}`);
        if (pane) pane.classList.add('active');
      });
    });

    // Bind copy test command button
    const copyCmdBtn = document.getElementById('copy-test-cmd-btn');
    if (copyCmdBtn) {
      copyCmdBtn.addEventListener('click', () => {
        const cmd = copyCmdBtn.getAttribute('data-cmd');
        copyTextToClipboard(cmd, 'Copied test command!');
      });
    }

    // Bind copy specification button
    const copySpecBtn = document.getElementById('copy-spec-summary-btn');
    if (copySpecBtn) {
      copySpecBtn.addEventListener('click', () => {
        const specSummary = `=== ARCHITECTURAL SPECIFICATION: ${project.title} ===\nStatus: ${project.specCode || 'CONCEPT SPEC'}\nSubtitle: ${project.subtitle}\nArchitecture Flow: ${project.architecture || ''}\nChallenge & Rationale: ${project.challenge || ''}\nSpecifications:\n${(project.invariants || []).map((i) => '- ' + i).join('\n')}`;
        copyTextToClipboard(specSummary, 'Copied architectural specification summary!');
      });
    }

    // Bind image lightbox triggers
    document.querySelectorAll('.proof-image-wrapper').forEach((imgWrap) => {
      imgWrap.addEventListener('click', () => {
        const fullSrc = imgWrap.getAttribute('data-full-src');
        if (fullSrc) openLightbox(fullSrc);
      });
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Lightbox Viewer
  function openLightbox(src) {
    playHapticTick(850, 0.02);
    let box = document.getElementById('lightbox-viewer');
    if (!box) {
      box = document.createElement('div');
      box.id = 'lightbox-viewer';
      box.className = 'lightbox-modal';
      box.innerHTML = `
        <button class="lightbox-close" id="lightbox-close-btn" aria-label="Close image viewer">✕</button>
        <img class="lightbox-img" id="lightbox-img" src="" alt="Proof Screenshot Fullview">
      `;
      document.body.appendChild(box);

      box.addEventListener('click', (e) => {
        if (e.target !== document.getElementById('lightbox-img')) {
          box.classList.remove('active');
        }
      });
      document.getElementById('lightbox-close-btn').addEventListener('click', () => {
        box.classList.remove('active');
      });
    }

    document.getElementById('lightbox-img').src = src;
    box.classList.add('active');
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      playHapticTick(500, 0.02);
    }
  }

  function initModalHandlers() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal-btn');

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProjectModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox-viewer');
        if (lightbox && lightbox.classList.contains('active')) {
          lightbox.classList.remove('active');
          return;
        }
        closeProjectModal();
        closeCmdPalette();
      }
    });
  }

  // Populate Technical Skills Matrix
  function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container || !PORTFOLIO_CONFIG.techStack) return;

    container.innerHTML = PORTFOLIO_CONFIG.techStack
      .map(
        (cat) => `
      <div class="glass-panel spotlight-card skill-category-card">
        <div class="skill-category-header">
          <div class="category-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <h3 class="category-title">${cat.category}</h3>
        </div>

        <div class="skill-list">
          ${cat.skills
            .map(
              (skill) => `
            <div class="skill-item">
              <div class="skill-row-info">
                <span class="skill-name">${skill.name}</span>
              </div>
              ${
                skill.tags && skill.tags.length
                  ? `
                <div class="skill-tag-pills">
                  ${skill.tags.map((t) => `<span class="skill-tag-pill">${t}</span>`).join('')}
                </div>
              `
                  : ''
              }
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `
      )
      .join('');
  }

  // Populate Career & Academic Timeline
  function renderExperience() {
    const track = document.getElementById('experience-timeline');
    if (!track) return;

    let html = '';

    // 1. Work Experience
    if (PORTFOLIO_CONFIG.experience && PORTFOLIO_CONFIG.experience.length) {
      html += PORTFOLIO_CONFIG.experience
        .map(
          (exp) => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="glass-panel spotlight-card timeline-card">
            <div class="timeline-header-row">
              <h3 class="timeline-role">${exp.role}</h3>
              <span class="timeline-period">${exp.period}</span>
            </div>

            <span class="timeline-company">${exp.company} • ${exp.location}</span>
            <p class="timeline-desc">${exp.description}</p>

            <ul class="timeline-achievements">
              ${exp.achievements.map((a) => `<li>${a}</li>`).join('')}
            </ul>

            <div class="skill-tag-pills">
              ${exp.skills.map((s) => `<span class="skill-tag-pill">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `
        )
        .join('');
    }

    // 2. Education Milestones
    if (PORTFOLIO_CONFIG.education && PORTFOLIO_CONFIG.education.length) {
      html += PORTFOLIO_CONFIG.education
        .map(
          (edu) => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="glass-panel spotlight-card timeline-card">
            <div class="timeline-header-row">
              <h3 class="timeline-role">${edu.degree}</h3>
              <span class="timeline-period">${edu.period}</span>
            </div>

            <span class="timeline-company">${edu.institution} • ${edu.location}</span>
            <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-pure); margin-bottom: 12px; font-weight: 600;">
              Result / Score: ${edu.score}
            </div>

            <ul class="timeline-achievements">
              ${edu.highlights.map((h) => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>
      `
        )
        .join('');
    }

    // 3. Certifications & Achievements
    if (PORTFOLIO_CONFIG.certifications && PORTFOLIO_CONFIG.certifications.length) {
      html += `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="glass-panel spotlight-card timeline-card">
            <div class="timeline-header-row">
              <h3 class="timeline-role">Professional Certifications & Honors</h3>
              <span class="timeline-period">Verified</span>
            </div>
            <span class="timeline-company">NPTEL, IIT & Advantage Vidarbha</span>

            <ul class="timeline-achievements" style="margin-top: 14px;">
              ${PORTFOLIO_CONFIG.certifications
                .map(
                  (c) => `
                <li><strong>${c.title}</strong> (${c.issuer}) — ${c.description}</li>
              `
                )
                .join('')}
            </ul>

            ${
              PORTFOLIO_CONFIG.languages
                ? `
              <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--glass-border);">
                <div style="font-size: 0.85rem; font-family: var(--font-mono); color: var(--text-secondary); margin-bottom: 8px;">Languages Known:</div>
                <div class="skill-tag-pills">
                  ${PORTFOLIO_CONFIG.languages.map((l) => `<span class="skill-tag-pill">${l.name} (${l.proficiency})</span>`).join('')}
                </div>
              </div>
            `
                : ''
            }
          </div>
        </div>
      `;
    }

    track.innerHTML = html;
  }

  // Populate Current Areas of Interest
  function renderInterests() {
    const grid = document.getElementById('interests-grid');
    if (!grid) return;

    const items = [
      { title: "Unreal Engine & Real-Time 3D", desc: "Real-time rendering, UE 5.x architecture, Blueprints, scene physics, and Quixel Megascans integration." },
      { title: "HLSL & Shader Development", desc: "Developing custom shaders in HLSL, node-based material editors, procedural patterns, and surface lighting." },
      { title: "AR / VR & Spatial Visualization", desc: "Exploring Augmented & Virtual Reality visualization pipelines and interactive 3D spatial environments." },
      { title: "Backend Engineering & APIs", desc: "Building scalable backend services using FastAPI, Node.js/Express, RESTful standards, and JWT authentication." },
      { title: "Databases (SQL & NoSQL)", desc: "Relational data modeling with PostgreSQL and flexible document storage architectures with MongoDB." },
      { title: "Android & Mobile Systems", desc: "Native Android development in Kotlin, Firebase Realtime Database, Cloud Messaging, and payment integrations." }
    ];

    grid.innerHTML = items
      .map(
        (item) => `
      <div class="glass-panel spotlight-card testimonial-card">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">${item.title}</h3>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${item.desc}</p>
      </div>
    `
      )
      .join('');
    initSpotlightCards();
  }

  // Command Palette (Cmd+K / Ctrl+K)
  function initCommandPalette() {
    const modal = document.getElementById('cmd-modal');
    const input = document.getElementById('cmd-search-input');
    const openBtn = document.getElementById('open-cmd-btn');
    const results = document.getElementById('cmd-results');

    function openCmdPalette() {
      playHapticTick(850, 0.02);
      modal.classList.add('active');
      input.value = '';
      filterItems('');
      input.focus();
    }

    window.closeCmdPalette = function () {
      modal.classList.remove('active');
    };

    if (openBtn) openBtn.addEventListener('click', openCmdPalette);

    // Global Keydown (Cmd+K / Ctrl+K)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('active')) {
          closeCmdPalette();
        } else {
          openCmdPalette();
        }
      }
    });

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCmdPalette();
      });
    }

    function filterItems(query) {
      const q = query.toLowerCase().trim();
      const items = results.querySelectorAll('.cmd-item');
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    if (input) {
      input.addEventListener('input', (e) => filterItems(e.target.value));
    }

    // Item Action Triggers
    results.addEventListener('click', (e) => {
      const item = e.target.closest('.cmd-item');
      if (!item) return;

      const action = item.getAttribute('data-action');
      const target = item.getAttribute('data-target');

      closeCmdPalette();

      if (action === 'goto' && target) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'copy-email') {
        copyTextToClipboard(PORTFOLIO_CONFIG.personal.email, 'Email copied to clipboard!');
      } else if (action === 'goto-url' && target) {
        window.open(target, '_blank');
      } else if (action === 'toggle-theme') {
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) themeBtn.click();
      }
    });
  }

  // Developer Virtual Terminal
  function initTerminal() {
    const form = document.getElementById('terminal-form');
    const input = document.getElementById('terminal-input');
    const history = document.getElementById('terminal-history');
    const body = document.getElementById('terminal-body');

    if (!form || !input) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const val = input.value.trim();
      if (!val) return false;

      playHapticTick(900, 0.015);
      state.terminalHistory.push(val);
      state.historyIndex = state.terminalHistory.length;

      executeTerminalCommand(val);
      input.value = '';
      return false;
    });

    // Arrow Key History Navigation
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (state.historyIndex > 0) {
          state.historyIndex--;
          input.value = state.terminalHistory[state.historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (state.historyIndex < state.terminalHistory.length - 1) {
          state.historyIndex++;
          input.value = state.terminalHistory[state.historyIndex] || '';
        } else {
          state.historyIndex = state.terminalHistory.length;
          input.value = '';
        }
      }
    });

    function executeTerminalCommand(cmdRaw) {
      const cmd = cmdRaw.toLowerCase().trim();

      if (cmd === 'clear') {
        history.innerHTML = '';
        return;
      }

      const entry = document.createElement('div');
      entry.className = 'terminal-entry';

      let responseText = '';

      if (PORTFOLIO_CONFIG.terminalCommands[cmd]) {
        responseText = PORTFOLIO_CONFIG.terminalCommands[cmd];
      } else if (cmd === 'date') {
        responseText = new Date().toUTCString();
      } else if (cmd === 'whoami') {
        responseText = 'guest@pallotti-workstation (read-only session)';
      } else if (cmd.startsWith('echo ')) {
        responseText = cmdRaw.substring(5);
      } else {
        responseText = `zsh: command not found: ${cmdRaw}. Type 'help' for available commands.`;
      }

      entry.innerHTML = `
        <div class="term-cmd-line">
          <span class="term-prompt-symbol">➜</span>
          <span>${escapeHTML(cmdRaw)}</span>
        </div>
        <div class="term-cmd-output">${escapeHTML(responseText)}</div>
      `;

      history.appendChild(entry);
      body.scrollTop = body.scrollHeight;

      if (cmd === 'theme') {
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) themeBtn.click();
      } else if (cmd === 'resume') {
        window.open('resume.html', '_blank');
      }
    }
  }

  // Contact Form & Action Buttons
  function initContactActions() {
    // Copy Hero Email Button
    const heroCopyBtn = document.getElementById('copy-email-hero-btn');
    if (heroCopyBtn) {
      heroCopyBtn.addEventListener('click', () => {
        copyTextToClipboard(PORTFOLIO_CONFIG.personal.email, `Email copied: ${PORTFOLIO_CONFIG.personal.email}`);
      });
    }

    // Direct Phone Copy/Call Tile
    const phoneTile = document.getElementById('contact-phone-link');
    if (phoneTile) {
      phoneTile.addEventListener('click', (e) => {
        copyTextToClipboard(PORTFOLIO_CONFIG.personal.phone, `Phone copied: ${PORTFOLIO_CONFIG.personal.phone}`);
      });
    }

    // Form Submission Simulation
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');

    if (form && submitBtn) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const message = document.getElementById('form-message').value.trim();

        if (!name || !email || !message) {
          showToast('Please fill in all required fields.', '✕');
          return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span>Encrypting & Dispatching...</span>
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Dispatch Message</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          `;
          form.reset();
          showToast(`Transmission received, ${name}! Sarvesh will reply promptly.`, '✓');
        }, 1200);
      });
    }
  }

  // Live Time Clock Ticker (Nagpur, Maharashtra, IST)
  function initLiveTimeTicker() {
    const ticker = document.getElementById('live-time-ticker');
    if (!ticker) return;

    function update() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      ticker.textContent = `Nagpur, Maharashtra • ${timeStr} IST`;
    }
    update();
    setInterval(update, 1000);
  }

  // Mobile Menu Toggle
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const links = document.querySelector('.nav-links');

    if (btn && links) {
      btn.addEventListener('click', () => {
        const isShown = links.style.display === 'flex';
        if (isShown) {
          links.style.display = '';
        } else {
          links.style.display = 'flex';
          links.style.position = 'absolute';
          links.style.top = '78px';
          links.style.left = '16px';
          links.style.right = '16px';
          links.style.flexDirection = 'column';
          links.style.background = 'rgba(12, 14, 18, 0.95)';
          links.style.padding = '20px';
          links.style.borderRadius = '16px';
          links.style.border = '1px solid var(--glass-border)';
        }
      });
    }
  }

  // Set Year in Footer
  function initFooterYear() {
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // Resilient Module Bootloader
  function boot() {
    const modules = [
      ['Theme', initTheme],
      ['Sound', initSoundToggle],
      ['Cursor', initCustomCursor],
      ['Canvas', initCanvas],
      ['HeroStats', renderHeroStats],
      ['Projects', () => renderProjects('all')],
      ['ProjectFilters', initProjectFilters],
      ['Skills', renderSkills],
      ['Experience', renderExperience],
      ['Interests', renderInterests],
      ['Spotlight', initSpotlightCards],
      ['ModalHandlers', initModalHandlers],
      ['CommandPalette', initCommandPalette],
      ['Terminal', initTerminal],
      ['ContactActions', initContactActions],
      ['LiveTicker', initLiveTimeTicker],
      ['MobileMenu', initMobileMenu],
      ['FooterYear', initFooterYear]
    ];

    modules.forEach(([name, fn]) => {
      try {
        fn();
      } catch (err) {
        console.warn(`[Module: ${name}] error:`, err);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
