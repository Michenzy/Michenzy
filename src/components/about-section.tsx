import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">About Me</div>
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
    </section>
  );
}
