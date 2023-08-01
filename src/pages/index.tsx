import React from "react"

import { Layout, SectionsFactory } from '@components'
import type { Data, DataPage } from '@types'

import dataJson from '../../content/pages.json'

const data = dataJson as Data
const homeData = data.page.find(p => p.title === "Home") as DataPage

const IndexPage = () => (
  <Layout>
    <SectionsFactory data={homeData} />
    {/* <HomeHeader />
    <ImageDescription data={ourProgramData} hasRectangleBackground />
    <OurImpact />
    <OurValues />
    <SuccessStories />
    <OurPartners />
    <Donate data={donateData} />
    <ContactUs /> */}
  </Layout>
)

export default IndexPage
