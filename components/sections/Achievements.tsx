"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-ink py-24 text-white"
    >
      <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden />
      <div
        className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-algeria-green/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="الإنجازات"
          title="مسارٌ من العطاء والمتابعة"
          description="محطات من العمل الميداني والمرافعة المتواصلة في خدمة مواطني ولاية تيارت."
          light
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto max-w-3xl"
        >
          {/* vertical line */}
          <span
            className="absolute bottom-0 right-[1.45rem] top-2 w-0.5 bg-gradient-to-b from-gold via-gold/40 to-transparent md:right-1/2 md:translate-x-1/2"
            aria-hidden
          />

          {achievements.map((item, i) => (
            <motion.li
              key={item.year}
              variants={fadeUp}
              className={`relative mb-8 flex gap-6 pr-14 md:w-1/2 md:pr-0 ${
                i % 2 === 0
                  ? "md:mr-auto md:pl-12 md:text-start"
                  : "md:ml-auto md:pr-12 md:text-end"
              }`}
            >
              {/* node */}
              <span
                className={`absolute right-0 top-1.5 grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-ink shadow-gold md:right-auto ${
                  i % 2 === 0
                    ? "md:-right-6 md:left-auto"
                    : "md:-left-6 md:right-auto"
                }`}
              >
                <Award size={22} />
              </span>

              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="text-sm font-bold text-gold-light">
                  {item.year}
                </span>
                <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
