import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import ProgramHeader from "../components/page-sections/program-header"
import ProgramSkills from "../components/page-sections/program-skills"

const ProgramPage = () => (
  <LandingLayout>
    <ProgramHeader />
    <ProgramSkills />
  </LandingLayout>
)

export default ProgramPage
