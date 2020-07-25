import React from "react"

import { StyledTopNav } from "./style"
import NavLink from "../nav-link/NavLink"
import { Button } from "../../ui"

const TopNav = props => {
  return (
    <StyledTopNav>
      <NavLink to="/program">The program</NavLink>
      <NavLink to="/volunteer">Volunteer</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
      <NavLink to="/support-us">Support us</NavLink>
      <Button>Apply now</Button>
    </StyledTopNav>
  )
}

export default TopNav
