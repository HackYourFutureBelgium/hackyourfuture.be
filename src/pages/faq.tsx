import LandingLayout from "../components/layout/landing-layout"
import FAQHeader from "../components/page-sections/faq-header"
import FAQList from "../components/page-sections/faq-list"
import React from "react"

const FAQPage = () => (
  <LandingLayout page="faq">
    <FAQHeader />
    <FAQList />
  </LandingLayout>
)

export default FAQPage
