import { useState } from "react"

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

export default NavLink
