import { Target, Megaphone, PenTool } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const expertiseAreas = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Marketing Strategy',
    skills: ['Funnel Optimization', 'Customer Journey Mapping', 'Competitive Analysis', 'Budget Allocation', 'Performance Marketing'],
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Digital Advertising',
    skills: ['Google Ads', 'Facebook/Instagram Ads', 'LinkedIn Ads', 'PPC Campaign Management', 'Retargeting'],
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: 'Content & SEO',
    skills: ['SEO Strategy', 'Keyword Research', 'Content Marketing', 'On-Page & Off-Page SEO', 'Copywriting'],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">Expertise</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Skillset</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A comprehensive toolkit for driving growth through data-informed marketing.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {expertiseAreas.map((area) => (
            <Card key={area.title} className="bg-card hover:border-primary/50 transition-colors">
              <CardHeader className="items-center">
                {area.icon}
                <CardTitle className="font-headline text-center mt-4">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-center text-foreground/80">
                  {area.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}