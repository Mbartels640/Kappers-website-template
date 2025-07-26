import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function Services() {
  return (
    <section className="py-16 bg-warm-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Populaire Behandelingen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Knippen & Stylen",
            "Balayage & Kleuren",
            "Verzorging & Herstel",
          ].map((service) => (
            <Card
              key={service}
              className="bg-cream-white border-soft-taupe overflow-hidden"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-gray mb-2">
                  {service}
                </h3>
                <p className="text-charcoal-gray/80">
                  Ontdek de perfecte look die bij jou past, met deskundig advies
                  en zorg.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            variant="link"
            className="text-dutch-orange text-lg hover:no-underline"
          >
            <Link href="/behandelingen">Bekijk alle behandelingen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
