# Soorya's portfolio

A Next.js portfolio with a Product Studio homepage, an interactive pharmacy batch-selection example, and three engineering case studies.

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin (for example, `https://example.com`) so canonical links, the sitemap, and social metadata use the public domain. Vercel deployments fall back to `VERCEL_PROJECT_PRODUCTION_URL` automatically.

## Local development

Use pnpm and Node.js 24 (the runtime used to validate this project).

```sh
pnpm install
pnpm dev
```

The site is available at `http://localhost:3000`. Next.js downloads Geist fonts during the initial development/production compilation and serves them locally to visitors. The build environment needs access to Google Fonts for an uncached compilation.

## Checks

```sh
pnpm test
pnpm lint
pnpm build
git diff --check
```

The dependency-free quantity check covers invalid values, stock limits, and retaining a requested quantity when switching batches. Browser verification also covers the native radio controls, error feedback, navigation, and responsive pages.

## Content and design

- `DESIGN.md`: approved visual, interaction, accessibility, and responsive specification.
- `PORTFOLIO_REVIEW.md`: local evidence, content research, and original direction exploration.
- `src/lib/projects.ts`: shared project facts and case-study narratives.
- `src/components/pharmacy-demo.tsx`: the small client-side interactive example. Its records are fictional and it makes no remote requests.
- `src/app/work/[slug]/page.tsx`: statically generated case-study pages.

The old `/prototypes/portfolio` URL redirects to the homepage. Product illustrations are labelled examples rather than screenshots of live systems. React Compiler remains enabled. No extra UI or animation dependency is required.
