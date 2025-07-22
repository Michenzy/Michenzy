import Link from 'next/link';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full bg-muted border-t border-border/40">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Micheal Joseph. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:hello@michealj.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://www.linkedin.com/in/kayodej245" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
