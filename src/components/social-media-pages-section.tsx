import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  { src: 'https://placehold.co/400x600.png', alt: 'Social media page example 1', hint: 'instagram profile' },
  { src: 'https://placehold.co/400x600.png', alt: 'Social media page example 2', hint: 'facebook page' },
  { src: 'https://placehold.co/400x600.png', alt: 'Social media page example 3', hint: 'linkedin profile' },
  { src: 'https://placehold.co/400x600.png', alt: 'Social media page example 4', hint: 'twitter feed' },
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
        <div className="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={600}
                  className="object-cover w-full h-auto"
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
