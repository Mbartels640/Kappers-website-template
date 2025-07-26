"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Testimonials() {
  const testimonialsData = [
    {
      quote:
        "Bo neemt echt de tijd voor je en luistert naar je wensen. Ik verliet de salon met het mooiste haar dat ik ooit heb gehad!",
      author: "Anna V.",
    },
    {
      quote:
        "Fantastische service en een prachtig resultaat. De balayage is precies zoals ik wilde. Ik kom zeker terug!",
      author: "Sophie L.",
    },
    {
      quote:
        "Een oase van rust in de stad. Bo is een ware professional en weet precies wat je haar nodig heeft. Een absolute aanrader.",
      author: "Eva de Groot",
    },
  ];

  return (
    <section className="py-16 bg-warm-beige">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-serif font-bold mb-8 text-charcoal-gray">
          Wat Klanten Zeggen
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
          opts={{
            loop: true,
            watchDrag: false,
          }}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="px-2">
                  <p className="text-xl italic text-charcoal-gray">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="mt-4 font-semibold text-heritage-gold">
                    - {testimonial.author}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="w-24 h-px bg-heritage-gold mx-auto my-8"></div>
        <Button
          asChild
          className="bg-dutch-orange text-white hover:bg-dutch-orange/90"
        >
          <Link href="/over">Leer Bo kennen</Link>
        </Button>
      </div>
    </section>
  );
}
