import React from "react"
import PropTypes from "prop-types"

import { StyledNavLink } from "./style"

const NavLink = ({ children, ...props }) => {
  return <StyledNavLink {...props}>{children}</StyledNavLink>
}

NavLink.propTypes = {
  children: PropTypes.any,
}

export default NavLink
