import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import HomeHeader from "../components/page-sections/home-header"
import OurImpact from "../components/page-sections/our-impact"
import ImageDescription from "../components/page-sections/image-description"
import OurValues from "../components/page-sections/our-values"
import OurPartners from "../components/page-sections/our-partners"
import SuccessStories from "../components/page-sections/success-stories"
import Donate from "../components/page-sections/donate"
import ContactUs from "../components/page-sections/contact-us"

import OurProgramImageUrl from "../assets/images/our-program.jpg"

const ourProgramData = {
  title: "Our program",
  description:
    "Our <b>8-month</b> program is divided into <b>14 modules</b>. After the program, students join a <b>4-weeks intensive bootcamp</b> to work on a real project with a real partner. Our training takes place at <b>BeCentral</b> (Brussels) every <b>Sunday</b>. During the week, students are supported online in their <b>self-study</b>, homework and peer learning.",
  cta: "Discover more",
  ctaLink: "/program",
  image: OurProgramImageUrl,
}

const IndexPage = () => (
  <LandingLayout>
    <HomeHeader />
    <ImageDescription data={ourProgramData} />
    <OurImpact />
    <OurValues />
    <OurPartners />
    <SuccessStories />
    <Donate />
    <ContactUs />
  </LandingLayout>
)

export default IndexPage
