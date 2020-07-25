import React from "react"

import { StyledFooter } from "./style"
import { Title, Pane } from "../ui"

const Footer = props => (
  <StyledFooter>
    <Title level={3} isUpperCase>
      Hack Your Future
    </Title>
    <a href="mailto:contact@hackyourfuture.be">contact@hackyourfuture.be</a>
    <Pane>&copy; {new Date().getFullYear()}</Pane>
  </StyledFooter>
)

export default Footer
