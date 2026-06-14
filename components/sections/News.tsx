"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Newspaper } from "lucide-react";
import { news, site } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const catColor: Record<string, string> = {
  "نشاط ميداني": "bg-algeria-green/10 text-algeria-green dark:text-algeria-green-light",
  تصريح: "bg-gold/15 text-gold-dark dark:text-gold-light",
  إعلان: "bg-algeria-red/10 text-algeria-red dark:text-algeria-red-light",
};

export function News() {
  return (
    <section id="news" className="relative py-24">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-algeria-green/[0.03] to-transparent"
        aria-hidden
      />
      <div className="container">
        <SectionHeading
          eyebrow="الأخبار"
          title="آخر مستجدّات الحملة"
          description="تابع أحدث الأنشطة والتصريحات والمواعيد على مدار الحملة الانتخابية."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {news.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-3xl border border-base surface shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              {/* media band */}
              <div className="relative h-44 overflow-hidden bg-green-gradient">
                <div className="pattern-dots absolute inset-0 opacity-20" />
                <Newspaper
                  className="absolute -bottom-4 -left-2 text-white/15 transition-transform duration-700 group-hover:scale-110"
                  size={120}
                  strokeWidth={1}
                />
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
                    catColor[item.category] ?? "bg-white/20 text-white"
                  }`}
                >
                  {item.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="flex items-center gap-2 text-xs text-muted">
                  <CalendarDays size={14} />
                  {item.date}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug transition-colors group-hover:text-algeria-green dark:group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.excerpt}
                </p>
                <a
                  href={site.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-algeria-green dark:text-gold"
                >
                  اقرأ المزيد
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
