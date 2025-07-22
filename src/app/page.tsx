import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import HomeBrandsSection from '@/components/home-brands-section';
import ExpertiseSection from '@/components/expertise-section';
import ToolsSection from '@/components/tools-section';
import TestimonialsSection from '@/components/testimonials-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Micheal Joseph | Data-Driven Marketer & Analyst',
  description: 'Micheal Joseph is a data-driven marketing professional specializing in turning analytics into actionable growth strategies. Explore my work and results.',
   alternates: {
    canonical: '/',
  },
};

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
      </main>
    </div>
  );
}
