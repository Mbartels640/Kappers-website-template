import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Leaf, Award } from "lucide-react";

export default function OverPage() {
  return (
    <section id="over" className="py-20 md:py-32 bg-cream-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Over Bo
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative p-4">
            <div className="absolute inset-0 bg-sage-green rounded-lg transform -rotate-3"></div>
            <Image
              src="/michael-dagonakis-SPuo9KOWCJs-unsplash.jpg"
              alt="Portret van Bo"
              width={400}
              height={500}
              className="rounded-lg w-full object-cover relative"
            />
          </div>
          <div className="bg-warm-beige p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Mijn Passie, Jouw Haar
            </h3>
            <p className="text-charcoal-gray/90 mb-6">
              Welkom! Ik ben Bo, en mijn passie is om jou te laten stralen. Met
              jarenlange ervaring en een liefde voor het kappersvak, heb ik Hair
              by Bo opgericht als een plek waar persoonlijke aandacht,
              vakmanschap en duurzaamheid samenkomen. Jouw moment van rust en
              luxe staat bij mij centraal.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Scissors className="w-6 h-6 text-slate-blue" />
                <p>
                  <span className="font-bold">Vakkundig:</span> Altijd op de
                  hoogte van de nieuwste technieken.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Sparkles className="w-6 h-6 text-slate-blue" />
                <p>
                  <span className="font-bold">Persoonlijk:</span> We creëren
                  samen een look die bij jou past.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Leaf className="w-6 h-6 text-slate-blue" />
                <p>
                  <span className="font-bold">Duurzaam:</span> Zorg voor jouw
                  haar en onze planeet.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t-2 border-heritage-gold pt-6">
              <h4 className="font-bold flex items-center gap-2">
                <Award className="text-heritage-gold" /> Gecertificeerd
                Kleurspecialist
              </h4>
            </div>
            <Button
              asChild
              className="mt-8 bg-transparent border border-dutch-orange text-dutch-orange hover:bg-dutch-orange hover:text-white"
            >
              <Link href="/contact">Maak kennis met Bo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
