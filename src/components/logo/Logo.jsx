import React from "react"
import { Link } from "gatsby"

import { StyledLogoContainer } from "./style"
import { Image } from "../ui"
import HackYourFutureBelgiumLogoUrl from "../../assets/images/hack-your-future-belgium-logo.svg"

const Logo = props => (
  <StyledLogoContainer>
    <Link to="/">
      <Image
        src={HackYourFutureBelgiumLogoUrl}
        objectFit="contain"
        height="100%"
      />
    </Link>
  </StyledLogoContainer>
)

export default Logo
