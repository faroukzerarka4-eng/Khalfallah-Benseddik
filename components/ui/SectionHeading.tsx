"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-12 flex max-w-2xl flex-col gap-4 ${
        align === "center" ? "mx-auto items-center text-center" : "items-start text-start"
      }`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-bold ${
            light
              ? "border-white/30 text-gold-light"
              : "border-gold/30 bg-gold/10 text-gold-dark dark:text-gold-light"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
      <span
        className={`mt-1 h-1 w-24 rounded-full bg-gold-gradient ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
