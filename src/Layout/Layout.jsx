import React from 'react';
import { Header } from '../Components/Header';
import { IntroSection } from '../Components/IntroSection';
import { ProofSection } from '../Components/ProofSection';
import { DiscoverSection } from '../Components/DiscoverSection';
import { OurExpertisingSection } from '../Components/OurExpertisingSection';
import { InsigtghtsSection } from '../Components/InsigtghtsSection';
import { LibrarySection } from '../Components/LibrarySection';
import { FeedbackSection } from '../Components/FeedbackSection';
import { Footer } from '../Components/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <IntroSection />
      <ProofSection />
      <DiscoverSection />
      <OurExpertisingSection />
      <InsigtghtsSection />
      <LibrarySection />
      <FeedbackSection /> */}
      <Footer />
    </div>
  );
};
