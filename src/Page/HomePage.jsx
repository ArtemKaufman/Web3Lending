import React from 'react'
import { IntroSection } from '../Components/IntroSection'
import { ProofSection } from '../Components/ProofSection'
import { DiscoverSection } from '../Components/DiscoverSection'
import { OurExpertisingSection } from '../Components/OurExpertisingSection'
import { InsigtghtsSection } from '../Components/InsigtghtsSection'
import { LibrarySection } from '../Components/LibrarySection'
import { FeedbackSection } from '../Components/FeedbackSection'

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <ProofSection />
      <DiscoverSection />
      <OurExpertisingSection />
      <InsigtghtsSection />
      <LibrarySection />
      <FeedbackSection />
    </>
  )
}
