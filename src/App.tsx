import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { SignatureCollection } from './sections/SignatureCollection';
import { ArtOfBaking } from './sections/ArtOfBaking';
import { MenuPreview } from './sections/MenuPreview';
import { CustomCakes } from './sections/CustomCakes';
import { CafeExperience } from './sections/CafeExperience';
import { EnquirySection } from './sections/EnquirySection';
import { VisitUs } from './sections/VisitUs';
import type { EnquiryType } from './types';

export function App() {
  const [selectedEnquiryType, setSelectedEnquiryType] = useState<EnquiryType>('general');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const handleSelectProduct = (productName: string) => {
    setSelectedEnquiryType('catering');
    setPrefilledMessage(`Hello, I would like to enquire about reserving/pre-ordering: ${productName}.`);
  };

  const handleEnquireCake = () => {
    setSelectedEnquiryType('custom_cake');
    setPrefilledMessage('Hello, I would like to enquire about a custom celebration cake for an upcoming event.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-porcelain text-espresso selection:bg-terracotta selection:text-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Primary Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <SignatureCollection onSelectProduct={handleSelectProduct} />
        <ArtOfBaking />
        <MenuPreview onSelectItemForEnquiry={handleSelectProduct} />
        <CustomCakes onEnquireCake={handleEnquireCake} />
        <CafeExperience />
        <EnquirySection
          initialType={selectedEnquiryType}
          initialMessage={prefilledMessage}
        />
        <VisitUs />
      </main>

      {/* Refined Footer */}
      <Footer />

      {/* Back to top accessible control */}
      <BackToTop />
    </div>
  );
}

export default App;
