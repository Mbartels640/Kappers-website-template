"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/over", label: "Over Bo" },
    { href: "/behandelingen", label: "Behandelingen" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-cream-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/hair by bo.jpg"
            alt="Hair by Bo Logo"
            width={56}
            height={56}
            className="rounded-full"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-heritage-gold"
                  : "hover:text-heritage-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-dutch-orange text-white hover:bg-dutch-orange/90"
          >
            <Link href="/contact#afspraak">Maak een Afspraak</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent border-slate-blue"
            >
              <Menu className="h-6 w-6 text-slate-blue" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-blue text-cream-white">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold hover:text-heritage-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-dutch-orange text-white hover:bg-dutch-orange/90 mt-4"
              >
                <Link href="/contact#afspraak">Maak een Afspraak</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
