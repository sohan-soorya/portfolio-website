import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { Arrow, ProductVisual, Workflow } from '@/components/portfolio';

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: `${project.title} — Soorya`, description: project.summary, type: 'article', url: `/work/${project.slug}` },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return <main id="main" className="container case-study"><header className="case-header"><Link href="/#work" className="back-link"><span aria-hidden="true">←</span> Back to selected work</Link><p className="eyebrow">Case study {project.number} / {project.discipline}</p><h1>{project.title}</h1><p className="case-headline">{project.headline}</p><p className="case-introduction">{project.introduction}</p><dl className="case-facts"><div><dt>My contribution</dt><dd>{project.role}</dd></div><div><dt>Product context</dt><dd>Ayusmart healthcare ecosystem</dd></div><div><dt>Built with</dt><dd>{project.technologies}</dd></div></dl></header><div className="case-body"><aside className="case-index"><p className="eyebrow">In this case study</p><nav aria-label="Case study contents">{project.sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span>0{index + 1}</span>{['The problem', 'What I built', 'Engineering decisions', 'The result'][index]}</a>)}</nav></aside><div className="case-prose">{project.sections.map((section, index) => <Fragment key={section.id}><section id={section.id} aria-labelledby={`${section.id}-title`}><p className="eyebrow">0{index + 1} / {['The problem', 'What I built', 'Engineering decisions', 'The result'][index]}</p><h2 id={`${section.id}-title`}>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === 1 && <ProductVisual slug={project.slug} />}</section>{index === 1 && <Workflow project={project} />}</Fragment>)}</div></div><div className="next-project"><div><p className="eyebrow">Keep exploring</p><Link href={`/work/${next.slug}`}>{next.title} <Arrow /></Link></div><Link href="/#work" className="text-link">All selected work <span aria-hidden="true">↑</span></Link></div></main>;
}
