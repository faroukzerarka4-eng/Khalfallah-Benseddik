"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, site, basePath } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Glass background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-base py-2 shadow-card"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 focus-ring rounded-2xl">
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gold/30">
            <Image
              src={`${basePath}/images/rnd-logo.png`}
              alt={site.party}
              width={44}
              height={44}
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-bold">{site.candidate}</span>
            <span className="text-xs text-muted">{site.role}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition-colors focus-ring ${
                  active === item.href
                    ? "text-algeria-green dark:text-gold"
                    : "text-muted hover:text-algeria-green dark:hover:text-gold"
                }`}
              >
                {item.label}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-algeria-green/10 dark:bg-gold/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn-gold hidden px-5 py-2.5 text-sm md:inline-flex">
            تواصل معنا
          </a>
          <button
            type="button"
            aria-label="القائمة"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-base surface text-algeria-green focus-ring dark:text-gold xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[64px] -z-10 bg-ink/40 backdrop-blur-sm xl:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="container mt-2 xl:hidden"
            >
              <ul className="glass flex flex-col gap-1 rounded-3xl border border-base p-3 shadow-card">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                        active === item.href
                          ? "bg-algeria-green/10 text-algeria-green dark:bg-gold/10 dark:text-gold"
                          : "hover:bg-algeria-green/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <li className="mt-1 p-1">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-gold w-full"
                  >
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
