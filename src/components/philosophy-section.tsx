import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiggyBank, BarChart, Route } from 'lucide-react';

const philosophyPoints = [
  {
    icon: <PiggyBank className="w-10 h-10 text-primary" />,
    title: "Your Budget is an Investment Portfolio.",
    description: "I don't just 'spend' a budget; I manage it. Every dollar is allocated to channels and strategies with the highest potential for measurable return, constantly optimized to outperform benchmarks."
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Data Tells a Story.",
    description: "I look beyond vanity metrics to uncover the narrative hidden in the numbers. I use analytics not just to report on what happened, but to forecast what will happen next, turning insights into proactive, revenue-generating strategies."
  },
  {
    icon: <Route className="w-10 h-10 text-primary" />,
    title: "Strategy is the Bridge.",
    description: "I excel at translating high-level business objectives into actionable marketing plans. I speak the language of the C-suite, the sales floor, and the creative team, ensuring every marketing effort is perfectly aligned with the company's ultimate financial goals."
  }
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">My Philosophy: Marketing is a Profit Center</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My approach is built on a set of core, non-negotiable principles that bridge the gap between creative vision and financial reality.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {philosophyPoints.map((point) => (
            <Card key={point.title} className="bg-card hover:border-primary/50 transition-colors">
              <CardHeader className="items-center text-center">
                {point.icon}
                <CardTitle className="font-headline mt-4">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-foreground/80">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
