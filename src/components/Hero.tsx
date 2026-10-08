"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll";

export default function Hero() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[819px] flex flex-col justify-center relative"
      id="hero"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-stroke bg-surface-container-low/50 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-caps uppercase text-label-caps text-text-muted">
            available for work
          </span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary mb-6">
          Ismail <span className="text-text-muted">Hossain</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-2 max-w-xl">
          A full-stack developer and designer. I build scalable systems and
          thoughtful interfaces that solve real problems.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mb-10">
          <svg
            aria-hidden="true"
            className="inline-block w-4 h-4 mr-2 text-on-surface-variant"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s7-5.25 7-11a7 7 0 1 0-14 0c0 5.75 7 11 7 11Z"
            />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          Dhaka, Bangladesh
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="inline-flex items-center justify-center px-8 py-2 rounded-xl bg-primary-container text-surface-container-low font-body-md font-bold hover:opacity-90 transition-opacity cursor-pointer"
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
          >
            Projects
          </a>
          <a
            className="inline-flex items-center justify-center px-8 py-2 rounded-xl border border-surface-stroke text-text-primary font-body-md hover:bg-surface-stroke transition-colors cursor-pointer"
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
