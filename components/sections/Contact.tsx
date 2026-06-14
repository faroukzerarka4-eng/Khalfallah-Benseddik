"use client";

import { motion } from "framer-motion";
import { Facebook, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-algeria-green/[0.03] to-transparent"
        aria-hidden
      />
      <div className="container">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="رأيك يهمّنا... وصوتك أمانة"
          description="تابع آخر مستجدّات الحملة وتواصل مباشرةً عبر الصفحة الرسمية على فيسبوك — بابنا مفتوح دائمًا لكل أبناء تيارت."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left: Facebook (primary channel) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="overflow-hidden rounded-3xl border border-base surface shadow-card"
          >
            <a
              href={site.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1877F2] p-5 text-white transition-opacity hover:opacity-95"
            >
              <Facebook size={32} className="shrink-0" />
              <div>
                <p className="text-base font-bold">الصفحة الرسمية على فيسبوك</p>
                <p className="text-sm text-white/80" dir="ltr">
                  /khalfallahbenseddik
                </p>
              </div>
            </a>
            <iframe
              title="صفحة فيسبوك الرسمية"
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                site.facebookPage
              )}&tabs=timeline&width=500&height=520&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`}
              width="100%"
              height={500}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              allow="encrypted-media"
              loading="lazy"
              className="w-full"
            />
          </motion.div>

          {/* Right: message + location + map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {/* Invitation card */}
            <div className="rounded-3xl border border-base surface p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-gradient text-white shadow-soft">
                <MessageCircle size={22} />
              </span>
              <h3 className="mt-4 text-xl font-bold">انضمّ إلى المسيرة</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                شاركنا اقتراحاتك وانشغالاتك، وكن جزءًا من حملة «معًا من أجل تيارت
                قوية وعادلة ومزدهرة». تابعنا وتفاعل معنا على الصفحة الرسمية لتصلك
                كل الأخبار والمواعيد أولًا بأول.
              </p>
              <a
                href={site.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 w-full"
              >
                <Facebook size={18} />
                تابعنا على فيسبوك
              </a>
            </div>

            {/* Location card */}
            <div className="flex items-center gap-4 rounded-3xl border border-base surface p-6 shadow-card">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-algeria-green/10 text-algeria-green dark:text-gold">
                <MapPin size={22} />
              </span>
              <div>
                <p className="text-xs text-muted">الموقع</p>
                <p className="text-base font-bold">{site.province}</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-3xl border border-base shadow-card">
              <iframe
                title="خريطة ولاية تيارت"
                src="https://www.google.com/maps?q=Tiaret,Algeria&z=11&output=embed"
                width="100%"
                height={260}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-[15%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
