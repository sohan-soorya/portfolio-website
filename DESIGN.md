# Product Studio

Status: approved by the user on 9 September 2026; implementation authorized.

## Decision and scope

On 9 September 2026, the user selected Product Studio and requested a small amount of the wide architectural sequences from Systems in Motion, then approved this detailed specification. It replaces the three-way exploration as the implementation direction.

Product Studio provides the identity: ivory surfaces, deep green emphasis, carefully composed product demonstrations, strong typography, and approachable writing. Wide sequences are supporting figures that explain what happens behind an interface. They do not become the page's visual identity.

The initial release includes a homepage and three individual case-study pages. The evidence and draft narratives in `PORTFOLIO_REVIEW.md` remain the content reference. This document controls layout, tokens, components, responsive behavior, and interaction.

## Experience goals

- Within the opening screen, visitors understand who Soorya is, what he builds, and where to see his work.
- A small, polished interface demonstrates frontend craft through its behavior and responsive layout.
- Each project explains the user's problem before introducing technology.
- A recruiter can skim ownership and capabilities; an engineer can read the implementation decisions in depth.
- The site feels personal and technically credible without requiring familiarity with healthcare terminology.

## Visual foundation

### Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F5F4EE` | Main page background |
| `--surface` | `#FFFEF9` | Product specimen and reading surfaces |
| `--ink` | `#18231F` | Headings and main body text |
| `--muted` | `#526158` | Secondary text, never low-opacity body copy |
| `--accent` | `#245C48` | Links, primary actions, selected state |
| `--accent-soft` | `#EAF0E5` | Selected item backgrounds |
| `--stage` | `#DCE5D8` | Background behind product visuals |
| `--line` | `#CDD5C8` | Decorative dividers, not the sole control boundary |
| `--control-line` | `#708372` | Form and interactive element boundaries |
| `--error` | `#9A362B` | Demonstration validation text with a written explanation |

One light theme is defined. Honor system contrast and motion preferences within it. Do not introduce a dark theme toggle or alternate palette in this scope. Use accent-colored backgrounds sparingly so the green retains meaning.

Normal text must meet 4.5:1 contrast; large text and essential control indicators must meet 3:1. Validate actual adjacent colors, including hover, focus, disabled, and error states. Decorative rules may be subtler than controls.

### Typography

- Primary: Geist Sans, correctly loaded using the installed Next.js font facilities. Fallback: `system-ui`, `Segoe UI`, sans serif.
- Annotation: Geist Mono for short technical labels, step numbers, and technology captions. Fallback: Consolas, monospace. Never use it for long prose.
- Editorial accent: Georgia italic for one short phrase in the hero, matching the selected Product Studio visual study. Keep this to the hero; case-study headings remain sans serif.
- Body: 17–18px on desktop, at least 16px on mobile; line height 1.6–1.7. Reading columns remain around 60–70 characters wide.
- Hero: fluid 40–72px, medium weight, line height 1.03–1.1, tracking around -0.04em. Aim for three lines on desktop and no more than four short lines at narrow widths; adjust font size and composition instead of clipping.
- Section headings: fluid 30–48px, medium weight, line height 1.1–1.2, tracking around -0.025em.
- Project titles: 24–34px. Interface titles: 20–26px. Captions: 12–13px with restrained positive tracking; never use microtext as essential explanation.
- Use sentence case. Long all-cap headings and excessively tight tracking are excluded.

### Layout and spacing

- Maximum outer content width: 1280px. Reading text: approximately 680px. Large figures may use the full content width.
- Page gutters: 20px at phone widths, 32px on tablet, fluid 40–64px on desktop.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px, expressed in rem where appropriate.
- Section separation: typically 96–128px desktop and 56–72px mobile. Adjust to the content; do not enforce viewport-height chapters.
- Use a twelve-column desktop grid as an alignment guide, not a visible grid overlay. Product stories can vary between 5/7 and 7/5 splits while preserving the same outer edges.
- Fine rules separate chapters. Reserve surfaces and boxes for actual product specimens, controls, and diagrams. Do not box every section.
- Corner radii: 6–8px for controls; up to 12px for product windows. Avoid large rounded section containers and unnecessary pills.
- One soft shadow may separate a product window from its stage. Other depth comes from surface contrast and spacing.

## Homepage

### Navigation

Soorya wordmark on the left; Work, About, Contact, and Résumé links on the right. All labels describe their destinations. The navigation Résumé link opens the homepage résumé section; explicit download links open the existing PDF.

Use a quiet solid paper header, approximately 72px high on desktop. A sticky desktop header is acceptable if anchor offsets account for its height. On mobile, use a compact two-row header in normal document flow, with all four links visible and no menu overlay. Provide a first-focus skip link. Navigation targets are at least 44px high.

### Opening

The left side contains the positioning line, a confident headline, a short introduction, and two links. The right side contains the pharmacy batch-selection specimen on a sage stage.

Proposed copy:

> Full-stack software engineer
>
> From the interface to everything behind it.
>
> I'm Soorya. I build healthcare software: pharmacy workflows, hospital analytics, and AI tools for reviewing patient records.

The hero uses broader positioning: “I'm Soorya. I build thoughtful products across interfaces, APIs, data, and AI—turning complicated systems into software people can use.” Healthcare remains the evidence-rich context in the selected work and case studies.

Emphasize “everything behind it” with the restrained italic treatment from the selected study. Keep the product names and plain-language purpose close to the headline so the opening is concrete.

Primary action: Explore my work. Secondary action: Download résumé.

The scene is an interactive illustration of the pharmacy workflow, labelled “Interactive example · Sample data.” It is not presented as a screenshot, a live system, or evidence of adoption. Do not introduce a loading screen before the opening content or delay access to navigation.

### Selected work

Three substantial project chapters, in this order:

1. **Pharmacy Management System.** Headline: “From prescription to payment, in one connected workflow.” State sole development. Show the relationship between interface, bill, and stock. Use the wide architectural figure described below once in this chapter.
2. **Ayusmart Insights.** Headline: “Turning hospital records into data teams can report on.” Show a small source-to-normalized-record mapping example beside a concise narrative. A caption names Apache Superset as the dashboard layer and identifies Soorya's backend/pipeline contribution.
3. **Ayusmart AI Platform.** Headline: “Helping clinicians review patient history with the relevant records in view.” Use an encounter/source-reference specimen with synthetic data. Explain explicit patient selection and source context in plain language. Present participation accurately rather than implying sole ownership.

Each chapter has a clear title, approximately 70–110 words of introduction and ownership, a purposeful visual, a short technology line, and a descriptive case-study link. Links are visible without hovering. Avoid card-wide click targets around nested controls.

### About and experience

One short personal paragraph about working across the interface, APIs, data, and deployment, grounded in the projects. Follow with a compact experience entry and education entry:

- Software Development Intern, Ayusmart Technologies LLP · March 2025–Present, as supplied in the résumé.
- Bachelor of Engineering, Computer Science & Engineering, Global Academy of Technology · 2022–2026.

Group capabilities around evidence: interfaces, backend/data, AI workflows, and delivery. Name a few relevant technologies within each. Do not use skill percentages, a giant logo wall, or fabricated seniority.

### Academic work and contact

Keep the three academic projects in a compact text-led list, using the verified résumé descriptions. Their hierarchy is subordinate to professional work. Existing vehicle-damage classification accuracy may be attributed to that academic project only.

End with a direct invitation: “Let's build something useful.” Show the existing email, GitHub, LinkedIn, and résumé link. Keep contact details from the supplied résumé/current site. A form or backend is unnecessary.

## The small architectural addition

### Placement and visual treatment

Use **one wide four-step sequence on the homepage**, inside the pharmacy chapter. It spans the content grid below the product introduction. It is a compact explanatory figure, not a full-screen section. Additional project-specific sequences appear within case studies, at most one primary sequence per case study.

Use the same paper, sage, ink, and green tokens as the rest of Product Studio. Four aligned step headings and thin connectors give it the broad composition of Systems in Motion. A shallow sage surface and one green-emphasized step are enough. Do not import its midnight palette, citron accents, condensed uppercase typography, or staged page-navigation behavior.

### Pharmacy sequence

| Step | Visible explanation |
| --- | --- |
| Choose a batch | Review the selected item, expiry, and available quantity. |
| Validate stock | The backend checks the exact stock row and quantity. |
| Save the sale | Bill, local stock changes, and any sync event are saved together. |
| Sync inventory | A connected-inventory update is attempted after the local sale commits. |

Below it, use one human-readable sentence: “The local sale is saved first, with a record of any inventory update still to send.” Explain remote inventory only when relevant to the selected stock source. Local-only stock does not require remote synchronization.

The homepage figure is static and fully readable. The pharmacy specimen supplies the homepage's interactive moment, so the figure does not need a second player or a “Next step” control.

### Case-study sequences

- Pharmacy: expand the same local-transaction and later-sync boundary with concise annotations.
- Insights: source records → field mapping → synchronized dataset → Superset dashboard. Describe scheduled/incremental processing rather than promising continuous real-time delivery.
- AI: selected patient → relevant encounters → source context → response for clinician review. Discuss encounter-note generation and reuse in the accompanying implementation section; distinguish the feature-flagged SOAP path from generic uploaded-document ingestion.

Use an ordered list inside a figure with a descriptive caption. Connectors are decorative and hidden from assistive technology. Each step includes its own explanation, so the diagram remains understandable without color, motion, or layout position.

## Pharmacy specimen behavior

- Show two fictional stock batches with a short item label, batch identifier, expiry, and available quantity. Use synthetic stock details without patient data, medication advice, or implied production figures.
- Use a native radio group for batch selection with an explicit legend. The selected batch has both a visible selection marker and a contrasting border/background.
- A labelled quantity control supports normal keyboard entry, with valid integer bounds derived from the selected sample batch. Invalid input produces a short inline message and does not show a successful result.
- Show “Requested” and “Available” quantities next to their meaning. A compact summary explains the exact batch that would be included in a bill.
- Switching batches updates the explanation immediately. Preserve a valid quantity; if it becomes invalid for the new batch, show the validation state rather than silently showing success.
- No simulated checkout, fake payment action, fabricated processing delay, or remote request. This is a small interface demonstration, not a second pharmacy application.
- Keep the initial useful state visible in server-rendered output. If scripting is unavailable, the caption and explanatory content must still make sense.

## Case-study pages

Proposed routes:

- `/work/pharmacy-management`
- `/work/ayusmart-insights`
- `/work/ayusmart-ai-platform`

Shared page structure:

1. Back to work link and project title.
2. Plain-language project summary and a compact facts row: role, product context, technology.
3. The problem and constraints.
4. What Soorya built, with a product figure.
5. How it works, using the architectural sequence.
6. Two or three important engineering decisions, each explaining what was chosen and why.
7. Result and present limitations, stated without unsupported metrics.
8. Link to the next project and contact.

Use approximately 500–800 words per case study where evidence supports it. Keep long prose in the reading column and figures wider. Use normal headings and anchor links for navigation; essential content is not hidden in tabs, dialogs, or carousels. Optional code-level notes may use native disclosure, but the main story stays visible.

## Content and evidence rules

- Use the locally reviewed résumé and project source evidence catalogued in `PORTFOLIO_REVIEW.md`.
- Treat review notes such as “needs confirmation” as editorial instructions, not text to paste into the public site.
- State capabilities visible in source without claiming production activation, clinical correctness, or observed business results.
- Omit time-sensitive UAT/deployment claims until reconfirmed; they need not block implementation. Do not silently convert old status text into a new fact.
- Attribute the dashboard layer to Apache Superset. Attribute individual project ownership only as supported by the supplied material.
- Expand uncommon terms on first use. Explain RAG as finding relevant records before preparing an AI response. Explain SOAP notes and FHIR only in the detailed AI story.
- Do not fabricate testimonials, employers, customers, performance improvements, outcome metrics, or project screenshots.
- Keep citations/source evidence in the local review document. The website should explain the work naturally without internal filesystem paths or implementation-review caveats.

## Responsive behavior

| Width | Intended layout |
| --- | --- |
| 320–639px | One column, 20px gutters where space permits, visible wrapping navigation, readable specimen, vertical architectural sequences with explanations beside each step. |
| 640–959px | One-column opening unless the specimen and copy fit comfortably; wider project figures. Sequences remain vertical rather than an ambiguous two-by-two flow. |
| 960–1279px | Asymmetric two-column opening and project chapters; four-step sequence spans the content width. |
| 1280px and above | Layout caps at 1280px, with generous outer margins; reading columns and text sizes stop growing. |

Use content-based adjustments between these ranges. No page-level overflow hiding to disguise broken layout. No essential horizontal scrolling. At 200% zoom, allow navigation, captions, and diagrams to reflow. At narrow effective widths, the document remains readable without two-dimensional scrolling.

## Motion and feedback

Motion judgment: polished and restrained, with expression confined to the product specimen. Use Jakub's refinement lens and Emil's immediacy for controls; the user-selected direction provides sufficient context for these choices.

| Element | Behavior | Purpose |
| --- | --- | --- |
| Links and buttons | Short color/border feedback; optional 0.98 press scale for pointer activation | Immediate acknowledgement |
| Sample batch selection | Content/state updates immediately; restrained 160–200ms emphasis transition | Make the selection change clear |
| Product specimen framing | Static by default | Let the demonstrated workflow carry the interest |
| Architectural figures | Static, with a clear reading order | Explain causality without requiring playback |
| Page scrolling and keyboard navigation | Native and immediate | Keep the visitor in control |

Use CSS transitions for small visual state changes. Default ease-out curve: `cubic-bezier(0.23, 1, 0.32, 1)`. Animate transform and opacity only where motion is needed; avoid layout animation. Do not animate numeric quantities rolling through intermediate values. Keyboard-initiated state changes should be immediate.

With `prefers-reduced-motion: reduce`, disable movement and animated scrolling; update states immediately. Do not add autoplay, ambient loops, parallax, scroll pinning, entrance animation on every section, or animated architecture tracers in this scope. No animation dependency is required.

## Accessibility

- Semantic header, navigation, main, sections, articles, figures, and footer; one h1 per page and a logical heading order.
- Visible skip link on focus; 2–3px contrasting focus outline with offset, never clipped.
- At least 44px touch targets and appropriate spacing for adjacent controls.
- Native links and form controls. Label every input and associate validation using `aria-describedby` and `aria-invalid` as appropriate.
- Announce concise specimen feedback politely when needed; do not announce the entire figure on every update or move focus unexpectedly.
- Selected, invalid, and disabled states have a text or shape cue in addition to color.
- Decorative arrows/connectors are hidden from assistive technology; figures have meaningful captions.
- No functionality or essential content exclusive to hover, drag, animation, or a precise pointer.
- Use descriptive case-study links and allow standard open-in-new-tab behavior.

## Implementation boundaries

- Keep Next.js 16, App Router, TypeScript, Tailwind, pnpm, and React Compiler.
- Read the relevant installed Next.js documentation before framework-specific changes.
- Render homepage narrative and case-study content as Server Components. Isolate the pharmacy specimen's state in a small Client Component.
- Share project content where the homepage and case studies need the same facts; avoid a CMS, generalized page builder, or unnecessary abstraction.
- Use native CSS layout and the existing React stack. No new dependency is planned.
- Load actual font assets through Next.js instead of naming unprovided fonts or retaining the unused remote CSS font import.
- Give each page a descriptive title and summary. Keep the existing résumé download functional.
- Create only useful visual assets. Prefer HTML/SVG diagrams for these source-grounded workflows; no stock photography or decorative generated imagery is needed.
- Main implementation replaces the homepage's prototype re-export. Preserve unrelated work and installed skills; remove obsolete presentation code only when the replacement is verified.
- Do not modify SmartCare or the AI platform as part of this portfolio task.

## Acceptance checks

- Visually inspect the homepage and all three case studies at phone, tablet, laptop, and large desktop sizes, including 390px, 768px, 1024px, and 1440px; check 320px reflow as well.
- Confirm the hero, specimen, project titles, and four-step figures have no clipping or horizontal overflow.
- Test keyboard navigation, radio selection, valid/invalid quantity changes, focus visibility, résumé download, project links, and return navigation.
- Test reduced motion, 200% zoom, and readable control/text contrast.
- Verify content against the review evidence and remove unsupported deployment or outcome claims.
- Keep one focused runnable check for the specimen's nontrivial quantity/selection behavior using available tooling; do not add a test framework merely for this specimen.
- Run `pnpm lint`, `pnpm build`, and `git diff --check` after implementation.
- Confirm React Compiler remains enabled and client-side code is limited to the actual interaction.

## Approval

The user approved the direction, limited architectural borrowing, and detailed specification. Ordinary implementation and polish within these boundaries can proceed without further design-choice confirmations.

## Approved additions from the previous portfolio — 9 September 2026

The user requested the following additions using six screenshots. These changes supersede the original homepage section arrangement while retaining Product Studio typography, ivory, sage, and green.

- Add the “I like the complicated middle.” working-thesis composition after the hero: a static, wide, bent-path diagram connects Product question, Context, Constraints, and System decision beside the personal statement. This is also the About destination.
- Replace the three consecutive project chapters with three visible native radio selectors styled as selection buttons. Exactly one project occupies the shared display space. Preserve its summary, ownership, visual, case-study link, and show its architectural sequence. Native keyboard selection works without additional client JavaScript; changes are immediate without animated height or automatic scrolling.
- Add “Trace the decision, not just the interface.” with a comparison table for all three products: context, tension, constraints, and decision. Use concise source-grounded descriptions. On small screens, each comparison row becomes a labelled group with the three project entries stacked, avoiding horizontal scrolling.
- Restore “Three habits I bring to complicated work.” and “Good systems make the next decision clearer.” as compact editorial rows and a paired statement. Keep the requested titles and explain the principles in plain language.
- Restore “Context is where usefulness begins.” with three concise AI/RAG principles grounded in patient selection, source context, and clinician review.
- Give Résumé a dedicated section with a document-like identity panel and PDF download, an experience timeline, education, and grouped capabilities. Move the existing experience/capability content here to avoid duplicating it.
- Continue to show the academic projects and contact footer. Existing detailed case-study pages remain available.

Additional acceptance: exercise all three selections with click and keyboard, verify only the chosen panel is exposed, check the comparison table and résumé at 320–1440px, and confirm the navigation Résumé anchor and PDF download separately.

## Approved viewport-fit refinement

The user requested that the complete hero, selected project section, and résumé fit the visible desktop window, and asked to remove the résumé monogram. At widths of 1100px and above, use compact spacing, a 64px header, shorter section introductions, and side-by-side source records in product illustrations. Keep all project text and the four-step workflow visible. Arrange résumé experience above adjacent education and capabilities, beside the PDF panel; remove the “S.” decoration at every width. Validate the full sections against a 695px-high browser viewport, including 1280px and 1536px widths. Preserve natural document flow at smaller widths and under increased text zoom instead of clipping content, scaling the page, or introducing nested scroll regions.
