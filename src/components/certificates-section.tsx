import { certificates } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">
            Credentials
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            My Certifications
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of my professional certifications and qualifications.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certificates.map((cert) => (
            <Card key={cert.title} className="bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-md overflow-hidden border">
                  <iframe
                    src={cert.embedUrl}
                    className="w-full h-full"
                    allow="autoplay"
                    title={cert.title}
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
