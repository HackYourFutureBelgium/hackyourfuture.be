import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { COLOR, FONT_SIZE_TEXT } from "../../../utils/constants"

export const StyledNavLink = styled(({ isActive, ...props }) => (
  <Link {...props} />
))`
  display: inline-flex;
  align-items: center;
  height: 100%;
  color: ${COLOR.GRAY};
  font-size: ${FONT_SIZE_TEXT.S};
  line-height: 160%;
  text-transform: uppercase;
  padding: 10px 20px;

  &:hover,
  &:focus,
  &:active {
    color: black;
    background-color: ${COLOR.MERCURY};
  }

  span {
    position: relative;

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
