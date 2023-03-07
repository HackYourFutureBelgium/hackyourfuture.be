import LandingLayout from "../components/layout/landing-layout"
import WhatIsDigitalents from "../components/page-sections/what-is-digitalents/WhatIsDigitalents"
import TwoTracksDigitalents from "../components/page-sections/two-tracks-digitalents/TwoTracksDigitalents"
import WhoAreWeLookingForDigitalents from "../components/page-sections/who-are-we-looking-for-digitalents/WhoAreWeLookingForDigitalents"
import React from "react"

const DigiTalents = () => (
  <LandingLayout page="digitalents">
    <WhatIsDigitalents />
    <TwoTracksDigitalents />
    <WhoAreWeLookingForDigitalents />
  </LandingLayout>
)
export default DigiTalents
