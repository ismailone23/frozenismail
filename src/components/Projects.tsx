import Image from "next/image";

const projects = [
  {
    title: "SiteAssist",
    description:
      "Support teams need to manage AI agents and their customers. I designed SiteAssist's admin panel for users, purchases, refunds and collaboration, including email invitations via Resend, and helped set up the initial boilerplate.",
    outcome: "Live customer-facing product",
    tags: ["Admin UI", "AI Agents", "Resend"],
    image: "/siteassist-preview.svg",
    link: "https://siteassist.io/",
    linkLabel: "Visit SiteAssist",
  },
  {
    title: "PostMind",
    description:
      "Creators need a faster way to draft posts, threads and replies. I designed the React Native writing UI and integrated OpenAI for generation in the shipped app.",
    outcome: "Shipped on the App Store",
    tags: ["React Native", "OpenAI", "Stripe", "RevenueCat"],
    image: "/postmind-preview.svg",
    link: "https://apps.apple.com/us/app/postmind-ai-tweet-x-posts/id6473770693",
    linkLabel: "View PostMind on the App Store",
  },
  {
    title: "Sonkhipto News",
    description:
      "To keep short news feeds current, I built Sonkhipto's Next.js/Cheerio scraper and scheduled cron job. Its React Native app delivers AI summaries and push notifications.",
    outcome: "Shipped on the App Store",
    tags: ["React Native", "Next.js", "PostgreSQL", "Cheerio"],
    image: "/sonkhipto-preview.svg",
    link: "https://apps.apple.com/us/app/sonkhipto/id6477333889",
    linkLabel: "View Sonkhipto on the App Store",
  },
  {
    title: "Tree Life Detection",
    description:
      "I built the complete ROS 2 camera-to-YOLO tree-detection pipeline for MIST Mongol Barota. CvBridge and OpenCV turn incoming frames into an annotated local view.",
    outcome: "Working camera-to-detection pipeline",
    tags: ["ROS 2", "OpenCV", "YOLO", "Python"],
    image: "/tree-life-preview.webp",
    link: "https://github.com/ismailone23/tree_life_detection",
    linkLabel: "Read the tree-detection architecture on GitHub",
  },
  {
    title: "Faculty Evaluation Helper",
    description:
      "I built the entire MIST faculty-evaluation Chrome extension to remove repetitive form steps, from review-first rating autofill to optional comments and submission.",
    outcome: "Review-first and optional submission modes",
    tags: ["Chrome Extension", "JavaScript", "Manifest V3"],
    image: "/faculty-evaluation.svg",
  },
];

export default function Projects() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32"
      id="projects"
    >
      <div className="flex flex-col items-start mb-16">
        <h2 className="font-headline-md text-headline-md text-text-primary mb-4">
          Selected Works
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          A curated selection of recent engineering and design projects.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`group rounded-[12px] bg-surface-container-low border border-surface-stroke overflow-hidden transition-all duration-300 glow-hover relative ${project.link ? "cursor-pointer" : ""} ${index % 2 !== 0 ? "md:mt-16" : ""}`}
          >
            {project.link && (
              <a
                className="absolute inset-0 z-20 rounded-[12px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                href={project.link}
                aria-label={project.linkLabel}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
            <div className="aspect-video overflow-hidden border-b border-surface-stroke relative">
              <div className="absolute inset-0 bg-primary-container/10 group-hover:opacity-0 transition-opacity z-10 pointer-events-none"></div>
              <Image
                src={project.image}
                alt={`Illustrative preview of ${project.title}`}
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
                {project.link ? (
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                ) : (
                  <span className="font-label-caps text-[10px] uppercase tracking-wider text-text-muted">Private project</span>
                )}
              </div>
              <p className="font-body-md text-on-surface-variant mb-4">
                {project.description}
              </p>
              <p className="font-body-md text-sm text-text-primary mb-6">
                <span className="text-on-surface-variant">Outcome: </span>{project.outcome}
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
          </div>
        ))}
      </div>
    </section>
  );
}
