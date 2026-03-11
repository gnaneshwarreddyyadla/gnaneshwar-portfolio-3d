'use client';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

const GlobeScene = dynamic(() => import('./three/GlobeScene'), { ssr: false });

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-container">
        <SectionHeading number="01" title="About Me" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 font-body text-text-secondary leading-relaxed text-[15px] mb-8">
              <p>I&apos;m a Data Engineer with 4+ years of experience designing and operating production data infrastructure. At Wipro, I progressed from intern to full-time in under 3 months, then grew from Data Analyst to Data Engineer, owning end-to-end pipeline design for large-scale analytical workloads.</p>
              <p>My work spans the full data lifecycle: building modular dbt transformation models with CI/CD-integrated testing, designing automated reconciliation and anomaly detection, and delivering reusable data products across cross-functional teams.</p>
              <p>Most recently, I interned at NeuralSeek working on agentic AI systems. I&apos;m currently completing my M.S. in Computer Science at Virginia Commonwealth University.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: GraduationCap, label: 'Education', value: 'M.S. CS, VCU', sub: 'GPA 3.8 — Dec 2025' },
                { icon: Briefcase, label: 'Experience', value: '4+ Years', sub: 'Wipro, NeuralSeek' },
                { icon: MapPin, label: 'Location', value: 'Virginia, USA', sub: 'Open to Opportunities' },
              ].map((item) => (
                <div key={item.label} className="card-glass p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0"><item.icon size={16} /></div>
                  <div>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="font-body text-sm text-text-primary font-medium">{item.value}</p>
                    <p className="font-body text-xs text-text-secondary mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <GlobeScene />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
