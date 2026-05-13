import { useState, useEffect, useRef } from "react";

const MONTHS = [
  {
    id: 1,
    label: "Month 01",
    title: "Python\nCore",
    subtitle: "Think like a programmer",
    emoji: "🐍",
    from: "#FF6B35",
    to: "#F7C59F",
    glow: "rgba(255,107,53,0.35)",
    hours: "3–4 hrs/day",
    difficulty: 2,
    goal: "You can write real programs from a blank file — no tutorials, no hand-holding. Original logic, your own hands.",
    weeks: [
      {
        week: "Week 1", label: "The Language",
        items: [
          { t: "Setup & Git", d: "Python 3.12, VS Code, terminal basics. Git from day one — commit every single day. No exceptions." },
          { t: "Variables & Types", d: "int, float, str, bool, None. How Python stores things in memory. Mutable vs immutable — this distinction will haunt you forever." },
          { t: "Control Flow", d: "if/elif/else, for, while, break, continue. Write 20 small programs — FizzBuzz, number patterns, reverse strings." },
          { t: "Functions", d: "def, parameters, return, scope. A function is a reusable contract. Write functions for everything." },
        ],
        build: "CLI Calculator — handles all operations, keeps history, loops until quit. Error-safe.",
      },
      {
        week: "Week 2", label: "Data Structures",
        items: [
          { t: "Lists & Tuples", d: "Indexing, slicing, append, pop, sort. List is a dynamic array. When to use tuple vs list." },
          { t: "Dicts & Sets", d: "Key-value, O(1) lookup, uniqueness. Nested dicts. When a dict beats a list every time." },
          { t: "List Comprehensions", d: "[x**2 for x in range(10) if x % 2 == 0] — Python's most elegant feature. Master it." },
          { t: "String Mastery", d: "f-strings, split/join, strip, replace. Strings are immutable — know what that costs." },
        ],
        build: "Contact Book — add, search, update, delete. Saved to JSON. Fully menu-driven.",
      },
      {
        week: "Week 3", label: "Files, Errors & Modules",
        items: [
          { t: "File I/O", d: "open(), read/write/append, context managers (with). Read CSV, write JSON. Never bare open() without with." },
          { t: "Error Handling", d: "try/except/else/finally, raise custom exceptions. An unhandled exception is a broken product." },
          { t: "Standard Library", d: "os, sys, pathlib, math, random, datetime. Don't reinvent — Python ships these for a reason." },
          { t: "pip & venv", d: "Virtual environments, requirements.txt. Every project = its own environment. Always." },
        ],
        build: "Expense Tracker — log income/expense by category, monthly reports, CSV export. Handles bad input gracefully.",
      },
      {
        week: "Week 4", label: "OOP — Think in Systems",
        items: [
          { t: "Classes & Objects", d: "__init__, self, instance methods. A class is a blueprint. An object is a living instance of it. Understand memory layout — what happens when you write MyClass()." },
          { t: "Inheritance", d: "Parent/child classes, super(), method overriding. Single, multi-level, and multiple inheritance. Don't repeat logic — inherit it. Understand MRO (Method Resolution Order) — Python's C3 linearization." },
          { t: "Encapsulation", d: "_protected, __private, @property. Getters and setters the Pythonic way. Hide internals, expose behaviour. Rule: make everything private by default, expose only what must be public." },
          { t: "Polymorphism — Method Overriding", d: "Same method name, different behaviour across subclasses. A Dog and Cat both have .speak() — different results. Override parent methods in child classes. Runtime decides which version runs." },
          { t: "Polymorphism — Duck Typing", d: "Python doesn't care about the class — only the behaviour. If it has a .fly() method, it flies. Write functions that work on any object with the right methods, not just one specific type." },
          { t: "Polymorphism — Operator Overloading", d: "__add__, __mul__, __lt__, __eq__ let your objects work with +, *, <, == naturally. Write a Vector class where v1 + v2 adds coordinates. This is exactly how NumPy arrays work under the hood." },
          { t: "Abstraction — Concept", d: "Hiding complexity behind a clean interface. The user of a class shouldn't know HOW it works — only WHAT it does. A Car has .start() — you don't need to know about fuel injection to drive it." },
          { t: "Abstraction — abc Module", d: "from abc import ABC, abstractmethod. Define abstract base classes that FORCE subclasses to implement specific methods. Skip an abstract method in a subclass and Python raises an error immediately at instantiation." },
          { t: "Magic Methods", d: "__str__, __repr__, __len__, __contains__, __iter__, __next__. Make your objects behave like Python built-ins. __repr__ is for developers, __str__ is for users. Every class you write should have both." },
        ],
        build: "Library Management System — Book (title, author, ISBN), Member (name, borrowed list), Library class. Abstract base class for Member. Polymorphic fine calculation: RegularMember vs PremiumMember have different fine rates via method overriding. JSON persistence.",
      },
    ],
    capstone: {
      name: "Personal Finance Dashboard (CLI)",
      desc: "Multi-user system: register/login (file-based), track income & expenses by category, monthly budget limits, terminal bar charts, CSV exports. Full OOP — uses all 4 pillars: Encapsulation, Inheritance, Polymorphism, Abstraction. Exception-safe. Daily git commits.",
    },
  },
  {
    id: 2,
    label: "Month 02",
    title: "DSA &\nProblem Solving",
    subtitle: "Train your brain",
    emoji: "🧠",
    from: "#7C3AED",
    to: "#C4B5FD",
    glow: "rgba(124,58,237,0.35)",
    hours: "3–5 hrs/day",
    difficulty: 4,
    goal: "You can break any problem into sub-problems, choose the right data structure, and write an efficient solution. This skill never expires.",
    weeks: [
      {
        week: "Week 1", label: "Arrays & Big-O",
        items: [
          { t: "Big-O Notation", d: "O(1), O(log n), O(n), O(n²). Analyze every function you write — time AND space. Non-negotiable." },
          { t: "Array Patterns", d: "Prefix sums, sliding window, two pointers. These patterns solve 40% of problems. Drill them until automatic." },
          { t: "Binary Search", d: "On sorted arrays, on the answer. If you can't write it from memory in 2 minutes, keep practicing." },
          { t: "String Algorithms", d: "Anagram check, palindrome, substring search. Why strings are O(n) to compare." },
        ],
        build: "Solve 15 LeetCode Easy. Document time/space complexity for each in a GitHub README.",
      },
      {
        week: "Week 2", label: "Stacks, Queues & HashMaps",
        items: [
          { t: "Stack (from scratch)", d: "Array-backed. push, pop, peek, isEmpty. Use cases: undo/redo, bracket matching, call stack." },
          { t: "Queue & Deque", d: "FIFO. collections.deque. Monotonic queue. BFS uses this — understand why." },
          { t: "HashMap Internals", d: "Hash function, buckets, collision handling. Why Python dict lookup is O(1) average." },
          { t: "HashMap Patterns", d: "Frequency count, two-sum, group anagrams. A dict is the answer to 30% of all problems." },
        ],
        build: "Valid parentheses checker, LRU Cache with OrderedDict, word frequency counter. 15 more LeetCode.",
      },
      {
        week: "Week 3", label: "Trees & Sorting",
        items: [
          { t: "Recursion", d: "Base case + recursive case. Visualize the call stack. Fibonacci naive → memoized. Trust the recursion." },
          { t: "Binary Trees", d: "Node class, insert, inorder/preorder/postorder. Height, diameter, LCA — all recursive." },
          { t: "BST", d: "Search, insert, delete. O(log n) average. Know when a BST degenerates to O(n)." },
          { t: "Sorting", d: "Implement merge sort and quick sort. Understand why Python uses Timsort. When to use which." },
        ],
        build: "BST visualizer in terminal. 15 tree problems on LeetCode.",
      },
      {
        week: "Week 4", label: "Graphs & DP",
        items: [
          { t: "Graphs", d: "Adjacency list. BFS (shortest path), DFS (connectivity, cycles). Directed vs undirected." },
          { t: "Topological Sort", d: "Kahn's algorithm for DAGs. Real use: task dependencies, build systems, course prerequisites." },
          { t: "Dynamic Programming", d: "Overlapping subproblems + optimal substructure. Memoization → tabulation. Fibonacci → Coin Change → LCS." },
          { t: "Greedy", d: "Interval scheduling. Know when greedy works vs when you need DP." },
        ],
        build: "Social network BFS — shortest connection path between users. 15 Medium LeetCode.",
      },
    ],
    capstone: {
      name: "60 Problems Solved — Thinking Portfolio",
      desc: "30 Easy, 25 Medium, 5 Hard. Each solution documented with approach, Big-O analysis, alternatives considered. All pushed to GitHub. This is proof you can think.",
    },
  },
  {
    id: 3,
    label: "Month 03",
    title: "Backend &\nDatabases",
    subtitle: "Build things the internet can use",
    emoji: "⚙️",
    from: "#0EA5E9",
    to: "#7DD3FC",
    glow: "rgba(14,165,233,0.35)",
    hours: "4–5 hrs/day",
    difficulty: 4,
    goal: "You can design and build a complete backend API with a real database — auth, CRUD, testing — that a real product could run on.",
    weeks: [
      {
        week: "Week 1", label: "Databases",
        items: [
          { t: "SQL Fundamentals", d: "SELECT, JOIN (all types), GROUP BY, subqueries, CTEs. SQL is a superpower — treat it that way." },
          { t: "PostgreSQL", d: "psql CLI, CREATE TABLE, constraints, foreign keys, indexes. EXPLAIN ANALYZE — understand your query's actual cost." },
          { t: "Schema Design", d: "Normalization (1NF→3NF). Design the DB for Instagram, then Twitter. Don't store what you can compute." },
          { t: "Redis Basics", d: "Key-value, SET/GET/EXPIRE, sorted sets. Use cases: sessions, caching, rate limiting, leaderboards." },
        ],
        build: "Design Twitter's database. Write 20 SQL queries: timeline, trending hashtags, mutual follows, user search.",
      },
      {
        week: "Week 2", label: "FastAPI & REST",
        items: [
          { t: "HTTP Deep Enough", d: "Methods, status codes (200/201/400/401/403/404/500), headers, request/response cycle. Know these cold." },
          { t: "FastAPI", d: "Routes, path/query params, Pydantic request bodies, response models, dependency injection." },
          { t: "SQLAlchemy ORM", d: "Models, sessions, relationships (one-to-many, many-to-many), Alembic migrations." },
          { t: "API Design", d: "RESTful naming, versioning (/api/v1/), cursor-based pagination, consistent error responses." },
        ],
        build: "Blog API — posts, comments, tags, search. Fully CRUD, paginated, Swagger-documented.",
      },
      {
        week: "Week 3", label: "Auth & Security",
        items: [
          { t: "Authentication", d: "JWT: how it works, access + refresh tokens, expiry, storage. bcrypt for passwords. Never store plain text." },
          { t: "Authorization", d: "RBAC with middleware. Owner-only actions. Role checks on every sensitive endpoint." },
          { t: "Security Basics", d: "SQL injection (why ORM prevents it), CORS, rate limiting, input validation with Pydantic." },
          { t: "Background Jobs", d: "Celery + Redis for async tasks. Don't make users wait for slow operations like email sending." },
        ],
        build: "Full Auth Service — register, login, refresh token, email verification, password reset. Production-grade.",
      },
      {
        week: "Week 4", label: "Testing & Async",
        items: [
          { t: "pytest", d: "Unit tests, integration tests, fixtures, mocking. Aim for 80%+ coverage. Untested code is broken code." },
          { t: "Async Python", d: "asyncio, async/await, aiohttp. When async matters: I/O-bound tasks — DB queries, API calls, file reads." },
          { t: "Redis Caching", d: "Cache-aside pattern. Cache slow DB queries, invalidate on write. Measure latency before/after." },
          { t: "OpenAPI Docs", d: "FastAPI auto-generates Swagger. Add descriptions and examples to every route. An undocumented API is unusable." },
        ],
        build: "Test your API to 85% coverage. Add Redis caching to 3 slow endpoints. Prove the improvement with benchmarks.",
      },
    ],
    capstone: {
      name: "Twitter Clone API — Production Grade",
      desc: "Users, tweets, retweets, likes, follows, timeline, hashtags, search, notifications. JWT auth + RBAC. PostgreSQL + Redis. Celery for async jobs. 85%+ test coverage. Swagger docs. Dockerized.",
    },
  },
  {
    id: 4,
    label: "Month 04",
    title: "Frontend &\nFull Stack",
    subtitle: "Put a face on your systems",
    emoji: "🎨",
    from: "#10B981",
    to: "#6EE7B7",
    glow: "rgba(16,185,129,0.35)",
    hours: "4–5 hrs/day",
    difficulty: 3,
    goal: "You can build complete, deployable web apps — frontend + backend — that look good, work fast, and real users can actually use.",
    weeks: [
      {
        week: "Week 1", label: "JavaScript & React",
        items: [
          { t: "JavaScript Essentials", d: "let/const, arrow functions, map/filter/reduce, destructuring, async/await, fetch. JS for backend engineers — the essentials only." },
          { t: "React Fundamentals", d: "JSX, components, props, useState, useEffect. Mental model: UI = f(state). Re-render on state change." },
          { t: "React Patterns", d: "Controlled inputs, conditional rendering, lists + keys, lifting state, custom hooks. Build 5 small components." },
          { t: "Tailwind CSS", d: "Utility-first. flex, grid, responsive breakpoints, hover states. Style without writing CSS files." },
        ],
        build: "Todo App — add, complete, delete, filter, persisted to localStorage. Styled with Tailwind.",
      },
      {
        week: "Week 2", label: "Next.js & API Integration",
        items: [
          { t: "Next.js App Router", d: "File-based routing, layouts, Server vs Client Components, loading/error states." },
          { t: "Data Fetching", d: "fetch in Server Components, React Query for client-side. SSR vs SSG vs ISR — know when to use each." },
          { t: "Forms & Validation", d: "React Hook Form + Zod. Client-side + server-side validation. Never trust client input." },
          { t: "State Management", d: "Zustand for global state. Context API for small-scale. Redux Toolkit only if truly needed." },
        ],
        build: "Connect your Month 3 Twitter API to a Next.js frontend: login, timeline, tweet, like, follow. Real full stack.",
      },
      {
        week: "Week 3", label: "Docker & Deployment",
        items: [
          { t: "Docker", d: "Dockerfile, multi-stage builds, docker-compose (app + postgres + redis). Images, containers, volumes, networks." },
          { t: "Linux Basics", d: "SSH, file permissions, process management, cron, systemd, nginx as reverse proxy. Every production server is Linux." },
          { t: "Cloud Deployment", d: "Railway/Render (easy) or AWS EC2 (real). Env vars, secrets, domain + SSL (Let's Encrypt)." },
          { t: "GitHub Actions CI/CD", d: "On push to main: run tests → build Docker → push to registry → deploy. No manual deploys ever." },
        ],
        build: "Deploy your full-stack Twitter clone live. Real domain. HTTPS. CI/CD. Share the URL.",
      },
      {
        week: "Week 4", label: "OS Concepts (Practical)",
        items: [
          { t: "Processes & Threads", d: "What happens when Python runs. Python's GIL — why threading ≠ parallelism for CPU-bound work." },
          { t: "Networking Applied", d: "DNS → TCP → TLS → HTTP → response. Draw this from memory. Understand what curl -v is showing you." },
          { t: "File Systems", d: "Inodes, file descriptors, /proc in Linux. Why opening 10,000 files has a limit. ulimit." },
          { t: "Performance Tools", d: "htop, netstat, lsof, strace basics. Diagnose production issues without rebooting." },
        ],
        build: "Bash monitoring script — checks disk/memory/processes/ports, sends alert if CPU > 80%. Scheduled via cron.",
      },
    ],
    capstone: {
      name: "Full Stack SaaS — Deployed & Live",
      desc: "A real problem, a real product. Next.js + FastAPI + PostgreSQL + Redis. JWT auth. 5+ core features. Docker + CI/CD. Live URL. Stripe or a premium feature. This is your first portfolio piece strangers can use.",
    },
  },
  {
    id: 5,
    label: "Month 05",
    title: "AI\nEngineering",
    subtitle: "Build intelligence into everything",
    emoji: "🤖",
    from: "#F59E0B",
    to: "#FDE68A",
    glow: "rgba(245,158,11,0.35)",
    hours: "4–6 hrs/day",
    difficulty: 5,
    goal: "You build real AI-powered applications — not ChatGPT wrappers, but systems with memory, retrieval, tool use, and evaluation. You understand what's happening under the hood.",
    weeks: [
      {
        week: "Week 1", label: "LLM Fundamentals",
        items: [
          { t: "How LLMs Work", d: "Tokens, context window, temperature, top-p. Why LLMs hallucinate. What fine-tuning actually does. Attention — conceptually." },
          { t: "OpenAI / Anthropic API", d: "Chat completions, system prompts, streaming, function calling, vision. Count tokens. Manage cost obsessively." },
          { t: "Prompt Engineering", d: "Zero-shot, few-shot, chain-of-thought, role prompting, JSON mode. Prompting is programming. Be precise." },
          { t: "Embeddings", d: "text-embedding-3-small. What a vector is, cosine similarity, why semantic search beats keyword search." },
        ],
        build: "AI Writing Assistant — system prompt tuning, streaming responses, multi-turn conversation with managed history.",
      },
      {
        week: "Week 2", label: "RAG Systems",
        items: [
          { t: "Vector Databases", d: "Chroma (local), Pinecone (cloud). Store embeddings, query by similarity. Index, collection, namespace." },
          { t: "Document Processing", d: "PDF/text ingestion, chunking (fixed, recursive, semantic). Too big = noise. Too small = no context." },
          { t: "RAG Pipeline", d: "Ingest → Embed → Store → Query → Retrieve → Augment → Generate. Build each step manually first." },
          { t: "Hybrid Search", d: "Semantic + BM25 keyword search combined. Re-ranking with cross-encoder. Better retrieval = better answers." },
        ],
        build: "Document Q&A — upload any PDF, ask questions, get answers with citations. No hallucinated references.",
      },
      {
        week: "Week 3", label: "AI Agents",
        items: [
          { t: "Function Calling", d: "Define tools (JSON schema), LLM decides which to call, handle results, loop. This is the core of all agents." },
          { t: "Agent Architecture", d: "ReAct loop: Reason → Act → Observe → Repeat. Build from raw API calls before using LangChain." },
          { t: "Memory Systems", d: "Working memory (context), episodic (vector DB), semantic (user facts). Agents that forget are useless." },
          { t: "LangChain / LlamaIndex", d: "Use the framework now — after you understand what it abstracts. Chains, agents, memory, loaders." },
        ],
        build: "Research Agent — give it a topic, it searches web (Tavily API), reads pages, writes a structured report with citations.",
      },
      {
        week: "Week 4", label: "Voice + Vision + Production",
        items: [
          { t: "Voice Pipeline", d: "Whisper (speech→text) + LLM + ElevenLabs TTS (text→speech). End-to-end latency matters — optimize each step." },
          { t: "Vision / Multimodal", d: "GPT-4V / Claude Vision: analyze screenshots, documents, images. Build: receipt scanner that auto-categorizes." },
          { t: "AI Evaluation", d: "RAGAS for RAG. LLM-as-judge. Log every call — input, output, latency, cost. Can't improve what you don't measure." },
          { t: "Guardrails & Safety", d: "Pydantic output validation, retry logic, content filtering. One hallucination in production breaks trust permanently." },
        ],
        build: "Voice AI Assistant — speak a question, it reasons with tools (weather, calculator, web), speaks the answer. Under 3s latency.",
      },
    ],
    capstone: {
      name: "JARVIS v1 — Your Personal AI Assistant",
      desc: "Whisper STT → Claude/GPT brain → tool use (web, calculator, calendar, weather) → ElevenLabs TTS. Conversation memory via vector DB. FastAPI backend. React dashboard. Evaluated on 20 test cases. Deployed.",
    },
  },
  {
    id: 6,
    label: "Month 06",
    title: "Scale, Ship\n& Specialize",
    subtitle: "From developer to engineer",
    emoji: "🚀",
    from: "#EC4899",
    to: "#F9A8D4",
    glow: "rgba(236,72,153,0.35)",
    hours: "5–6 hrs/day",
    difficulty: 5,
    goal: "You can architect systems that handle real load. You've shipped something real users care about. You've gone deep in one area. You're interview-ready. Limitation is no longer a word in your vocabulary.",
    weeks: [
      {
        week: "Week 1", label: "System Design",
        items: [
          { t: "Scalability Patterns", d: "Horizontal scaling, load balancing, stateless services, read replicas, sharding. The 8 fallacies of distributed computing." },
          { t: "Message Queues", d: "Kafka: partitions, consumer groups, at-least-once delivery. Celery + Redis for task queues. When to decouple." },
          { t: "Caching at Scale", d: "Cache-aside, write-through, write-behind. Cache stampede problem. CDN for static assets. Redis Cluster." },
          { t: "Design Practice", d: "Design Twitter, YouTube, WhatsApp, Uber — written docs: requirements → API → DB schema → architecture → failure modes." },
        ],
        build: "Add a message queue to your SaaS: async emails, image processing, notifications. Measure throughput improvement.",
      },
      {
        week: "Week 2", label: "Advanced AI",
        items: [
          { t: "Multi-Agent Systems", d: "Orchestrator + specialist agents. Parallel agents with asyncio. Debate pattern: one agent critiques another." },
          { t: "Fine-tuning Basics", d: "OpenAI fine-tuning API or LoRA with HuggingFace. When fine-tuning beats prompting. Prepare 100+ example dataset." },
          { t: "Computer Vision", d: "OpenCV: read images, resize, detect edges. YOLO for object detection. Webcam object detector with bounding boxes." },
          { t: "Local LLMs", d: "Ollama: run Llama 3, Mistral locally. When to use local vs API. Privacy, cost, latency trade-offs." },
        ],
        build: "JARVIS v2: add vision (camera description), local LLM fallback (Ollama), multi-agent for complex queries.",
      },
      {
        week: "Week 3", label: "Portfolio & Interview Prep",
        items: [
          { t: "Advanced DSA", d: "Trie, union-find, Dijkstra, Bellman-Ford. 20 more Medium/Hard LeetCode. Total: 80+ problems solved." },
          { t: "System Design Interviews", d: "Framework: requirements → capacity → API → data model → architecture → trade-offs. Practice out loud, timed." },
          { t: "GitHub Polish", d: "Every project: README with demo GIF, setup steps, architecture diagram, tech stack. GitHub IS your resume." },
          { t: "Portfolio Site", d: "Next.js: projects with live demos, about, blog (3 posts). Deployed. SEO-optimized. Indexed by Google." },
        ],
        build: "3 blog posts: (1) How I built JARVIS. (2) RAG vs fine-tuning. (3) One hard problem you solved and how.",
      },
      {
        week: "Week 4", label: "Ship & Apply",
        items: [
          { t: "Polish JARVIS v2", d: "Add 5 more tools. Improve memory. Evaluate on 50 test cases. Fix top 3 failure modes. Document results." },
          { t: "Open Source PR", d: "Fix a real bug in a library you've used. Open a PR. Merged PRs are gold on any resume." },
          { t: "Mock Interviews", d: "5 mock technical interviews on Pramp or interviewing.io. Record yourself. Watch it back. Painful but essential." },
          { t: "Apply", d: "20 applications. Customize each with one specific line about their tech stack. Follow up after 7 days." },
        ],
        build: "JARVIS v2 full demo video (5 min). Live URL. Share publicly. Let the world see what you built.",
      },
    ],
    capstone: {
      name: "JARVIS v2 + Full Portfolio",
      desc: "Voice + Vision + Web + Tools + Memory + Multi-agent. 20+ capabilities. Evaluated, monitored, deployed. Plus: SaaS with 10+ real users, portfolio site, 80+ LeetCode, 3 blog posts, 1 open source PR merged.",
    },
  },
];

const RULES = [
  { icon: "⚡", rule: "No tutorial hell", d: "Watch 20 min max, then close it and build from memory. Struggle IS the curriculum." },
  { icon: "🟩", rule: "Commit every day", d: "GitHub green squares are discipline made visible. Even 10 lines counts. Zero days don't." },
  { icon: "🏗️", rule: "Build, don't collect", d: "10 finished projects beats 100 half-started ones. Finish things. Ship things. Then improve." },
  { icon: "📐", rule: "Measure everything", d: "Profile before optimizing. Benchmark before claiming it's faster. Opinions mean nothing without data." },
  { icon: "🔴", rule: "Read errors fully", d: "The error message IS the answer 80% of the time. Read the full traceback before Googling." },
  { icon: "📢", rule: "Share your work", d: "Post what you build. Feedback accelerates growth faster than any course ever will." },
];

const OUTCOMES = [
  "A deployed full-stack SaaS app",
  "A working voice AI assistant",
  "80+ DSA problems solved",
  "A production-grade REST API",
  "A RAG + Agent AI system",
  "CI/CD pipeline on GitHub",
  "Portfolio site + 3 blog posts",
  "1 open source PR merged",
  "System design fluency",
  "Interview-ready profile",
];

function DifficultyDots({ level, color }) {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: "50%",
          background: i <= level ? color : "rgba(255,255,255,0.12)",
          transition: "background 0.3s",
        }} />
      ))}
    </div>
  );
}

const DIFFICULTY_STYLES = {
  "Foundation":        { color: "#22C55E", bg: "rgba(34,197,94,0.1)",   border: "rgba(34,197,94,0.35)",   glow: "rgba(34,197,94,0.2)"   },
  "Engineer":          { color: "#60A5FA", bg: "rgba(96,165,250,0.1)",  border: "rgba(96,165,250,0.35)",  glow: "rgba(96,165,250,0.2)"  },
  "Advanced":          { color: "#FB923C", bg: "rgba(251,146,60,0.1)",  border: "rgba(251,146,60,0.35)",  glow: "rgba(251,146,60,0.2)"  },
  "Advanced Systems":  { color: "#FB923C", bg: "rgba(251,146,60,0.1)",  border: "rgba(251,146,60,0.35)",  glow: "rgba(251,146,60,0.2)"  },
  "System Architect":  { color: "#C084FC", bg: "rgba(192,132,252,0.1)", border: "rgba(192,132,252,0.35)", glow: "rgba(192,132,252,0.2)" },
  "AI Engineer":       { color: "#A78BFA", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.35)", glow: "rgba(167,139,250,0.2)" },
  "AI Systems":        { color: "#F87171", bg: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.35)", glow: "rgba(248,113,113,0.2)" },
  "Insane":            { color: "#F472B6", bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.35)", glow: "rgba(244,114,182,0.2)" },
};

const FOUNDATION_PROJECTS = [
  {
    id: "fp1", title: "CLI Productivity Toolkit", emoji: "🛠️",
    difficulty: "Foundation", time: "1–2 weeks",
    glow: "#FB923C", glowRgb: "251,146,60",
    desc: "Build terminal-based productivity apps that teach engineering discipline and architecture thinking.",
    instructions: ["Notes manager with tags & search","Expense tracker with categories & reports","Password manager with encryption","Pomodoro timer with session history","JSON/SQLite storage backend","Modular folder structure (one file per feature)","Full OOP architecture","Robust error handling & input validation","Export/import support (CSV + JSON)"],
    stack: ["Python", "SQLite", "Rich", "JSON"],
  },
  {
    id: "fp2", title: "DSA Visualizer", emoji: "📊",
    difficulty: "Engineer", time: "2 weeks",
    glow: "#A78BFA", glowRgb: "167,139,250",
    desc: "Visualize algorithms to deeply understand problem solving and computational thinking.",
    instructions: ["Sorting algorithm animations (bubble, merge, quick)","Pathfinding: BFS, DFS, Dijkstra on a grid","Graph traversal with step-by-step highlighting","Recursion tree visualization","Interactive step controls + speed slider","Color-coded state: visited, current, sorted"],
    stack: ["Python", "Tkinter", "React (optional)"],
  },
  {
    id: "fp3", title: "Mini Git Engine", emoji: "🔀",
    difficulty: "Engineer", time: "2–3 weeks",
    glow: "#F87171", glowRgb: "248,113,113",
    desc: "Rebuild core Git concepts from scratch to understand version control internally.",
    instructions: ["init, add, commit commands","Branch creation and switching","Commit log with history tree","File diff calculation","File snapshots via hashing (SHA-1)","Staging area simulation","Object store (blobs, trees, commits)"],
    stack: ["Python"],
  },
  {
    id: "fp4", title: "Developer Portfolio OS", emoji: "🖥️",
    difficulty: "Advanced", time: "2 weeks",
    glow: "#22D3EE", glowRgb: "34,211,238",
    desc: "Build a futuristic terminal-style developer portfolio with a powerful visual identity.",
    instructions: ["Terminal-style UI with command palette","AI assistant (Claude/GPT) answering questions about you","Live GitHub stats + repo showcase","Smooth page transitions and animations","Responsive design for all screen sizes","Dark mode with neon accents"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Claude API"],
  },
];

const ELITE_PROJECTS = [
  {
    id: "ep1", title: "JARVIS AI Assistant", emoji: "🤖",
    difficulty: "System Architect", time: "1–2 months",
    glow: "#FBBF24", glowRgb: "251,191,36",
    desc: "A full AI operating assistant with memory, automation, voice interaction, and local intelligence.",
    instructions: ["Wake-word voice interface (Whisper STT + ElevenLabs TTS)","Long-term episodic memory via vector DB","Browser automation with Playwright","Desktop automation (open apps, manage files)","Multi-agent reasoning system","Local LLM fallback with Ollama","RAG pipeline over your personal notes/docs","Plugin architecture — add new tools as modules","React dashboard showing active tools + memory"],
    stack: ["Python", "FastAPI", "Whisper", "ChromaDB", "Ollama", "Playwright"],
  },
  {
    id: "ep2", title: "Distributed File Storage", emoji: "☁️",
    difficulty: "Advanced", time: "3 weeks",
    glow: "#60A5FA", glowRgb: "96,165,250",
    desc: "Build a mini Google Drive — a distributed storage engine with real engineering architecture.",
    instructions: ["Chunked file upload with progress tracking","AES-256 file encryption before storage","Replication across multiple storage nodes","Optimized parallel download assembly","REST API with presigned URLs","File deduplication via content hashing","Admin dashboard with storage analytics"],
    stack: ["FastAPI", "PostgreSQL", "Docker", "Redis", "React"],
  },
  {
    id: "ep3", title: "AI Coding Copilot", emoji: "🧑‍💻",
    difficulty: "AI Engineer", time: "3 weeks",
    glow: "#C084FC", glowRgb: "192,132,252",
    desc: "A context-aware coding assistant that understands entire repositories and explains code.",
    instructions: ["Ingest entire GitHub repos into vector DB","Natural language chat over your codebase","Semantic code search across all files","Inline code explanation and documentation generation","Bug detection with fix suggestions","Multi-file context awareness","VS Code extension (bonus)"],
    stack: ["Python", "LangChain", "ChromaDB", "Claude API", "FastAPI"],
  },
  {
    id: "ep4", title: "Your Own Programming Language", emoji: "⚡",
    difficulty: "Insane", time: "1 month",
    glow: "#F472B6", glowRgb: "244,114,182",
    desc: "Create your own interpreted programming language from scratch. This is the final boss.",
    instructions: ["Lexer: tokenize raw source code","Parser: build an AST from token stream","AST node types for all language constructs","Tree-walk interpreter for execution","Variables, functions, closures, scope","Control flow: if/else, while, for","Standard library (print, math, string ops)","Error reporting with line numbers","REPL (read-eval-print loop)"],
    stack: ["Python", "Rust (optional)"],
  },
];

function ProjectForge() {
  const [forgeTab, setForgeTab] = useState("foundation");
  const [openProject, setOpenProject] = useState(null);
  const [tabAnimating, setTabAnimating] = useState(false);

  const switchTab = (t) => {
    if (t === forgeTab) return;
    setTabAnimating(true);
    setOpenProject(null);
    setTimeout(() => { setForgeTab(t); setTabAnimating(false); }, 180);
  };

  const projects = forgeTab === "foundation" ? FOUNDATION_PROJECTS : ELITE_PROJECTS;

  return (
    <div style={{ marginBottom: 64, position: "relative" }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,60,60,0.07) 0%, rgba(255,100,0,0.04) 40%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Main container */}
      <div style={{
        position: "relative", zIndex: 1,
        borderRadius: 20,
        border: "1px solid rgba(255,80,50,0.25)",
        background: "linear-gradient(160deg, rgba(30,10,5,0.95) 0%, rgba(15,10,20,0.98) 60%, rgba(10,5,25,0.97) 100%)",
        overflow: "hidden",
        boxShadow: "0 0 60px rgba(255,60,30,0.08), 0 0 120px rgba(200,40,100,0.05), inset 0 1px 0 rgba(255,100,50,0.1)",
      }}>

        {/* Animated grid background */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(rgba(255,100,50,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,100,50,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        {/* Floating particles */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          {[
            {x:"15%",y:"20%",d:"3s",s:3,o:0.15},{x:"80%",y:"15%",d:"4s",s:4,o:0.1},
            {x:"60%",y:"70%",d:"5s",s:2,o:0.12},{x:"25%",y:"80%",d:"3.5s",s:3,o:0.08},
            {x:"90%",y:"55%",d:"4.5s",s:2,o:0.1},{x:"45%",y:"35%",d:"6s",s:2,o:0.06},
          ].map((p,i) => (
            <div key={i} style={{
              position: "absolute", left: p.x, top: p.y,
              width: p.s, height: p.s, borderRadius: "50%",
              background: "#FF6B35", opacity: p.o,
              animation: `pulse-glow ${p.d} ease infinite`,
            }} />
          ))}
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "36px 32px 40px" }}>

          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24 }}>
              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                background: "linear-gradient(135deg, #FF4500, #FF6B35, #EC4899)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26,
                boxShadow: "0 0 30px rgba(255,69,0,0.5), 0 0 60px rgba(255,69,0,0.2)",
              }}>⚡</div>

              <div style={{ flex: 1 }}>
                {/* Label */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,69,0,0.1)", border: "1px solid rgba(255,69,0,0.25)",
                  borderRadius: 100, padding: "3px 12px",
                  fontSize: 10, letterSpacing: 3, color: "#FF6B35",
                  textTransform: "uppercase", marginBottom: 10,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", boxShadow: "0 0 6px #FF6B35", animation: "pulse-glow 2s infinite", display: "inline-block" }} />
                  Project System • Elite Builds
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800,
                  letterSpacing: "-2px", lineHeight: 1.0, marginBottom: 6,
                  background: "linear-gradient(135deg, #FF6B35 0%, #FF4500 30%, #EC4899 70%, #F97316 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Project Forge</h2>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, color: "rgba(255,150,100,0.6)",
                  fontStyle: "italic", letterSpacing: 0.5,
                }}>Where theory becomes engineering.</p>
              </div>

              {/* Dot indicators top-right */}
              <div style={{ display: "flex", gap: 5, paddingTop: 4 }}>
                {["#FF4500","#FB923C","#EC4899"].map((c,i) => (
                  <div key={i} style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: c, boxShadow: `0 0 8px ${c}`,
                    animation: `pulse-glow ${2 + i * 0.5}s ease infinite`,
                  }} />
                ))}
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, color: "rgba(255,255,255,0.4)",
              lineHeight: 1.9, maxWidth: 600,
              borderLeft: "2px solid rgba(255,69,0,0.4)",
              paddingLeft: 16,
            }}>
              These are <span style={{ color: "rgba(255,150,100,0.8)", fontWeight: 600 }}>not tutorial projects</span>. These are engineering systems designed to make you think like a senior developer, architect scalable software, and build a legendary GitHub portfolio.
            </p>
          </div>

          {/* Tabs */}
          <div style={{
            display: "flex", gap: 6, marginBottom: 28,
            background: "rgba(255,255,255,0.03)",
            borderRadius: 14, padding: 5,
            border: "1px solid rgba(255,255,255,0.06)",
            width: "fit-content",
          }}>
            {[
              { id: "foundation", label: "🏗️ Foundation Builds" },
              { id: "elite",      label: "🔥 Elite Systems"     },
            ].map(t => (
              <button key={t.id} onClick={() => switchTab(t.id)} style={{
                padding: "9px 22px", borderRadius: 10,
                border: `1px solid ${forgeTab === t.id ? "rgba(255,69,0,0.5)" : "transparent"}`,
                background: forgeTab === t.id
                  ? "linear-gradient(135deg, rgba(255,69,0,0.2), rgba(236,72,153,0.15))"
                  : "transparent",
                color: forgeTab === t.id ? "#FF6B35" : "rgba(255,255,255,0.3)",
                fontSize: 12, fontWeight: 600, cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: 0.3,
                boxShadow: forgeTab === t.id ? "0 0 20px rgba(255,69,0,0.15)" : "none",
              }}>{t.label}</button>
            ))}
          </div>

          {/* Project cards */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 8,
            opacity: tabAnimating ? 0 : 1,
            transform: tabAnimating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.18s ease, transform 0.18s ease",
          }}>
            {projects.map((proj, pi) => {
              const isOpen = openProject === proj.id;
              const diff = DIFFICULTY_STYLES[proj.difficulty] || DIFFICULTY_STYLES["Foundation"];
              const isElite = forgeTab === "elite";

              return (
                <div key={proj.id} style={{
                  borderRadius: 14,
                  border: `1px solid ${isOpen ? proj.glow + "60" : "rgba(255,255,255,0.07)"}`,
                  overflow: "hidden",
                  boxShadow: isOpen ? `0 0 30px rgba(${proj.glowRgb},0.12)` : "none",
                  transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                }}>
                  {/* Card header */}
                  <div
                    onClick={() => setOpenProject(isOpen ? null : proj.id)}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "16px 20px",
                      background: isOpen
                        ? `linear-gradient(135deg, rgba(${proj.glowRgb},0.1) 0%, rgba(15,10,20,0.9) 100%)`
                        : isElite
                          ? "rgba(255,255,255,0.025)"
                          : "rgba(255,255,255,0.02)",
                      cursor: "pointer",
                      transition: "background 0.25s ease",
                    }}
                  >
                    {/* Emoji bubble */}
                    <div style={{
                      width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                      background: isOpen
                        ? `linear-gradient(135deg, rgba(${proj.glowRgb},0.3), rgba(${proj.glowRgb},0.1))`
                        : "rgba(255,255,255,0.05)",
                      border: `1px solid rgba(${proj.glowRgb},${isOpen ? 0.4 : 0.15})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20,
                      boxShadow: isOpen ? `0 0 16px rgba(${proj.glowRgb},0.25)` : "none",
                      transition: "all 0.25s ease",
                    }}>{proj.emoji}</div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 15, fontWeight: 700,
                        color: isOpen ? "#F5F3FF" : "rgba(255,255,255,0.7)",
                        marginBottom: 6, transition: "color 0.2s",
                      }}>{proj.title}</div>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
                        {/* Difficulty badge */}
                        <span style={{
                          fontSize: 10, fontWeight: 700, letterSpacing: 1,
                          color: diff.color, background: diff.bg,
                          border: `1px solid ${diff.border}`,
                          padding: "2px 8px", borderRadius: 6,
                          fontFamily: "'DM Sans', sans-serif",
                          textTransform: "uppercase",
                        }}>{proj.difficulty}</span>

                        {/* Time badge */}
                        <span style={{
                          fontSize: 10, letterSpacing: 0.5,
                          color: `rgba(${proj.glowRgb},0.8)`,
                          background: `rgba(${proj.glowRgb},0.08)`,
                          border: `1px solid rgba(${proj.glowRgb},0.2)`,
                          padding: "2px 8px", borderRadius: 6,
                          fontFamily: "'DM Sans', sans-serif",
                        }}>⏱ {proj.time}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div style={{
                      width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                      border: `1px solid rgba(${proj.glowRgb},${isOpen ? 0.5 : 0.15})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: isOpen ? proj.glow : "rgba(255,255,255,0.2)",
                      fontSize: 13, transition: "all 0.25s ease",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      background: isOpen ? `rgba(${proj.glowRgb},0.1)` : "transparent",
                    }}>▾</div>
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <div style={{
                      padding: "20px 20px 24px",
                      background: `linear-gradient(180deg, rgba(${proj.glowRgb},0.05) 0%, rgba(10,5,20,0.95) 60%)`,
                      borderTop: `1px solid rgba(${proj.glowRgb},0.15)`,
                    }}>
                      {/* Description */}
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13, color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.8, marginBottom: 20,
                        fontStyle: "italic",
                      }}>{proj.desc}</p>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "start" }}>
                        {/* Instructions */}
                        <div>
                          <div style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
                            color: proj.glow, marginBottom: 12, opacity: 0.8,
                          }}>What You Build</div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            {proj.instructions.map((ins, ii) => (
                              <div key={ii} style={{
                                display: "flex", gap: 10, alignItems: "flex-start",
                              }}>
                                <div style={{
                                  width: 5, height: 5, borderRadius: "50%",
                                  background: proj.glow, flexShrink: 0, marginTop: 6,
                                  boxShadow: `0 0 6px ${proj.glow}`,
                                }} />
                                <span style={{
                                  fontFamily: "'DM Sans', sans-serif",
                                  fontSize: 12, color: "rgba(255,255,255,0.5)",
                                  lineHeight: 1.6,
                                }}>{ins}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stack */}
                        <div style={{ minWidth: 120 }}>
                          <div style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
                            color: proj.glow, marginBottom: 12, opacity: 0.8,
                          }}>Tech Stack</div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                            {proj.stack.map((s, si) => (
                              <div key={si} style={{
                                padding: "4px 10px", borderRadius: 8,
                                background: `rgba(${proj.glowRgb},0.08)`,
                                border: `1px solid rgba(${proj.glowRgb},0.2)`,
                                fontSize: 11, fontWeight: 600,
                                color: `rgba(${proj.glowRgb},0.9)`,
                                fontFamily: "'DM Sans', sans-serif",
                                textAlign: "center",
                                cursor: "default",
                                transition: "background 0.15s",
                              }}>{s}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom quote */}
          <div style={{
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,69,0,0.12)",
            textAlign: "center",
            position: "relative",
          }}>
            {/* Grid bg for quote */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `linear-gradient(rgba(255,100,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,100,50,0.03) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
              borderRadius: 12,
              pointerEvents: "none",
            }} />
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(13px, 2.2vw, 17px)",
              fontWeight: 700, letterSpacing: "-0.3px",
              lineHeight: 1.7, position: "relative",
              background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,107,53,0.8) 50%, rgba(236,72,153,0.7) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              maxWidth: 560, margin: "0 auto",
              padding: "0 12px",
            }}>
              "Your GitHub should not look like a tutorial graveyard.<br />
              It should look like an engineering laboratory."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(null);
  const [activeWeek, setActiveWeek] = useState(null);
  const [tab, setTab] = useState("weeks");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const cur = MONTHS.find(m => m.id === active);

  const toggle = (id) => {
    if (active === id) { setActive(null); setActiveWeek(null); }
    else { setActive(id); setActiveWeek(null); setTab("weeks"); }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0F0F13 0%, #13111A 50%, #0F1318 100%)",
      color: "#E2E0E8",
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        .month-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .month-card:hover { transform: translateY(-1px); }
        .week-row { transition: background 0.15s ease; }
        .week-row:hover { background: rgba(255,255,255,0.04) !important; }
        .rule-card { transition: transform 0.2s ease, background 0.2s ease; }
        .rule-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.06) !important; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
        @keyframes pulse-glow { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
        .stagger-1 { animation: fadeUp 0.5s ease 0.1s both; }
        .stagger-2 { animation: fadeUp 0.5s ease 0.2s both; }
        .stagger-3 { animation: fadeUp 0.5s ease 0.3s both; }
        .stagger-4 { animation: fadeUp 0.5s ease 0.4s both; }
        .stagger-5 { animation: fadeUp 0.5s ease 0.5s both; }
        .stagger-6 { animation: fadeUp 0.5s ease 0.6s both; }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* ── HERO ── */}
        {loaded && (
          <div style={{ marginBottom: 64 }}>
            {/* Badge */}
            <div className="stagger-1" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100, padding: "6px 16px",
              fontSize: 11, letterSpacing: 2,
              color: "rgba(255,255,255,0.45)",
              marginBottom: 28, textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 6px #22C55E",
                animation: "pulse-glow 2s ease infinite",
                display: "inline-block",
              }} />
              Self-Learning Track · Python → AI Engineer
            </div>

            {/* Heading */}
            <h1 className="stagger-2" style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(38px, 7vw, 72px)",
              fontWeight: 800, letterSpacing: "-2.5px",
              lineHeight: 1.0, marginBottom: 20, color: "#F5F3FF",
            }}>
              Zero to Engineer
              <br />
              <span style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #F59E0B 40%, #EC4899 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>in 6 months.</span>
            </h1>

            {/* Subheading */}
            <p className="stagger-3" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.4)",
              maxWidth: 500, marginBottom: 36,
            }}>
              The BTech CSE curriculum — stripped of theory, loaded with projects.
              Every week ends with something you built. Every month ends with a capstone you can ship.
            </p>

            {/* Stats */}
            <div className="stagger-4" style={{
              display: "flex", flexWrap: "wrap", gap: 0,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, overflow: "hidden",
              background: "rgba(255,255,255,0.02)",
            }}>
              {[
                ["6", "Months"],
                ["24", "Projects"],
                ["6", "Capstones"],
                ["80+", "DSA Solved"],
                ["1", "AI Assistant"],
              ].map(([n, label], i) => (
                <div key={label} style={{
                  flex: "1 1 80px",
                  padding: "20px 16px",
                  textAlign: "center",
                  borderRight: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(22px,4vw,32px)", fontWeight: 800,
                    color: "#F5F3FF", lineHeight: 1,
                  }}>{n}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, color: "rgba(255,255,255,0.3)",
                    marginTop: 4, letterSpacing: 0.5,
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── MONTH GRID ── */}
        {loaded && (
          <div className="stagger-5" style={{ marginBottom: 64 }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase", marginBottom: 20,
            }}>
              Tap a month to explore →
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {MONTHS.map((m) => {
                const isOpen = active === m.id;

                return (
                  <div key={m.id} className="month-card" style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: `1px solid ${isOpen ? "transparent" : "rgba(255,255,255,0.07)"}`,
                    boxShadow: isOpen ? `0 0 0 1px ${m.from}60, 0 20px 60px ${m.glow}` : "none",
                    transition: "box-shadow 0.3s ease, border 0.3s ease",
                  }}>

                    {/* Card Header */}
                    <div
                      onClick={() => toggle(m.id)}
                      style={{
                        display: "flex", alignItems: "center", gap: 16,
                        padding: "20px 24px",
                        background: isOpen
                          ? `linear-gradient(135deg, ${m.from}18 0%, ${m.to}08 100%)`
                          : "rgba(255,255,255,0.025)",
                        cursor: "pointer",
                        transition: "background 0.3s ease",
                      }}
                    >
                      {/* Emoji bubble */}
                      <div style={{
                        width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                        background: isOpen
                          ? `linear-gradient(135deg, ${m.from}, ${m.to})`
                          : "rgba(255,255,255,0.06)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 22,
                        boxShadow: isOpen ? `0 4px 20px ${m.glow}` : "none",
                        transition: "all 0.3s ease",
                      }}>
                        {m.emoji}
                      </div>

                      {/* Labels */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11, letterSpacing: 2,
                          color: isOpen ? m.from : "rgba(255,255,255,0.25)",
                          marginBottom: 4, transition: "color 0.3s",
                          textTransform: "uppercase",
                        }}>{m.label} · {m.hours}</div>

                        <div style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: "clamp(15px, 2.5vw, 20px)", fontWeight: 700,
                          color: isOpen ? "#F5F3FF" : "rgba(255,255,255,0.7)",
                          letterSpacing: "-0.5px", lineHeight: 1.2,
                          transition: "color 0.3s",
                          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        }}>
                          {m.title.replace("\n", " ")}
                        </div>

                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 12, color: "rgba(255,255,255,0.3)",
                          marginTop: 3,
                        }}>{m.subtitle}</div>
                      </div>

                      {/* Right side: difficulty + arrow */}
                      <div style={{
                        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8,
                        flexShrink: 0,
                      }}>
                        <DifficultyDots level={m.difficulty} color={m.from} />
                        <div style={{
                          width: 28, height: 28, borderRadius: 8,
                          border: `1px solid ${isOpen ? m.from : "rgba(255,255,255,0.12)"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: isOpen ? m.from : "rgba(255,255,255,0.3)",
                          fontSize: 13, transition: "all 0.3s",
                          transform: isOpen ? "rotate(180deg)" : "none",
                        }}>▾</div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div style={{
                        background: `linear-gradient(180deg, ${m.from}08 0%, rgba(15,15,19,0.98) 40%)`,
                        padding: "0 24px 28px",
                      }}>
                        {/* Goal */}
                        <div style={{
                          padding: "16px 20px",
                          background: `${m.from}12`,
                          borderRadius: 12,
                          borderLeft: `3px solid ${m.from}`,
                          marginBottom: 20,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13, lineHeight: 1.8,
                          color: "rgba(255,255,255,0.55)",
                          fontStyle: "italic",
                        }}>
                          <span style={{ color: m.from, fontStyle: "normal", fontWeight: 600, fontSize: 11, letterSpacing: 1, display: "block", marginBottom: 6, textTransform: "uppercase" }}>Month Goal</span>
                          {m.goal}
                        </div>

                        {/* Tabs */}
                        <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
                          {["weeks", "capstone"].map(t => (
                            <button key={t} onClick={() => setTab(t)} style={{
                              padding: "8px 20px", borderRadius: 10,
                              border: `1px solid ${tab === t ? m.from : "rgba(255,255,255,0.1)"}`,
                              background: tab === t ? `${m.from}20` : "transparent",
                              color: tab === t ? m.from : "rgba(255,255,255,0.35)",
                              fontSize: 12, fontWeight: 600, cursor: "pointer",
                              transition: "all 0.15s",
                              textTransform: "capitalize",
                              fontFamily: "'DM Sans', sans-serif",
                              letterSpacing: 0.5,
                            }}>{t === "weeks" ? "📅 Weekly Plan" : "⭐ Capstone"}</button>
                          ))}
                        </div>

                        {/* WEEKS */}
                        {tab === "weeks" && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {m.weeks.map((w, wi) => {
                              const wOpen = activeWeek === wi;
                              return (
                                <div key={wi} style={{
                                  borderRadius: 12,
                                  border: `1px solid ${wOpen ? m.from + "50" : "rgba(255,255,255,0.07)"}`,
                                  overflow: "hidden",
                                  transition: "border-color 0.2s",
                                }}>
                                  {/* Week header */}
                                  <div
                                    className="week-row"
                                    onClick={() => setActiveWeek(wOpen ? null : wi)}
                                    style={{
                                      display: "flex", alignItems: "center", gap: 12,
                                      padding: "14px 18px",
                                      background: wOpen ? `${m.from}10` : "rgba(255,255,255,0.02)",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <div style={{
                                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                                      background: wOpen ? `${m.from}30` : "rgba(255,255,255,0.06)",
                                      display: "flex", alignItems: "center", justifyContent: "center",
                                      fontFamily: "'Syne', sans-serif",
                                      fontSize: 11, fontWeight: 700,
                                      color: wOpen ? m.from : "rgba(255,255,255,0.3)",
                                      transition: "all 0.2s",
                                    }}>W{wi + 1}</div>

                                    <div style={{ flex: 1 }}>
                                      <div style={{
                                        fontFamily: "'Syne', sans-serif",
                                        fontSize: 14, fontWeight: 600,
                                        color: wOpen ? "#F5F3FF" : "rgba(255,255,255,0.6)",
                                        transition: "color 0.2s",
                                      }}>{w.label}</div>
                                      <div style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 11, color: "rgba(255,255,255,0.25)",
                                      }}>{w.items.length} topics</div>
                                    </div>

                                    <div style={{
                                      fontSize: 12,
                                      color: wOpen ? m.from : "rgba(255,255,255,0.2)",
                                      transition: "all 0.2s",
                                      transform: wOpen ? "rotate(180deg)" : "none",
                                    }}>▾</div>
                                  </div>

                                  {/* Week detail */}
                                  {wOpen && (
                                    <div style={{ padding: "16px 18px 20px", background: `${m.from}06` }}>
                                      <div style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                                        gap: 8, marginBottom: 16,
                                      }}>
                                        {w.items.map((item, ii) => (
                                          <div key={ii} style={{
                                            padding: "12px 14px",
                                            background: "rgba(255,255,255,0.03)",
                                            borderRadius: 10,
                                            borderLeft: `2px solid ${m.from}60`,
                                          }}>
                                            <div style={{
                                              fontFamily: "'Syne', sans-serif",
                                              fontSize: 12, fontWeight: 700,
                                              color: "#E2E0E8", marginBottom: 5,
                                            }}>{item.t}</div>
                                            <div style={{
                                              fontFamily: "'DM Sans', sans-serif",
                                              fontSize: 11, color: "rgba(255,255,255,0.38)",
                                              lineHeight: 1.7,
                                            }}>{item.d}</div>
                                          </div>
                                        ))}
                                      </div>

                                      {/* Build */}
                                      <div style={{
                                        display: "flex", gap: 12, alignItems: "flex-start",
                                        padding: "12px 16px",
                                        background: `${m.from}15`,
                                        borderRadius: 10,
                                        border: `1px dashed ${m.from}40`,
                                      }}>
                                        <span style={{ fontSize: 16, flexShrink: 0 }}>🔨</span>
                                        <div>
                                          <div style={{
                                            fontFamily: "'Syne', sans-serif",
                                            fontSize: 10, fontWeight: 700,
                                            color: m.from, marginBottom: 4,
                                            letterSpacing: 1, textTransform: "uppercase",
                                          }}>Weekly Build</div>
                                          <div style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 12, color: "rgba(255,255,255,0.6)",
                                            lineHeight: 1.7,
                                          }}>{w.build}</div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* CAPSTONE */}
                        {tab === "capstone" && (
                          <div style={{
                            padding: "24px",
                            background: `linear-gradient(135deg, ${m.from}15, ${m.to}08)`,
                            borderRadius: 16,
                            border: `1px solid ${m.from}40`,
                          }}>
                            <div style={{ fontSize: 28, marginBottom: 14 }}>⭐</div>
                            <div style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: 10, letterSpacing: 3, color: m.from,
                              textTransform: "uppercase", marginBottom: 10,
                            }}>Month {m.id} Capstone Project</div>
                            <div style={{
                              fontFamily: "'Syne', sans-serif",
                              fontSize: 20, fontWeight: 700,
                              color: "#F5F3FF", marginBottom: 12,
                              letterSpacing: "-0.5px", lineHeight: 1.3,
                            }}>{m.capstone.name}</div>
                            <div style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: 13, color: "rgba(255,255,255,0.5)",
                              lineHeight: 1.9,
                            }}>{m.capstone.desc}</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── PROJECT FORGE ── */}
        {loaded && <ProjectForge />}

        {/* ── RULES ── */}
        {loaded && (
          <div className="stagger-6" style={{ marginBottom: 64 }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800,
              color: "#F5F3FF", letterSpacing: "-1px",
              marginBottom: 8,
            }}>The 6 Non-Negotiable Rules</div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 24,
            }}>
              The roadmap is the what. These are the how.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 12,
            }}>
              {RULES.map((r, i) => (
                <div key={i} className="rule-card" style={{
                  padding: "20px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  cursor: "default",
                }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{r.icon}</div>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 14, fontWeight: 700, color: "#F5F3FF",
                    marginBottom: 6,
                  }}>{r.rule}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12, color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.7,
                  }}>{r.d}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── OUTCOMES ── */}
        {loaded && (
          <div style={{
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(236,72,153,0.06) 50%, rgba(124,58,237,0.08) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "32px 28px",
          }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 800,
              color: "#F5F3FF", letterSpacing: "-1px",
              marginBottom: 6,
            }}>What you have after 6 months</div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 24,
            }}>
              Not certificates. Not courses completed. Actual things that exist on the internet.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: 10,
            }}>
              {OUTCOMES.map((item, i) => {
                const colors = ["#FF6B35","#7C3AED","#0EA5E9","#10B981","#F59E0B","#EC4899","#FF6B35","#7C3AED","#0EA5E9","#10B981"];
                const c = colors[i % colors.length];
                return (
                  <div key={item} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: c, flexShrink: 0,
                      boxShadow: `0 0 6px ${c}`,
                    }} />
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12, color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.4,
                    }}>{item}</span>
                  </div>
                );
              })}
            </div>

            {/* Final line */}
            <div style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, color: "rgba(255,255,255,0.3)",
              lineHeight: 1.8, fontStyle: "italic",
              textAlign: "center",
            }}>
              "The person who takes 9 months and builds every project will destroy the person who rushed through in 6 months and only watched tutorials. The timeline is a direction, not a deadline. <span style={{ color: "rgba(255,255,255,0.6)", fontStyle: "normal" }}>Start today.</span>"
            </div>
          </div>
        )}

      </div>
    </div>
  );
}