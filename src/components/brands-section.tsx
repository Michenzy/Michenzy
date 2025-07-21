import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const brands = [
  { name: 'Brand A', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
  { name: 'Brand B', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
  { name: 'Brand C', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
  { name: 'Brand D', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
  { name: 'Brand E', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
  { name: 'Brand F', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
  { name: 'Brand G', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
  { name: 'Brand H', logo: 'https://placehold.co/120x40.png', dataAiHint: 'brand logo' },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">
            Brands I've Worked With
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I've had the privilege of collaborating with a diverse range of companies, from startups to established enterprises.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center p-6 h-32">
                 <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
                  data-ai-hint={brand.dataAiHint}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
