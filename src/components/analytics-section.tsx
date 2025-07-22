"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  { src: '/assets/about/analytics/IMG-20250722-WA0010.jpg', alt: 'Analytics graph', hint: 'analytics chart', className: 'md:col-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0011.jpg', alt: 'Analytics weekly performance', hint: 'analytics dashboard', className: 'md:col-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0027.jpg', alt: 'Mobile app analytics', hint: 'app analytics', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0015.jpg', alt: 'Analytics overview', hint: 'data chart', className: 'md:col-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0034.jpg', alt: 'Traffic source report', hint: 'analytics report', className: '' },
  { src: '/assets/about/analytics/IMG-20250722-WA0035.jpg', alt: 'Leads campaign report', hint: 'campaign report', className: '' },
  { src: '/assets/about/analytics/IMG-20250722-WA0036.jpg', alt: 'Keywords list', hint: 'seo keywords', className: '' },
  { src: '/assets/about/analytics/IMG-20250722-WA0037.jpg', alt: 'Financial report', hint: 'financial report', className: '' },
  { src: '/assets/about/analytics/IMG-20250722-WA0030.jpg', alt: 'Mobile UI dark mode', hint: 'mobile ui', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0032.jpg', alt: 'Mobile app feed', hint: 'app feed', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0039.jpg', alt: 'Traffic details', hint: 'analytics details', className: '' },
  { src: '/assets/about/analytics/IMG-20250722-WA0040.jpg', alt: 'User engagement stats', hint: 'user engagement', className: '' },
  { src: '/assets/about/analytics/IMG-20250722-WA0033.jpg', alt: 'Mobile campaign summary', hint: 'campaign summary', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0041.jpg', alt: 'Mobile app statistics', hint: 'app statistics', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0028.jpg', alt: 'Detailed financial statement', hint: 'financial statement', className: 'md:col-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0029.jpg', alt: 'Long-term performance chart', hint: 'performance chart', className: 'md:col-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0038.jpg', alt: 'Engagement details mobile', hint: 'mobile engagement', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0031.jpg', alt: 'User data dark mode', hint: 'user data', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0042.jpg', alt: 'Engagement details mobile', hint: 'mobile engagement', className: 'row-span-2' },
  { src: '/assets/about/analytics/IMG-20250722-WA0043.jpg', alt: 'User data dark mode', hint: 'user data', className: 'row-span-2' },
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
        <div className="mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 lg:gap-6">
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
