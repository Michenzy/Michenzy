import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <Image
              src="/assets/me/micheal-joseph-headshot.jpg"
              alt="Micheal Joseph Portrait"
              width={450}
              height={450}
              className="rounded-lg object-cover aspect-square shadow-2xl ring-4 ring-primary/20"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-6 text-left">
            <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">My Story</div>
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                    My Marketing Career Began on a Balance Sheet.
                </h1>
            </div>
            <p className="text-foreground/80 md:text-lg/relaxed">
              Most marketing leaders don't start their journey with ledgers and financial statements. I did. And it has become my single greatest strategic advantage.
            </p>
            <p className="text-foreground/80 md:text-lg/relaxed">
              Before I ever wrote a line of ad copy or analyzed a campaign's click-through rate, I was trained in the language of business: profit and loss, assets and liabilities, and the unwavering importance of ROI. My degree in Accounting wasn't a detour; it was the foundation. It instilled in me a discipline and analytical rigor that views marketing not as an expense, but as the most powerful investment a company can make in its own growth.
            </p>
            <p className="text-foreground/80 md:text-lg/relaxed">
              Over the last seven years, I have embarked on a relentless journey from that analytical foundation to the forefront of marketing leadership. I’ve architected and led multi-faceted departments, managed six-figure budgets across international markets, and built high-performance teams from the ground up. This rapid progression was driven by a simple, powerful realization: Creative marketing captures attention, but data-driven marketing builds empires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
