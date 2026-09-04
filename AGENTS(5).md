# AGENTS.md

## Goal
Build this portfolio as a production-ready website using **Next.js + Tailwind CSS**, matching the provided portfolio mockup and using the user's CV as the **single source of truth for personal content**. Keep implementation simple, reusable, responsive, and token-efficient; do not invent content, achievements, dates, metrics, technologies, company information, education details, or projects that are not present in the CV or explicitly provided by the user.

## Implementation Rules
- First inspect the existing repository and reuse its current structure, dependencies, conventions, and assets. Do not recreate configuration, install alternative libraries, or refactor unrelated code unless required for this portfolio.
- Use **Next.js App Router + Tailwind CSS**. Prefer Server Components; add `"use client"` only when interaction requires it. If the repository is new, use TypeScript.
- Implement the page from reusable components, but do not over-engineer. A practical structure is enough: `Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Education`, `Certification`, `Projects`, and `Footer`.
- Keep portfolio data separate from presentation when practical, for example in one local data object/file, so repeated JSX is generated with `.map()` instead of duplicated markup.
- Do not add a backend, database, CMS, authentication, state library, UI framework, animation framework, or other dependency unless the existing repository already requires it.
- Do not use filler text, fake statistics, fake testimonials, fake clients, fake project results, or guessed descriptions. If information is unavailable, omit it.
- Do not mention that the design is inspired by BRI, BCA, Mandiri, BNI, or any other bank. Do not add watermarks.
- Company and university logos may appear in `Experience` and `Education`. Reuse provided/local assets when available. Do not fabricate logos; if a reliable asset is unavailable, use a clean text fallback.
- Keep accessibility intact: semantic HTML, meaningful headings, alt text, keyboard-accessible links/buttons, sufficient contrast, and responsive layouts.

## Visual Direction
Create a clean Indonesian corporate-finance visual style without copying any bank website directly:
- dominant colors: white, deep navy, blue, light gray;
- restrained gold/yellow accent only where useful;
- modern sans-serif typography;
- large hero typography;
- rounded cards, subtle borders/shadows, generous whitespace;
- professional city/building imagery only where already provided or intentionally added as a portfolio visual;
- desktop layout should feel premium and structured, while mobile becomes a clean single-column flow;
- use subtle hover/transition effects only; avoid excessive animation.

## Required Page Content
Use the CV details exactly as provided and organize them into these sections:

### Hero
- Name: **Muhammad Raihan Nur Rizqi Amin**
- Primary positioning: **Backend Developer**
- Short introduction focused on backend development, banking systems, service integration, reliability, and digital solutions.
- CTAs: `Lihat Proyek` and `Hubungi Saya`.
- Show available contact/social links from the CV.

### About
Present a concise professional summary derived from the CV. Do not create unsupported claims or numerical achievements.

### Skills
Prioritize the CV technologies:
**Golang, Gin, gRPC, REST API, Protobuf, PostgreSQL, MySQL, Redis, Microservices, OpenShift, Jaeger, Unit Testing, Java, Teamwork**.

### Experience
1. **Bank Rakyat Indonesia (BRI), Jakarta**
   - Dec 2025 – Present
   - Associate IT - Project Officer 3 Level 6
   - Summarize the CV responsibilities around banking flow analysis, functional specifications, teller/branch cash/vault processes, integrations, SIT/UAT, issue analysis, documentation, and cross-functional coordination.

2. **PT Steradian Data Optima, Jakarta**
   - Feb 2025 – Dec 2025
   - Backend Developer
   - Summarize the CV responsibilities around Golang, gRPC, REST APIs, Protobuf, PostgreSQL/MySQL, Redis, Go cron, Jaeger, timeout/error handling, refactoring, unit testing, SIT/UAT, OpenShift, and integration work.

Show the appropriate company logo beside each experience when an asset is available.

### Education
**Universitas Negeri Semarang**
- Sep 2020 – Aug 2024
- Bachelor of Computer Science, Informatics Engineering
- GPA 3.70 / 4.00
- Cumlaude

Show the university logo when an asset is available.

### Certification
**Udemy**
- Pemrograman Go-Lang
- Sep 2024

### Projects
1. **SMS (System Management School)**
   - Mar 2025 – Dec 2025
   - Mobile Application Developer
   - RESTful and gRPC APIs with Golang
   - JWT authentication and role-based access control
   - PostgreSQL
   - Redis
   - Docker

2. **EDC Bank**
   - Oct 2024 – Feb 2025
   - Mobile Application Developer
   - Java
   - payment gateway API integration
   - transaction data and real-time processing

Use polished project cards, but do not invent screenshots or project metrics.

### Footer
Include the user's name, Backend Developer title, available email/LinkedIn/contact information, and simple navigation links.

## Responsiveness
Support at minimum:
- mobile: `< 768px`
- tablet: `768px–1023px`
- desktop: `>= 1024px`

Avoid horizontal overflow. Navigation, hero, timeline/cards, skills, and projects must remain readable on small screens.

## Delivery Standard
Before finishing:
1. run the project's existing lint/typecheck/build commands that are available;
2. fix errors caused by the implementation;
3. verify responsive behavior and obvious broken links/assets;
4. do not modify unrelated files;
5. report only the files changed, verification performed, and any real limitation that remains.

Favor the smallest correct implementation over additional abstractions. When multiple approaches are valid, choose the one requiring fewer files, fewer dependencies, and less code while preserving the target design.
