"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  const { content, language } = useLanguage();
  const { projects } = content;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag={projects.sectionTag} title={projects.sectionTitle} />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.items.map((project, i) => (
            <article
              key={i}
              className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Gradient accent bar — unique per card */}
              <div
                className="h-1 w-full"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Number + title */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold font-mono leading-none mt-0.5 shrink-0 transition-colors duration-300"
                    style={{ color: "#D2E8DA" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-text font-bold text-xl leading-snug">
                      {language === "ar" && project.arabicTitle
                        ? project.arabicTitle
                        : project.title}
                    </h3>
                    {language === "ar" && project.arabicTitle && (
                      <p className="text-subtle text-xs font-mono mt-1">
                        {project.title}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-surface border border-border text-subtle px-2.5 py-1 rounded-md group-hover:border-teal/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const GRADIENTS = [
  "linear-gradient(to right, #3AAFAA, #52B878)",
  "linear-gradient(to right, #5497C8, #3AAFAA)",
  "linear-gradient(to right, #52B878, #5497C8)",
  "linear-gradient(to right, #C4A268, #52B878)",
];
