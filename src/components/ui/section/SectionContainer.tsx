import styled from "styled-components"

import {
  BREAKPOINT,
  SPACER,
  SHADOW,
  MEDIA_QUERY,
} from "../../../utils/constants"

export const StyledSection = styled(
  ({
    justifyContent,
    padding,
    paddingMobile,
    hasShadow,
    background,
    hasOverlay,
    ...rest
  }) => <section {...rest} />
)`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
  padding: ${({ padding }) => padding};
  position: relative;
  box-shadow: ${({ hasShadow }) => (hasShadow ? SHADOW.BOX : "none")};
  background: ${({ background }) => background || "none"};
  z-index: 1;
  flex: 0 0 auto;

  @media ${MEDIA_QUERY.MOBILE} {
    padding: ${({ paddingMobile }) => paddingMobile || "20px"};
  }

  ${({ hasOverlay }) => {
    if (hasOverlay) {
      return `
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #0004;
          top: 0;
          left: 0;
          z-index: 1;
        }
      `
    }
  }}
`

StyledSection.defaultProps = {
  justifyContent: "center",
  padding: "50px 20px",
}

export const StyledWrapper = styled(
  ({
    margin,
    direction,
    maxWidth,
    padding,
    hasShadow,
    justifyContent,
    ...rest
  }) => <div {...rest} />
)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: center;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || BREAKPOINT.XL};
  padding: ${({ padding }) => padding || `${SPACER.S} 0`};
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
