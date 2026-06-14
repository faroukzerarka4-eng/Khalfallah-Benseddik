"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, MapPin } from "lucide-react";
import { site, stats, basePath } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-hero-radial" aria-hidden />
      <div
        className="pattern-dots absolute inset-0 -z-20 opacity-60"
        aria-hidden
      />
      {/* Decorative blurred orbs */}
      <div
        className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-algeria-green/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-algeria-red/15 blur-3xl"
        aria-hidden
      />

      <div className="container grid items-center gap-12 lg:grid-cols-12">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-bold text-gold-dark dark:text-gold-light"
          >
            <MapPin size={15} />
            {site.role} — {site.province}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-gradient-green">{site.candidate}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-xl font-semibold leading-relaxed text-muted sm:text-2xl"
          >
            {site.slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#program" className="btn-primary group">
              <FileText size={18} />
              البرنامج الانتخابي
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </a>
            <a href="#contact" className="btn-outline">
              تواصل معنا
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-r-2 border-gold/40 pr-4">
                <dt className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            {/* Glow frame */}
            <div className="absolute inset-0 -z-10 rotate-6 rounded-[2.5rem] bg-green-gradient opacity-90 blur-[2px]" />
            <div className="absolute inset-0 -z-10 -rotate-3 rounded-[2.5rem] bg-gold-gradient opacity-70" />

            <div className="relative overflow-hidden rounded-[2.25rem] border-4 border-white/80 bg-gradient-to-b from-algeria-green/10 to-algeria-red/10 shadow-2xl dark:border-white/10">
              <Image
                src={`${basePath}/images/candidate-wave.png`}
                alt={`${site.candidate} - ${site.role}`}
                width={620}
                height={780}
                priority
                className="h-auto w-full object-cover"
              />
              {/* Name badge */}
              <div className="glass absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/20 px-4 py-3">
                <div>
                  <p className="text-sm font-bold">{site.candidate}</p>
                  <p className="text-xs text-muted">{site.party}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white">
                  <Image
                    src={`${basePath}/images/rnd-logo.png`}
                    alt={site.party}
                    width={36}
                    height={36}
                    className="object-contain p-0.5"
                  />
                </span>
              </div>
            </div>

            {/* Floating slogan chip */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-3 top-10 hidden rounded-2xl border border-gold/30 px-4 py-2.5 text-sm font-bold text-gold-dark shadow-gold dark:text-gold-light sm:block"
            >
              {site.partySlogan}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="انتقل للأسفل"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
      >
        <span className="text-xs">اكتشف المزيد</span>
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-current"
          />
        </span>
      </motion.a>
    </section>
  );
}
