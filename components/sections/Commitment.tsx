"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { site, basePath } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

const pledge =
  "ألتزم بأن أكون صوت مواطني ولاية تيارت داخل البرلمان، وأن أدافع عن مشاريعها الاستراتيجية، وأتابع تنفيذها مع السلطات المختصة، وأعمل على تحديث التشريعات بما يخدم التنمية، ويعزز الاستثمار، ويوفر فرص العمل، ويجعل تيارت نموذجًا للتنمية المتوازنة داخل الجزائر.";

export function Commitment() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-green-gradient" aria-hidden />
      <div className="pattern-dots absolute inset-0 -z-10 opacity-20" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-1.5 tricolor-bar"
        aria-hidden
      />

      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md sm:p-12 lg:p-16"
        >
          <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold-gradient text-ink shadow-gold">
            <Quote size={30} />
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm font-bold text-white">
            تعهّد والتزام
          </span>

          <p className="mt-6 font-display text-2xl font-bold leading-loose text-white sm:text-3xl lg:text-[2.1rem]">
            «{pledge}»
          </p>

          {/* Signature */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <span className="h-px w-24 bg-white/40" />
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white">
                <Image
                  src={`${basePath}/images/rnd-logo.png`}
                  alt={site.party}
                  width={42}
                  height={42}
                  className="object-contain p-0.5"
                />
              </span>
              <div className="text-start text-white">
                <p className="text-lg font-bold">{site.candidate}</p>
                <p className="text-sm text-white/70">{site.role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
