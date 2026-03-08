# Qubayl Alqahtani — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS v4, and TypeScript. Deployed as a static site on Cloudflare Pages at [qubayl.dev](https://qubayl.dev).

## Stack

- **Framework**: Next.js (App Router, static export)
- **Styling**: Tailwind CSS v4 — all tokens in `app/globals.css`, no `tailwind.config.js`
- **Language**: TypeScript
- **Fonts**: Cairo (Arabic/Latin) + Inter (English) via `next/font/google`
- **i18n**: Custom `LanguageContext` — Arabic default, English toggle, persisted in `localStorage`
- **Hosting**: Cloudflare Pages

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All bilingual content lives in:

- `config/content.en.ts` — English
- `config/content.ar.ts` — Arabic
- `config/content.interface.ts` — shared TypeScript interface

Edit these files to update text, experience, projects, or skills.

## Resume

The resume PDF served at `/Qubayl_Alqahtani_Resume.pdf` is generated from:

- `~/Documents/generate_resume_pdf.py` — PDF (ReportLab, EB Garamond)
- `~/Documents/generate_resume.py` — Word DOCX (python-docx, Garamond)

To update the resume:

1. Edit content in the generator scripts
2. Run `python3 ~/Documents/generate_resume_pdf.py`
3. Copy output to `public/`: `cp ~/Documents/Qubayl_Alqahtani_Resume_DRAFT.pdf public/Qubayl_Alqahtani_Resume.pdf`
4. Deploy (see below)

## Deployment

The site deploys to Cloudflare Pages via Wrangler.

### One-command deploy

```bash
npm run deploy
```

This runs `next build` then uploads the `out/` directory to Cloudflare Pages under the `qubaylhub` project.

### Manual steps

```bash
# 1. Build static output
npm run build

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name=qubaylhub --branch=main
```

### Prerequisites

- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) installed and authenticated (`npx wrangler login`)
- Cloudflare Pages project named `qubaylhub` already created
