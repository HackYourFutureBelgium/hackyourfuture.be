import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ isFocused }) => (isFocused ? COLOR.JACKSON_PURPLE : COLOR.BLUE_VIOLET)};
  border-radius: 3px;
  overflow: hidden;
  background-color: white;
  transition: all 0.2s;
  width: 100%;
  padding-left: ${({ hasExtraPaddingLeft }) =>
    hasExtraPaddingLeft ? "10px" : "0"};
  color: ${COLOR.BLUE_VIOLET};
`

export const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 12px 10px;
  color: ${COLOR.BLUE_VIOLET};
  font-size: ${({ size }) => size};

  ::placeholder {
    color: ${COLOR.BLUE_VIOLET};
  }
`
