import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import ImageDescription from "../components/page-sections/image-description"
import SupportUsDetails from "../components/page-sections/support-us-details"
import Donate from "../components/page-sections/donate"
import teamWorkUrl from "../assets/images/teamwork.jpg"

const WhyBecomePartnerData = {
  title: "Why become a partner?",
  description:
    "Do you want to increase your corporate social responsibility? Do you want to make your team stronger by increasing its diversity? Do you want to have social impact in society? We offer several ways of partnering.Get in touch!",
  cta: "contact us",
  image: teamWorkUrl,
}
const donateData = {
  title: "Why donate?",
  description:
    "Do you want to have an impact on the empowerment of refugees? Do you believe the Belgian IT sector could benefit from more diversity? Do you want to improve chances for newcomers with limited access to education and the labor market?<br/><br/>We're a non-profit that relies on support from people like you. Thanks to your support we can keep our program free of charge for all of our students.",
}

const SupportUsPage = () => (
  <LandingLayout page="support-us">
    <ImageDescription
      data={WhyBecomePartnerData}
      hasBigTitle
      hasTitleLightPurple
      sectionPadding="0 20px"
    />
    <SupportUsDetails />
    <Donate data={donateData} />
  </LandingLayout>
)

export default SupportUsPage
