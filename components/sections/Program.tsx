"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Flag } from "lucide-react";
import { programPillars, roadmap } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Program() {
  const [active, setActive] = useState(0);

  return (
    <section id="program" className="relative overflow-hidden py-24">
      <div className="container">
        <SectionHeading
          eyebrow="البرنامج الانتخابي"
          title="التزامات واضحة... وخارطة طريق منظمة"
          description="برنامج مبنيٌّ على ركائز راسخة ومنهجية عمل شفافة، من الإنصات إلى التجسيد ثم المحاسبة."
        />

        {/* Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {programPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-base surface p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-gradient text-white shadow-soft">
                  <Target size={22} />
                </span>
                <span className="font-display text-3xl font-bold text-black/5 dark:text-white/10">
                  {(i + 1).toLocaleString("ar-DZ")}
                </span>
              </div>
              <h3 className="text-lg font-bold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive roadmap */}
        <div className="mt-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-8 flex items-center justify-center gap-3 text-center"
          >
            <Flag className="text-gold" />
            <h3 className="text-2xl font-bold sm:text-3xl">
              خارطة الطريق التفاعلية
            </h3>
          </motion.div>

          {/* Phase tabs */}
          <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {roadmap.map((step, i) => (
              <button
                key={step.phase}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all focus-ring ${
                  active === i
                    ? "bg-green-gradient text-white shadow-soft"
                    : "border border-base surface text-muted hover:border-gold hover:text-gold"
                }`}
              >
                {step.phase}
              </button>
            ))}
          </div>

          {/* Timeline line + nodes */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute right-0 left-0 top-5 hidden h-0.5 bg-base md:block">
              <motion.div
                className="h-full bg-gold-gradient"
                animate={{
                  width: `${((active + 1) / roadmap.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: "right" }}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {roadmap.map((step, i) => (
                <button
                  key={step.phase}
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center text-center focus-ring rounded-2xl"
                >
                  <span
                    className={`relative z-10 grid h-10 w-10 place-items-center rounded-full text-sm font-bold transition-all ${
                      i <= active
                        ? "bg-gold-gradient text-ink shadow-gold"
                        : "border-2 border-base surface text-muted"
                    }`}
                  >
                    {(i + 1).toLocaleString("ar-DZ")}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-8 max-w-2xl rounded-3xl border border-base surface p-8 text-center shadow-card"
          >
            <span className="text-sm font-bold text-gold">
              {roadmap[active].phase}
            </span>
            <h4 className="mt-2 text-2xl font-bold">{roadmap[active].title}</h4>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              {roadmap[active].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
