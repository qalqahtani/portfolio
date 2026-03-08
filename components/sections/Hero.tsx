"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { content } = useLanguage();
  const { hero, resume } = content;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 pt-16">

      {/* ── Orb decorations ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-32 top-1/3 w-[480px] h-[480px] rounded-full blur-3xl opacity-15"
        style={{
          background:
            "radial-gradient(circle at 38% 38%, #52B878 0%, #3AAFAA 38%, #5497C8 68%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-16 bottom-24 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, #C4A268 0%, #52B878 60%, transparent 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column — below image on mobile, left on desktop */}
          <div className="order-2 lg:order-1">
            <p
              className="text-teal font-mono text-base md:text-lg mb-3 animate-fade-in opacity-0"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              {hero.greeting}
            </p>

            <h1
              className="text-5xl md:text-6xl font-bold text-accent mb-4 leading-tight animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              {hero.name}
            </h1>

            <h2
              className="text-lg md:text-xl font-semibold text-muted mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {hero.title}
            </h2>

            <p
              className="text-muted text-base md:text-lg max-w-lg mb-10 leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              {hero.subtitle}
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-hover text-white px-7 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href={resume.filePath}
                download
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-7 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Image column — above text on mobile, right on desktop */}
          <div
            className="order-1 lg:order-2 flex justify-center animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Outer pulsing ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-teal/40 animate-pulse-ring" />
              {/* Second static ring */}
              <div className="absolute -inset-9 rounded-full border border-accent/15" />
              {/* Glow behind image */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-full blur-2xl opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, #3AAFAA 0%, #52B878 60%, transparent 100%)",
                }}
              />
              {/* Profile photo */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Qubayl Alqahtani"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex justify-center animate-fade-in opacity-0"
          style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-subtle hover:text-teal transition-colors duration-200"
            aria-label="Scroll down"
          >
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
