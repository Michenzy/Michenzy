"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  { src: '/assets/about/websites/sole-fitness-ng.jpg', alt: 'Sole Fitness NG Website', hint: 'Sole Fitness NG website screenshot', className: 'md:col-span-3' },
  { src: '/assets/about/websites/cne-tv-playstore.jpg', alt: 'CNETV Playstore Ranking', hint: 'CNETV Playstore Ranking screenshot', className: 'md:row-span-2' },
  { src: '/assets/about/websites/cne-tv.jpg', alt: 'CNETV Website', hint: 'CNETV Website Screenshot', className: 'md:col-span-2' },
  { src: '/assets/about/websites/aforjarik-hr-partners.jpg', alt: 'Aforjarik HR Partners Website', hint: 'Aforjarik HR Partners Website Screenshot', className: 'md:col-span-2' },
];

export default function WebsiteMarketingSection() {
  return (
    <section id="website-marketing" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">
            Showcase
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Apps & Website Marketing
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A glimpse into websites I've helped build and grow, focusing on user experience and conversion.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 auto-rows-fr gap-4 lg:gap-6">
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
