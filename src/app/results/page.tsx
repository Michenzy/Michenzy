import Header from '@/components/header';
import CaseStudiesSection from '@/components/case-studies-section';
import BrandsSection from '@/components/brands-section';
import ContactSection from '@/components/contact-section';

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <CaseStudiesSection />
        <BrandsSection />
        <ContactSection />
      </main>
    </div>
  );
}
