import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const tools = [
  { name: 'Google Analytics', logo: 'https://cdn.svgporn.com/logos/google-analytics.svg', dataAiHint: 'google analytics logo' },
  { name: 'Google Search Console', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Search_Console.svg', dataAiHint: 'google search console logo' },
  { name: 'Google Drive', logo: 'https://cdn.svgporn.com/logos/google-drive.svg', dataAiHint: 'google drive logo' },
  { name: 'Meta', logo: 'https://cdn.svgporn.com/logos/meta.svg', dataAiHint: 'meta logo' },
  { name: 'Facebook', logo: 'https://cdn.svgporn.com/logos/facebook.svg', dataAiHint: 'facebook logo' },
  { name: 'Instagram', logo: 'https://cdn.svgporn.com/logos/instagram-icon.svg', dataAiHint: 'instagram logo' },
  { name: 'LinkedIn', logo: 'https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzsrca', dataAiHint: 'linkedin logo' },
  { name: 'X', logo: 'https://cdn.svgporn.com/logos/x.svg', dataAiHint: 'x twitter logo' },
  { name: 'Buffer', logo: 'https://cdn.svgporn.com/logos/buffer.svg', dataAiHint: 'buffer logo' },
  { name: 'Mailchimp', logo: 'https://cdn.svgporn.com/logos/mailchimp-freddie.svg', dataAiHint: 'mailchimp logo' },
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
        <div className="mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {tools.map((tool) => (
            <Card key={tool.name} className="bg-card hover:border-primary/50 transition-colors flex items-center justify-center p-6 h-32">
              <CardContent className="p-0 flex items-center justify-center">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain max-h-12 w-auto"
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
