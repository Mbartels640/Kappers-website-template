"use client";

import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Showcase() {
  const images = [
    {
      src: "/zoe-applbaum-j0143fogXSg-unsplash.jpg",
      alt: "Voor: Vrouw met lang, dof haar",
      label: "Voor",
    },
    {
      src: "/zoe-applbaum-8bVA4EdA-wU-unsplash.jpg",
      alt: "Na: Vrouw met glanzend, gestyled haar",
      label: "Na",
    },
    {
      src: "/michael-demoya-J99pG-3RHwc-unsplash.jpg",
      alt: "Voor: Haar met vervaagde kleur",
      label: "Voor",
    },
    {
      src: "/michael-dagonakis-SPuo9KOWCJs-unsplash.jpg",
      alt: "Na: Haar met levendige balayage",
      label: "Na",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <section className="py-16 bg-cream-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-charcoal-gray">
          Voor & Na
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            breakpoints: {
              "(min-width: 768px)": {
                slidesToScroll: 2,
              },
            },
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 pl-4"
              >
                <div className="p-1">
                  <Card className="border-2 border-soft-taupe rounded-lg overflow-hidden bg-cream-white">
                    <CardContent className="relative aspect-square flex items-center justify-center p-0">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-dutch-orange text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        {image.label}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
