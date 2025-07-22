"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  { src: 'https://placehold.co/600x300.png', alt: 'Analytics graph', hint: 'analytics chart', className: 'col-span-2' },
  { src: 'https://placehold.co/600x300.png', alt: 'Analytics weekly performance', hint: 'analytics dashboard', className: 'col-span-2' },
  { src: 'https://placehold.co/300x400.png', alt: 'Mobile app analytics', hint: 'app analytics', className: 'row-span-2' },
  { src: 'https://placehold.co/600x300.png', alt: 'Analytics overview', hint: 'data chart', className: 'col-span-2' },
  { src: 'https://placehold.co/300x200.png', alt: 'Traffic source report', hint: 'analytics report', className: '' },
  { src: 'https://placehold.co/300x200.png', alt: 'Leads campaign report', hint: 'campaign report', className: '' },
  { src: 'https://placehold.co/300x200.png', alt: 'Keywords list', hint: 'seo keywords', className: '' },
  { src: 'https://placehold.co/300x200.png', alt: 'Financial report', hint: 'financial report', className: '' },
  { src: 'https://placehold.co/300x400.png', alt: 'Mobile UI dark mode', hint: 'mobile ui', className: 'row-span-2' },
  { src: 'https://placehold.co/300x400.png', alt: 'Mobile app feed', hint: 'app feed', className: 'row-span-2' },
  { src: 'https://placehold.co/300x200.png', alt: 'Traffic details', hint: 'analytics details', className: '' },
  { src: 'https://placehold.co/300x200.png', alt: 'User engagement stats', hint: 'user engagement', className: '' },
  { src: 'https://placehold.co/300x400.png', alt: 'Mobile campaign summary', hint: 'campaign summary', className: 'row-span-2' },
  { src: 'https://placehold.co/300x400.png', alt: 'Mobile app statistics', hint: 'app statistics', className: 'row-span-2' },
  { src: 'https://placehold.co/600x300.png', alt: 'Detailed financial statement', hint: 'financial statement', className: 'col-span-2' },
  { src: 'https://placehold.co/600x300.png', alt: 'Long-term performance chart', hint: 'performance chart', className: 'col-span-2' },
  { src: 'https://placehold.co/300x400.png', alt: 'Engagement details mobile', hint: 'mobile engagement', className: 'row-span-2' },
  { src: 'https://placehold.co/300x400.png', alt: 'User data dark mode', hint: 'user data', className: 'row-span-2' },
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
        <div className="mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 lg:gap-6">
          {images.map((image, index) => (
             <Card key={index} className={`overflow-hidden cursor-pointer ${image.className}`}>
                <CardContent className="p-0 h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
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
