"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const images = [
  { src: 'https://placehold.co/600x400.png', alt: 'Website marketing example 1', hint: 'website screenshot' },
  { src: 'https://placehold.co/600x400.png', alt: 'Website marketing example 2', hint: 'landing page' },
  { src: 'https://placehold.co/600x400.png', alt: 'Website marketing example 3', hint: 'ecommerce website' },
  { src: 'https://placehold.co/600x400.png', alt: 'Website marketing example 4', hint: 'blog design' },
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
        <div className="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
             <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto"
                      data-ai-hint={image.hint}
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto rounded-lg"
                  />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
