"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/assets/about/analytics/IMG-20250722-WA0010.jpg', alt: 'Analytics graph', hint: 'analytics chart' },
  { src: '/assets/about/analytics/IMG-20250722-WA0011.jpg', alt: 'Analytics weekly performance', hint: 'analytics dashboard' },
  { src: '/assets/about/analytics/IMG-20250722-WA0027.jpg', alt: 'Mobile app analytics', hint: 'app analytics' },
  { src: '/assets/about/analytics/IMG-20250722-WA0015.jpg', alt: 'Analytics overview', hint: 'data chart' },
  { src: '/assets/about/analytics/IMG-20250722-WA0034.jpg', alt: 'Traffic source report', hint: 'analytics report' },
  { src: '/assets/about/analytics/IMG-20250722-WA0035.jpg', alt: 'Leads campaign report', hint: 'campaign report' },
  { src: '/assets/about/analytics/IMG-20250722-WA0036.jpg', alt: 'Keywords list', hint: 'seo keywords' },
  { src: '/assets/about/analytics/IMG-20250722-WA0037.jpg', alt: 'Financial report', hint: 'financial report' },
  { src: '/assets/about/analytics/IMG-20250722-WA0030.jpg', alt: 'Mobile UI dark mode', hint: 'mobile ui' },
  { src: '/assets/about/analytics/IMG-20250722-WA0032.jpg', alt: 'Mobile app feed', hint: 'app feed' },
  { src: '/assets/about/analytics/IMG-20250722-WA0039.jpg', alt: 'Traffic details', hint: 'analytics details' },
  { src: '/assets/about/analytics/IMG-20250722-WA0040.jpg', alt: 'User engagement stats', hint: 'user engagement' },
  { src: '/assets/about/analytics/IMG-20250722-WA0033.jpg', alt: 'Mobile campaign summary', hint: 'campaign summary' },
  { src: '/assets/about/analytics/IMG-20250722-WA0041.jpg', alt: 'Mobile app statistics', hint: 'app statistics' },
  { src: '/assets/about/analytics/IMG-20250722-WA0028.jpg', alt: 'Detailed financial statement', hint: 'financial statement' },
  { src: '/assets/about/analytics/IMG-20250722-WA0029.jpg', alt: 'Long-term performance chart', hint: 'performance chart' },
  { src: '/assets/about/analytics/IMG-20250722-WA0038.jpg', alt: 'Engagement details mobile', hint: 'mobile engagement' },
  { src: '/assets/about/analytics/IMG-20250722-WA0031.jpg', alt: 'User data dark mode', hint: 'user data' },
  { src: '/assets/about/analytics/IMG-20250722-WA0042.jpg', alt: 'Engagement details mobile', hint: 'mobile engagement' },
  { src: '/assets/about/analytics/IMG-20250722-WA0043.jpg', alt: 'User data dark mode', hint: 'user data' },
];

export default function AnalyticsSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <section id="analytics" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">
            Showcase
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Analytics &amp; Reporting
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Visualizing data to tell a story and drive strategic decisions.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)} className="cursor-pointer">
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full aspect-[3/2]"
                    data-ai-hint={image.hint}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && handleClose()}>
          <DialogContent className="max-w-4xl p-0">
            <DialogTitle className="sr-only">Enlarged Image View</DialogTitle>
             <div className="relative">
              <div className="aspect-[3/2]">
                <Image
                  src={selectedImage.src}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
               <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/20 hover:bg-black/50 text-white"
                onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/20 hover:bg-black/50 text-white"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
