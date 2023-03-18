import { StyledTopNav, StyledTopNavMobile } from "./style"
import NavLink from "../nav-link/NavLink"
import { Button } from "../../ui"
import React from "react"

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
        <NavLink to="/digitalents" isActive={currentPage === "digitalents"}>
          <span>Digitalents</span>
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
        <LegacyButton
          is="a"
          href="https://forms.gle/jevj2Ti6brB9pAdw8"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Apply now
        </LegacyButton>
      </StyledTopNav>
      {!isMobile && (
        <StyledTopNavMobile>
          <LegacyButton
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
