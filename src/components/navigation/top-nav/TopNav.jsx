import React from "react"

import { StyledTopNav, StyledTopNavMobile } from "./style"
import NavLink from "../nav-link/NavLink"
import { Button } from "../../ui"

const TopNav = ({ onBurgerNavClicked, isMobile }) => {
  return (
    <>
      <StyledTopNav isMobile={isMobile}>
        <NavLink to="/program">The program</NavLink>
        <NavLink to="/volunteer">Volunteer</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/support-us">Support us</NavLink>
        <Button>Apply now</Button>
      </StyledTopNav>
      {!isMobile && (
        <StyledTopNavMobile>
          <Button
            iconLeft="bars"
            onClick={onBurgerNavClicked}
            variant="minimal"
            size="28px"
          />
        </StyledTopNavMobile>
      )}
    </>
  )
}

export default TopNav
