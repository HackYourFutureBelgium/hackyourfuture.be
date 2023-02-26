import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const StyledMain = styled.div`
  cursor: pointer;
  outline: 0;
  border-radius: inherit;
  width: 100%;
  /* border: 2px solid transparent; */

  &:focus {
    /* border: 2px solid ${COLOR.DOLPHIN_GRAY}; */
  }
`

export const StyledContent = styled.div`
  transition: height 0.2s;
  height: ${({ height }) => height}px;
  overflow: hidden;
  width: 100%;
`
