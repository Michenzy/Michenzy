import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">Get in Touch</div>
        <h2 className="mt-4 font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Let's Build Something Great</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-foreground/80 md:text-xl/relaxed">
          Have a project in mind or just want to connect? I'm always open to discussing new opportunities and collaborations.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="default">
            <a href="mailto:micheal.joseph@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="https://www.linkedin.com/in/micheal-joseph-placeholder" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
