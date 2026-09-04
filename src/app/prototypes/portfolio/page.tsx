'use client';

import { useState } from 'react';
import styles from './page.module.css';

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function PortfolioPrototypes() {
  const projects = [
    {
      title: 'Ayusmart Insights',
      short: 'A backend-led KPI automation system for healthcare administrators, reducing the manual work of creating dashboards and keeping them current when live data is available.',
      context: 'Healthcare administrators needed operational dashboards built from data spread across hospital systems. Ayusmart Insights was developed as part of the Ayusmart SmartCare Platform to make that reporting workflow more repeatable.',
      problem: 'Creating KPI dashboards manually was slow and difficult to maintain. Source systems used different structures, and dashboards could become stale when new live data was available.',
      constraints: 'The system had to map heterogeneous healthcare data into analytics-ready structures, synchronize records reliably, and work with Apache Superset as the dashboard layer without exposing private project data in the portfolio.',
      decision: 'Build the automation in the backend around configuration-driven field mappings, incremental synchronization, watermarks, API delivery, retries, and logging. Use Apache Superset for dashboards and adapt it where the SmartCare use case required.',
      implementation: 'I solely developed the backend, including the mapping and synchronization workflow. The dashboard layer used Apache Superset, which we edited for the product use case.',
      outcome: 'The process of creating KPI dashboards became automated, and dashboards can update automatically when the system has access to live data. Ayusmart Insights is presented as an internal product capability of the SmartCare ecosystem, not as a public analytics service.',
      contribution: 'Sole developer of the Insights backend, responsible for the data-mapping, synchronization, API delivery, and reliability workflow behind the dashboards.',
      learning: 'Analytics becomes more useful when the pipeline is treated as a product: mappings need to be explicit, synchronization needs a recoverable state, and the dashboard is only as trustworthy as the data path beneath it.',
    },
    {
      title: 'Ayusmart AI Platform',
      short: 'A healthcare platform that evolved from a two-sided patient-and-doctor vision into a governed Summary AI workflow for reviewing patient history.',
      context: 'Ayusmart began with a patient-side vision: people could describe symptoms in natural language, receive possible diagnostic directions, and eventually continue to Reach My Doctor for an appointment. On the doctor side, the need was more immediate: make trustworthy patient history faster to access during a consultation.',
      problem: 'History was scattered across PDFs while patient identities lived in JSON and database records. PDFs had to be parsed, transformed, and matched to the correct person. Early retrieval could return the wrong context, and even improved retrieval still produced summaries that were not consistently useful.',
      constraints: 'Patient information is private and must only be accessible to authorized users within the correct patient and organizational scope. The team also had to balance medical-context reasoning against practical response time—early responses could take up to five minutes—and keep the system stable on an AlmaLinux HP DL380 server running Podman services.',
      decision: 'Move toward structured extraction, explicit patient-identity mapping, scoped retrieval, context assembly, and a MySQL-first patient-assistant path. LangChain/LangGraph improved orchestration, while asynchronous processing and bounded session memory helped keep the execution flow governed and practical.',
      implementation: 'I contributed across FastAPI APIs, frontend and backend integration, retrieval workflows, document transformation, AI orchestration, Redis-backed session memory, Celery/RabbitMQ processing, output validation, confidence handling, and patient-scope authorization boundaries. Results remained subject to human review.',
      outcome: 'The achieved capability is Summary AI: a system that assembles patient-specific context and generates a structured summary or response for clinician review. The platform assists clinicians; it does not replace clinical responsibility. Decision AI and autonomous diagnosis remained a future, evolving direction—not a completed production claim.',
      contribution: 'I was the majority contributor to the platform, working across product interpretation, frontend and backend implementation, AI orchestration, retrieval workflows, and system integration. When a team member had an idea, I was often responsible for turning it into a functional, testable component.',
      learning: 'Working on Ayusmart taught me that an AI feature is not finished when the model returns an answer. The difficult part is ensuring that the system has the correct patient, retrieves the right context, produces a response clinicians can review, and remains reliable under real infrastructure constraints.',
    },
    {
      title: 'Pharmacy Management System',
      short: 'A pharmacy product within the Ayusmart SmartCare Platform, built for healthcare administrators, hospitals, and pharmacies and now in user acceptance testing.',
      context: 'The Pharmacy Management System was developed as a product for the wider Ayusmart SmartCare Platform, serving workflows used by healthcare administrators, hospitals, and pharmacies.',
      problem: 'Pharmacy teams needed one workflow for prescription intake, batch-level inventory, dispensing, billing, payments, and reporting rather than disconnected manual operations.',
      constraints: 'The product had to model pharmacy and billing data reliably, integrate with the wider SmartCare ecosystem, support responsive desktop and mobile interfaces, and be stable enough for client-facing user acceptance testing.',
      decision: 'I built the product around a normalized MySQL data model, PHP Slim REST APIs, and a Flutter Web interface, keeping the domain workflows explicit so inventory, dispensing, billing, and payment states could be integrated safely.',
      implementation: 'I solely developed the system across the Flutter Web frontend, PHP Slim backend, MySQL schema, prescription intake, batch inventory, dispensing, billing, payment, reporting, API integration, and deployment workflows.',
      outcome: 'Development is finished and the product is currently in UAT. It is presented as a product within the SmartCare ecosystem, without claiming a specific client deployment or adoption metric.',
      contribution: 'Sole developer of the Pharmacy Management System, responsible for the full product from data model and backend APIs through the Flutter interface and workflow integration.',
      learning: 'Operational software earns trust through the details: domain states, data integrity, integration boundaries, and workflows that remain understandable when a real team has to use and support them.',
    },
  ];
  const [selected, setSelected] = useState(projects[0].title);
  const [selectedLayer, setSelectedLayer] = useState<'context' | 'decision' | 'outcome'>('decision');
  const currentProject = projects.find((project) => project.title === selected) ?? projects[0];
  const currentProjectIndex = projects.findIndex((project) => project.title === selected);
  const layerCopy = { context: currentProject.context, decision: currentProject.decision, outcome: currentProject.outcome };
  const academicProjects = [
    { title: 'Smart Road Monitoring & Real-Time Obstacle Detection System', summary: 'A LiDAR and IoT system using Raspberry Pi, ultrasonic sensors, sensor fusion, noise filtering, and real-time hazard classification.', detail: 'Designed for intelligent transportation and autonomous navigation, with evaluation across different lighting and terrain conditions.' },
    { title: 'Interactive Travel Web Platform', summary: 'A responsive JavaScript travel platform with weather forecasting, solo traveller matching, destination discovery, blogs, and hidden-place recommendations.', detail: 'Integrated OpenWeatherMap and Gemini for real-time travel experiences, trip planning, and an AI-powered chatbot.' },
    { title: 'Vehicle Damage Severity Classification', summary: 'An explainable computer-vision system using YOLOv8-n for vehicle localization and ResNet50 for damage classification.', detail: 'Used Grad-CAM for interpretability and achieved approximately 73% test accuracy with a balanced macro F1-score.' },
  ];
  const storyRows = [
    { label: 'Context', get: (project: (typeof projects)[number]) => project.context },
    { label: 'Tension', get: (project: (typeof projects)[number]) => project.problem },
    { label: 'Constraints', get: (project: (typeof projects)[number]) => project.constraints },
    { label: 'Decision', get: (project: (typeof projects)[number]) => project.decision },
    { label: 'Build', get: (project: (typeof projects)[number]) => project.implementation },
    { label: 'Learning', get: (project: (typeof projects)[number]) => project.outcome },
    { label: 'Contribution', get: (project: (typeof projects)[number]) => project.contribution },
    { label: 'Takeaway', get: (project: (typeof projects)[number]) => project.learning },
  ];

  return (
    <div id="system-top" className={`${styles.variant} ${styles.system}`}>
      <header className={styles.systemNav}>
        <a className={styles.systemLogo} href="#system-top" aria-label="Soorya home">Soorya</a>
        <nav aria-label="Open System navigation"><a href="#system-work">Work</a><a href="#system-stack">Stack</a><a href="#system-contact">Contact</a><a href="#system-resume">Resume</a></nav>
        <a className={styles.systemStatus} href="#system-contact"><span />Available for thoughtful problems</a>
      </header>
      <a className={styles.systemSkipLink} href="#system-main">Skip to content</a>
      <main id="system-main" className={styles.systemMain}>
        <section className={styles.systemHero} aria-labelledby="system-title">
          <div className={styles.systemHeroCopy}><p className={styles.systemEyebrow}>FULL-STACK ENGINEER / SOORYA</p><h1 id="system-title">Systems with a human edge.</h1><p className={styles.systemHeroText}>I design and build reliable product foundations, AI workflows, and the connective architecture that lets teams move with confidence.</p><div className={styles.systemActions}><a className={styles.systemButton} href="#system-work">Open the work <Arrow /></a><a className={styles.systemQuietLink} href="mailto:sohan.soorya.k@gmail.com">Say hello <Arrow /></a></div></div>
          <div className={styles.systemHeroDiagram} aria-label="Abstract system layers diagram" role="img"><div className={`${styles.orbit} ${styles.orbitOne}`}><span>context</span></div><div className={`${styles.orbit} ${styles.orbitTwo}`}><span>logic</span></div><div className={`${styles.orbit} ${styles.orbitThree}`}><span>people</span></div><div className={styles.systemCore}>Soorya</div></div>
        </section>
        <section className={styles.systemIntro} aria-labelledby="system-intro-title">
          <div className={styles.systemThesisVisual}>
            <p className={styles.systemEyebrow}>A working thesis</p>
            <div className={styles.systemTrace} role="img" aria-label="A product question moves through context and constraints before becoming a clear system decision.">
              <svg viewBox="0 0 600 280" aria-hidden="true" focusable="false"><path d="M36 68H458V130H148V214H540" /><circle cx="36" cy="68" r="7" /><circle cx="458" cy="68" r="7" /><circle cx="148" cy="214" r="7" /><circle cx="540" cy="214" r="9" /></svg>
              <span className={`${styles.systemTraceNode} ${styles.systemTraceQuestion}`}><small>01</small><strong>Product question</strong><em>What should happen?</em></span>
              <span className={`${styles.systemTraceNode} ${styles.systemTraceContext}`}><small>02</small><strong>Context</strong><em>What matters here?</em></span>
              <span className={`${styles.systemTraceNode} ${styles.systemTraceConstraint}`}><small>03</small><strong>Constraints</strong><em>What must remain true?</em></span>
              <span className={`${styles.systemTraceNode} ${styles.systemTraceDecision}`}><small>04</small><strong>System decision</strong><em>What should hold?</em></span>
            </div>
          </div>
          <div><h2 id="system-intro-title">I like the complicated middle.</h2><p>Where a product question becomes a system boundary, where an AI answer needs a trustworthy context, and where the next engineer needs to understand why a decision was made.</p></div>
        </section>
        <section id="system-work" className={styles.systemWork} aria-labelledby="system-work-title">
          <div className={styles.systemSectionTop}><p className={styles.systemEyebrow}>SELECTED WORK</p><div><h2 id="system-work-title">Trace the decision, not just the interface.</h2><p className={styles.systemBridge}>The useful story is rarely the screenshot. It is the tension, the constraint, and the choice that made the system hold.</p></div></div>
          <div className={styles.systemWorkGrid}>
            <div className={styles.systemWorkList} role="tablist" aria-label="Selected projects">{projects.map((project, index) => <button type="button" role="tab" aria-selected={selected === project.title} key={project.title} className={selected === project.title ? styles.systemWorkActive : ''} onClick={() => setSelected(project.title)}><span>0{index + 1}</span><strong>{project.title}</strong><Arrow /></button>)}</div>
            <article className={styles.systemCase} role="tabpanel"><div className={styles.systemCaseHeader}><span>PROJECT STORY</span><span>ACTIVE / 0{currentProjectIndex + 1}</span></div><h3>{currentProject.title}</h3><p>{currentProject.short}</p><div className={styles.systemLayerTabs} role="tablist" aria-label="Project story layers">{(['context', 'decision', 'outcome'] as const).map((layer) => <button type="button" role="tab" aria-selected={selectedLayer === layer} className={selectedLayer === layer ? styles.systemLayerActive : ''} key={layer} onClick={() => setSelectedLayer(layer)}>{layer}</button>)}</div><p className={styles.systemLayerDetail}>{layerCopy[selectedLayer]}</p></article>
          </div>
          <div className={styles.systemStoryComparison}><div className={styles.systemStoryMatrixHeader}>{projects.map((project) => <h3 key={project.title}>{project.title}</h3>)}</div><div className={styles.systemStoryMatrix}>{storyRows.map((row) => <div className={styles.systemStoryMatrixRow} key={row.label}><strong>{row.label}</strong>{projects.map((project) => <p key={project.title}>{row.get(project)}</p>)}</div>)}</div></div>
        </section>
        <section className={styles.systemAcademic} aria-labelledby="system-academic-title"><div className={styles.systemSectionTop}><div className={styles.systemAcademicAside}><p className={styles.systemEyebrow}>ACADEMIC PROJECTS</p><div className={styles.systemAcademicIndex} aria-hidden="true"><strong>03</strong><div><span><i>01</i>Sensing</span><span><i>02</i>Web</span><span><i>03</i>Vision</span></div></div></div><div><h2 id="system-academic-title">Three systems I built as a Computer Science Undergrad.</h2><p className={styles.systemBridge}>Different domains, same through line: make the input legible, make the system useful, and make the result explainable.</p></div></div><div className={styles.systemStoryGrid}>{academicProjects.map((project, index) => <article className={styles.systemStoryCard} key={project.title}><div className={styles.systemCaseHeader}><span>0{index + 1}</span><span>ACADEMIC WORK</span></div><h3>{project.title}</h3><p className={styles.systemAcademicSummary}>{project.summary}</p><p className={styles.systemAcademicDetail}>{project.detail}</p></article>)}</div></section>
        <section id="system-stack" className={styles.systemStack} aria-labelledby="system-stack-title"><div className={styles.systemSectionTop}><p className={styles.systemEyebrow}>WORKING NOTES</p><h2 id="system-stack-title">Three habits I bring to complicated work.</h2></div><div className={styles.systemStackRows}><p><span>01</span><strong>Make the unknowns visible.</strong><em>Map constraints before choosing patterns.</em></p><p><span>02</span><strong>Give AI a reliable context.</strong><em>Retrieval, evaluation, and a human path around uncertainty.</em></p><p><span>03</span><strong>Design the handoff.</strong><em>Leave the next person a system they can understand and change.</em></p></div></section>
        <section className={styles.systemPointOfView} aria-labelledby="system-point-title"><div className={styles.systemSectionTop}><div className={styles.systemPointAside}><p className={styles.systemEyebrow}>ENGINEERING POINT OF VIEW</p><div className={styles.systemPointSignal} aria-hidden="true"><span><i>01</i><strong>Legible.</strong></span><span><i>02</i><strong>Honest.</strong></span><span><i>03</i><strong>Changeable.</strong></span></div></div><div><h2 id="system-point-title">Good systems make the next decision clearer.</h2><p className={styles.systemBridge}>These are not rules to perform. They are ways of staying honest when the work gets ambiguous.</p></div></div><div className={styles.systemPointRows}><article><strong>Boundaries should be legible.</strong><p>Clear ownership makes a system easier to reason about and gives teams a better place to make tradeoffs.</p></article><article><strong>Uncertainty is part of the interface.</strong><p>When an answer can be incomplete, the product should make that legible instead of hiding it behind confidence.</p></article><article><strong>Change is a design requirement.</strong><p>The best implementation leaves the next engineer enough context to improve it without starting over.</p></article></div></section>
        <section className={styles.systemAi} aria-labelledby="system-ai-title"><div className={styles.systemSectionTop}><p className={styles.systemEyebrow}>CURRENT THINKING / AI + RAG</p><div><h2 id="system-ai-title">Context is where usefulness begins.</h2><p className={styles.systemBridge}>RAG is not only a retrieval problem. It is a product problem about what people can trust, question, and act on.</p></div></div><div className={styles.systemAiGrid}><article><span>01</span><h3>Retrieve with intent.</h3><p>The patient is selected explicitly first. Retrieval then uses patient identity and eligible records, with Qdrant supporting search while the later patient-assistant path treats MySQL as the authoritative source.</p></article><article><span>02</span><h3>Evaluate the path.</h3><p>Structured summaries use required citations and validation. Confidence handling can return a clarification path when the system does not have enough certainty to answer responsibly.</p></article><article><span>03</span><h3>Keep a human route.</h3><p>Redis-backed short-term memory supports follow-up continuity, but the platform assists clinicians and keeps the result available for human review.</p></article></div></section>
        <section className={styles.systemExperience} aria-labelledby="system-experience-title"><div><p className={styles.systemEyebrow}>CAREER PROGRESSION</p><h2 id="system-experience-title">Building the next layer.</h2></div><div className={styles.systemCareer}><p><span>Current focus</span><strong>Software Development Intern</strong><em>Ayusmart Technologies LLP · March 2025 — Present</em></p><p><span>Developing depth</span><strong>Full-stack healthcare systems and AI/RAG</strong><em>FastAPI, Flutter, PHP Slim, data pipelines, orchestration, APIs, and Linux-based delivery workflows.</em></p><p><span>Education</span><strong>Bachelor of Engineering, Computer Science</strong><em>Global Academy of Technology · 2022 — 2026</em></p></div></section>
        <section id="system-resume" className={styles.systemResume} aria-labelledby="system-resume-title"><div className={styles.systemResumeHeader}><div><p className={styles.systemEyebrow}>A SHORT FORMAL RECORD</p><h2 id="system-resume-title">Resume.</h2></div><a className={styles.systemQuietLink} href="/resume.pdf" download="Sohan Soorya Keshava - Resume.pdf">Download PDF <Arrow /></a></div><div className={styles.systemResumeGrid}><article className={styles.systemResumeBlock}><p className={styles.systemEyebrow}>EXPERIENCE</p><h3>Software Development Intern</h3><p className={styles.systemResumeMeta}>Ayusmart Technologies LLP · March 2025 — Present</p><ul><li>Build full-stack healthcare products across backend services, data pipelines, APIs, and responsive interfaces.</li><li>Solely developed Ayusmart Insights and the Pharmacy Management System; majority contributor to the Ayusmart AI Platform.</li><li>Work across FastAPI, Flutter, PHP Slim, MySQL, AI orchestration, retrieval workflows, and Linux-based delivery.</li></ul></article><article className={styles.systemResumeBlock}><p className={styles.systemEyebrow}>CAPABILITIES</p><div className={styles.systemResumeSkills}><p><strong>Systems</strong><span>Software architecture, REST APIs, relational data, integrations, data pipelines</span></p><p><strong>AI + RAG</strong><span>Retrieval workflows, structured summaries, validation, confidence handling, human review</span></p><p><strong>Delivery</strong><span>FastAPI, Flutter, PHP Slim, MySQL, Redis, Celery, RabbitMQ, Qdrant, Linux</span></p></div></article></div></section>
      </main>
      <footer id="system-contact" className={styles.systemFooter}><p className={styles.systemEyebrow}>SYSTEM READY</p><h2>Have a system worth thinking through?</h2><a className={styles.systemButton} href="mailto:sohan.soorya.k@gmail.com">Connect with Soorya <Arrow /></a><p className={styles.systemFooterLinks}><a href="mailto:sohan.soorya.k@gmail.com">sohan.soorya.k@gmail.com</a><a href="tel:+919538006513">+91 9538006513</a><a href="https://github.com/sohan-soorya">GitHub</a><a href="https://www.linkedin.com/in/sohan-soorya-keshava/">LinkedIn</a></p></footer>
    </div>
  );
}
