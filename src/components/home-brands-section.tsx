"use client";

import * as React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { associatedBrands } from '@/lib/utils';

export default function HomeBrandsSection() {
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="home-brands" className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {associatedBrands.map((brand) => (
              <CarouselItem key={brand.name} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center p-6 h-24">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={140}
                    height={40}
                    className="object-contain max-h-10 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    data-ai-hint={brand.dataAiHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
