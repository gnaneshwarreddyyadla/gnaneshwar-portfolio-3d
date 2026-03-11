'use client';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-accent-violet/5 blur-[100px]" />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">Hello! I&apos;m</p>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
              className="font-display font-900 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1] mb-2">
              GNANESHWAR
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="font-display font-900 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-violet">YADLA</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-3 mb-6">
              <span className="text-text-secondary font-body text-lg">A</span>
              <span className="font-display font-bold text-2xl sm:text-3xl text-accent-violet">Data</span>
              <span className="font-display font-bold text-2xl sm:text-3xl">Engineer</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.65 }}
              className="font-body text-text-secondary text-base max-w-lg leading-relaxed mb-8">
              4+ years building scalable data pipelines and infrastructure across AWS, Snowflake, dbt, and Databricks. 
              Turning raw data into reliable, actionable intelligence.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 mb-8">
              <a href="https://linkedin.com/in/gnaneshwar-reddy-" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 bg-surface-raised/50">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/gnaneshwarreddyyadla" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 bg-surface-raised/50">
                <Github size={20} />
              </a>
              <a href="mailto:gnaneshwarreddy056@gmail.com"
                className="p-3 rounded-xl border border-white/10 text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 bg-surface-raised/50">
                <Mail size={20} />
              </a>
              <a href="#resume" className="ml-2 font-mono text-sm px-5 py-3 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-200">
                RESUME
              </a>
            </motion.div>
          </div>

          {/* Right side - Avatar */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow ring behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-accent-violet/10 to-transparent blur-3xl scale-110" />
              <Image src="/images/avatar.png" alt="Gnaneshwar Yadla" width={500} height={600}
                className="relative avatar-glow rounded-2xl" priority />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors text-xs font-mono">
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
