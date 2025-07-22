import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import HomeBrandsSection from '@/components/home-brands-section';
import ExpertiseSection from '@/components/expertise-section';
import ToolsSection from '@/components/tools-section';
import ContactSection from '@/components/contact-section';
import TestimonialsSection from '@/components/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HomeBrandsSection />
        <ExpertiseSection />
        <ToolsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
