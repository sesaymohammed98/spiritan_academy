import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spiritanacademy.org"),
  title: "Spiritan Academy · Catholic Demonstration School",
  description:
    "Spiritan Academy is a Catholic demonstration school offering excellent academics, faith formation, admissions guidance, and campus news.",
  openGraph: {
    title: "Spiritan Academy",
    description:
      "Grow in wisdom and faith at Spiritan Academy, a Catholic demonstration school.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritan Academy",
    description:
      "Academic excellence rooted in Spiritan tradition, from Grade 1 to Grade 12.",
  },
  icons: {
    icon: "/spiritan_logo.jpg",
    shortcut: "/spiritan_logo.jpg",
    apple: "/spiritan_logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
