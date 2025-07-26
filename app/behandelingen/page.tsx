import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function BehandelingenPage() {
  return (
    <section id="behandelingen" className="py-20 md:py-32 bg-warm-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Behandelingen
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl mx-auto"
        >
          <AccordionItem value="item-1" className="border-soft-taupe">
            <AccordionTrigger className="text-xl font-semibold hover:no-underline p-6">
              Knippen & Styling
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-cream-white rounded-b-lg">
              <p className="mb-4">
                Een perfecte coupe begint hier. Inclusief wassen, verzorging en
                styling.
              </p>
              <p className="font-semibold">Vanaf € 45,- | Duur: 60 min</p>
              <Button
                asChild
                size="sm"
                className="mt-4 bg-dutch-orange text-white hover:bg-dutch-orange/90"
              >
                <Link href="/contact#afspraak">Boek nu</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-soft-taupe">
            <AccordionTrigger className="text-xl font-semibold hover:no-underline p-6">
              Kleurbehandelingen
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-cream-white rounded-b-lg">
              <p className="mb-4">
                Van subtiele highlights tot een volledige balayage. We gebruiken
                alleen de beste producten voor een levendig en langdurig
                resultaat.
              </p>
              <p className="font-semibold">Vanaf € 85,- | Duur: 120-180 min</p>
              <Button
                asChild
                size="sm"
                className="mt-4 bg-dutch-orange text-white hover:bg-dutch-orange/90"
              >
                <Link href="/contact#afspraak">Boek nu</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-soft-taupe">
            <AccordionTrigger className="text-xl font-semibold hover:no-underline p-6">
              Verzorging & Herstel
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-cream-white rounded-b-lg">
              <p className="mb-4">
                Geef je haar een boost met onze intensieve spa-behandelingen,
                zoals Olaplex hersteltherapie.
              </p>
              <p className="font-semibold">Vanaf € 35,- | Duur: 30 min</p>
              <Button
                asChild
                size="sm"
                className="mt-4 bg-dutch-orange text-white hover:bg-dutch-orange/90"
              >
                <Link href="/contact#afspraak">Boek nu</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
