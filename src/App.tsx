/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { TopicCategories } from './components/TopicCategories';
import { WhatIsCounseling } from './components/WhatIsCounseling';
import { BookingSection } from './components/BookingSection';
import { AnonymousLetterbox } from './components/AnonymousLetterbox';
import { SelfCareZone } from './components/SelfCareZone';
import { PrivacyAndProcess } from './components/PrivacyAndProcess';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('trang-chu');
  const [bookingTopic, setBookingTopic] = useState<string | undefined>(undefined);

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    
    // Smooth scroll to corresponding section if available
    if (tabId === 'trang-chu') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'chu-de-tham-van') {
      const el = document.getElementById('chu-de-tham-van');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'tu-van-la-gi') {
      const el = document.getElementById('tu-van-la-gi');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'goc-thu-gian') {
      const el = document.getElementById('goc-thu-gian');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'hop-thu-an-danh') {
      const el = document.getElementById('hop-thu-an-danh');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'dat-lich') {
      const el = document.getElementById('dat-lich');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'quyen-rieng-tu') {
      const el = document.getElementById('quyen-rieng-tu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'lien-he') {
      const el = document.getElementById('lien-he');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    setActiveTab('dat-lich');
    const el = document.getElementById('dat-lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTopicForBooking = (topicTitle: string) => {
    setBookingTopic(topicTitle);
    setActiveTab('dat-lich');
    const el = document.getElementById('dat-lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fcfdfa] text-slate-800 flex flex-col selection:bg-teal-100 selection:text-teal-900">
      {/* Top Header matching screenshot */}
      <Header
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-1">
        {/* Hero Section matching screenshot layout and anime/watercolor aesthetic */}
        <HeroBanner
          onOpenBooking={handleOpenBooking}
          onExploreCounseling={() => handleNavigate('tu-van-la-gi')}
        />

        {/* 6 Topic Categories Bar matching screenshot icons, colors, and layout */}
        <TopicCategories
          onSelectTopicForBooking={handleSelectTopicForBooking}
        />

        {/* Section: What is Counseling? */}
        <WhatIsCounseling
          onOpenBooking={handleOpenBooking}
        />

        {/* Section: Interactive Booking with Anonymous Mode */}
        <BookingSection
          initialTopic={bookingTopic}
        />

        {/* Section: Emotional Self-Care, Stress Test & 4-7-8 Breathing Guide */}
        <SelfCareZone
          onOpenBooking={handleOpenBooking}
        />

        {/* Section: Anonymous Confessions Letterbox */}
        <AnonymousLetterbox />

        {/* Section: Privacy Pledge & Process */}
        <PrivacyAndProcess />
      </main>

      {/* Footer with office hours and location */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
