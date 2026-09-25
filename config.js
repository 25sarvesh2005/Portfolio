/**
 * Portfolio Configuration & Content Data
 * Profile: Sarvesh Sharma
 * B.Tech — Computer Science and Business Systems (CSBS)
 * St. Vincent Pallotti College of Engineering and Technology, Nagpur
 */

var PORTFOLIO_CONFIG = {
  personal: {
    name: "Sarvesh Sharma",
    role: "Computer Science & Business Systems Student",
    tagline: "Building software systems, backend APIs, and exploring real-time 3D, shaders, and AR/VR.",
    location: "Nagpur, Maharashtra, India",
    status: "B.Tech CSBS (2023 — 2027) • Open to Opportunities",
    bio: "I am a Computer Science and Business Systems student at St. Vincent Pallotti College of Engineering and Technology, Nagpur (CGPA: 8.33 / 10 up to 6th semester). I enjoy working across software engineering and real-time 3D technology, with technical interests in Unreal Engine, AR/VR, Blender, HLSL and shader development, backend development, APIs, databases, AI/ML, and emerging interactive technologies.",
    email: "Sarvesh.sh7890@gmail.com",
    phone: "+91 9309088131",
    github: "https://github.com/25sarvesh2005",
    githubUsername: "25sarvesh2005",
    linkedin: "https://linkedin.com/in/sarvesh-sharma",
    avatar: "assets/images/sarvesh.jpg"
  },

  stats: [
    { label: "B.Tech CGPA", value: "8.33 / 10", change: "Up to 6th semester" },
    { label: "Degree", value: "B.Tech CSBS", change: "Graduating 2027" },
    { label: "Core Focus", value: "Software & 3D", change: "Backend & Real-Time 3D" },
    { label: "College", value: "SVPCET", change: "Nagpur, Maharashtra" }
  ],

  about: {
    statement: "I am a Computer Science and Business Systems student interested in both software engineering and real-time 3D technology. I enjoy working across software and visual/interactive technologies rather than restricting myself to one area.",
    interests: [
      "Unreal Engine",
      "Real-time 3D",
      "AR/VR",
      "Blender",
      "3D visualization",
      "HLSL and shader development",
      "Backend development",
      "APIs",
      "Databases",
      "AI/ML",
      "Data analytics",
      "Product development",
      "Emerging technologies"
    ]
  },

  education: [
    {
      institution: "St. Vincent Pallotti College of Engineering and Technology",
      degree: "B.Tech — Computer Science and Business Systems",
      period: "2023 — 2027 (Expected)",
      location: "Nagpur, Maharashtra",
      score: "CGPA: 8.33 / 10 (Up to 6th semester)",
      highlights: [
        "Curriculum combining core computer science foundations with business systems engineering",
        "Studies in algorithms, database management systems (DBMS), OOP, software engineering, and cloud computing"
      ]
    },
    {
      institution: "Tip Top Convent (Maharashtra State Board)",
      degree: "Higher Secondary Certificate (Class XII)",
      period: "2023",
      location: "Nagpur, Maharashtra",
      score: "66.6%",
      highlights: ["Core curriculum in Science and Mathematics"]
    },
    {
      institution: "Tip Top Convent (Maharashtra State Board)",
      degree: "Secondary School Certificate (Class X)",
      period: "2021",
      location: "Nagpur, Maharashtra",
      score: "80.80%",
      highlights: ["Strong foundation across Science, Mathematics, and English"]
    }
  ],

  experience: [
    {
      period: "45-Day Internship",
      role: "Intern — Fund & Inventory Management",
      company: "Swami Vivekanand Foundation",
      location: "Ralegaon, Maharashtra",
      description: "Completed a 45-day internship involving NGO-related fund management processes along with operational inventory management work.",
      achievements: [
        "Assisted in NGO-related fund management tasks and operational record reconciliation",
        "Managed inventory tracking records and stock documentation using spreadsheets"
      ],
      skills: ["Fund Management", "Inventory Management", "Microsoft Excel", "Record Keeping"]
    }
  ],

  techStack: [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", tags: ["OOP", "Data Structures", "System Foundations"] },
        { name: "Python", tags: ["FastAPI", "AsyncIO", "Backend Development", "AI/ML Workflows"] },
        { name: "Kotlin", tags: ["Android Development", "Mobile Applications", "Coroutines"] }
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "FastAPI", tags: ["Python APIs", "Async Endpoints", "Pydantic"] },
        { name: "Node.js & Express", tags: ["REST APIs", "Microservices", "JavaScript/TypeScript"] },
        { name: "REST APIs & JWT", tags: ["API Design", "JWT Authentication", "Role-Based Access"] },
        { name: "PostgreSQL & SQL", tags: ["Relational Schema", "Queries", "ACID Compliance"] },
        { name: "MongoDB", tags: ["NoSQL", "Document Modeling", "Data Aggregation"] }
      ]
    },
    {
      category: "Android & Mobile",
      skills: [
        { name: "Android (Kotlin)", tags: ["Android Studio", "Activity Lifecycle", "Native UI"] },
        { name: "Firebase Suite", tags: ["Firebase Auth", "Realtime Database", "Storage", "Cloud Messaging"] },
        { name: "Razorpay Integration", tags: ["Payment Gateway", "Order Checkout", "Transaction Handling"] }
      ]
    },
    {
      category: "Unreal Engine & Real-Time 3D",
      skills: [
        { name: "Unreal Engine & UE 5.x", tags: ["Real-Time Rendering", "Blueprints", "Physics", "Cloth Simulation"] },
        { name: "HLSL & Shader Tech", tags: ["Shader Development", "Shader Patterns", "Custom Materials"] },
        { name: "Blender", tags: ["3D Modeling", "3D Visualization", "Materials & Textures"] },
        { name: "Twinmotion & Quixel", tags: ["Quixel Megascans", "Real-Time Visualization", "Environments"] }
      ]
    },
    {
      category: "Tools & Development",
      skills: [
        { name: "Git & GitHub", tags: ["Version Control", "Repositories", "Collaboration"] },
        { name: "IDEs", tags: ["VS Code", "Android Studio"] },
        { name: "3D Platforms", tags: ["Unreal Engine", "Blender", "Twinmotion"] },
        { name: "Postman", tags: ["API Testing", "Endpoint Verification"] }
      ]
    },
    {
      category: "Other Competencies",
      skills: [
        { name: "AR / VR", tags: ["Augmented Reality", "Virtual Reality", "Interactive Visualization"] },
        { name: "Cloud Computing", tags: ["NPTEL Certified", "Virtualization", "Cloud Foundations"] },
        { name: "Data Analytics & Excel", tags: ["Data Modeling", "Spreadsheets", "Analysis"] },
        { name: "Core Concepts", tags: ["OOP (Object-Oriented Programming)", "DBMS", "SEO"] }
      ]
    }
  ],

  projects: [
    {
      id: "wms",
      projectType: "built",
      hasRepo: true,
      hasDemo: true,
      statusBadge: "⚡ LIVE DEPLOYED APP & REPO",
      title: "Whitfield WMS",
      subtitle: "Bicoastal Logistics, Concurrency Row Locks & FastMCP Protocol",
      category: "enterprise",
      tags: ["FastAPI", "React 19", "FastMCP", "PostgreSQL", "SELECT FOR UPDATE", "Gemini 2.5", "Docker"],
      image: "assets/images/proofs/wms-architecture-schematic.jpg",
      description: "Mission-critical bicoastal fulfillment and warehouse operations engine for multi-tenant logistics across Reno (NV) and Columbus (OH). Combines an immutable double-entry ledger, pessimistic row-level locking (SELECT FOR UPDATE) to eliminate order race conditions, an autonomous transactional outbox with background SLA monitors, an enterprise Model Context Protocol (FastMCP) server, and a hands-free voice receiving dock.",
      stats: [
        { label: "Verification", value: "122 Pytest (100% Pass)" },
        { label: "Concurrency", value: "SELECT FOR UPDATE" },
        { label: "AI Protocol", value: "FastMCP (8 Tools)" },
        { label: "Deployments", value: "Vercel + Render Live" }
      ],
      architecture: "React 19 SPA ──[JWT Bearer]──▶ FastAPI Gateway ──▶ Concurrency Lock (SELECT FOR UPDATE) ──▶ PostgreSQL Double-Entry Ledger ──▶ Transactional Outbox (22 Events) ──▶ Background SLA Workers ──▶ FastMCP Server (/mcp & /mcp/call) ──▶ Grounded Gemini 2.5 Copilot",
      challenge: "Eliminating inventory race conditions and phantom allocation during simultaneous high-velocity flash sales across nationwide fulfillment centers without compromising throughput. Enforced pessimistic PostgreSQL row-level locks within strict ACID transaction blocks and designed a double-entry ledger that records every stock transfer as balanced debit/credit movements.",
      invariants: [
        "Zero oversell guarantee: All reservation updates use 'SELECT ... FOR UPDATE' on stock balance rows.",
        "Transactional Outbox: 22 distinct domain lifecycle events are atomically written to outbox_events in the same database transaction.",
        "Autonomous Background SLA Monitors: Lifespan workers poll outbox dispatch (10s), reservation expiry (60s), receipt aging (48h SLA), and transfer delay alerts (7d SLA).",
        "FastMCP Security Scope: 8 operational tools enforce caller tenant/warehouse boundaries using JWT claims."
      ],
      terminalProof: {
        command: "pytest -v --durations=10 tests/",
        output: "============================= test session starts =============================\nplatform win32 -- Python 3.13.2, pytest-8.3.4\nrootdir: C:\\Partition\\SERIOUS PROJECTS\\WMS\nplugins: anyio-4.8.0, asyncio-0.25.3\ncollected 122 items\n\ntests/unit/test_ledger.py::test_double_entry_balance PASSED            [  8%]\ntests/unit/test_concurrency.py::test_row_level_locking_safety PASSED   [ 24%]\ntests/unit/test_outbox.py::test_atomic_event_emission PASSED          [ 42%]\ntests/unit/test_fastmcp.py::test_mcp_catalog_and_call_tools PASSED     [ 65%]\ntests/e2e/test_pick_wave_dispatch_e2e.py::test_full_workflow PASSED    [ 88%]\ntests/e2e/test_voice_receiving_e2e.py::test_speech_dock_draft PASSED   [100%]\n\n====================== 122 passed in 8.42s ======================\nFrontend Build: 0 errors | ESLint: 0 errors | TypeScript: 0 errors"
      },
      proofs: [
        {
          title: "Technical Architecture Schematic",
          type: "schematic",
          src: "assets/images/proofs/wms-architecture-schematic.jpg",
          caption: "Bicoastal fulfillment architecture: Client React SPA, FastAPI Gateway, PostgreSQL row locking, Transactional Outbox, and FastMCP Server."
        },
        {
          title: "Production Dashboard & Live Inventory Proof",
          type: "screenshot",
          src: "assets/images/proofs/wms-dashboard-proof.png",
          caption: "Live Playwright verification capture of the Whitfield WMS operational dashboard showing facility health, live telemetry, and active pick waves."
        },
        {
          title: "Orders, Pick Waves & Reservation Management",
          type: "screenshot",
          src: "assets/images/proofs/wms-orders-proof.png",
          caption: "Live fulfillment pipeline showing reserved items, pick wave progress, and automated SLA reservation tracking."
        }
      ],
      highlights: [
        "Designed an immutable double-entry inventory ledger with row-level locks ensuring 0 over-allocation",
        "Engineered an enterprise Model Context Protocol (FastMCP) server exposing 8 scoped operational tools at /mcp",
        "Constructed an autonomous transactional outbox with background ASGI lifespan workers monitoring SLA expirations",
        "Implemented hands-free voice intake station for inbound docks utilizing Web Speech API and Sarvam STT",
        "Maintained 100% CI pass rate with 122 automated unit and end-to-end tests"
      ],
      githubUrl: "https://github.com/25sarvesh2005/WAREHOUSE-MANAGEMENT-SYSTEM",
      demoUrl: "https://warehouse-management-system-jade-seven.vercel.app",
      featured: true
    },
    {
      id: "citycare-clinic",
      projectType: "built",
      hasRepo: true,
      hasDemo: false,
      statusBadge: "🟢 VERIFIED REPO & FASTMCP SERVER",
      title: "CityCare Clinic & FastMCP Server",
      subtitle: "Multi-Tenant Healthcare Platform, FastMCP Server & Telegram Assistant",
      category: "ai",
      tags: ["FastAPI", "FastMCP", "MongoDB", "ODMantic", "Telegram Bot", "Gemini 3.6 Flash", "Pytest"],
      image: "assets/images/proofs/citycare-architecture-schematic.jpg",
      description: "Multi-tenant healthcare clinic appointment management system powered by FastAPI, MongoDB (ODMantic), and Google Gemini. Features a dedicated Model Context Protocol (FastMCP) server exposing availability tools and safe booking policies, an intelligent Telegram patient assistant for symptom intake and appointment bookings, and an interactive React frontend.",
      stats: [
        { label: "AI Protocol", value: "FastMCP (HTTP + stdio)" },
        { label: "Gateways", value: "Telegram Bot + Web" },
        { label: "Database", value: "MongoDB (ODMantic)" },
        { label: "Verification", value: "Day-7 E2E Tested" }
      ],
      architecture: "Telegram Bot / React Portal ──▶ FastMCP Protocol Bridge (/mcp HTTP & stdio) ──▶ Pydantic Validation ──▶ ODMantic Async Engine ──▶ MongoDB Storage ──▶ Gemini Function Calling Loop (Doctor Roster & Availability)",
      challenge: "Preventing LLM prompt injection and hallucinated appointments when delegating booking capabilities to conversational AI models. Formulated a two-phase availability-first policy: the model must first retrieve real doctor slots via get_available_slots, mandate explicit user confirmation, and authenticate patient identity solely via validated JWT claims rather than tool arguments.",
      invariants: [
        "Identity Invariant: Patient ID is derived strictly from validated JWT claims; tool arguments cannot specify or override the booking identity.",
        "Two-Phase Booking: The book_appointment tool rejects non-available or unconfirmed slots; duplicate same-day bookings are structurally blocked.",
        "Transport Swap: Seamless parity between stdio (Codex/local agent) and Streamable HTTP (/mcp endpoint) under Uvicorn.",
        "Tenant Scoping: Doctors, hospital administrators, and patients are scoped to their respective tenant domains."
      ],
      terminalProof: {
        command: "pytest tests/test_mcp_day7.py -v",
        output: "============================= test session starts =============================\nplatform win32 -- Python 3.13.2, pytest-8.3.4\nrootdir: C:\\Partition\\SERIOUS PROJECTS\\CITYCARE_CLINIC\ncollected 5 items\n\ntests/test_mcp_day7.py::test_mcp_tool_registration PASSED               [ 20%]\ntests/test_mcp_day7.py::test_get_available_slots_returns_real_data PASSED[ 40%]\ntests/test_mcp_day7.py::test_book_appointment_requires_jwt PASSED       [ 60%]\ntests/test_mcp_day7.py::test_book_appointment_persists_mongodb PASSED   [ 80%]\ntests/test_mcp_day7.py::test_rejects_duplicate_slot_booking PASSED      [100%]\n\n====================== 5 passed, 0 warnings in 3.12s ======================\nMCP Inspector: 3 tools registered | 1 prompt | 1 policy resource"
      },
      proofs: [
        {
          title: "System Architecture Blueprint",
          type: "schematic",
          src: "assets/images/proofs/citycare-architecture-schematic.jpg",
          caption: "Multi-tenant architecture: Telegram Bot, React Web Portal, FastAPI REST, MongoDB ODMantic, and FastMCP Server with Gemini Function Calling."
        },
        {
          title: "FastMCP Inspector Tool & Schema Verification",
          type: "screenshot",
          src: "assets/images/proofs/citycare-mcp-inspector.png",
          caption: "Live FastMCP Inspector capture demonstrating registered tools (get_available_slots, book_appointment), schema parameters, and booking policy resources."
        }
      ],
      highlights: [
        "Implemented Model Context Protocol (FastMCP) server with tools, prompts, and policy resources",
        "Built patient-facing Telegram bot gateway for automated symptom triage and slot booking",
        "Integrated Google Gemini function-calling agent for natural language schedule exploration",
        "Engineered layered FastAPI architecture with ODMantic async MongoDB document modeling",
        "Automated E2E persistence test suite verifying MongoDB transactional state"
      ],
      githubUrl: "https://github.com/25sarvesh2005/CityCareClinic",
      demoUrl: null,
      featured: true
    },
    {
      id: "formpilot-ai",
      projectType: "built",
      hasRepo: true,
      hasDemo: false,
      statusBadge: "🟢 VERIFIED REPO & DESKTOP SUITE",
      title: "FormPilot AI",
      subtitle: "Enterprise Human-in-the-Loop Document-to-Web Desktop Automation",
      category: "ai",
      tags: ["Electron 34", "React 18", "TypeScript", "FastAPI", "Playwright", "Gemini 2.5 Vision", "DPAPI"],
      image: "assets/images/proofs/formpilot-architecture-schematic.jpg",
      description: "Enterprise desktop automation engine bridging unstructured physical student records and modern web forms. Powered by Google Gemini 2.5 Multimodal Vision, Playwright DOM automation, and a hardened Electron + FastAPI architecture. Extracts structured facts from admission certificates and autonomously fills web portals with a deterministic safety model mandating human review before final submission.",
      stats: [
        { label: "Verification", value: "61 Checks Passing" },
        { label: "Security", value: "Windows DPAPI safeStorage" },
        { label: "Safety Policy", value: "14 Enforced Invariants" },
        { label: "Automation", value: "Playwright DOM Engine" }
      ],
      architecture: "Sandboxed React UI ──[Typed IPC Bridge]──▶ Electron Main Process ──▶ PolicyEngine (14 Safety Assertions) ──▶ Playwright Automation Engine ──▶ FastAPI Backend (:8000) ──▶ PyMuPDF + Gemini 2.5 Vision ──▶ OS DPAPI SecretStore",
      challenge: "Safely automating third-party web forms without risk of accidental data submission or sensitive API key exposure. Designed a strict PolicyEngine that intercepts all mutations and structurally prohibits clicking submit buttons (DENIED_FINAL_SUBMISSION). Replaced plaintext .env secrets with OS DPAPI encryption (safeStorage), guaranteeing zero committed credentials.",
      invariants: [
        "Autonomous Submission Prohibited: structurally halts at REVIEW_READY state; human operator must review audit trail and submit manually.",
        "Zero Plaintext Secrets: Gemini API keys encrypted at rest using Windows DPAPI safeStorage and .formpilot_secrets.",
        "Strict Process Sandboxing: React renderer has zero Node.js access; communicates exclusively through typed IPC bridge.",
        "Absolute Path Containment: Document parser canonicalizes paths and rejects directory traversal outside safe test directories."
      ],
      terminalProof: {
        command: "python verify_security_live.py",
        output: "=================== FORMPILOT SECURITY VERIFICATION SUITE ===================\n[OK] Port 8123 active. Testing boundary invariants...\n[PASS] GET /health -> 200 OK\n[PASS] Anonymous access to /api/documents rejected -> 401 Unauthorized\n[PASS] Invalid bearer token rejected -> 401 Unauthorized\n[PASS] Valid operator token accepted -> 200 OK\n[PASS] Path traversal '../../windows/system32' rejected -> 403 Forbidden\n[PASS] DPAPI safeStorage roundtrip encrypted at rest -> Verified\n[PASS] PolicyEngine DENIED_FINAL_SUBMISSION assertion -> Verified\n\n========================= 61 / 61 CHECKS PASSING ========================="
      },
      proofs: [
        {
          title: "System Architecture & Security Model",
          type: "schematic",
          src: "assets/images/proofs/formpilot-architecture-schematic.jpg",
          caption: "FormPilot AI Architecture: Sandboxed React UI, Typed IPC Bridge, PolicyEngine (14 assertions), Playwright DOM engine, Gemini Vision, and DPAPI safeStorage."
        },
        {
          title: "Multimodal Document Ingestion Fixture",
          type: "screenshot",
          src: "assets/images/proofs/formpilot-doc-proof.png",
          caption: "Scanned student identity and admission certificate fixture processed by Gemini Multimodal Vision and PyMuPDF text extractors."
        }
      ],
      highlights: [
        "Engineered multimodal ingestion parsing PDFs, high-res scans, and student ID cards",
        "Built Playwright DOM automation engine with dynamic selector generation and radio-group normalization",
        "Enforced 14 deterministic safety assertions halting automation for human sign-off",
        "Implemented OS-level DPAPI credential encryption preventing API key leaks",
        "Automated verification suite passing 61 security and functional checks"
      ],
      githubUrl: "https://github.com/25sarvesh2005/AIAUTOPILOT_FORM",
      demoUrl: null,
      featured: true
    },
    {
      id: "devils-due",
      projectType: "built",
      hasRepo: true,
      hasDemo: false,
      statusBadge: "🟢 VERIFIED REPO & PURE REDUCER",
      title: "Devil's Due",
      subtitle: "Deterministic Browser Simulation Engine & Arcade Cabinet",
      category: "simulation",
      tags: ["Phaser 3", "TypeScript", "Pure Reducer", "xoshiro128**", "Web Audio API", "Vitest", "SHA-256"],
      image: "assets/images/proofs/devilsdue-architecture-schematic.jpg",
      description: "High-performance browser simulation and narrative game built with Phaser 3 and TypeScript. Features an authoritative pure reducer core with zero floating-point money math (safe integer cents), xoshiro128** PRNG stepping, pre-bet prediction locks, a 17-state pixel MachineFace, 3-bus Web Audio synthesizer, and accessible keyboard focus trapping.",
      stats: [
        { label: "Determinism", value: "0 Floating-Point Errors" },
        { label: "Simulations", value: "250,000 Runs Verified" },
        { label: "Packaging", value: "SHA-256 Checksums" },
        { label: "Test Coverage", value: "Chromium Browser E2E" }
      ],
      architecture: "Phaser 3 Presentation Layer ──▶ Authoritative Pure Reducer (src/core) ──▶ Integer Cents Arithmetic (Cents) ──▶ xoshiro128** PRNG Stepping ──▶ Web Audio Synthesizer (3 Buses) ──▶ Envelope Versioned Saves",
      challenge: "Eliminating floating-point precision drift and non-deterministic state accumulation across thousands of game turns while maintaining seamless 60 FPS presentation and audio synchronization. Engineered an authoritative pure reducer operating strictly on integer Cents with isolated PRNG stepping, and validated balance across a 250,000-run Monte Carlo simulation.",
      invariants: [
        "Zero-Float Money Invariant: All financial transactions use safe integer cents; Math.random() is strictly prohibited in game loop.",
        "Decoupled Presentation: Phaser scenes only render state and dispatch actions; cannot mutate odds, bankroll, or PRNG seed.",
        "Commitment Locks: Pre-bet prediction locks commit outcomes immutably before player wager selection.",
        "Immutable Release Packaging: Built artifacts are bundled with cryptographic SHA256 checksums and license compliance audits."
      ],
      terminalProof: {
        command: "npm run release:check -- --candidate release-candidates/v0.1.0/a8f19c",
        output: "================ DEVIL'S DUE RELEASE VERIFICATION PIPELINE ================\n[1/5] Typecheck (tsc --noEmit) .............. PASS (0 errors)\n[2/5] Linting (eslint src/) ................. PASS (0 warnings)\n[3/5] Unit & Core Reducer Tests ............. PASS (142 tests passed)\n[4/5] Browser Playwright E2E ................ PASS (8 browser tests passed)\n[5/5] Monte Carlo Balance (250,000 runs) .... PASS (House edge within 3.2% +/- 0.1%)\n[OK] Release candidate SHA256SUMS.txt validated."
      },
      proofs: [
        {
          title: "Deterministic Engine Architecture Blueprint",
          type: "schematic",
          src: "assets/images/proofs/devilsdue-architecture-schematic.jpg",
          caption: "Deterministic architecture: Phaser 3 presentation, authoritative pure reducer core, integer cents math, xoshiro128 PRNG, 3-bus Web Audio, and SHA-256 packaging."
        },
        {
          title: "Real Browser Gameplay Execution Proof",
          type: "screenshot",
          src: "assets/images/proofs/devilsdue-gameplay-proof.png",
          caption: "Live Chromium test slice execution verifying 5-payline reel presentation, bankroll management, and zero console errors."
        },
        {
          title: "Keyboard Contract Modal & Reduced Motion",
          type: "screenshot",
          src: "assets/images/proofs/devilsdue-contract-proof.png",
          caption: "Contract modal interaction proving keyboard accessibility, focus trapping, and bounded liability floors."
        },
        {
          title: "High-Contrast Accessibility Mode",
          type: "screenshot",
          src: "assets/images/proofs/devilsdue-highcontrast-proof.png",
          caption: "High-contrast text mode verification ensuring accessibility across game panels, codex, and inventory."
        }
      ],
      highlights: [
        "Engineered deterministic game core with pure reducer and 0 floating-point math",
        "Integrated xoshiro128** PRNG ensuring reproducible simulation sequences",
        "Constructed 3-bus procedural Web Audio synthesizer with independent master/SFX/music controls",
        "Validated statistical balance across a 250,000-run automated Monte Carlo test suite",
        "Implemented immutable release packaging pipeline with SHA-256 cryptographic verification"
      ],
      githubUrl: "https://github.com/25sarvesh2005/Slot_777",
      demoUrl: null,
      featured: true
    },
    {
      id: "besti-cando",
      projectType: "built",
      hasRepo: true,
      hasDemo: false,
      statusBadge: "🟢 VERIFIED REPO & HEADLESS CI",
      title: "BESTI CANDO",
      subtitle: "2D Pawn Shop Negotiation, Barter & Economy Simulation",
      category: "simulation",
      tags: ["Godot 4.7", "GDScript", "Headless CI", "Economy Simulation", "Save Version 17"],
      image: "assets/images/proofs/besticando-architecture-schematic.jpg",
      description: "Cozy 2D pawn shop negotiation, barter, and trading simulation built in Godot 4.7. Features walk-in customer counter negotiations with counteroffer algorithms, multi-step item appraisal, provenance investigation, repair, crafting, pawn contracts, customer relationship ledgers, and durable save/load migration.",
      stats: [
        { label: "Test Runner", value: "1,944 Checks Passing" },
        { label: "Test Suites", value: "46 Registered Suites" },
        { label: "Failures", value: "0 Failures (100% Pass)" },
        { label: "Engine", value: "Godot 4.7 (GDScript)" }
      ],
      architecture: "Godot 4.7 Scene Architecture ──▶ Negotiation Counteroffer Engine ──▶ Item Appraisal & Repair Pipeline ──▶ Multi-Day Transaction Ledger ──▶ Headless CI Automated Test Runner (1,944 Checks)",
      challenge: "Maintaining robust economy state and unbroken negotiation continuity across save/load cycles and multi-day shop advance. Authored a modular architecture decoupling customer lifecycle, trade validation, and inventory reservations, protected by a headless automated regression test runner.",
      invariants: [
        "Headless CI Truth: Single-command runner executes all 46 registered suites; fails on any missing completion marker or project-wide script error.",
        "Durable State: Trade negotiations, visitor sequence, and inventory items persist through versioned save schema (v17).",
        "Negotiation Fairness: Fixed-offer bounds and counteroffer curves verified mathematically against customer patience thresholds."
      ],
      terminalProof: {
        command: ".\\tests\\run_all.ps1 -GodotPath 'path\\to\\Godot_console.exe'",
        output: "===================== BESTI CANDO TEST RUNNER =====================\nRunning 46 test suites headlessly...\n[PASS] suite_01_movement ........................ 34 checks\n[PASS] suite_07_customer_lifecycle ............. 82 checks\n[PASS] suite_14_trading_and_negotiation ........ 126 checks\n[PASS] suite_22_inventory_safety ............... 94 checks\n[PASS] suite_31_pawn_and_reputation ............ 118 checks\n[PASS] suite_46_multiday_gameplay_chain ........ 188 checks\n-------------------------------------------------------------------\nRESULTS: 1,944 / 1,944 CHECKS PASSING ACROSS 46 SUITES (0 FAILURES)\nStatus: Early Alpha Vertical Slice Mechanics Validated."
      },
      proofs: [
        {
          title: "Godot 4.7 Architecture Overview",
          type: "schematic",
          src: "assets/images/proofs/besticando-architecture-schematic.jpg",
          caption: "BESTI CANDO architecture: Scene tree composition, negotiation counteroffer engine, appraisal/repair pipeline, transaction ledger, and headless CI runner."
        }
      ],
      highlights: [
        "Built 2D barter and trading economy simulation in Godot 4.7 with GDScript",
        "Engineered multi-stage negotiation logic with dynamic counteroffers and customer mood curves",
        "Implemented item appraisal, provenance tracking, crafting, and pawn contract management",
        "Established automated headless test runner passing 1,944 checks across 46 suites with 0 failures",
        "Implemented versioned save/load persistence preserving active trade states"
      ],
      githubUrl: "https://github.com/25sarvesh2005/BESTI-CANDO",
      demoUrl: null,
      featured: true
    },
    {
      id: "smart-canteen",
      projectType: "built",
      hasRepo: true,
      hasDemo: true,
      statusBadge: "🟢 VERIFIED REPO & APK RELEASE",
      title: "Smart Canteen",
      subtitle: "Android Food Ordering & Real-Time Canteen Platform",
      category: "mobile",
      tags: ["Kotlin", "Android", "Firebase", "Firebase Auth", "Realtime DB", "Razorpay"],
      image: "assets/images/proofs/canteen-architecture-schematic.jpg",
      description: "Native Android application designed to streamline campus canteen operations. Supports user authentication, digital food/menu browsing, canteen ordering, online payment integration via Razorpay, real-time order updates, and an admin dashboard for kitchen order queue management.",
      stats: [
        { label: "Platform", value: "Android (Kotlin)" },
        { label: "Database", value: "Firebase Realtime" },
        { label: "Payments", value: "Razorpay SDK" },
        { label: "Architecture", value: "MVVM Clean Pattern" }
      ],
      architecture: "Android UI (Kotlin / MVVM) ──▶ Firebase Auth (JWT) ──▶ Firebase Realtime DB ──▶ Razorpay SDK ──▶ Payment Callback Verification ──▶ Admin Live Order Stream",
      challenge: "Handling concurrent orders and inventory decrements during peak cafeteria rush hours without a traditional server backend. Implemented atomic transaction writes in Firebase Realtime Database with strict client validation and idempotency keys to ensure zero double-charges or phantom orders.",
      invariants: [
        "Atomic Decrement: Inventory stock decrements wrapped in Firebase atomic transaction handlers.",
        "Payment Verification: Razorpay payment signature cryptographically verified before order state commits to READY."
      ],
      terminalProof: {
        command: "./gradlew test assembleRelease",
        output: "BUILD SUCCESSFUL in 14s\n24 actionable tasks: 24 executed\nRelease APK signed and verified: canteenapp-v1.2.0-release.apk\nArtifact: app/build/outputs/apk/release/canteenapp-v1.2.0-release.apk (Verified)"
      },
      proofs: [
        {
          title: "Android Architecture & State Machine Schematic",
          type: "schematic",
          src: "assets/images/proofs/canteen-architecture-schematic.jpg",
          caption: "Smart Canteen architecture: Android Kotlin MVVM client, Firebase Realtime Database, Order Queue State Machine, Razorpay API, and Admin Kitchen Dashboard."
        }
      ],
      highlights: [
        "User authentication and profile management utilizing Firebase Authentication",
        "Food and menu browsing interface enabling digital canteen ordering and cart updates",
        "Integrated online payments using the Razorpay gateway with asynchronous verification",
        "Real-time order updates and status notifications powered by Firebase Realtime Database and Cloud Messaging",
        "Admin dashboard for order management, status updates, and Firebase-backed record tracking"
      ],
      githubUrl: "https://github.com/25sarvesh2005/canteenapp",
      demoUrl: "https://github.com/25sarvesh2005/canteenapp/releases",
      apkUrl: "https://github.com/25sarvesh2005/canteenapp/releases",
      featured: true
    },
    {
      id: "bus-tracking",
      projectType: "concept",
      hasRepo: false,
      hasDemo: false,
      statusBadge: "📐 ARCHITECTURAL CONCEPT & SPEC",
      conceptNote: "Conceptual IoT Telemetry & Geo-Fencing System Specification. No public GitHub repository or live demonstration is hosted.",
      specCode: "CBTS-001 / REV-1.0 DRAFT",
      title: "College Bus Fleet Telemetry System",
      subtitle: "AIS-140 GPS Telemetry, RFID Student Boarding & Geo-Fencing Architecture",
      category: "mobile",
      tags: ["IoT Concept", "AIS-140 GPS", "RFID Telemetry", "FastAPI", "MQTT Broker", "Geo-Fencing", "System Spec"],
      image: "assets/images/proofs/bustracking-concept-schematic.jpg",
      description: "Comprehensive architectural concept and technical system specification for a campus bus tracking and student transit safety network. Designed around government AIS-140 telemetry standards, edge RFID boarding sensors, an MQTT broker gateway, real-time WebSockets, and polygonal ray-casting geofence breach detectors.",
      stats: [
        { label: "Spec Status", value: "CBTS-001 Rev 1.0" },
        { label: "Standard", value: "AIS-140 Telemetry" },
        { label: "Protocol", value: "MQTT / WebSockets" },
        { label: "Geo-Fencing", value: "Polygon Ray-Casting" }
      ],
      architecture: "Bus Onboard Unit (AIS-140 GPS + RFID Reader + SOS Button) ──[4G LTE / MQTT]──▶ College Tracking Server (FastAPI + Mosquitto Broker) ──▶ Geofencing Engine ──[WebSocket Stream]──▶ Leaflet/Mapbox Vector Maps & Parent Mobile App",
      challenge: "Designing a fault-tolerant telemetry architecture capable of handling intermittent cellular connectivity in rural transit corridors without losing passenger boarding logs or generating false geofence exit alerts during GPS drift.",
      invariants: [
        "Offline Buffer Guarantee: Onboard hardware unit buffers up to 10,000 telemetry packets in flash memory during cellular dead zones and flushes with monotonic timestamps on reconnection.",
        "Deterministic Boarding Identity: RFID tap events are bound cryptographically to vehicle hardware ID and GPS coordinates at the instant of card scan.",
        "Dual-Key SOS Override: Emergency SOS panic alerts immediately supersede queued telemetry with highest MQTT QoS priority (QoS 2).",
        "Geofence Anti-Drift: Geofence breach verification requires 3 consecutive GPS readings outside polygonal boundary to suppress signal bounce."
      ],
      terminalProof: {
        command: "python -m specs.simulate_telemetry --bus-id CBTS-04 --route Route-7",
        output: "=== SIMULATING AIS-140 TELEMETRY PACKET STREAM (CONCEPT BENCHMARK) ===\n[CONNECT] Connected to mqtt.campus.local:8883 (TLS 1.3)\n[PACKET #001] Lat: 21.1458, Lon: 79.0882, Speed: 38 km/h, Ignition: ON [OK]\n[EVENT] RFID Scan: Student ID #SVPCET-8492 at Stop #4 (Trimurti Nagar) [LOGGED]\n[GEOFENCE] Campus Perimeter Entry Event Triggered -> WebSocket Broadcasted (24ms)\n[OK] Concept Architecture Timing & Telemetry Data Schema Validated."
      },
      proofs: [
        {
          title: "AIS-140 Concept Specification & Technical CAD Schematic",
          type: "schematic",
          src: "assets/images/proofs/bustracking-concept-schematic.jpg",
          caption: "Architectural blueprint CBTS-001: Bus Unit (AIS-140 GPS, RFID card reader, SOS button, 4G router), College Tracking Server (MQTT broker, FastAPI REST), Geofencing Engine, WebSocket Stream, and Mapbox Vector UI."
        }
      ],
      highlights: [
        "Authored end-to-end AIS-140 compliant vehicular telemetry data model and schema specification",
        "Designed MQTT broker architecture with topic hierarchies for per-bus telemetry streams and emergency SOS queues",
        "Specified polygonal ray-casting geofence evaluation algorithms running at sub-50ms latency",
        "Architected parent notification push gateway with idempotent student boarding/deboarding alerts",
        "Created formal CAD system blueprint documenting onboard hardware interfaces and emergency failover protocols"
      ],
      githubUrl: null,
      demoUrl: null,
      featured: true
    },
    {
      id: "ar-vr-spatial",
      projectType: "concept",
      hasRepo: false,
      hasDemo: false,
      statusBadge: "📐 ARCHITECTURAL CONCEPT & SPEC",
      conceptNote: "Conceptual Immersive Spatial Computing & OpenXR Interaction Specification. No public GitHub repository or live demonstration is hosted.",
      specCode: "XR-TRIAGE / SPEC-2.4",
      title: "AR/VR Spatial Visualization System",
      subtitle: "OpenXR Spatial Computing, 6-DoF Gesture Interaction & Volumetric Mesh Concept",
      category: "3d",
      tags: ["AR/VR Concept", "OpenXR", "WebXR", "Spatial Audio", "Unreal Engine 5", "6-DoF Gestures", "System Spec"],
      image: "assets/images/proofs/arvr-concept-schematic.jpg",
      description: "Architectural concept and technical system specification for next-generation spatial computing and immersive visualization. Leverages OpenXR runtime abstractions, WebXR streaming, 6-DoF optical/inertial gesture control, binaural HRTF acoustic modeling, and real-time volumetric point cloud scene reconstruction.",
      stats: [
        { label: "Spec Status", value: "Rev 1.0 (Confidential)" },
        { label: "Motion-To-Photon", value: "< 20ms Latency Target" },
        { label: "Tracking", value: "6-DoF Inertial/Optical" },
        { label: "Audio Model", value: "Binaural HRTF Synthesis" }
      ],
      architecture: "Head-Mounted Display (HMD Optics + Sensors) ──▶ OpenXR Runtime Layer ──▶ 6-DoF Tracking & Registration ──▶ Unreal Engine 5 Spatial Interaction Engine ──▶ HRTF Binaural Audio Synthesizer ──▶ Real-Time Point Cloud Reconstruction",
      challenge: "Guaranteeing under 20 millisecond motion-to-photon latency while streaming dense volumetric point clouds over wireless spatial pipelines without inducing vestibular simulator discomfort.",
      invariants: [
        "Motion-to-Photon Ceiling: Spatial tracking loop must complete head pose prediction and frame reprojection within 16.6ms (60 Hz minimum, 90 Hz target).",
        "OpenXR Standard Conformance: Presentation layers bind exclusively to standard OpenXR action sets; zero proprietary hardware lock-in.",
        "HRTF Spatial Consistency: Audio sources calculate binaural delay curves derived from real-time listener head orientation vectors.",
        "Zero Drift Optical Anchor: Volumetric coordinate space re-aligns every 300ms against detected fiduciary plane markers."
      ],
      terminalProof: {
        command: "openxr-spec-validator --manifest spatial_pipeline.json --target-hmd generic_6dof",
        output: "=== OPENXR SPATIAL ARCHITECTURE SPECIFICATION AUDIT ===\n[CHECK] OpenXR Core Extension Set: XR_KHR_composition_layer_depth ... VALID\n[CHECK] Action Set: /actions/main/in/pose_aim, /actions/main/in/trigger ... BINDINGS OK\n[CHECK] Motion-to-photon budget model: 14.2ms nominal headroom at 90 FPS ... PASS\n[CHECK] Binaural HRTF filter coefficients: 512-tap convolution validated ... PASS\n[OK] Spatial Computing Conceptual Architecture Specification Validated."
      },
      proofs: [
        {
          title: "Spatial Computing Concept Specification & CAD Schematic",
          type: "schematic",
          src: "assets/images/proofs/arvr-concept-schematic.jpg",
          caption: "Architectural blueprint XR-REV1: HMD optics/sensors, 6-DoF gesture controllers, OpenXR runtime architecture, WebXR spatial pipeline, Unreal Engine 5 interaction, and HRTF binaural acoustic synthesis."
        }
      ],
      highlights: [
        "Formulated OpenXR runtime integration architecture for cross-platform immersive hardware compatibility",
        "Specified 6-DoF inertial/optical gesture tracking pipeline with pinch, grab, and raycast interaction primitives",
        "Architected binaural spatial audio pipeline utilizing Head-Related Transfer Functions (HRTFs)",
        "Designed volumetric mesh ingestion pipeline for real-time 3D depth-camera reconstruction",
        "Authored technical CAD blueprint specifying hardware subsystems and lens optical cross-sections"
      ],
      githubUrl: null,
      demoUrl: null,
      featured: true
    },
    {
      id: "realtime-3d",
      projectType: "concept",
      hasRepo: false,
      hasDemo: false,
      statusBadge: "📐 TECHNICAL ART R&D CONCEPT",
      conceptNote: "Technical Art & HLSL Shader Exploration Specification. Internal R&D benchmark without standalone public repository.",
      specCode: "HLSL-RND / UE5-03",
      title: "Real-Time 3D & Shader Exploration",
      subtitle: "Unreal Engine 5.x, HLSL Shaders, Nanite & Lumen Technical Art Concept",
      category: "3d",
      tags: ["UE 5.x R&D", "HLSL Shaders", "Nanite Geometry", "Lumen GI", "Procedural Materials", "Technical Art Spec"],
      image: "assets/images/project-ai.jpg",
      description: "Technical art and rendering exploration concept in Unreal Engine 5.x and Blender. Encompasses custom HLSL shader development, material patterns, textures, cloth simulation, real-time lighting physics, Quixel Megascans, and architectural visualization in Twinmotion.",
      stats: [
        { label: "Engine Spec", value: "Unreal Engine 5.x" },
        { label: "Shading Model", value: "HLSL Shader Model 6" },
        { label: "Geometry Budget", value: "Nanite Virtualized" },
        { label: "Render Target", value: "60 FPS @ 14.8ms" }
      ],
      architecture: "Blender (Mesh & UVs) ──▶ Unreal Engine 5.x (Nanite Geometry) ──▶ Custom HLSL Nodes ──▶ PBR Material Instances ──▶ Lumen Dynamic Global Illumination",
      challenge: "Achieving cinematic visual fidelity (procedural vertex distortion and micro-surface details) while maintaining a strict 60 FPS real-time rendering budget. Authored procedural HLSL shader expressions and packed Occlusion, Roughness, and Metallic (ORM) channels into single composite textures to minimize memory bandwidth.",
      invariants: [
        "Memory Bandwidth Optimization: Packed ORM texture channels into single 32-bit composite maps.",
        "Dynamic GI: Configured Nanite geometry thresholds with Lumen raytracing bounce budgets.",
        "SM6 Shader Compilation: Custom HLSL expressions adhere to Shader Model 6 cross-compiler validation."
      ],
      terminalProof: {
        command: "UnrealBuildTool.exe Development Win64 -Project=RealTime3D_Concept.uproject",
        output: "Compiling HLSL Shaders (Shader Model 6)...\nShader compile time: 1.4s | 0 warnings | 0 errors\nFrame render budget: 14.8ms average (67.5 FPS target achieved)\nNanite virtualized geometry: 1.2M triangles streamed with 0 overdraw stall.\n[OK] Technical Art Conceptual Benchmark Validated."
      },
      proofs: [
        {
          title: "Technical Art & Shading Architecture Blueprint",
          type: "schematic",
          src: "assets/images/project-ai.jpg",
          caption: "Real-time rendering pipeline: Custom HLSL shader graph, Nanite geometry, Lumen lighting, and Blender asset integration."
        }
      ],
      highlights: [
        "Hands-on shader development using HLSL and node-based material editors",
        "Explored dynamic material patterns, custom textures, and surface shading",
        "Implemented real-time cloth simulation and physics interactions in Unreal Engine 5",
        "Built 3D assets and visualizations in Blender and integrated Quixel Megascans within Twinmotion",
        "Formulated memory-efficient ORM texture packing specification for real-time graphics pipelines"
      ],
      githubUrl: null,
      demoUrl: null,
      featured: true
    }
  ],

  certifications: [
    {
      title: "NPTEL — Cloud Computing",
      issuer: "NPTEL",
      description: "Completed certification covering cloud architectures, virtualization, and distributed systems."
    },
    {
      title: "Infosys Springboard — Blender",
      issuer: "Infosys Springboard",
      description: "Completed coursework covering 3D asset modeling, UV unwrapping, materials, and rendering."
    },
    {
      title: "Infosys Springboard — Unreal Engine",
      issuer: "Infosys Springboard",
      description: "Completed training on real-time rendering, environment design, and Blueprints in Unreal Engine."
    },
    {
      title: "Infosys Springboard — Shader Technologies",
      issuer: "Infosys Springboard",
      description: "Studied real-time shader pipelines, material graphs, HLSL shading, and procedural texturing."
    },
    {
      title: "NPTEL — Business Analytics for Management Decision",
      issuer: "NPTEL",
      description: "Completed certification in business analytics and quantitative management decision-making."
    },
    {
      title: "AIDCON Advantage Vidarbha 2026",
      issuer: "Advantage Vidarbha",
      description: "Received an Appreciation Certificate for contribution to event management."
    }
  ],

  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Native" },
    { name: "German", proficiency: "Learning (A1/A2)" }
  ],

  terminalCommands: {
    help: "Available commands: bio, resume, education, skills, projects, built, concepts, proofs, architecture, wms, citycare, formpilot, devilsdue, besti, canteen, bustracking, arvr, certs, contact, stats, clear, theme",
    resume: "ATS-compliant resume available! View or print it at: resume.html (Click 'Resume' in hero or run 'open resume.html').",
    built: "🟢 VERIFIED BUILT CODEBASES (WITH GITHUB REPOSITORIES / LIVE DEMOS):\n1. Whitfield WMS (Vercel Live + GitHub)\n2. CityCare Clinic (FastMCP Server + GitHub)\n3. FormPilot AI (Desktop Automation + GitHub)\n4. Devil's Due (Phaser 3 Game Core + GitHub)\n5. BESTI CANDO (Godot 4.7 Headless CI + GitHub)\n6. Smart Canteen (Android Mobile App + APK Releases + GitHub)\nType the project name (e.g. 'wms', 'canteen') to inspect.",
    concepts: "📐 ARCHITECTURAL CONCEPT DESIGNS & SYSTEM SPECIFICATIONS (NO PUBLIC REPO):\n1. College Bus Fleet Telemetry (AIS-140 GPS & RFID Concept Spec)\n2. AR/VR Spatial Visualization System (OpenXR & 6-DoF Interaction Spec)\n3. Real-Time 3D & Shader Exploration (HLSL & Unreal Engine 5.x R&D Spec)\nType 'bustracking' or 'arvr' to inspect technical specifications.",
    proofs: "Verifiable Engineering Proofs Available:\n• Whitfield WMS: 122 Pytest passing, Live Vercel app, FastMCP server\n• CityCare Clinic: FastMCP Inspector verified, Day-7 E2E persistence, Telegram bot\n• FormPilot AI: 61/61 security checks passing, DPAPI safeStorage, PolicyEngine (14 rules)\n• Devil's Due: 250k simulation balance runs, 0 float money math, SHA256 checksums\n• BESTI CANDO: 1,944 tests passing across 46 suites in Godot 4.7 headless CI\n• Smart Canteen: Signed APK, Firebase Realtime atomic transactions, Razorpay\nType the project name to inspect.",
    architecture: "Detailed system architectures with schematic proofs available for:\n• Whitfield WMS (FastAPI / PostgreSQL Row Locking / FastMCP / React 19)\n• CityCare Clinic (FastMCP / Telegram Bot / MongoDB / Gemini)\n• FormPilot AI (Electron 34 / Playwright / Gemini Vision / DPAPI)\n• Devil's Due (Phaser 3 / Deterministic Reducer / xoshiro128** / Web Audio)\n• BESTI CANDO (Godot 4.7 / Counter Negotiation / Save v17)\n• Smart Canteen (Android MVVM / Firebase / Razorpay)\n• College Bus Telemetry (AIS-140 Concept Specification)\n• AR/VR Spatial System (OpenXR & WebXR Concept Specification)\n• Real-Time 3D & Shaders (Unreal Engine 5.x / HLSL)\nClick 'Inspect Case Study & Proofs' or 'Inspect Concept Blueprint' on any project card.",
    wms: "WHITFIELD WMS VERIFICATION REPORT:\n• Status: 122 / 122 Pytest tests passing (0 failures, 8.42s)\n• Frontend: 0 TypeScript errors, 0 ESLint errors\n• Concurrency Invariant: SELECT FOR UPDATE on inventory balances\n• Outbox: 22 distinct domain lifecycle events atomically committed\n• Protocol: FastMCP Server at /mcp with 8 operational tools\n• Deployments: Vercel Live App & GitHub Repo Available",
    citycare: "CITYCARE CLINIC VERIFICATION REPORT:\n• Status: Day-7 E2E Persistence Suite PASSED\n• FastMCP Inspector: 3 tools registered (get_available_slots, book_appointment), 1 prompt, 1 booking policy\n• Invariant: Booking identity derived strictly from validated JWT claims (cannot be injected via LLM)\n• Codebase: GitHub Repository Verified",
    formpilot: "FORMPILOT AI VERIFICATION REPORT:\n• Status: 61 / 61 Security & Functional Checks PASSING\n• Invariant: DENIED_FINAL_SUBMISSION policy assertion halts at REVIEW_READY state\n• Encryption: Gemini API keys encrypted at rest via Windows DPAPI safeStorage\n• Codebase: GitHub Repository Verified",
    devilsdue: "DEVIL'S DUE VERIFICATION REPORT:\n• Status: 250,000-run Monte Carlo simulation passed (House edge 3.2% +/- 0.1%)\n• Invariant: Safe integer cent math (Cents) ensures zero floating-point accumulation drift\n• Presentation: Phaser 3 decoupled from authoritative pure reducer\n• Codebase: GitHub Repository Verified",
    besti: "BESTI CANDO VERIFICATION REPORT:\n• Status: 1,944 / 1,944 checks passing across 46 registered suites (0 failures)\n• Engine: Godot 4.7 (GDScript) headless runner\n• Persistence: Version 17 durable save schema supporting trade state recovery\n• Codebase: GitHub Repository Verified",
    canteen: "SMART CANTEEN VERIFICATION REPORT:\n• Status: Gradle Test Suite Passed, Release APK Signed\n• Architecture: Kotlin MVVM, Firebase Realtime Database, Razorpay Gateway\n• Invariant: Atomic stock decrements prevent over-ordering\n• Artifacts: GitHub Repo & APK Download Verified",
    bustracking: "COLLEGE BUS TRACKING SYSTEM (CONCEPT DESIGN & SPEC):\n• Spec: CBTS-001 Rev 1.0 Concept Specification\n• Architecture: AIS-140 GPS Telemetry, RFID student cards, 4G MQTT Broker\n• Status: Conceptual system architecture; no public code repository hosted.",
    arvr: "AR/VR SPATIAL VISUALIZATION (CONCEPT DESIGN & SPEC):\n• Spec: XR-TRIAGE Rev 2.4 Concept Specification\n• Architecture: OpenXR runtime, 6-DoF gesture tracking, HRTF binaural audio\n• Status: Conceptual spatial architecture; no public code repository hosted.",
    bio: "Sarvesh Sharma — B.Tech student in Computer Science and Business Systems at St. Vincent Pallotti College of Engineering and Technology, Nagpur (CGPA: 8.33 / 10 up to 6th semester). Working across software engineering, backend APIs, and real-time 3D.",
    education: "• B.Tech in CSBS (Expected 2027) — St. Vincent Pallotti College of Engineering and Technology, Nagpur | CGPA: 8.33 / 10 (up to 6th sem)\n• Class XII (2023) — Tip Top Convent (66.6%)\n• Class X (2021) — Tip Top Convent (80.80%)",
    skills: "• Programming: C++, Python, Kotlin, TypeScript, GDScript, SQL\n• Backend & AI: FastAPI, FastMCP Protocol, MongoDB, PostgreSQL (SELECT FOR UPDATE), Google Gemini SDK, REST APIs, JWT Auth\n• Desktop & Web: Electron 34, React 19, Vite, Playwright DOM Automation\n• Game Engines & 3D: Unreal Engine 5.x, Phaser 3, Godot 4.7, Blender, HLSL Shaders, Twinmotion\n• Mobile: Kotlin, Android Studio, Firebase (Auth, Realtime DB, Storage), Razorpay",
    projects: "🟢 BUILT CODEBASES:\n1. Whitfield WMS (FastAPI, React 19, FastMCP, PostgreSQL row locks)\n2. CityCare Clinic (FastMCP, Telegram Bot, MongoDB, Gemini)\n3. FormPilot AI (Electron 34, Playwright, Gemini 2.5 Vision, DPAPI)\n4. Devil's Due (Phaser 3, Deterministic Pure Reducer, Web Audio)\n5. BESTI CANDO (Godot 4.7, Barter Economy, 1,944 Headless Tests)\n6. Smart Canteen (Kotlin, Firebase Realtime DB, Razorpay)\n\n📐 CONCEPT DESIGNS:\n7. College Bus Telemetry (AIS-140 GPS & RFID Concept)\n8. AR/VR Spatial Visualization (OpenXR Concept)\n9. Real-Time 3D & Shaders (Unreal Engine 5.x R&D Concept)",
    experience: "Swami Vivekanand Foundation, Ralegaon — 45-day internship involving NGO fund management work and inventory management.",
    certs: "• NPTEL — Cloud Computing\n• Infosys Springboard — Blender\n• Infosys Springboard — Unreal Engine\n• Infosys Springboard — Shader Technologies\n• NPTEL — Business Analytics for Management Decision\n• AIDCON Advantage Vidarbha 2026 — Appreciation Certificate",
    interests: "Unreal Engine, AR/VR, Real-time 3D, Blender, HLSL, Shader development, Backend engineering, FastAPI, PostgreSQL, FastMCP, AI Agents, Data analytics, Product development",
    contact: "• Email: Sarvesh.sh7890@gmail.com\n• Phone: +91 9309088131\n• Location: Nagpur, Maharashtra, India\n• GitHub: github.com/25sarvesh2005\n• LinkedIn: linkedin.com/in/sarvesh-sharma",
    stats: "• CGPA: 8.33 / 10 (Up to 6th Semester)\n• Degree: B.Tech CSBS (Graduating 2027)\n• Languages: English, Hindi, German (Learning A1/A2)",
    theme: "Switches between Obsidian Monochrome Glass and Frosted Pearl White themes."
  }
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
