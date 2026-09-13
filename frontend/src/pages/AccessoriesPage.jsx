import React from 'react';
import CategorySection from '../components/sections/CategorySection';
import FeaturedDeals from '../components/sections/FeaturedDeals';
import SpecialDealBanner from '../components/sections/SpecialDealBanner';
import ContactSection from '../components/sections/ContactSection';

export default function AccessoriesPage() {
  return (
    <div className="pt-24 pb-16 bg-paper-100 text-ink-900">
      <CategorySection />
      <FeaturedDeals />
      <SpecialDealBanner />
      <ContactSection />
    </div>
  );
}
