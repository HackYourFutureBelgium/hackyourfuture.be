import React from "react"
import styled from "styled-components"

import Text from "./Text"
import { FONT_SIZE_TEXT, FONT_FAMILY, COLOR } from "../../../utils/constants"

export const StyledText = styled(
  ({ isCenter, maxWidth, size, isWhite, margin, color, ...rest }) => (
    <Text {...rest} />
  )
)`
  color: ${({ isWhite, color }) =>
    isWhite ? COLOR.WHITE : color || "inherit"};
  text-align: ${({ isCenter }) => (isCenter ? "center" : "left")};
  max-width: ${({ maxWidth }) => maxWidth};
  line-height: 160%;
  font-size: ${({ size }) => FONT_SIZE_TEXT[size.toUpperCase()]};
  font-family: ${FONT_FAMILY.SPACE};
  margin: ${({ margin }) => margin};
  white-space: pre-wrap;
  word-break: break-word;

  > b {
    display: inline;
    color: ${COLOR.BLUE_VIOLET};
    font-weight: inherit;
  }
`

StyledText.defaultProps = {
  isCenter: false,
  maxWidth: "none",
  size: "m",
  isWhite: false,
  margin: "0",
}
