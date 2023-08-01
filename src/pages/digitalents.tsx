import { Layout } from "@components"
import WhatIsDigitalents from "../components/page-sections/what-is-digitalents/WhatIsDigitalents"
import TwoTracksDigitalents from "../components/page-sections/two-tracks-digitalents/TwoTracksDigitalents"
import WhoAreWeLookingForDigitalents from "../components/page-sections/who-are-we-looking-for-digitalents/WhoAreWeLookingForDigitalents"
import React from "react"

const DigiTalents = () => (
  <Layout page="digitalents">
    <WhatIsDigitalents />
    <TwoTracksDigitalents />
    <WhoAreWeLookingForDigitalents />
  </Layout>
)
export default DigiTalents
