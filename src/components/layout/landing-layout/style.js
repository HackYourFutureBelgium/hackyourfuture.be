import styled, { createGlobalStyle } from "styled-components"

import { COLOR, FONT_FAMILY } from "../../../utils/constants"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono&family=Work+Sans:wght@600;700;900&display=swap');

  body {
    background-color: ${COLOR.MERCURY};
    font-family: ${FONT_FAMILY.SPACE};
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
