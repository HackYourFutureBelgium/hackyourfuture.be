import styled from "styled-components"

import Button from "./Button"
import { COLOR, FONT_SIZE_TEXT, FONT_FAMILY } from "../../../utils/constants"

const StyledButton = styled(
  // @ts-ignore
  ({ variant, size, isWhite, hasRadius, ...rest }) => <Button {...rest} />
)`
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
  border-radius: ${({ hasRadius }) => (hasRadius ? "4px" : "0")};
  box-sizing: border-box;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  align-items: center;
  font-family: ${FONT_FAMILY.WORK};

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
    ${({ variant, isWhite }) => {
    if (variant === "minimal") {
      return `
          background-color: ${COLOR.MERCURY};
        `
    }
    return `
        background-color: ${({ isWhite }) =>
        isWhite ? COLOR.MERCURY : COLOR.JACKSON_PURPLE};
      `
  }}
  }

  > [data-side="left"] {
    margin-right: 6px;
  }
  > [data-side="right"] {
    margin-left: 6px;
    margin-top: -2px;
  }
`

StyledButton.defaultProps = {
  hasRadius: true,
}

export default StyledButton
