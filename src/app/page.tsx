import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import CaseStudiesSection from '@/components/case-studies-section';
import ExpertiseSection from '@/components/expertise-section';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CaseStudiesSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
