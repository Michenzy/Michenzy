"use client";

import * as React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const brands = [
  { name: 'L5 Lab', logo: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1428522818/ad5qrbc3mvme6sgcsi0h.png', dataAiHint: 'L5 Lab logo' },
  { name: 'Jobberman', logo: 'https://www.jobberman.com/static/images/ng/jobberman-logo-new.svg', dataAiHint: 'Jobberman logo' },
  { name: 'BabyBliss', logo: 'https://babybliss.com.ng/wp-content/uploads/2022/04/logo.png', dataAiHint: 'BabyBliss logo' },
  { name: 'Decagon', logo: 'https://media.licdn.com/dms/image/C4D0BAQG56QYpW8kUOA/company-logo_200_200/0/1663666578051/decagon_logo?e=2147483647&v=beta&t=k6hFj-2Y_G5d-Xn2mKz8Y-dK-aGjT2gQ7jR4wP2Q9iE', dataAiHint: 'Decagon logo' },
  { name: 'Pedisbox', logo: 'https://pedisbox.com/wp-content/uploads/2021/04/cropped-black-and-gold-luxury-initials-monogram-logo-1.png', dataAiHint: 'Pedisbox logo' },
  { name: 'Keexs', logo: 'https://cdn.shopify.com/s/files/1/1239/0568/files/KEEKS-LOGO-BLACK-SMALL_180x.png', dataAiHint: 'Keexs logo' },
];

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
            {brands.map((brand) => (
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
