import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import HomeHeader from "../components/page-sections/home-header"
import OurImpact from "../components/page-sections/our-impact"
import OurProgram from "../components/page-sections/our-program"
import OurValues from "../components/page-sections/our-values"
import OurPartners from "../components/page-sections/our-partners"
import SuccessStories from "../components/page-sections/success-stories"
import Donate from "../components/page-sections/donate"
import ContactUs from "../components/page-sections/contact-us"

const IndexPage = () => (
  <LandingLayout>
    <HomeHeader />
    <OurProgram />
    <OurImpact />
    <OurValues />
    <OurPartners />
    <SuccessStories />
    <Donate />
    <ContactUs />
  </LandingLayout>
)

export default IndexPage
