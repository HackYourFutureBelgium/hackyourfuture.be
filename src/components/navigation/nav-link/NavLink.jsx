import React, { useState } from "react"
import PropTypes from "prop-types"

import { StyledNavLink } from "./style"

const NavLink = ({ isActive, children, ...props }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <StyledNavLink
      onMouseEnter={() => setIsHover(true)}
      onFocus={() => setIsHover(true)}
      onBlur={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(false)}
      isActive={isActive || isHover}
      {...props}
    >
      {children}
    </StyledNavLink>
  )
}

NavLink.propTypes = {
  children: PropTypes.any,
}

export default NavLink
