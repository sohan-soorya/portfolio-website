import Link from 'next/link';
import type { Project } from '@/lib/projects';

export const resumeUrl = '/Sohan%20Soorya%20Keshava%20-%20Resume.pdf';

export function Arrow() {
  return <svg className="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

export function Header() {
  // eslint-disable-next-line @next/next/no-html-link-for-pages -- Native fragment links re-scroll even when the URL already has the same hash.
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><div className="container nav-inner"><Link href="/" className="wordmark" aria-label="Soorya home">Soorya<span>.</span></Link><nav aria-label="Main navigation"><a href="/#work">Work</a><a href="/#about">About</a><a href="#contact">Contact</a><a href="/#resume">Résumé <span aria-hidden="true">↓</span></a></nav></div></header></>;
}

export function Footer() {
  return <footer id="contact" className="site-footer"><div className="container"><div className="footer-main"><div><p className="eyebrow">Have something in mind?</p><h2>Let&apos;s build<br />something useful.</h2></div><a className="contact-link" href="mailto:sohan.soorya.k@gmail.com">Say hello <Arrow /></a></div><div className="footer-bottom"><a href="mailto:sohan.soorya.k@gmail.com">sohan.soorya.k@gmail.com</a><div><a href="https://github.com/sohan-soorya">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/sohan-soorya-keshava/">LinkedIn <span aria-hidden="true">↗</span></a><a href={resumeUrl} download>Résumé <span aria-hidden="true">↓</span></a></div><span className="footer-signature">Thought through. Built by Soorya.</span></div></div></footer>;
}

export function Workflow({ project }: { project: Project }) {
  return <figure className="workflow"><figcaption><p className="eyebrow">Behind the interface</p><h3>{project.figureTitle}</h3></figcaption><ol>{project.steps.map((step, index) => <li key={step.title} className={index === 2 ? 'step-emphasis' : ''}><span className="step-number">0{index + 1}</span><h4>{step.title}</h4><p>{step.text}</p>{index < project.steps.length - 1 && <span className="step-arrow" aria-hidden="true">→</span>}</li>)}</ol><p className="workflow-note">{project.flowNote}</p></figure>;
}

export function ProductVisual({ slug }: { slug: string }) {
  if (slug === 'pharmacy-management') {
    return <figure className="product-visual pharmacy-visual"><figcaption className="specimen-caption">Pharmacy · Illustrated system behavior</figcaption><div className="sale-sheet"><div className="sale-sheet-heading"><span className="eyebrow">A connected sale</span><span className="outline-check" aria-hidden="true">✓</span></div><h3>One commit.<br /> Consistent local records.</h3><dl className="sale-records"><div><dt>Bill</dt><dd>Recorded</dd></div><div><dt>Selected stock</dt><dd>Updated</dd></div><div><dt>Prescription</dt><dd>Fulfilled</dd></div></dl><div className="sync-note"><span className="tiny-square" aria-hidden="true" /><p>Connected inventory?<br /> <strong>Record the update to send next.</strong></p></div></div><p className="visual-caption">The sale and its local stock movement belong together.</p></figure>;
  }
  if (slug === 'ayusmart-insights') {
    return <figure className="product-visual insights-visual"><figcaption className="specimen-caption">Insights · Illustrative field mapping</figcaption><div className="mapping-sheet"><div className="mapping-label"><span className="eyebrow">Source record</span><span className="mono">01</span></div><div className="mapping-field"><code>visit_date</code><span>2026-09-01 09:30:00</span></div><div className="mapping-transform"><span aria-hidden="true">↓</span><span>Rename field · Normalize date</span></div><div className="mapping-label"><span className="eyebrow">Prepared record</span><span className="mono">02</span></div><div className="mapping-field prepared"><code>encounter_at</code><span>2026-09-01T09:30:00+00:00</span></div><div className="mapping-destination"><span>Consistent fields</span><span aria-hidden="true">→</span><strong>Reporting-ready data</strong></div></div><p className="visual-caption">Fictional record · Apache Superset provides the dashboard layer.</p></figure>;
  }
  return <figure className="product-visual ai-visual"><figcaption className="specimen-caption">AI platform · Illustrative review interface</figcaption><div className="context-sheet"><div className="context-identity"><span className="identity-mark" aria-hidden="true">P</span><div><strong>Sample patient</strong><span>Explicitly selected</span></div><span className="context-check" aria-hidden="true">✓</span></div><p className="sample-query">“What changed since the previous visit?”</p><div className="source-heading"><span className="eyebrow">Start with the records</span><span className="mono">2 sources</span></div><div className="source-record"><span className="source-icon" aria-hidden="true">01</span><div><strong>Latest encounter</strong><span>Visit notes · Source reference</span></div></div><div className="source-record"><span className="source-icon" aria-hidden="true">02</span><div><strong>Previous encounter</strong><span>Visit notes · Source reference</span></div></div><p className="context-note">Relevant history, prepared for clinician review.</p></div><p className="visual-caption">Sample data · A response needs context people can inspect.</p></figure>;
}
