import React from "react"
import styled from "styled-components"

import Title from "./Title"
import {
  SPACER,
  FONT_SIZE_TITLE,
  FONT_FAMILY,
  COLOR,
  MEDIA_QUERY,
} from "../../../utils/constants"

const getLineHeight = size => {
  if (["XS", "S", "M"].includes(size)) {
    return "140%"
  }
  return "120%"
}

const getMobileSize = size => {
  if (size === "XS") return FONT_SIZE_TITLE.XS
  if (size === "S") return FONT_SIZE_TITLE.XS
  if (size === "M") return FONT_SIZE_TITLE.S
  if (size === "L") return FONT_SIZE_TITLE.M
  if (size === "XL") return FONT_SIZE_TITLE.L
}

export const StyledTitle = styled(
  ({ isUpperCase, isWhite, isCenter, size, maxWidth, color, ...rest }) => (
    <Title {...rest} />
  )
)`
  font-size: ${({ size }) => FONT_SIZE_TITLE[size.toUpperCase()]};
  line-height: ${({ size }) => getLineHeight(size.toUpperCase())};
  margin-bottom: ${({ size }) =>
    "xs" === size.toLowerCase() ? `0` : SPACER.M};
  text-transform: ${({ isUpperCase }) => (isUpperCase ? "uppercase" : "none")};
  font-family: ${FONT_FAMILY.WORK};
  font-weight: 700;
  color: ${({ isWhite, color }) =>
    isWhite ? color || COLOR.WHITE : color || COLOR.JACKSON_PURPLE};
  text-align: ${({ isCenter }) => (isCenter ? "center" : "left")};
  max-width: ${({ maxWidth }) => maxWidth || "none"};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: ${({ size }) => getMobileSize(size)};
  }
`

StyledTitle.defaultProps = {
  isUpperCase: true,
  size: "m",
  color: null,
}
