import React from "react"
import styled from "styled-components"

import Text from "./Text"
import { FONT_SIZE_TEXT, FONT_FAMILY, COLOR } from "../../../utils/constants"

const getFontSize = size => {
  switch (size) {
    case "l":
      return FONT_SIZE_TEXT.L
    case "m":
      return FONT_SIZE_TEXT.M
    case "s":
      return FONT_SIZE_TEXT.S
    default:
      return FONT_SIZE_TEXT.M
  }
}

export const StyledText = styled(
  ({ textAlign, maxWidth, size, isWhite, ...rest }) => <Text {...rest} />
)`
  display: inline-flex;
  color: ${({ isWhite }) => (isWhite ? COLOR.WHITE : COLOR.BLACK)};
  text-align: ${({ textAlign }) => textAlign};
  max-width: ${({ maxWidth }) => maxWidth};
  line-height: 160%;
  font-size: ${({ size }) => getFontSize(size)};
  font-family: ${FONT_FAMILY.SPACE};
`

StyledText.defaultProps = {
  textAlign: "left",
  maxWidth: "none",
  size: "m",
  isWhite: false,
}
