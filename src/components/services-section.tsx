import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { AreaChart, Briefcase, Search, Target } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: 'SEO & Content Strategy',
    description: 'Drive organic traffic and improve search engine rankings with comprehensive keyword research, on-page optimization, and data-driven content marketing.',
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: 'PPC Campaign Management',
    description: 'Maximize your ROI with expertly managed pay-per-click campaigns on Google Ads, Meta, and LinkedIn, focusing on high-intent keywords and audiences.',
  },
  {
    icon: <AreaChart className="w-10 h-10 text-primary" />,
    title: 'Marketing Analytics & Reporting',
    description: 'Turn raw data into clear, actionable insights. I provide custom dashboards, performance reports, and in-depth analysis to guide strategic decisions.',
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'Conversion Rate Optimization (CRO)',
    description: 'Optimize your marketing funnels and landing pages through A/B testing, user behavior analysis, and data-backed improvements to increase conversions.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">
            Services
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            How I Can Help
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I offer a range of services designed to help your business grow by leveraging data at every step of the marketing process.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="bg-card hover:border-primary/50 transition-colors flex items-start p-6 gap-6">
              <div className="mt-1">{service.icon}</div>
              <div className="flex flex-col">
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
