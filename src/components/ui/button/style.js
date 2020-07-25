import React from "react"
import styled from "styled-components"

import Button from "./Button"

export const StyledButton = styled(({ type, ...rest }) => <Button {...rest} />)`
  display: inline-flex;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  background-color: ${({ type }) =>
    type === "button" ? "black" : "transparent"};
  color: ${({ type }) => (type === "button" ? "white" : "black")};
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px 10px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
  }
`

StyledButton.defaultProps = {
  type: "button",
}
