"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-headline-md text-headline-md text-text-primary mb-16 text-center"
      >
        Career Trajectory
      </motion.h2>
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-px bg-surface-stroke -translate-x-1/2"></div>
        
        {/* Timeline Item 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pl-12 md:pl-0"
        >
          <div className="absolute left-4 md:left-[50%] top-0 w-3 h-3 rounded-full bg-primary-container border-2 border-background -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(230,76,255,0.5)]"></div>
          <div className="md:w-[45%] md:text-right md:pr-12 mb-4 md:mb-0">
            <h3 className="font-headline-md text-xl text-text-primary">Exploring Technologies</h3>
            <p className="font-body-md text-primary mt-1">Self-Development</p>
          </div>
          <div className="md:w-[45%] md:pl-12">
            <span className="inline-block px-2 py-1 rounded bg-surface-variant text-text-muted font-label-caps text-[10px] mb-2">JUL 2025 - PRESENT</span>
            <p className="font-body-md text-on-surface-variant text-sm">Actively researching and experimenting with emerging technologies, advanced AI integrations, and refining modern web and mobile development architectures.</p>
          </div>
        </motion.div>

        {/* Timeline Item 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pl-12 md:pl-0"
        >
          <div className="absolute left-4 md:left-[50%] top-0 w-3 h-3 rounded-full bg-surface-variant border-2 border-background -translate-x-1/2 mt-1.5 md:mt-0"></div>
          <div className="md:w-[45%] md:text-right md:pr-12 mb-4 md:mb-0">
            <h3 className="font-headline-md text-xl text-text-primary">Full-Stack Developer</h3>
            <p className="font-body-md text-text-muted mt-1">Byteform LLC</p>
          </div>
          <div className="md:w-[45%] md:pl-12">
            <span className="inline-block px-2 py-1 rounded bg-surface-variant text-text-muted font-label-caps text-[10px] mb-2">JAN 2025 - JUL 2025</span>
            <p className="font-body-md text-on-surface-variant text-sm">Architected cross-platform mobile apps like Tweet AI and Sonkhipto News with Stripe & RevenueCat subscriptions. Implemented AI-driven web scraping features using Next.js and Cheerio.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
