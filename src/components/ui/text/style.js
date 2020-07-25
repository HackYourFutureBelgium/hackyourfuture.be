import React from "react"
import styled from "styled-components"

import Text from "./Text"
import { FONT_SIZE_TEXT } from "../../../utils/constants"

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

export const StyledText = styled(({ textAlign, maxWidth, size, ...rest }) => (
  <Text {...rest} />
))`
  display: inline-flex;
  color: black;
  text-align: ${({ textAlign }) => textAlign};
  max-width: ${({ maxWidth }) => maxWidth};
  line-height: 160%;
  font-size: ${({ size }) => getFontSize(size)};
`

StyledText.defaultProps = {
  textAlign: "left",
  maxWidth: "none",
  size: "m",
}
