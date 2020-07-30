import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import FAQHeader from "../components/page-sections/faq-header"
import FAQList from "../components/page-sections/faq-list"

const FAQPage = () => (
  <LandingLayout>
    <FAQHeader />
    <FAQList />
  </LandingLayout>
)

export default FAQPage
