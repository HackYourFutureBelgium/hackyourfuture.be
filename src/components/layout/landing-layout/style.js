import styled, { createGlobalStyle } from "styled-components"

import { COLOR, FONT_FAMILY } from "../../../utils/constants"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${COLOR.WHITE};
    font-family: ${FONT_FAMILY.SPACE};
    max-width: 100vw;
  }
`

export const StyledLandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
`
