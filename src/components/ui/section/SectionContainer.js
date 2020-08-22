import React from "react"
import styled from "styled-components"

import { BREAKPOINT, SPACER, SHADOW } from "../../../utils/constants"

export const StyledSection = styled(
  ({ justifyContent, padding, hasShadow, background, ...rest }) => (
    <section {...rest} />
  )
)`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
  padding: ${({ padding }) => padding};
  position: relative;
  box-shadow: ${({ hasShadow }) => (hasShadow ? SHADOW.BOX : "none")};
  background: ${({ background }) => background || "none"};
`

StyledSection.defaultProps = {
  justifyContent: "center",
  padding: "50px 20px",
}

export const StyledWrapper = styled(
  ({ margin, direction, maxWidth, hasShadow, justifyContent, ...rest }) => (
    <div {...rest} />
  )
)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: center;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || BREAKPOINT.XL};
  padding: ${SPACER.S} 0;
  margin: ${({ margin }) => margin};

  ${({ hasShadow }) => {
    if (hasShadow) {
      return `
        box-shadow: ${SHADOW.BOX};
      `
    }
  }}
`

StyledWrapper.defaultProps = {
  margin: "0 auto",
  direction: "column",
}
