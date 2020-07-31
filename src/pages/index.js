import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import HomeHeader from "../components/page-sections/home-header"
import OurResults from "../components/page-sections/our-results"

const IndexPage = () => (
  <LandingLayout>
    <HomeHeader />
    <OurResults />
  </LandingLayout>
)

export default IndexPage
