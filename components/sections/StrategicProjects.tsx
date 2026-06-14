"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const accentMap: Record<
  Project["accent"],
  { ring: string; icon: string; bar: string; glow: string }
> = {
  green: {
    ring: "group-hover:border-algeria-green/40",
    icon: "bg-algeria-green/10 text-algeria-green dark:text-algeria-green-light",
    bar: "bg-algeria-green",
    glow: "group-hover:shadow-[0_24px_60px_-18px_rgba(14,107,59,0.4)]",
  },
  red: {
    ring: "group-hover:border-algeria-red/40",
    icon: "bg-algeria-red/10 text-algeria-red dark:text-algeria-red-light",
    bar: "bg-algeria-red",
    glow: "group-hover:shadow-[0_24px_60px_-18px_rgba(193,39,45,0.4)]",
  },
  gold: {
    ring: "group-hover:border-gold/50",
    icon: "bg-gold/15 text-gold-dark dark:text-gold-light",
    bar: "bg-gold",
    glow: "group-hover:shadow-gold",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const a = accentMap[project.accent];

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-base surface p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 ${a.ring} ${a.glow}`}
    >
      {/* number watermark */}
      <span className="pointer-events-none absolute -left-2 -top-3 font-display text-7xl font-bold text-black/[0.03] dark:text-white/[0.04]">
        {project.id.toLocaleString("ar-DZ")}
      </span>

      <div
        className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${a.icon}`}
      >
        <Icon size={26} strokeWidth={2} />
      </div>

      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-4 space-y-2">
        {project.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-muted">
            <ChevronLeft
              size={16}
              className={`mt-0.5 shrink-0 ${
                project.accent === "gold"
                  ? "text-gold"
                  : project.accent === "red"
                  ? "text-algeria-red"
                  : "text-algeria-green"
              }`}
            />
            <span className="leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>

      <span
        className={`mt-5 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full ${a.bar}`}
      />
    </motion.article>
  );
}

export function StrategicProjects() {
  return (
    <section id="projects" className="relative py-24">
      {/* soft band background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-algeria-green/[0.03] to-transparent"
        aria-hidden
      />
      <div className="container">
        <SectionHeading
          eyebrow="المشاريع الاستراتيجية"
          title="١٧ محورًا لتيارت الغد"
          description="رؤية تنموية متكاملة تشمل كل قطاعات الحياة، من البنية التحتية إلى الاقتصاد الرقمي، لبناء ولاية قوية وعادلة ومزدهرة."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
