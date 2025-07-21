import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const tools = [
  { name: 'Google Analytics', logo: 'https://placehold.co/150x50.png', dataAiHint: 'google analytics logo' },
  { name: 'Tableau', logo: 'https://placehold.co/150x50.png', dataAiHint: 'tableau logo' },
  { name: 'Google Ads', logo: 'https://placehold.co/150x50.png', dataAiHint: 'google ads logo' },
  { name: 'Meta Ads', logo: 'https://placehold.co/150x50.png', dataAiHint: 'meta logo' },
  { name: 'SQL', logo: 'https://placehold.co/150x50.png', dataAiHint: 'sql database' },
  { name: 'Python', logo: 'https://placehold.co/150x50.png', dataAiHint: 'python logo' },
  { name: 'HubSpot', logo: 'https://placehold.co/150x50.png', dataAiHint: 'hubspot logo' },
  { name: 'Salesforce', logo: 'https://placehold.co/150x50.png', dataAiHint: 'salesforce logo' },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">
            Tools
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            My Go-To Technologies
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I leverage industry-leading tools to extract insights, automate campaigns, and deliver exceptional results.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Card key={tool.name} className="bg-card hover:border-primary/50 transition-colors flex items-center justify-center p-6">
              <CardContent className="p-0">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={150}
                  height={50}
                  className="object-contain"
                  data-ai-hint={tool.dataAiHint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
