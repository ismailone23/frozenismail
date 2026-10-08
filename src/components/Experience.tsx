const experience = [
  {
    period: "Jul 2025 — Present",
    role: "Independent product engineering",
    organization: "",
    description:
      "Built the complete ROS 2/YOLO tree-detection pipeline for MIST Mongol Barota and the faculty-evaluation Chrome extension. Also worked with startups and participated in multiple hackathons.",
  },
  {
    period: "Jan — Jul 2025",
    role: "Full-stack developer",
    organization: "Byteform LLC",
    description:
      "Designed PostMind's mobile writing UI and integrated OpenAI for generation. Built Sonkhipto's Next.js/Cheerio scraper and scheduled cron job for news ingestion.",
  },
];

export default function Experience() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-28"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="experience-heading"
          className="font-headline-md text-headline-md text-text-primary mb-10"
        >
          Career Trajectory
        </h2>
        <ol className="border-t border-surface-stroke">
          {experience.map((entry) => (
            <li
              key={entry.role}
              className="grid gap-3 border-b border-surface-stroke py-8 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 md:py-9"
            >
              <span className="font-label-caps text-xs uppercase tracking-[0.06em] text-on-surface-variant md:pt-2">
                {entry.period}
              </span>
              <div>
                <h3 className="font-headline-md text-[clamp(1.5rem,2vw,1.875rem)] font-bold leading-tight tracking-[-0.02em] text-text-primary">
                  {entry.role}
                </h3>
                <p className="font-body-md text-on-surface-variant mt-1 mb-4">
                  {entry.organization}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-[65ch]">
                  {entry.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
