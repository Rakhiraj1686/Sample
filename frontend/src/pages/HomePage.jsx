import React from 'react';
import Hero from '../components/sections/Hero';
import BrandStrip from '../components/sections/BrandStrip';
import TrustBar from '../components/sections/TrustBar';
import CategorySection from '../components/sections/CategorySection';
import FeaturedDeals from '../components/sections/FeaturedDeals';
import SpecialDealBanner from '../components/sections/SpecialDealBanner';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import LocationSection from '../components/sections/LocationSection';
import FAQSection from '../components/sections/FAQSection';
import Testimonials from '../components/sections/Testimonials';
import ContactSection from '../components/sections/ContactSection';
import FloatingWhatsApp from '../components/sections/FloatingWhatsApp';
import { useStore } from '../context/StoreContext';

export default function HomePage() {
  const { openEnquiryModal } = useStore();

  return (
    <main className="bg-paper-100 text-ink-900 selection:bg-deal-orange selection:text-white">
      {/* 1. Balanced Two-Column Hero with Stat Counters (Height ~620px, H1 54px) */}
      <Hero onOpenEnquiry={() => openEnquiryModal({ name: 'General In-Store Enquiry' })} />

      {/* 2. Top Brands Marquee Ribbon (inspired by rvmobileandelectronics.com) */}
      <BrandStrip />

      {/* 3. Compact Trust Strip (Height ~100px) */}
      <TrustBar />

      {/* 4. Category Grid (6 clean cards: Mobiles, Accessories, Audio, Watches, Chargers, Electronics) */}
      <CategorySection onOpenEnquiry={(cat) => openEnquiryModal({ name: `${cat} Enquiry` })} />

      {/* 5. Popular Products & Deals (6 clean cards, DEAL labels, Ask for Price) */}
      <FeaturedDeals />

      {/* 6. Direct Assistance Banner (Height ~240px, Dark Charcoal surface) */}
      <SpecialDealBanner onOpenEnquiry={(req) => openEnquiryModal({ name: req })} />

      {/* 7. Store Capabilities & Offerings (6 clean cards inspired by RV Mobile + Vijai Bhava discipline) */}
      <ServicesSection />

      {/* 8. Why Choose Us (Two-column: Story & Context + 4 compact rows with dividers) */}
      <WhyChooseUs />

      {/* 9. Store Location & Visits (Google Map preview + Verified Placeholders + Directions) */}
      <LocationSection />

      {/* 10. Frequently Asked Questions Accordion (inspired by rvmobileandelectronics.com FAQ) */}
      <FAQSection />

      {/* 11. Customer Feedback (3 compact cards with 5 stars and sample review tags) */}
      <Testimonials />

      {/* 12. Requirement & Contact Form (Clean card form with real backend lead logging) */}
      <ContactSection />

      {/* Floating WhatsApp and Mobile Bottom Navigation */}
      <FloatingWhatsApp />
    </main>
  );
}
