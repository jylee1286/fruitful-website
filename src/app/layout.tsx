import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fruitful — Screen Time That Kids Actually Want to Follow",
  description:
    "Fruitful is an iOS screen time app that turns healthy digital habits into a game. Kids earn coins, collect characters, and trade with friends — all while staying under their screen time limits.",
  keywords: ["screen time", "parental controls", "kids", "iOS", "family", "screen time management"],
  openGraph: {
    title: "Fruitful — Screen Time That Kids Actually Want to Follow",
    description:
      "Turn screen time battles into a game. Kids earn coins for staying under limits, collect 48 characters, and trade with friends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased bg-[#0A0A0A] text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
