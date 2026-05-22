"use client";

import { motion } from "framer-motion";

const skills = [
  { icon: "smartphone", label: "React Native" },
  { icon: "code", label: "React & Next.js" },
  { icon: "database", label: "PostgreSQL" },
  { icon: "api", label: "Cheerio & APIs" },
  { icon: "smart_toy", label: "AI Integrations" },
  { icon: "payments", label: "Stripe & RevenueCat" },
  { icon: "design_services", label: "UI/UX Design" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="font-headline-md text-headline-md text-text-primary mb-4">Technical Arsenal</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">The tools and technologies I use to bring ideas to life.</p>
      </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-stroke glass-panel hover:border-primary/50 transition-colors cursor-default"
          >
            <span className="material-symbols-outlined text-lg text-primary">{skill.icon}</span>
            <span className="font-label-caps text-label-caps text-text-primary">{skill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
