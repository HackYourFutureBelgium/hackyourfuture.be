import React from "react"
import { Link } from "gatsby"

import { StyledTopNav, StyledTopNavMobile } from "./style"
import NavLink from "../nav-link/NavLink"
import { Button } from "../../ui"

const TopNav = ({ onBurgerNavClicked, isMobile, currentPage }) => {
  return (
    <>
      <StyledTopNav isMobile={isMobile}>
        <NavLink to="/program" isActive={currentPage === "program"}>
          <span>The program</span>
        </NavLink>
        <NavLink to="/volunteer" isActive={currentPage === "volunteer"}>
          <span>Volunteer</span>
        </NavLink>
        <NavLink to="/about" isActive={currentPage === "about"}>
          <span>About</span>
        </NavLink>
        <NavLink to="/faq" isActive={currentPage === "faq"}>
          <span>FAQ</span>
        </NavLink>
        <NavLink to="/support-us" isActive={currentPage === "support-us"}>
          <span>Support us</span>
        </NavLink>
        <Button
          is="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSd6V6JyhWH3M4dhmXnAWcdMHCVEdcdQJyT1DzXZodvHufSrJQ/viewform?usp=sf_link"
          target="_blank"
        >
          Apply now
        </Button>
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
