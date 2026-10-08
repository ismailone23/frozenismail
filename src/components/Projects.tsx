"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Tree Life Detection",
    description:
      "A ROS 2 perception pipeline built for MIST Mongol Barota. A camera node streams frames to a YOLO tree-detection node through CvBridge and OpenCV for real-time annotated video.",
    tags: ["ROS 2", "OpenCV", "YOLO", "Python"],
    image: "/tree-life-preview.png",
    link: "https://github.com/ismailone23/tree_life_detection",
  },
  {
    title: "Faculty Evaluation Helper",
    description:
      "A Chrome extension for MIST students that fills faculty evaluations in the student portal. Review answers before submitting, or automate the full workflow with editable comments and progress tracking.",
    tags: ["Chrome Extension", "JavaScript", "Manifest V3"],
    image: "/faculty-evaluation.svg",
    link: "https://github.com/ismailone23/faculty_evaluation",
  },
  {
    title: "PostMind",
    description:
      "An AI writing app for posts, threads, and replies on X, with personalized generation and subscription management through Stripe and RevenueCat.",
    tags: ["React Native", "AI", "Stripe", "RevenueCat"],
    image: "/postmind-preview.svg",
    link: "https://apps.apple.com/us/app/postmind-ai-tweet-x-posts/id6473770693",
  },
  {
    title: "Sonkhipto News",
    description:
      "A cross-platform news app built in a monorepo. Uses Next.js backend to scrape news with Cheerio, summarizes content with AI, and delivers push notifications to the React Native app.",
    tags: ["React Native", "Next.js", "PostgreSQL", "Cheerio"],
    image: "/sonkhipto-preview.svg",
    link: "https://apps.apple.com/us/app/sonkhipto/id6477333889",
  },
  {
    title: "SiteAssist",
    description:
      "Contributed to SiteAssist, an innovative platform for selling and managing AI message agents.",
    tags: ["AI", "Agent Platform"],
    image: "/siteassist-preview.svg",
    link: "https://siteassist.io/",
  },
];

export default function Projects() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start mb-16"
      >
        <h2 className="font-headline-md text-headline-md text-text-primary mb-4">
          Selected Works
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          A curated selection of recent engineering and design projects.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`group rounded-[12px] bg-surface-container-low border border-surface-stroke overflow-hidden transition-all duration-300 glow-hover relative cursor-pointer ${index % 2 !== 0 ? "md:mt-16" : ""}`}
          >
            <div className="aspect-video overflow-hidden border-b border-surface-stroke relative">
              <div className="absolute inset-0 bg-primary-container/10 group-hover:opacity-0 transition-opacity z-10 pointer-events-none"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-2xl text-text-primary">
                  {project.title}
                </h3>
                <a
                  className="text-on-surface-variant group-hover:text-primary transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </a>
              </div>
              <p className="font-body-md text-on-surface-variant mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded bg-surface-variant/50 text-text-primary font-label-caps text-label-caps"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
