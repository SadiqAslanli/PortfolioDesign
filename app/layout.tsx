import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Narinci | Professional Xidmətlər",
  description: "Müasir və innovativ həllər təqdim edirik.",
};

import dynamic from "next/dynamic";
const MouseFollower = dynamic(() => import("@/components/MouseFollower").then(mod => mod.MouseFollower), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ScrollToTop />
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}
