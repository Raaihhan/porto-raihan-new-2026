# Muhammad Raihan Portfolio Design

## Objective

Build a production-ready, responsive single-page portfolio for Muhammad Raihan Nur Rizqi Amin using Next.js App Router, TypeScript, and Tailwind CSS. The latest `images/deisgn website.png` is the primary visual reference, `MOCKUP_DESIGN.md` defines the full-page structure, and `CV_Muhammad Raihan N.pdf` is the source of truth for all personal facts.

The implementation must not mention any design inspiration, include a watermark, or introduce unsupported claims, metrics, employers, dates, achievements, technologies, or project outcomes.

## Source Priority

When sources differ, use this order:

1. `CV_Muhammad Raihan N.pdf` for factual content and contact details.
2. `images/deisgn website.png` for the latest visual composition.
3. `MOCKUP_DESIGN.md` for sections not visible in the latest design image.
4. `AGENTS(5).md` for implementation, accessibility, and delivery constraints.

The website will use the CV's current employment data:

- Bank Rakyat Indonesia (BRI), Dec 2025–Present, Associate IT - Project Officer 3 Level 6.
- PT Steradian Data Optima, Feb 2025–Dec 2025, Backend Developer.

## Technical Architecture

Use the existing repository and add the smallest viable Next.js application structure. The site will use the App Router, TypeScript, and Tailwind CSS without a backend, CMS, database, state library, UI framework, icon package, or animation package.

The page will remain primarily server-rendered. A small client component is allowed only for the mobile navigation toggle. Reusable presentation components will cover the navbar, section heading, hero, skills, experience timeline, education, certification, project cards, contact CTA, and footer. Repeated CV content will live in a typed local data module and render through mapping rather than duplicated JSX.

Static assets will be served from `public`. The original portrait in `images/Muka.png` and the current CV PDF will be copied into public-facing asset paths. Logos will only be used when a suitable local asset can be obtained without fabricating or distorting a brand; otherwise the company or university name will be shown as a clean text mark.

## Visual Design

The interface will closely follow the latest design's premium corporate composition:

- white navigation with deep navy text and a blue active underline;
- a wide hero with a pale blue atmospheric background, strong left-aligned typography, and Raihan's portrait on the right;
- navy and royal-blue primary colors, light blue-gray surfaces, subtle borders, restrained shadows, rounded cards, and generous spacing;
- inline SVG icons using the current text color, avoiding additional dependencies;
- understated hover and focus transitions with no excessive motion.

The hero will use `images/Muka.png`, not the portrait embedded in an older mockup. The unsupported `2+`, `5+`, and `100%` statistics visible in the latest design will be omitted. The city/building composition will be interpreted with gradients and subtle geometric decoration because no clean standalone city asset is available.

## Page Structure and Content

The single page will contain these sections in order:

1. Navbar with Beranda, Tentang, Pengalaman, Proyek, Pendidikan, Kontak, and an Unduh CV button.
2. Hero with Backend Developer positioning, a concise Indonesian introduction grounded in the CV, project/contact CTAs, and CV contact links.
3. About with a concise Indonesian summary derived from education and experience. Unsupported personality claims will be omitted.
4. Skills showing only skills supported by the CV and explicitly required by the repository instructions: Golang, Gin, gRPC, REST API, Protobuf, PostgreSQL, MySQL, Redis, Microservices, OpenShift, Jaeger, Unit Testing, Java, and Teamwork.
5. Experience timeline for BRI and PT Steradian, using exact roles, locations, dates, and concise English bullets adapted from the CV without changing their meaning.
6. Education card for Universitas Negeri Semarang, Sep 2020–Aug 2024, Bachelor of Computer Science in Informatics Engineering, GPA 3.70/4.00, Cumlaude.
7. Certification card for Udemy, Pemrograman Go-Lang, Sep 2024.
8. Project grid for SMS (System Management School) and EDC Bank, using exact periods, roles, descriptions, and supported technology tags from the CV.
9. Contact CTA with email as the primary action and supporting phone and LinkedIn links.
10. Footer with the full name, Backend Developer title, contact links, and simple section navigation.

Section labels, navigation, summaries, and CTAs will be in Indonesian. Detailed experience and project bullets will remain in English to preserve the CV's wording and match the supplied design.

## Interaction and Data Flow

All content is static and read from a local typed data module during rendering. Anchor links scroll to semantic section IDs. Email uses a `mailto:` link, phone uses a `tel:` link, LinkedIn opens the CV URL safely in a new tab, and Unduh CV links directly to the local PDF with download behavior.

The mobile menu exposes the same navigation and closes after a selection. The page will respect reduced-motion preferences for smooth scrolling and transitions.

## Responsive Behavior

- Mobile below 768px: compact header, accessible menu toggle, single-column hero and content, portrait below or behind the text without covering it, stacked cards, readable timelines, and full-width primary controls.
- Tablet from 768px to 1023px: balanced two-column layouts where space permits, otherwise stacked sections with wider cards.
- Desktop at 1024px and above: two-column hero, side-by-side About and Skills, structured timeline rows, paired Education and Certification cards, and two-column project cards.

The layout must avoid horizontal overflow, maintain touch targets, preserve readable line lengths, and keep all content usable at keyboard zoom levels.

## Accessibility and Error Handling

Use semantic landmarks, ordered heading levels, visible focus styles, meaningful image alt text, descriptive link labels, sufficient color contrast, and keyboard-operable navigation. Decorative SVGs and shapes will be hidden from assistive technologies.

Because the site has no runtime data requests, error handling focuses on resilient assets and links. Text remains available if decorative images fail. Missing brand artwork falls back to a styled text identity. Contact links are constructed from the exact CV values and verified before delivery.

## Testing and Verification

Implementation will follow test-first development for observable page behavior. Tests will verify the required sections and CV-derived content, critical contact/download targets, and mobile-menu accessibility where applicable.

Before completion, run all available project checks:

- focused tests, followed by the full test suite;
- lint;
- TypeScript checking when it is a separate command;
- production build;
- `git diff --check`;
- manual inspection of desktop and mobile renders for overflow, asset failures, navigation, and major visual mismatches.

Only implementation files and required local assets will be changed. No unrelated repository files will be modified.
