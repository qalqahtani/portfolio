import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qubayl Alqahtani — Expert Data Engineer",
  description:
    "Expert Data Engineer and Data Scientist with 7+ years of experience building data pipelines, ML systems, and production analytics platforms.",
  metadataBase: new URL("https://qubaylhub.com"),
  openGraph: {
    title: "Qubayl Alqahtani — Expert Data Engineer",
    description:
      "Expert Data Engineer and Data Scientist with 7+ years of experience building data pipelines, ML systems, and production analytics platforms.",
    url: "https://qubaylhub.com",
    siteName: "Qubayl Alqahtani",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang="ar" dir="rtl" are the server-default values.
    // LanguageContext useEffect will update these after hydration.
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${inter.variable}`}
    >
      <body className="bg-bg text-text antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
