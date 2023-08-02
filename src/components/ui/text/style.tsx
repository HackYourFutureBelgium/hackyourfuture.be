import React from "react"
import styled from "styled-components"

import Text from "./Text"
import { FONT_SIZE_TEXT, FONT_FAMILY, COLOR } from "../../../utils/constants"

export const StyledText = styled(
  ({
    isCenter,
    maxWidth,
    size,
    isWhite,
    margin,
    isWorkFont,
    isPurple,
    isPurpleLight,
    ...rest
  }) => <Text {...rest} />
)`
  color: ${({ isWhite, isPurple, isPurpleLight }) => {
    if (isWhite) return "white"
    if (isPurple) return COLOR.JACKSON_PURPLE
    if (isPurpleLight) return COLOR.BLUE_VIOLET
    return COLOR.SHARK
  }};
  text-align: ${({ isCenter }) => (isCenter ? "center" : "left")};
  max-width: ${({ maxWidth }) => maxWidth};
  line-height: 160%;
  font-size: ${({ size }) => FONT_SIZE_TEXT[size.toUpperCase()]};
  font-family: ${({ isWorkFont }) =>
    isWorkFont ? FONT_FAMILY.POPPINS : FONT_FAMILY.POPPINS};
  margin: ${({ margin }) => margin};
  white-space: pre-wrap;
  word-break: break-word;
  font-weight: 300;

  > b {
    display: inline;
    color: ${COLOR.BLUE_VIOLET};
    font-weight: inherit;
    font-weight: bold;
    font-family: ${({ isWorkFont }) =>
    isWorkFont ? FONT_FAMILY.POPPINS : FONT_FAMILY.POPPINS};
  }
`

StyledText.defaultProps = {
  isCenter: false,
  maxWidth: "none",
  size: "m",
  isWhite: false,
  margin: "0",
}
