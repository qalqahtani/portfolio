"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const { content } = useLanguage();
  const { about } = content;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-6 ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader tag={about.sectionTag} title={about.sectionTitle} />
        <div className="space-y-6 max-w-3xl">
          {about.paragraphs.map((p, i) =>
            i === 0 ? (
              <p
                key={i}
                className="text-text text-lg md:text-xl leading-relaxed font-medium border-s-4 border-teal ps-5"
              >
                {p}
              </p>
            ) : (
              <p key={i} className="text-muted text-base md:text-lg leading-relaxed">
                {p}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
