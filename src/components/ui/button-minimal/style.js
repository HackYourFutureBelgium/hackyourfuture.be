import React from "react"
import styled from "styled-components"

import ButtonMinimal from "./ButtonMinimal"
import { COLOR, FONT_SIZE_TEXT } from "../../../utils/constants"

const StyledButton = styled(({ size, ...rest }) => <ButtonMinimal {...rest} />)`
  display: inline-flex;
  font-size: ${FONT_SIZE_TEXT.M};
  line-height: 160%;
  text-decoration: none;
  background-color: transparent;
  color: ${COLOR.BLUE_VIOLET};
  font-weight: 600;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  padding: 8px 0;

  &:hover,
  &:focus,
  &:active {
    background-color: ${COLOR.MERCURY};
  }

  > [data-side="left"] {
    margin-right: 6px;
  }
  > [data-side="right"] {
    margin-left: 6px;
  }
`

export default StyledButton
