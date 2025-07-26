import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] bg-cream-white overflow-hidden">
      <div className="container mx-auto h-full flex items-center px-4 md:px-6">
        <div className="grid lg:grid-cols-2 items-center h-full">
          <div className="z-10 lg:pr-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-charcoal-gray leading-tight">
              Jouw haar
              <br />
              Jouw moment
            </h1>
            <p className="mt-4 max-w-md text-lg text-charcoal-gray/80">
              Ervaar premium, persoonlijke haarbehandelingen in het hart van
              Maastricht.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-dutch-orange text-white hover:bg-dutch-orange/90 shadow-lg"
            >
              <Link href="/contact">Maak een Afspraak</Link>
            </Button>
          </div>
          <div
            className="absolute top-0 right-0 h-full w-3/5 lg:w-1/2 z-0 hidden lg:block"
            style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full h-full"
              opts={{ loop: true }}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="relative w-full h-full">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src="/adam-winger-ZsUbK9zSgMo-unsplash.jpg"
                          alt="Interieur van de kapsalon"
                          fill
                          className="object-cover"
                          priority
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full h-full">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src="/giorgio-trovato-wSpkThmoZQc-unsplash.jpg"
                          alt="Styling station in de salon"
                          fill
                          className="object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
