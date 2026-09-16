import Link from 'next/link';
import { PharmacyDemo } from '@/components/pharmacy-demo';
import { Arrow, ProductVisual, Workflow, resumeUrl } from '@/components/portfolio';
import { projects } from '@/lib/projects';
import { siteUrl } from '@/lib/site';
import { ContextSection, DecisionTable, ResumeSection, WorkingNotes, WorkingThesis } from '@/components/studio-sections';

export default function Home() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sohan Soorya Keshava',
    url: siteUrl.origin,
    jobTitle: 'Full-stack software engineer',
    sameAs: [
      'https://github.com/sohan-soorya',
      'https://www.linkedin.com/in/sohan-soorya-keshava/',
    ],
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="tiny-square" aria-hidden="true" /> Full-stack software engineer</p><h1 id="hero-title">From the interface<br />to <em>everything<br />behind it.</em></h1><p className="hero-intro">I&apos;m Soorya. I build thoughtful products across interfaces, APIs, data, and AI—turning complicated systems into software people can use.</p><div className="hero-actions"><a className="button" href="#work">Explore my work <Arrow /></a><a className="text-link" href={resumeUrl} download>Download résumé <span aria-hidden="true">↓</span></a></div></div>
        <PharmacyDemo />
        <div className="hero-bottom"><span>Interfaces people use.<br className="mobile-break" /> Systems they depend on.</span><a href="#work" aria-label="Scroll to selected work">Selected work <span aria-hidden="true">↓</span></a></div>
      </section>
      <WorkingThesis />
      <section id="work" className="container work-section" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow">Selected work / Ayusmart</p><div><h2 id="work-title">Built for everyday work.</h2><p>Choose a project to see what I built and why.</p></div></div>
        <div className="work-selector">
          <fieldset className="project-options">
            <legend className="sr-only">Choose a selected project</legend>
            {projects.map((project, index) => <label className="project-option" key={project.slug}>
              <input type="radio" name="selected-project" value={project.slug} defaultChecked={index === 0} aria-controls={`panel-${project.slug}`} />
              <span className="project-option-copy"><span className="mono">{project.number} / {project.discipline}</span><strong>{project.title}</strong></span>
            </label>)}
          </fieldset>
          {projects.map((project, index) => <article id={`panel-${project.slug}`} className="project-chapter project-panel" data-project={project.slug} key={project.slug} aria-labelledby={`${project.slug}-title`}>
          <div className="project-split">
            <div className="project-copy"><div className="project-topline"><span className="project-number">{project.number}</span><p className="eyebrow">{project.discipline}</p></div><h3 id={`${project.slug}-title`}>{project.title}</h3><p className="project-headline">{project.headline}</p><p className="project-summary">{project.summary}</p><p className="ownership"><span>My role</span> {project.role}</p><p className="technology-line">{project.technologies}</p><Link href={`/work/${project.slug}`} className="text-link">Explore {index === 0 ? 'the pharmacy case study' : index === 1 ? 'Insights' : 'the AI platform'} <Arrow /></Link></div>
            <ProductVisual slug={project.slug} />
          </div>
          <Workflow project={project} />
          </article>)}
        </div>
      </section>
      <DecisionTable />
      <WorkingNotes />
      <ContextSection />
      <ResumeSection />
      <section className="container academic-section" aria-labelledby="academic-title"><div className="section-heading"><p className="eyebrow">Earlier explorations</p><div><h2 id="academic-title">Different problems.<br />The same curiosity.</h2><p>Selected projects from my Computer Science degree.</p></div></div><div className="academic-list"><article><span className="mono">01 / Sensing</span><div><h3>Smart road monitoring</h3><p>LiDAR and ultrasonic sensing on Raspberry Pi, with sensor fusion, noise filtering, and real-time obstacle classification.</p></div><span className="academic-tech">LiDAR · IoT · Python</span></article><article><span className="mono">02 / Web</span><div><h3>Interactive travel platform</h3><p>A responsive travel website with weather, destination discovery, traveller matching, and a Gemini-powered trip-planning chatbot.</p></div><span className="academic-tech">JavaScript · APIs · Gemini</span></article><article><span className="mono">03 / Vision</span><div><h3>Vehicle damage classification</h3><p>Vehicle localization with YOLOv8-n, damage classification with ResNet50, and Grad-CAM explanations. Approximately 73% test accuracy.</p></div><span className="academic-tech">Computer vision · Deep learning</span></article></div></section>
    </main>
  );
}
