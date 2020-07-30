import React from "react"

import { StyledHeader } from "./style"
import { Pane } from "../ui"
import Logo from "../logo/Logo"
import TopNav from "../navigation/top-nav/TopNav"
import { BREAKPOINT } from "../../utils/constants"

const TopBar = props => (
  <StyledHeader>
    <Pane
      width="100%"
      maxWidth={BREAKPOINT.XL}
      margin="auto"
      height="100%"
      alignItems="center"
    >
      <Logo />
      <TopNav />
    </Pane>
  </StyledHeader>
)

export default TopBar
