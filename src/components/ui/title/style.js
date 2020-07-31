import React from "react"
import styled from "styled-components"

import Title from "./Title"
import {
  SPACER,
  FONT_SIZE_TITLE,
  FONT_FAMILY,
  COLOR,
} from "../../../utils/constants"

const getFontSize = level => {
  switch (level) {
    case 1:
      return FONT_SIZE_TITLE.XL
    case 2:
      return FONT_SIZE_TITLE.L
    case 3:
      return FONT_SIZE_TITLE.M
    case 4:
      return FONT_SIZE_TITLE.S
    case 5:
    case 6:
      return FONT_SIZE_TITLE.XS
    default:
      return FONT_SIZE_TITLE.L
  }
}

export const StyledTitle = styled(({ isUpperCase, isWhite, ...rest }) => (
  <Title {...rest} />
))`
  font-size: ${({ level }) => getFontSize(level)};
  line-height: ${({ level }) => `calc(${getFontSize(level)} + 3px)`};
  margin: 0 0 ${SPACER.M} 0;
  text-transform: ${({ isUpperCase }) => (isUpperCase ? "uppercase" : "none")};
  font-family: ${FONT_FAMILY.WORK};
  font-weight: 900;
  color: ${({ isWhite }) => (isWhite ? COLOR.WHITE : COLOR.BLUE_VIOLET)};
`
