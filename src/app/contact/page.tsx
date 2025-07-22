import Header from '@/components/header';
import ContactSection from '@/components/contact-section';

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
