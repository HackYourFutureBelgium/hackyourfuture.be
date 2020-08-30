import React from "react"
import styled from "styled-components"

import Button from "./Button"
import { COLOR, FONT_SIZE_TEXT } from "../../../utils/constants"

const StyledButton = styled(({ variant, size, isWhite, ...rest }) => (
  <Button {...rest} />
))`
  display: inline-flex;
  font-size: ${({ size }) => size || FONT_SIZE_TEXT.S};
  line-height: 160%;
  text-decoration: none;
  background-color: ${({ isWhite }) => {
    return isWhite ? "white" : COLOR.BLUE_VIOLET
  }};
  color: ${({ isWhite }) => (isWhite ? COLOR.SHARK : "white")};
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  align-items: center;

  ${({ variant }) => {
    if (variant === "minimal") {
      return `
        background-color: transparent;
        color: ${COLOR.BLUE_VIOLET};
      `
    }
  }}

  &:hover,
  &:focus,
  &:active {
    ${({ variant }) => {
      if (variant === "minimal") {
        return `
          background-color: ${COLOR.MERCURY};
        `
      }
      return `
        background-color: ${COLOR.JACKSON_PURPLE};
      `
    }}
  }

  > [data-side="left"] {
    margin-right: 6px;
  }
  > [data-side="right"] {
    margin-left: 6px;
  }
`

export default StyledButton
