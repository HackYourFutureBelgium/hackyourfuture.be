import React, { ReactNode, useState } from "react"

import { StyledNavLink } from "./NavLink.styles"
import type { StyledNavLinkProps } from "./NavLink.styles"

type NavLinkProps = {
  children: ReactNode
} & StyledNavLinkProps

export const NavLink = ({ isActive, children, ...props }: NavLinkProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
