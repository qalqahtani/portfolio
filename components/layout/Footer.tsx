"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Brand */}
          <div className="shrink-0">
            <p className="text-accent font-bold text-lg mb-1">
              {content.nav.logo}
            </p>
            <p className="text-subtle text-sm">{content.hero.title}</p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-accent text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact snapshot */}
          <div className="flex flex-col gap-1.5 text-sm">
            <a
              href={`mailto:${content.contact.email}`}
              className="text-muted hover:text-teal transition-colors duration-200 font-mono"
            >
              {content.contact.email}
            </a>
            {content.contact.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-teal transition-colors duration-200 font-mono"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
