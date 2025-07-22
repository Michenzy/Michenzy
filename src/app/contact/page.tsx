import Header from '@/components/header';
import ContactSection from '@/components/contact-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Micheal Joseph | Let's Collaborate",
  description: "Get in touch with Micheal Joseph to discuss marketing projects, collaborations, or career opportunities.",
   alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col">
        <ContactSection />
      </main>
    </div>
  );
}
