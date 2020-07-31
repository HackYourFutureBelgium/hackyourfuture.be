import styled from "styled-components"
import { Link } from "gatsby"

import { COLOR, FONT_SIZE_TEXT } from "../../../utils/constants"

export const StyledNavLink = styled(Link)`
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
`
