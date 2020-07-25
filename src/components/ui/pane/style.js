import React from "react";
import styled from "styled-components";

export const StyledPane = styled(
  ({
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
    ...rest
  }) => <div {...rest}>{children}</div>
)`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${({ direction }) => direction};
  flex-grow: ${({ grow }) => grow};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  flex-wrap: ${({ wrap }) => (wrap ? "flex-wrap" : "no-wrap")};
`;

StyledPane.defaultProps = {
  grow: 0,
  width: "auto",
  height: "auto",
  padding: "0",
  margin: "0",
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "stretch",
  wrap: false,
};
