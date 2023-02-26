import { FC } from "react"

import LandingLayout from "../components/layout/landing-layout"
import NotFound from "../components/page-sections/not-found"

const Page404: FC = () => (
  <LandingLayout>
    <NotFound />
  </LandingLayout>
)

export default Page404
