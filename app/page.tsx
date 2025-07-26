"use client";
import React from "react";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Showcase } from "@/components/home/showcase";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Showcase />
      <Testimonials />
    </>
  );
}
