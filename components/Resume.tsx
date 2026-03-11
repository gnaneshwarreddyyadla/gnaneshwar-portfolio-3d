'use client';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-28">
      <div className="section-container">
        <SectionHeading number="05" title="Resume" />
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a href="/Gnaneshwar_Yadla_Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-display font-semibold text-sm hover:bg-accent-glow transition-colors group">
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" /> Download Resume
              </a>
              <a href="/Gnaneshwar_Yadla_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent font-display font-semibold text-sm hover:bg-accent/10 transition-all group">
                <ExternalLink size={16} /> Open in New Tab
              </a>
            </div>
            <div className="card-glass overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5">
                <FileText size={16} className="text-accent" />
                <span className="font-mono text-xs text-text-secondary">Gnaneshwar_Yadla_Resume.pdf</span>
              </div>
              <div className="w-full" style={{ height: '80vh', maxHeight: '1000px', minHeight: '500px' }}>
                <iframe src="/Gnaneshwar_Yadla_Resume.pdf" className="w-full h-full border-0" title="Resume" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
