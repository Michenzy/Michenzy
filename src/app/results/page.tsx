import Header from '@/components/header';
import CaseStudiesSection from '@/components/case-studies-section';
import BrandsSection from '@/components/brands-section';
import WebsiteMarketingSection from '@/components/website-marketing-section';
import SocialMediaPagesSection from '@/components/social-media-pages-section';
import AnalyticsSection from '@/components/analytics-section';

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
