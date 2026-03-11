'use client';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'Agentic AI Intern',
    company: 'NeuralSeek',
    period: 'Jun 2025 — Aug 2025',
    bullets: [
      'Architected Python and SQL ETL/ELT pipelines integrating multiple data sources on AWS with OOP design patterns.',
      'Troubleshot pipeline discrepancies and advised on scalable data engineering best practices across the full SDLC.',
    ],
    tags: ['Python', 'SQL', 'AWS', 'AI Agents', 'ETL'],
  },
  {
    title: 'Data Engineer',
    company: 'Wipro',
    period: 'Jul 2022 — Jul 2024',
    bullets: [
      'Owned end-to-end pipeline design for large-scale analytical workloads across Strategy, Finance, Operations, and Compliance.',
      'Designed 10+ ETL/ELT pipelines on AWS and Snowflake with automated anomaly detection, reducing data quality incidents by 35%.',
      'Built modular dbt models (staging, intermediate, mart) with CI/CD test coverage across 5 cross-functional teams.',
      'Partnered with data scientists and ML engineers to design inference-ready datasets for AI and BI consumers.',
    ],
    tags: ['Python', 'SQL', 'Snowflake', 'dbt', 'AWS', 'PySpark', 'Power BI'],
  },
  {
    title: 'Data Analyst',
    company: 'Wipro',
    period: 'Nov 2020 — Jul 2022',
    bullets: [
      'Built Power BI and Tableau dashboards tracking KPIs, SLA adherence, and data completeness.',
      'Wrote complex SQL queries and Python scripts across multiple source systems for business stakeholders.',
    ],
    tags: ['Python', 'SQL', 'Power BI', 'Tableau', 'Azure'],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Wipro',
    period: 'Aug 2020 — Nov 2020',
    bullets: ['Earned full-time offer 3 months early. Built Power BI reports and Python/SQL data workflows.'],
    tags: ['Python', 'SQL', 'Power BI'],
  },
  {
    title: 'Intern',
    company: 'Presidency University',
    period: 'May — Jul 2020',
    bullets: ['Supported data processing and analysis workflows in an academic research environment.'],
    tags: ['Python', 'Data Analysis'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-container">
        <SectionHeading number="02" title="Experience" />
        <div className="relative">
          <div className="absolute left-[5px] lg:left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className={`relative flex flex-col lg:flex-row ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'} gap-8 lg:gap-12`}>
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-1"><div className="timeline-dot" /></div>
                  <div className={`ml-8 lg:ml-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="card-glass p-6">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <h3 className="font-display font-semibold text-lg text-text-primary">{exp.title}</h3>
                        <span className="font-mono text-accent text-sm">@ {exp.company}</span>
                      </div>
                      <p className="font-mono text-xs text-text-secondary mb-4">{exp.period}</p>
                      <ul className="space-y-2 mb-5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-text-secondary text-sm leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent before:text-xs">{b}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (<span key={t} className="tag-pill">{t}</span>))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
