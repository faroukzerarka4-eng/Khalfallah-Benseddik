"use client";

import Image from "next/image";
import { Facebook, MapPin, ArrowUp } from "lucide-react";
import { navItems, site, basePath } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden />
      <div className="tricolor-bar h-1.5 w-full" aria-hidden />

      <div className="container relative py-16">
        {/* Footer slogan band */}
        <div className="mb-14 text-center">
          <p className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl lg:text-4xl">
            {site.footerSlogan}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white">
                <Image
                  src={`${basePath}/images/rnd-logo.png`}
                  alt={site.party}
                  width={52}
                  height={52}
                  className="object-contain p-1"
                />
              </span>
              <div className="leading-tight">
                <p className="text-lg font-bold">{site.candidate}</p>
                <p className="text-sm text-white/60">{site.role}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {site.slogan}
            </p>
            <p className="mt-3 text-sm font-semibold text-gold-light">
              {site.party} — {site.partySlogan}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-base font-bold text-gold-light">روابط سريعة</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-bold text-gold-light">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{site.province}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Facebook size={18} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={site.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  الصفحة الرسمية على فيسبوك
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-base font-bold text-gold-light">تابعونا</h3>
            <a
              href={site.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold transition-colors hover:border-gold hover:bg-white/10"
            >
              <Facebook size={20} className="text-gold" />
              الصفحة الرسمية على فيسبوك
            </a>
            <a
              href="#home"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              <ArrowUp size={16} />
              العودة للأعلى
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-white/50 sm:flex-row sm:text-start">
          <p>
            © {new Date().getFullYear()} {site.candidate}. جميع الحقوق محفوظة.
          </p>
          <p>الموقع الرسمي للحملة الانتخابية — {site.province}</p>
        </div>
      </div>
    </footer>
  );
}
