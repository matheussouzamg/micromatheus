import React, { useState } from 'react';
import { Header } from './components/Header';
import { VslPlayer } from './components/VslPlayer';
import { InteractiveComparison } from './components/InteractiveComparison';
import { EarningsCalculator } from './components/EarningsCalculator';
import { CourseCurriculum } from './components/CourseCurriculum';
import { SocialProofAndCertificates } from './components/SocialProofAndCertificates';
import { AboutMatheus } from './components/AboutMatheus';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { StickyBottomCta } from './components/StickyBottomCta';

import { WHATSAPP_ENROLLMENT_URL } from './data/content';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenEnrollment = () => {
    window.open(WHATSAPP_ENROLLMENT_URL, '_blank');
  };

  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div id="topo" className="min-h-screen bg-[#08090c] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Bar Navigation */}
      <Header onOpenEnrollment={handleOpenEnrollment} />

      <main className="flex-1">
        {/* VSL Hero & Video Masterclass */}
        <VslPlayer onUnlockOffer={handleScrollToOffer} />

        {/* Interactive Before & After Case Studies */}
        <InteractiveComparison />

        {/* Earnings & Revenue Comparison Simulator */}
        <EarningsCalculator onSelectPlan={handleScrollToOffer} />

        {/* Course Curriculum & Methodology */}
        <CourseCurriculum />

        {/* Social Proof & Official Certificates */}
        <SocialProofAndCertificates />

        {/* About Matheus Souza */}
        <AboutMatheus />

        {/* Irresistible Offer & Bonuses */}
        <OfferSection onOpenEnrollment={handleOpenEnrollment} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Quiet Compliant Footer */}
      <Footer />

      {/* Floating Sticky Bottom CTA */}
      <StickyBottomCta onOpenEnrollment={handleOpenEnrollment} />

      {/* Registration & VIP WhatsApp Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
