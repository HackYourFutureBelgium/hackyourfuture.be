import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import HomeHeader from "../components/page-sections/home-header"
import OurImpact from "../components/page-sections/our-impact"
import OurProgram from "../components/page-sections/our-program"
import OurValues from "../components/page-sections/our-values"

const IndexPage = () => (
  <LandingLayout>
    <HomeHeader />
    <OurImpact />
    <OurProgram />
    <OurValues />
  </LandingLayout>
)

export default IndexPage
