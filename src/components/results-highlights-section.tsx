import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, BadgePercent } from 'lucide-react';

const results = [
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    metric: "105%",
    description: "increase in organic audience growth by pivoting strategies based on deep engagement data."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    metric: "40%",
    description: "increase in qualified leads by re-engineering go-to-market strategies rooted in customer segmentation."
  },
  {
    icon: <BadgePercent className="w-10 h-10 text-primary" />,
    metric: "20%",
    description: "improvement in overall marketing ROI by 20% through meticulous budget optimization and channel analysis."
  }
];

export default function ResultsHighlightsSection() {
  return (
    <section id="results-highlights" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">The Result: Predictable, Powerful Growth</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            This philosophy isn't just theoretical. It is the framework that has allowed me to deliver concrete, quantifiable results for businesses in competitive global markets.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {results.map((result) => (
            <Card key={result.metric} className="bg-card hover:border-primary/50 transition-colors">
              <CardHeader className="items-center text-center">
                {result.icon}
                 <p className="font-headline text-5xl font-bold text-primary mt-4">{result.metric}</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-foreground/80">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <p className="text-foreground/80 md:text-xl/relaxed">I thrive on turning ambiguity into clarity, challenges into opportunities, and marketing departments into undeniable drivers of business success.</p>
        </div>
      </div>
    </section>
  );
}
