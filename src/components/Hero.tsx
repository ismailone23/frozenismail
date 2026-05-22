"use client";

import { motion } from "framer-motion";
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[819px] flex flex-col justify-center relative" id="hero">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-stroke bg-surface-container-low/50 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-caps text-label-caps text-text-muted">AVAILABLE FOR FREELANCE</span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary mb-6">
          Full-stack Developer <br className="hidden md:block" />
          <span className="text-text-muted">&amp; Designer</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
          Building digital experiences with precision and soul. I craft scalable systems and pixel-perfect interfaces that solve real problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-container text-surface-container-low font-body-md font-bold hover:opacity-90 transition-opacity cursor-pointer" onClick={(e) => scrollToSection(e, 'projects')}>
            View Projects
          </a>
          <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-surface-stroke text-text-primary font-body-md hover:bg-surface-stroke transition-colors cursor-pointer" onClick={(e) => scrollToSection(e, 'contact')}>
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
