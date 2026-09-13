import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import LocationSection from '../components/sections/LocationSection';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <ContactSection />
      <LocationSection />
    </div>
  );
}
