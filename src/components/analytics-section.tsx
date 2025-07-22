"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  { src: 'https://placehold.co/800x400.png', alt: 'Analytics dashboard 1', hint: 'analytics dashboard', className: 'col-span-2' },
  { src: 'https://placehold.co/400x400.png', alt: 'Analytics dashboard 2', hint: 'data visualization', className: '' },
  { src: 'https://placehold.co/400x400.png', alt: 'Analytics dashboard 3', hint: 'data chart', className: '' },
];

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">
            Showcase
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Analytics & Reporting
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Visualizing data to tell a story and drive strategic decisions.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
             <Card key={index} className={`overflow-hidden cursor-pointer ${image.className}`}>
                <CardContent className="p-0 h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={400}
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
