'use client';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Airbnb Analytics ELT Pipeline',
    description: 'End-to-end ELT pipeline ingesting Airbnb listing data into Snowflake, with dbt multi-layer transformations, Airflow orchestration, and Power BI dashboards for pricing and occupancy analytics.',
    image: '/images/projects/airbnb.png',
    tags: ['Snowflake', 'dbt', 'Python', 'SQL', 'Airflow', 'AWS S3', 'Power BI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Cloud Security Architecture',
    description: 'AWS cloud security infrastructure with encrypted data pipelines, IAM policies, and monitoring dashboards for healthcare data compliance and protection.',
    image: '/images/projects/cloud.png',
    tags: ['AWS', 'Python', 'Security', 'Docker', 'EC2', 'S3'],
    github: '#',
    live: '#',
  },
  {
    title: 'Bond Cancellation Automation',
    description: 'Full-stack automation system for bond cancellation workflows with manifest management, validation pipelines, customs consignation, and real-time status dashboards.',
    image: '/images/projects/bond.png',
    tags: ['Python', 'SQL', 'Automation', 'Dashboard', 'ETL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Axiom Wealth Management',
    description: 'Investment portfolio management platform with fund tracking, tax optimization, retirement planning, and real-time market insights for wealth management.',
    image: '/images/projects/maxlife.png',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Finance', 'Full-Stack'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="section-container">
        <SectionHeading number="03" title="Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-glass overflow-hidden h-full flex flex-col group">
                {/* Screenshot in monitor mockup */}
                <div className="relative overflow-hidden bg-surface-overlay/50 p-4">
                  <div className="rounded-lg overflow-hidden border border-white/5">
                    {/* Browser bar */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-surface-raised border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="h-4 rounded-full bg-surface/60 max-w-[200px]" />
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg text-text-primary">{project.title}</h3>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-text-secondary hover:text-accent transition-colors"><Github size={16} /></a>
                      <a href={project.live} className="text-text-secondary hover:text-accent transition-colors"><ExternalLink size={16} /></a>
                    </div>
                  </div>
                  <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (<span key={t} className="tag-pill">{t}</span>))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
