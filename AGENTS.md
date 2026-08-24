<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Website - Project Instructions

## Managed boundaries

- Preserve the Next.js-managed block at the top of this file exactly as written.
- Keep all custom project instructions outside the Next.js BEGIN and END markers.
- Treat `.agents/skills/**` as installed third-party guidance.
- Do not edit, rename, update, move, or delete installed skills unless the user explicitly requests it.
- Keep React Compiler enabled in `next.config.ts` unless the user explicitly requests otherwise.
- Read the relevant Next.js 16 documentation inside `node_modules/next/dist/docs/` before changing framework-specific code.

## Product goal

Build a premium personal portfolio for Soorya that presents him as a strong full-stack software engineer with experience in software architecture, AI systems, and retrieval-augmented generation.

The finished portfolio should feel:

- Personal and distinctive
- Minimal but not empty
- Editorial rather than dashboard-like
- Technically credible
- Carefully polished
- Responsive and accessible
- Fast on real devices
- Memorable without being distracting

The website must not feel like:

- A generic developer portfolio template
- A generic AI startup landing page
- A SaaS dashboard
- A cyberpunk interface
- An Apple website clone
- A collection of unrelated visual effects

## Technology

Use the existing project stack:

- Next.js 16.3.2
- App Router
- React
- TypeScript
- Tailwind CSS
- React Compiler
- ESLint
- pnpm

Use these commands:

- Development: `pnpm dev`
- Linting: `pnpm lint`
- Production build: `pnpm build`

Always use pnpm for package management.

Do not create npm or Yarn lockfiles.

Prefer Server Components by default. Add Client Components only when browser APIs, state, or interaction genuinely require them.

Keep client-side JavaScript limited and intentional.

Before adding a new dependency:

1. Explain what problem it solves.
2. Check whether the existing stack already solves the problem.
3. Consider accessibility, performance, bundle size, and maintenance cost.
4. Request approval before installing it.

## Mandatory design-first workflow

The project must follow a design-first process.

### When `DESIGN.md` does not exist

Do not begin the main portfolio implementation.

First:

1. Inspect the project and the available design skills.
2. Produce exactly three genuinely different portfolio directions.
3. Ensure the directions differ substantially in typography, composition, hierarchy, interaction style, and overall mood.
4. Explain the strengths and tradeoffs of each direction.
5. Present the directions to the user.
6. Wait for the user to choose a direction.
7. Turn the selected direction into a detailed `DESIGN.md`.
8. Request approval for `DESIGN.md`.
9. Begin the main implementation only after approval.

Isolated prototypes are allowed during design exploration, but they must not silently become the final website.

Do not combine all three directions into one compromise without user approval.

### When `DESIGN.md` exists

Read `DESIGN.md` before making visual or interaction changes.

Treat it as the source of truth for:

- Visual direction
- Typography
- Color
- Spacing
- Layout
- Components
- Responsive behavior
- Motion
- Accessibility
- Content hierarchy

Reuse its tokens and patterns.

Do not introduce a new visual language or interaction pattern without explaining the change and receiving approval.

When the user approves a meaningful design-system change, update `DESIGN.md` so the implementation and specification remain aligned.

## Skill usage

Use the smallest relevant set of skills for each task.

Do not invoke every design skill at once.

Read the complete `SKILL.md` for each selected skill before following it.

### Design exploration

Use:

- `$ui-ux-pro-max` for structured UX reasoning, visual-system exploration, and design quality.
- `$gpt-taste` for bold editorial composition, typography, storytelling, and high-end creative direction.
- `$emil-design-eng` for interface polish, interaction judgment, and component-level craft.
- `$prototype` only when explicitly invoked to create multiple live alternatives for comparison.

The three design directions must remain genuinely different. Do not produce three minor variations of the same layout.

### Design implementation

Use:

- `$emil-design-eng` for component polish and interaction decisions.
- `$apple-design` for restraint, physicality, typography, feedback, and spatial consistency.
- `$apple-design-bowen` only when specialist guidance is needed for materials, Liquid Glass techniques, spring behavior, or GSAP implementation.

Apple-related skills provide principles and implementation guidance. They must not turn the portfolio into an Apple clone.

### Motion planning and review

Use:

- `$design-motion-principles` when designing or implementing purposeful motion.
- `$find-animation-opportunities` to identify places where motion could improve comprehension or feedback.
- `$review-animations` only when explicitly invoked to review implemented motion.
- `$improve-animations` for a read-only motion audit and improvement plan.
- `$animation-vocabulary` only when identifying or naming an animation technique.

Do not use motion merely because an effect is visually impressive.

### UI libraries and components

Use `$pick-ui-library` explicitly before selecting an additional UI library.

React Bits may be used as inspiration or as a source for carefully selected interactions, but its examples are not the portfolio's visual authority. Adapt components to the approved design instead of pasting them unchanged.

Use shadcn components only where they improve implementation quality or accessibility. Do not let the default shadcn appearance define the portfolio.

Treat Awesome Claude Design and `design-md-chrome` as reference material rather than automatic design authorities.

## Visual principles

Prioritize:

- Excellent typography
- Clear hierarchy
- Intentional whitespace
- Precise alignment
- Restrained accent color
- Controlled depth
- Strong project storytelling
- A small number of memorable interactions
- Consistency across the entire experience

Avoid:

- Generic SaaS layouts
- Excessive gradients
- Gradient-filled text used as decoration
- Excessive glassmorphism
- Giant rounded containers around every section
- Unnecessary pills and badges
- Repetitive bento grids
- Cyberpunk styling
- Oversized hero text that harms readability
- Pointless full-screen sections
- Identical fade-up animations on every element
- Decorative motion that competes with the content
- Effects that reduce contrast or legibility

Use a limited design vocabulary and execute it consistently.

## Content architecture

The portfolio should eventually communicate:

- Identity and positioning
- Professional experience
- Featured projects
- AI and RAG expertise
- Detailed engineering case studies
- Technical capabilities
- A clear contact path

Case studies should explain:

1. The problem
2. The constraints
3. The engineering decisions
4. The implementation
5. The outcome or impact

Do not reduce important work to screenshots and technology badges.

Do not build a giant logo wall.

Never invent:

- Employment history
- Client names
- Project details
- Metrics
- Testimonials
- Awards
- Outcomes

When factual portfolio information is missing, ask the user for it or clearly mark temporary placeholders.

## Responsive design

Design mobile, tablet, laptop, and large desktop layouts intentionally.

Do not treat mobile as a compressed desktop layout.

Check:

- Text wrapping
- Navigation behavior
- Section spacing
- Media proportions
- Touch target sizes
- Horizontal overflow
- Project-card hierarchy
- Case-study readability
- Interaction alternatives for non-hover devices

Avoid fixed dimensions that break at intermediate viewport sizes.

## Accessibility

Use semantic HTML and a logical heading structure.

Ensure:

- Complete keyboard navigation
- Visible focus indicators
- Descriptive links and controls
- Sufficient color contrast
- Readable body text
- Appropriate touch targets
- Meaningful image alternative text
- Reduced-motion support
- No essential information available only through hover
- No interaction that depends exclusively on animation
- Decorative media is hidden from assistive technology when appropriate

Accessibility is part of the design, not a final cleanup task.

## Motion

Every animation must support at least one of these goals:

- Hierarchy
- Causality
- Spatial understanding
- Feedback
- Controlled delight

Motion hierarchy:

- Frequent interactions should feel immediate.
- Ordinary transitions should remain subtle.
- Signature moments should be rare and expressive.

Prefer transform and opacity animations.

Avoid layout-thrashing animation.

Do not animate keyboard navigation unnecessarily.

Respect `prefers-reduced-motion`.

Animations must be interruptible where appropriate and should never trap the user.

Heavy animation libraries require a clear experiential benefit.

## Performance

Protect:

- Initial loading speed
- Core Web Vitals
- Mobile smoothness
- Image efficiency
- Font efficiency
- JavaScript bundle size
- Layout stability

Use Next.js image and font capabilities appropriately.

Lazy-load non-critical media and expensive interactive sections.

Avoid unnecessary hydration and large client-side component trees.

Do not sacrifice usability or loading performance for decorative effects.

## Working method

Before editing:

1. Inspect the relevant files.
2. Read `DESIGN.md` if it exists.
3. Read applicable skill instructions.
4. Confirm that the proposed change fits the approved direction.

While editing:

- Make focused changes.
- Preserve unrelated user work.
- Reuse existing tokens and components.
- Avoid premature abstraction.
- Keep component boundaries understandable.
- Do not silently redesign approved sections.
- Do not edit installed skills unless explicitly requested.

After editing:

1. Inspect the result visually when possible.
2. Check mobile and desktop layouts.
3. Check any themes defined by `DESIGN.md`.
4. Check keyboard interaction.
5. Check reduced-motion behavior when motion is involved.
6. Run `pnpm lint`.
7. Run `pnpm build`.
8. Run `git diff --check`.
9. Report what changed, what was verified, and any remaining limitations honestly.

A task is not complete merely because the code compiles. It must also align with the approved design, work responsively, remain accessible, and feel polished.