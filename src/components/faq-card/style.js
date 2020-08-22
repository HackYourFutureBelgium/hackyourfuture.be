import styled from "styled-components"

import { COLOR } from "../../utils/constants"

export const StyledFaqCard = styled.div`
  width: 100%;
  background-color: ${COLOR.WHITE};
`

export const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  border: 1px solid ${({ isFocus }) => (isFocus ? "black" : "transparent")};
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 30px;
`
