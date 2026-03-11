'use client';
import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <ScrollReveal className="mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-accent text-sm">{number}</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">{title}</h2>
        <div className="flex-1 glow-line ml-4" />
      </div>
    </ScrollReveal>
  );
}
