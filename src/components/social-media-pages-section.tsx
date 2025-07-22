"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';


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
        <div className="mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)} className={`cursor-pointer ${image.className || ''}`}>
              <Card className="overflow-hidden h-full">
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
            </div>
          ))}
        </div>
      </div>
       {selectedImage && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && handleClose()}>
          <DialogContent className="max-w-4xl p-0">
            <DialogTitle className="sr-only">Enlarged Image View</DialogTitle>
             <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full rounded-lg"
                />
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
