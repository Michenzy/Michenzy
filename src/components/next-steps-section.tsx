import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NextStepsSection() {
  return (
    <section id="next-steps" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Let's Build What's Next.</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           I am currently seeking my next challenge as a senior marketing leader within an ambitious organization. If you're looking for a partner who is obsessed with the bottom line and possesses the proven ability to build marketing functions that create lasting value, I believe we should talk.
          </p>
           <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           Let's connect and discuss how we can build your next success story.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
