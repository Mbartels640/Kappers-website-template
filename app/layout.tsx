import type React from "react";
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Hair by Bo | Kapsalon in Maastricht",
  description:
    "Ervaar premium, persoonlijke haarbehandelingen bij Hair by Bo. Jouw moment van luxe en aandacht in het hart van Maastricht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-cream-white font-sans text-charcoal-gray antialiased",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
