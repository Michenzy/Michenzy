import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, User } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="w-full pt-16 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4 text-left">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
              Data-Driven Marketer &amp; Analyst
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I help businesses drive growth by turning data into actionable marketing strategies.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/results">
                  Explore My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/about">
                   About Me
                  <User className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/me/micheal-joseph-headshot.jpg"
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
