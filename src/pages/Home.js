import React from 'react'
import ChristianLifeSection from '../components/ChristianLifeSection'
import CommunitySection from '../components/CommunitySection'
import ContactSection from '../components/ContactSection'
import DiscoverMissionSection from '../components/DiscoverMissionSection'
import FooterSection from '../components/FooterSection'
import GetInTouchSection from '../components/GetInTouchSection'
import Navbar from '../components/Navbar'
import SliderSection from '../components/SlideSection'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
      <Navbar />
      <SliderSection />
      <DiscoverMissionSection />
      <CommunitySection />
      <Testimonial />
      <ChristianLifeSection />
      <GetInTouchSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default Home
