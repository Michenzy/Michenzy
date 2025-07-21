import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ExpertiseSection from '@/components/expertise-section';
import ToolsSection from '@/components/tools-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ToolsSection />
        <ContactSection />
      </main>
    </div>
  );
}
