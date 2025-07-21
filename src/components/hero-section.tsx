import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            Data-Driven Marketer & Analyst
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
            Transforming raw data into actionable insights and building marketing strategies that deliver measurable ROI.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/results">
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4 text-left">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">About Me</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A Fusion of Analytics and Marketing
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I bridge the gap between data science and marketing execution. My career is built on a simple premise: every marketing decision should be backed by data, and every data point should tell a story that informs strategy.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With a passion for uncovering trends and a relentless focus on ROI, I help businesses not just to reach audiences, but to connect with them meaningfully and drive sustainable growth.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Micheal Joseph Portrait"
              width={450}
              height={450}
              className="rounded-full object-cover aspect-square shadow-2xl ring-4 ring-primary/20"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
