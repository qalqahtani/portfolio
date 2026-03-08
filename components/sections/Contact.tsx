"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const { content } = useLanguage();
  const { contact } = content;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 px-6 bg-surface ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader
          tag={contact.sectionTag}
          title={contact.sectionTitle}
          centered
        />
        <p className="text-muted text-base md:text-lg mb-10 leading-relaxed">
          {contact.subtitle}
        </p>

        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="inline-block text-teal text-lg md:text-xl font-mono hover:text-teal-hover transition-colors duration-200 mb-2 border-b border-teal/40 hover:border-teal pb-0.5"
        >
          {contact.email}
        </a>

        {/* Phone — always LTR regardless of page direction */}
        <p className="mb-10">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            dir="ltr"
            className="text-subtle text-sm font-mono hover:text-muted transition-colors duration-200 inline-block"
          >
            {contact.phone}
          </a>
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4">
          {contact.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-border rounded-xl px-5 py-3 text-muted hover:border-teal hover:text-teal transition-all duration-200 group"
            >
              {link.name === "LinkedIn" && <LinkedInIcon />}
              <span className="text-sm font-mono">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
