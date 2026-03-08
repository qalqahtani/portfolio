"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  const { content } = useLanguage();
  const { experience } = content;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag={experience.sectionTag}
          title={experience.sectionTitle}
        />

        <div className="space-y-5">
          {experience.items.map((item, i) => (
            <div
              key={i}
              className={`group bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-text font-bold text-lg leading-tight">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-0.5 rounded-full">
                      {item.company}
                    </span>
                    {item.type && (
                      <span className="inline-block bg-teal/10 text-teal border border-teal/30 text-xs px-2.5 py-0.5 rounded-full">
                        {item.type}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-end shrink-0">
                  <p className="text-subtle text-sm font-mono">{item.period}</p>
                  <p className="text-subtle text-xs mt-0.5">{item.location}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-4 group-hover:bg-teal/20 transition-colors duration-300" />

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {item.description.map((desc, j) => (
                  <li key={j} className="text-muted text-sm flex gap-3">
                    <span className="text-teal mt-1 shrink-0 text-xs">▸</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-surface border border-border text-subtle px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
