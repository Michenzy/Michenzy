"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  { src: 'https://placehold.co/400x600.png', alt: 'Social media page example 1', hint: 'instagram profile', className: 'row-span-2' },
  { src: 'https://placehold.co/400x300.png', alt: 'Social media page example 2', hint: 'facebook page', className: '' },
  { src: 'https://placehold.co/400x300.png', alt: 'Social media page example 3', hint: 'linkedin profile', className: '' },
  { src: 'https://placehold.co/400x600.png', alt: 'Social media page example 4', hint: 'twitter feed', className: 'row-span-2' },
  { src: 'https://placehold.co/800x300.png', alt: 'Social media campaign', hint: 'social media campaign', className: 'col-span-2' },

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
