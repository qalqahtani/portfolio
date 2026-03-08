"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";

const GRADIENTS = [
  "linear-gradient(to right, #3AAFAA, #52B878)",
  "linear-gradient(to right, #5497C8, #3AAFAA)",
  "linear-gradient(to right, #52B878, #5497C8)",
  "linear-gradient(to right, #C4A268, #3AAFAA)",
];

export default function Skills() {
  const { content } = useLanguage();
  const { skills } = content;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionHeader tag={skills.sectionTag} title={skills.sectionTitle} />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.categories.map((cat, i) => (
            <div
              key={i}
              className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Gradient top bar */}
              <div
                className="h-1 w-full"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              />

              <div className="p-6">
                <h3 className="text-text font-bold mb-4 text-base">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-mono bg-surface border border-border text-muted px-3 py-1.5 rounded-lg hover:border-teal hover:text-teal hover:bg-teal/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
