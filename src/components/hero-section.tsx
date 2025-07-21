import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-accent/10 z-0"></div>
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary">
          Data-Driven Marketer & Analyst
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          Transforming raw data into actionable insights and building marketing strategies that deliver measurable ROI.
        </p>
        <div className="mt-10 flex gap-4">
          <Button asChild size="lg">
            <Link href="#case-studies">
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
