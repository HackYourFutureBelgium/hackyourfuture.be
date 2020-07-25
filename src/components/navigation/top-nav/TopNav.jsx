import React from "react"
import PropTypes from "prop-types"

import { StyledTopNav } from "./style"
import NavLink from "../nav-link/NavLink"

const TopNav = props => {
  return (
    <StyledTopNav>
      <NavLink to="/program">The program</NavLink>
      <NavLink to="/volunteer">Volunteer</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
      <NavLink to="/support-us">Support us</NavLink>
    </StyledTopNav>
  )
}

TopNav.propTypes = {}

TopNav.defaultProps = {}

export default TopNav
