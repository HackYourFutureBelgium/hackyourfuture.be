import styled from "styled-components"

import { BREAKPOINT, SPACER, COLOR } from "../../../utils/constants"

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.CONCRETE};
  width: 100%;
  max-width: ${BREAKPOINT.L};
  padding: ${SPACER.L} 0;
`
