import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import Whydigitalent from "../components/page-sections/why-digitalent/WhyDigitalent"
import Objective from "../components/page-sections/objective-digitalent/Objective"

const DigiTalents = () => (
  <LandingLayout page="digitalents">
    <Whydigitalent />
    <Objective />
  </LandingLayout>
)

export default DigiTalents