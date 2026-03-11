'use client';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const skillCategories = [
  {
    label: 'Languages & Data',
    skills: [
      { name: 'Python', icon: null },
      { name: 'SQL', icon: null },
      { name: 'JavaScript', icon: '/images/tech/javascript.webp' },
      { name: 'PySpark', icon: null },
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', icon: '/images/tech/aws.webp' },
      { name: 'Snowflake', icon: null },
      { name: 'Databricks', icon: null },
      { name: 'Docker', icon: null },
    ],
  },
  {
    label: 'ETL & Orchestration',
    skills: [
      { name: 'dbt', icon: '/images/tech/dbt.webp' },
      { name: 'Airflow', icon: '/images/tech/airflow.webp' },
      { name: 'Kafka', icon: null },
      { name: 'Azure DF', icon: null },
    ],
  },
  {
    label: 'Visualization & BI',
    skills: [
      { name: 'Power BI', icon: '/images/tech/powerbi.webp' },
      { name: 'Tableau', icon: null },
      { name: 'Looker', icon: null },
    ],
  },
  {
    label: 'Web & Backend',
    skills: [
      { name: 'Next.js', icon: '/images/tech/nextjs.webp' },
      { name: 'Node.js', icon: '/images/tech/node.webp' },
      { name: 'Express', icon: '/images/tech/express.webp' },
      { name: 'MongoDB', icon: '/images/tech/mongo.webp' },
      { name: 'MySQL', icon: '/images/tech/mysql.webp' },
    ],
  },
  {
    label: 'ML & AI',
    skills: [
      { name: 'PyTorch', icon: null },
      { name: 'TensorFlow', icon: null },
      { name: 'Transformers', icon: null },
      { name: 'LLMs', icon: null },
    ],
  },
];

// SVG fallback icons for skills without images
function SkillIcon({ name }: { name: string }) {
  const initial = name.charAt(0);
  return (
    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
      <span className="font-mono text-accent text-sm font-bold">{initial}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="section-container">
        <SectionHeading number="04" title="Skills & Technologies" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="card-glass p-6">
                <h3 className="font-mono text-accent text-xs uppercase tracking-widest mb-5">{cat.label}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="tech-icon-card">
                      {s.icon ? (
                        <div className="w-10 h-10 relative">
                          <Image src={s.icon} alt={s.name} fill className="object-contain" />
                        </div>
                      ) : (
                        <SkillIcon name={s.name} />
                      )}
                      <span className="font-body text-xs text-text-secondary text-center">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
