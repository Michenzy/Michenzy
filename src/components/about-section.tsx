import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="flex justify-center">
            <Image
              src="/assets/me/micheal-joseph-headshot.jpg"
              alt="Micheal Joseph Portrait"
              width={450}
              height={450}
              className="rounded-lg object-cover aspect-square shadow-2xl ring-4 ring-primary/20"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="space-y-6 text-left">
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

            <div className="space-y-4 pt-6">
                 <h2 className="font-headline text-2xl font-bold tracking-tighter text-primary">My Philosophy: Marketing is a Profit Center</h2>
                 <p className="text-foreground/80 md:text-lg/relaxed">My approach is built on a set of core, non-negotiable principles that bridge the gap between creative vision and financial reality.</p>
                 <ul className="space-y-4 text-foreground/80 list-disc pl-6">
                    <li><span className="font-bold">Your Budget is an Investment Portfolio.</span> I don't just "spend" a budget; I manage it. Every dollar is allocated to channels and strategies with the highest potential for measurable return, constantly optimized to outperform benchmarks.</li>
                    <li><span className="font-bold">Data Tells a Story.</span> I look beyond vanity metrics to uncover the narrative hidden in the numbers. I use analytics not just to report on what happened, but to forecast what will happen next, turning insights into proactive, revenue-generating strategies.</li>
                    <li><span className="font-bold">Strategy is the Bridge.</span> I excel at translating high-level business objectives into actionable marketing plans. I speak the language of the C-suite, the sales floor, and the creative team, ensuring every marketing effort is perfectly aligned with the company's ultimate financial goals.</li>
                 </ul>
            </div>

             <div className="space-y-4 pt-6">
                 <h2 className="font-headline text-2xl font-bold tracking-tighter text-primary">The Result: Predictable, Powerful Growth</h2>
                 <p className="text-foreground/80 md:text-lg/relaxed">This philosophy isn't just theoretical. It is the framework that has allowed me to deliver concrete, quantifiable results for businesses in competitive global markets. It’s how I’ve been able to:</p>
                 <ul className="space-y-2 text-foreground/80 list-disc pl-6">
                    <li>Achieve a 105% increase in organic audience growth by pivoting strategies based on deep engagement data.</li>
                    <li>Drive a 40% increase in qualified leads by re-engineering go-to-market strategies rooted in customer segmentation.</li>
                    <li>Improve overall marketing ROI by 20% through meticulous budget optimization and channel analysis.</li>
                 </ul>
                 <p className="text-foreground/80 md:text-lg/relaxed">I thrive on turning ambiguity into clarity, challenges into opportunities, and marketing departments into undeniable drivers of business success.</p>
            </div>
            
            <div className="space-y-4 pt-6">
                 <h2 className="font-headline text-2xl font-bold tracking-tighter text-primary">Let's Build What's Next.</h2>
                 <p className="text-foreground/80 md:text-lg/relaxed">I am currently seeking my next challenge as a senior marketing leader within an ambitious organization. If you're looking for a partner who is obsessed with the bottom line and possesses the proven ability to build marketing functions that create lasting value, I believe we should talk.</p>
                 <p className="text-foreground/80 md:text-lg/relaxed">Let's connect and discuss how we can build your next success story.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
