import Header from '@/components/header';
import CaseStudiesSection from '@/components/case-studies-section';
import BrandsSection from '@/components/brands-section';
import WebsiteMarketingSection from '@/components/website-marketing-section';
import SocialMediaPagesSection from '@/components/social-media-pages-section';
import AnalyticsSection from '@/components/analytics-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Results & Case Studies',
  description: "View case studies, marketing campaigns, and analytics dashboards demonstrating Micheal Joseph's impact on business growth.",
   alternates: {
    canonical: '/results',
  },
};


export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <CaseStudiesSection />
        <WebsiteMarketingSection />
        <SocialMediaPagesSection />
        <AnalyticsSection />
        <BrandsSection />
      </main>
    </div>
  );
}
