import { StyledTopNav, StyledTopNavMobile } from "./TopNav.styles"
import { Button, NavLink } from "@components"
import React from "react"
import { Page } from "@types"

type TopNavProps = {
  currentPage?: Page,
  isMobile: boolean,
  onBurgerNavClicked?: VoidFunction
}

export const TopNav = ({
  onBurgerNavClicked,
  isMobile,
  currentPage
}: TopNavProps) => (
  <>
    <StyledTopNav isMobile={isMobile}>
      <Button
        as="a"
        href="/program"
        variant="secondary"
      >
        The program
      </Button>
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
      <Button
        as="a"
        href="https://forms.gle/jevj2Ti6brB9pAdw8"
        target="_blank"
        rel="noopener noreferrer nofollow"
        variant="primary"
      >
        Apply now
      </Button>
    </StyledTopNav>
    {!isMobile && (
      <StyledTopNavMobile>
        <Button
          onClick={onBurgerNavClicked}
          variant="primary"
          size="medium"
        />
      </StyledTopNavMobile>
    )}
  </>
)

