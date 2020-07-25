import React from "react"
import styled from "styled-components"

export const StyledPane = styled(
  ({
    display,
    children,
    direction,
    grow,
    justifyContent,
    alignItems,
    width,
    height,
    padding,
    margin,
    wrap,
    maxWidth,
    maxHeight,
    ...rest
  }) => <div {...rest}>{children}</div>
)`
  display: ${({ display }) => display};
  box-sizing: border-box;
  flex-direction: ${({ direction }) => direction};
  flex-grow: ${({ grow }) => grow};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  flex-wrap: ${({ wrap }) => wrap};
`

StyledPane.defaultProps = {
  display: "flex",
  grow: 0,
  width: "auto",
  height: "auto",
  padding: "0",
  margin: "0",
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "stretch",
  wrap: "no-wrap",
  maxWidth: "none",
  maxHeight: "none",
}
