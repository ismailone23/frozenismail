const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML & CSS",
      "UI/UX Design",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Cheerio",
      "Stripe",
      "RevenueCat",
      "Redis",
    ],
  },
  {
    title: "AI & Systems",
    skills: [
      "YOLO",
      "ROS 2",
      "OpenCV",
      "Computer Vision",
      "AI Integrations",
      "Chrome Extensions",
    ],
  },
];

const marqueeSkills = [
  "React Native",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "YOLO",
  "ROS 2",
  "AI Integrations",
  "Chrome Extensions",
  "UI/UX Design",
];

export default function Skills() {
  return (
    <section
      className="overflow-hidden py-24"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1128px] px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 md:mb-14">
          <p className="mb-4 font-label-caps text-label-caps uppercase tracking-[0.22em] text-[#ff6a51]">
            Skills
          </p>
          <h2
            id="skills-heading"
            className="mb-4 font-headline-md text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.05] font-extrabold uppercase tracking-[-0.035em] text-text-primary"
          >
            Technical Arsenal
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="border-t border-surface-stroke">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-4 gap-y-4 border-b border-surface-stroke py-7 md:grid-cols-[48px_215px_minmax(0,1fr)] md:items-baseline md:gap-x-8 md:py-8"
            >
              <span
                aria-hidden="true"
                className="font-label-caps text-xs text-text-muted"
              >
                0{index + 1}
              </span>
              <h3 className="font-headline-md text-[23px] font-bold leading-none tracking-[-0.02em] text-text-primary">
                {group.title}
              </h3>
              <ul className="col-start-2 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 md:col-start-3 md:gap-x-5">
                {group.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="whitespace-nowrap font-body-md text-[15px] leading-6 text-on-surface-variant"
                  >
                    <span
                      className={skillIndex === 0 ? "text-text-primary" : ""}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-16 md:mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        aria-hidden="true"
      >
        <div className="skills-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeSkills.map((skill) => (
                <span
                  key={skill}
                  className="flex shrink-0 items-center gap-6 md:gap-10 pl-6 md:pl-10"
                >
                  <span className="font-headline-md text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold leading-none uppercase tracking-tight text-surface-container-highest whitespace-nowrap">
                    {skill}
                  </span>
                  <span className="text-3xl md:text-5xl font-bold leading-none text-gray-50">
                    /
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
