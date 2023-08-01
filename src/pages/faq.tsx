import { Layout } from "@components"
import FAQHeader from "../components/page-sections/faq-header"
import FAQList from "../components/page-sections/faq-list"
import React from "react"

const FAQPage = () => (
  <Layout page="faq">
    <FAQHeader />
    <FAQList />
  </Layout>
)

export default FAQPage
