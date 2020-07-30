import React from "react"
import styled from "styled-components"

import Button from "./Button"
import { COLOR, FONT_SIZE_TEXT } from "../../../utils/constants"

export const StyledButton = styled(({ type, ...rest }) => <Button {...rest} />)`
  display: inline-flex;
  font-size: ${FONT_SIZE_TEXT.S};
  line-height: 160%;
  text-decoration: none;
  background-color: ${({ type }) =>
    type === "button" ? COLOR.BLUE_VIOLET : "transparent"};
  color: ${({ type }) => (type === "button" ? "white" : "black")};
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 0px;
  box-sizing: border-box;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ type }) =>
      type === "button" ? COLOR.JACKSON_PURPLE : COLOR.MERCURY};
  }
`

StyledButton.defaultProps = {
  type: "button",
}
