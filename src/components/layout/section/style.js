import styled from "styled-components"

import { BREAKPOINT, SPACER, COLOR } from "../../../utils/constants"

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${BREAKPOINT.L};
  padding: ${SPACER.S} 0;
  margin: 0 auto;
  border: 1px solid green;
`
