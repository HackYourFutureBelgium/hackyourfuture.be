import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { COLOR, SHADOW } from "../../../utils/constants"

export const StyledPane = styled(
  ({
    alignItems,
    background,
    boxShadow,
    children,
    direction,
    display,
    grow,
    height,
    justifyContent,
    margin,
    maxHeight,
    maxWidth,
    padding,
    width,
    wrap,
    ...rest
  }) => <div {...rest}>{children}</div>
)`
  align-items: ${({ alignItems }) => alignItems};
  background: ${({ background }) => background};
  box-shadow: ${({ boxShadow }) => boxShadow};
  box-sizing: border-box;
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  flex-grow: ${({ grow }) => grow};
  flex-wrap: ${({ wrap }) => wrap};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`

StyledPane.propTypes = {
  background: PropTypes.oneOf([
    COLOR.CONCRETE,
    COLOR.JACKSON_PURPLE,
    COLOR.BLUE_VIOLET,
  ]),
  boxShadow: PropTypes.oneOf(["none", SHADOW.BOX]),
}

StyledPane.defaultProps = {
  alignItems: "stretch",
  background: "transparent",
  boxShadow: "none",
  direction: "row",
  display: "flex",
  grow: 0,
  height: "auto",
  justifyContent: "flex-start",
  margin: "0",
  maxHeight: "none",
  maxWidth: "none",
  padding: "0",
  width: "auto",
  wrap: "no-wrap",
}
