import styled from "styled-components"

import { SPACER } from "../../utils/constants"

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 85px;
  min-height: 85px;
  box-sizing: border-box;
  padding: 0 ${SPACER.M};
`

export const MobileNavHeader = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid black;
  min-height: 60px;
  width: 100%;
`

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
`
