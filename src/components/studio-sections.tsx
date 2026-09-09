import Link from 'next/link';
import { Arrow, resumeUrl } from '@/components/portfolio';
import { projects } from '@/lib/projects';

export function WorkingThesis() {
  return (
    <section id="about" className="container thesis-section" aria-labelledby="thesis-title">
      <figure className="thesis-map">
        <figcaption className="eyebrow">A working thesis</figcaption>
        <div className="thesis-route">
          <svg viewBox="0 0 600 260" preserveAspectRatio="none" aria-hidden="true">
            <path d="M14 75H450V135H140V205H580" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" />
            <g stroke="currentColor" strokeWidth="2"><circle cx="14" cy="75" r="7" /><circle cx="450" cy="75" r="7" /><circle cx="140" cy="205" r="7" /><circle cx="580" cy="205" r="8" className="route-end" /></g>
          </svg>
          <ol>{[
            ['Product question', 'What should happen?'],
            ['Context', 'What matters here?'],
            ['Constraints', 'What must remain true?'],
            ['System decision', 'What should hold?'],
          ].map(([title, text], index) => <li key={title}><span className="mono">0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
        </div>
      </figure>
      <div className="thesis-copy"><p className="eyebrow">How I think</p><h2 id="thesis-title">I like the<br />complicated middle.</h2><p>Where a product question becomes a system boundary. Where an AI answer needs the right context. And where the next engineer needs to understand why a decision was made.</p><p>At Ayusmart, I work across interfaces, APIs, and data to turn those questions into software people can use.</p></div>
    </section>
  );
}

const decisions = [
  { label: 'Context', entries: [
    'A pharmacy sale connects prescriptions, medicine batches, bills, and payments.',
    'Hospital reporting draws on records with different field names and formats.',
    'Clinicians need relevant patient history from documents and structured encounter records.',
  ] },
  { label: 'Tension', entries: [
    'One action changes several records. A bill and its stock movement cannot drift apart.',
    'Every source has its own structure. Rewriting a transformation for each dataset becomes difficult to maintain.',
    'More text is not always better context. The system needs the correct patient and the right visits.',
  ] },
  { label: 'Constraints', entries: [
    'Validate the exact batch and quantity. Keep local sales distinct from connected-inventory updates.',
    'Preserve source-specific mappings, track synchronization progress, and make delivery failures visible.',
    'Keep retrieval within the selected patient’s records and make the sources used for a response inspectable.',
  ] },
  { label: 'Decision', entries: [
    'Save the bill, local stock changes, and any sync event in one transaction. Attempt remote updates after the commit.',
    'Use configurable mappings, timestamp-based synchronization, and bounded API retries. Feed the prepared data into Apache Superset.',
    'Select the patient explicitly. Use search to find encounters, load stored notes for context, and show source references for review.',
  ] },
];

export function DecisionTable() {
  return (
    <section className="container decision-section" aria-labelledby="decision-title">
      <div className="section-heading"><p className="eyebrow">Across the work</p><div><h2 id="decision-title">Trace the decision,<br />not just the interface.</h2><p>The problem, the constraint, and the choice that shaped each product.</p></div></div>
      <table className="decision-table" role="table">
        <caption className="sr-only">Engineering decisions across three Ayusmart projects</caption>
        <thead><tr><th scope="col"><span className="sr-only">Decision dimension</span></th>{projects.map(project => <th key={project.slug} scope="col">{project.title}</th>)}</tr></thead>
        <tbody>{decisions.map(row => <tr key={row.label} role="row"><th scope="row" role="rowheader">{row.label}</th>{row.entries.map((entry, index) => <td key={projects[index].slug} role="cell"><span className="table-project-name">{projects[index].title}</span>{entry}</td>)}</tr>)}</tbody>
      </table>
    </section>
  );
}

export function WorkingNotes() {
  return (
    <section className="container notes-section" aria-labelledby="habits-title">
      <p className="eyebrow">Working notes</p><h2 id="habits-title">Three habits I bring<br />to complicated work.</h2>
      <ol className="habit-list">{[
        ['Make the unknowns visible.', 'Map the constraints before choosing a pattern. Name what the system knows and what still needs an answer.'],
        ['Give AI a reliable context.', 'Start with relevant records, inspect the sources, and leave a human path through uncertainty.'],
        ['Design the handoff.', 'Leave the next person a system they can understand and change, with the reasons behind its decisions.'],
      ].map(([title, text], index) => <li key={title}><span className="mono">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <div className="principles-heading"><div className="principle-words" aria-hidden="true"><span>Legible.</span><span>Honest.</span><span>Changeable.</span></div><div><p className="eyebrow">Engineering point of view</p><h2>Good systems make the next decision clearer.</h2><p>These principles guide how I build when the work gets ambiguous.</p></div></div>
      <div className="principle-list">{[
        ['Boundaries should be legible.', 'Clear ownership makes a system easier to reason about and gives a team a place to make tradeoffs.'],
        ['Uncertainty is part of the interface.', 'When an answer may be incomplete, show what it covers and give the person a useful next step.'],
        ['Change is a design requirement.', 'Leave enough context for the next engineer to improve the implementation without starting over.'],
      ].map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
    </section>
  );
}

export function ContextSection() {
  return (
    <section className="context-section" aria-labelledby="context-title"><div className="container">
      <div className="section-heading"><p className="eyebrow">Current thinking / AI + RAG</p><div><h2 id="context-title">Context is where<br />usefulness begins.</h2><p>Retrieval-augmented generation means finding relevant records before preparing an AI response. The product also needs to help people inspect and question that response.</p></div></div>
      <ol className="context-principles">{[
        ['Retrieve with intent.', 'Select the patient first. Find relevant encounters within that person’s records, then load the stored notes that will form the context.'],
        ['Evaluate the path.', 'Inspect which sources were selected and whether any history was left out. A source reference makes an answer reviewable; it does not prove it correct.'],
        ['Keep a human route.', 'Present source context alongside the response. Keep the clinician in the review loop and make the scope of the answer visible.'],
      ].map(([title, text], index) => <li key={title}><span className="mono">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <Link href="/work/ayusmart-ai-platform" className="text-link">See this thinking in the AI platform <Arrow /></Link>
    </div></section>
  );
}

export function ResumeSection() {
  return (
    <section id="resume" className="container resume-section" aria-labelledby="resume-title">
      <div className="section-heading"><p className="eyebrow">The formal record</p><div><h2 id="resume-title">Résumé.</h2><p>The experience behind the work. A concise record to read here or take with you.</p></div></div>
      <div className="resume-layout">
        <aside className="resume-document" aria-label="Résumé PDF download"><div className="resume-document-top"><span className="mono">SOORYA / CV</span><span aria-hidden="true">↗</span></div><h3>Sohan Soorya<br />Keshava</h3><p>Full-stack software engineer</p><div className="resume-document-rule" /><p className="resume-document-note">Interfaces. Systems.<br />The work that connects them.</p><a className="button" href={resumeUrl} download>Download résumé <span aria-hidden="true">↓</span></a><span className="mono resume-file-note">PDF document</span></aside>
        <div className="resume-details">
          <div className="resume-entry"><div className="resume-entry-label"><p className="eyebrow">Experience</p><span className="mono">March 2025 — Present</span></div><h3>Software Development Intern</h3><p className="resume-place">Ayusmart Technologies LLP</p><ul><li>Built healthcare software across responsive interfaces, APIs, relational data, and integration workflows.</li><li>Solely developed the Pharmacy Management System; built backend and data pipelines for Ayusmart Insights.</li><li>Contributed to the Ayusmart AI Platform across frontend integration, document processing, retrieval, and AI orchestration.</li></ul></div>
          <div className="resume-entry"><div className="resume-entry-label"><p className="eyebrow">Education</p><span className="mono">2022 — 2026</span></div><h3>Computer Science &amp; Engineering</h3><p className="resume-place">Bachelor of Engineering · Global Academy of Technology</p></div>
          <div className="resume-capabilities"><p className="eyebrow">Capabilities in practice</p><dl><div><dt>Interfaces</dt><dd>Flutter Web · React · Responsive layouts · API integration</dd></div><div><dt>Systems &amp; data</dt><dd>FastAPI · PHP Slim · MySQL · PostgreSQL · Data pipelines</dd></div><div><dt>AI &amp; delivery</dt><dd>LangChain / LangGraph · Qdrant · Celery · Redis · Linux</dd></div></dl></div>
        </div>
      </div>
    </section>
  );
}
