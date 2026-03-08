"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

const DownloadIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export default function ResumeDownload() {
  const { content } = useLanguage();
  const { resume } = content;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="resume"
      ref={ref}
      className={`py-24 px-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Dark accent card */}
        <div className="relative bg-accent rounded-3xl p-10 md:p-14 text-center overflow-hidden">
          {/* Decorative orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -end-10 w-52 h-52 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #3AAFAA 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -start-10 w-40 h-40 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #C4A268 0%, transparent 70%)",
            }}
          />

          {/* Tag */}
          <span className="text-white/50 text-xs font-mono tracking-widest uppercase block mb-4">
            {resume.sectionTag}
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {resume.sectionTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
            {resume.subtitle}
          </p>

          {/* Button */}
          <a
            href={resume.filePath}
            download
            className="inline-flex items-center gap-3 bg-white text-accent hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <DownloadIcon />
            {resume.button}
          </a>
        </div>
      </div>
    </section>
  );
}
