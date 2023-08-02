import styled from "styled-components"
import { Link, GatsbyLinkProps } from "gatsby"

import { COLOR, FONT_SIZE_TEXT, FONT_FAMILY } from "@utils"

export type StyledNavLinkProps = {
  isActive: boolean
} & GatsbyLinkProps<any>

export const StyledNavLink = styled(Link) <StyledNavLinkProps>`
  display: inline-flex;
  align-items: center;
  height: 100%;
  color: ${COLOR.GRAY};
  font-size: ${FONT_SIZE_TEXT.S};
  line-height: 160%;
  text-transform: uppercase;
  padding: 10px 20px;
  font-family: ${FONT_FAMILY.POPPINS};

  &:hover,
  &:focus,
  &:active {
    color: black;
  }

  span {
    position: relative;
    font-family: ${FONT_FAMILY.POPPINS};

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: -5px;
      width: calc(100% + 10px);
      height: 3px;
      background-color: ${COLOR.BLUE_VIOLET};
      display: ${({ isActive }) => (isActive ? "block" : "none")};
    }
  }
`
