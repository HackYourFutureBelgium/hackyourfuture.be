import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import ImageDescription from "../components/page-sections/image-description"

import OurProgramImageUrl from "../images/our-program.png"

const WhyBecomePartnerData = {
  title: "Why become a partner?",
  description:
    "Do you want to increase your corporate social responsibility? Do you want to make your team stronger by increasing its diversity? Do you want to have social impact in society? We offer several ways of partnering.Get in touch!",
  cta: "contact us",
  image: OurProgramImageUrl,
}

const SupportUsPage = () => (
  <LandingLayout>
    <ImageDescription data={WhyBecomePartnerData} />
  </LandingLayout>
)

export default SupportUsPage
