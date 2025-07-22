"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  { src: '/assets/about/socials/cnetv-ig.jpg', alt: 'CNETV Instagram', hint: 'CNETV Instagram profile', className: 'row-span-2' },
  { src: '/assets/about/socials/cnetv-fb.jpg', alt: 'CNETV Facebook', hint: 'CNETV Facebook Profile', className: 'row-span-2' },
  { src: '/assets/about/socials/cnetv-li.jpg', alt: 'CNETV LinkedIn', hint: 'CNETV LinkedIn profile', className: 'row-span-2' },
  { src: '/assets/about/socials/afor-ig.jpg', alt: 'Afor Instagram', hint: 'Afor Instagram Profile', className: 'row-span-2' },
  { src: '/assets/about/socials/shippack-ig.jpg', alt: 'ShipPack Instagram', hint: 'ShipPack Instagram profile', className: 'row-span-2' },
  { src: '/assets/about/socials/sfn-ig.jpg', alt: 'Sole Fitness Nigeria Instagram', hint: 'Sole Fitness Nigeria Instagram Profile', className: 'row-span-2' },
  { src: '/assets/about/socials/sfn-fb.jpg', alt: 'Sole Fitness Nigeria Facebook', hint: 'Sole Fitness Nigeria Facebook profile', className: 'row-span-2' },
  { src: '/assets/about/socials/ropay-li.jpg', alt: 'roPay LinkedIn Profile', hint: 'roPay LinkedIn Profile', className: 'row-span-2' },
];

export default function SocialMediaPagesSection() {
  return (
    <section id="social-media" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">
            Showcase
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Social Media Pages
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Examples of social media presence I have cultivated, focusing on engagement and brand consistency.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
             <Card key={index} className={`overflow-hidden cursor-pointer ${image.className}`}>
                <CardContent className="p-0 h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    data-ai-hint={image.hint}
                  />
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
