"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { site, basePath } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const values = [
  "تمثيل أمين وصادق لمواطني ولاية تيارت داخل البرلمان",
  "الدفاع عن المشاريع الاستراتيجية ومتابعة تنفيذها",
  "العمل على تحديث التشريعات بما يخدم التنمية والاستثمار",
  "القرب الدائم من المواطن والإنصات لانشغالاته",
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container">
        <SectionHeading
          eyebrow="عن المترشح"
          title="رجلٌ من تيارت... في خدمة تيارت"
          description="ملتزم بأن يكون صوت المواطنين تحت قبة البرلمان، يدافع عن مصالحهم ويرافع عن مشاريع ولايتهم الكبرى."
        />

        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Portrait */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold-gradient opacity-30 blur-lg" />
              <div className="overflow-hidden rounded-[1.75rem] border border-base surface shadow-card-hover">
                <Image
                  src={`${basePath}/images/candidate-profile.png`}
                  alt={site.candidate}
                  width={560}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* Floating party card */}
              <div className="glass absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-base px-4 py-3 shadow-card">
                <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white">
                  <Image
                    src={`${basePath}/images/rnd-logo.png`}
                    alt={site.party}
                    width={42}
                    height={42}
                    className="object-contain p-0.5"
                  />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold">{site.partyShort}</p>
                  <p className="text-xs text-muted">{site.party}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-7">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-lg leading-loose text-muted"
            >
              المترشح <strong className="text-algeria-green dark:text-gold">{site.candidate}</strong>{" "}
              ابنٌ بارٌّ لولاية تيارت، حمل همومها وعرف تطلعات أبنائها عن قرب.
              يتقدّم اليوم ضمن قوائم <strong>{site.party}</strong> لخوض غمار
              الانتخابات التشريعية، مدفوعًا بقناعة راسخة بأن تيارت تستحق مكانة
              تليق بتاريخها العريق وإمكاناتها الكبيرة.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-5 text-lg leading-loose text-muted"
            >
              يضع نُصب عينيه مهمة واضحة: أن يكون نائبًا فاعلًا يدافع عن المشاريع
              التنموية الكبرى، ويتابع تجسيدها مع السلطات المختصة، ويعمل على تحديث
              المنظومة التشريعية بما يحرّر المبادرة ويجلب الاستثمار ويوفّر مناصب
              الشغل لأبناء الولاية.
            </motion.p>

            {/* Values */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {values.map((v) => (
                <motion.li
                  key={v}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-2xl border border-base surface px-4 py-3.5 shadow-card"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-algeria-green dark:text-gold"
                  />
                  <span className="text-sm font-semibold leading-relaxed">{v}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative mt-8 rounded-2xl border-r-4 border-gold bg-gold/5 p-6"
            >
              <Quote className="absolute left-5 top-5 text-gold/30" size={36} />
              <p className="text-lg font-semibold leading-relaxed">
                «تيارت ليست هامشًا... بل قلبٌ نابض في خارطة الجزائر، وأنا هنا
                لأوصِل صوتها حيث تُصنع القرارات.»
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
