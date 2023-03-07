import styled from "styled-components"

import { COLOR, FONT_FAMILY } from "../../utils/constants"

export const StyledFaqCard = styled.div`
  width: 100%;
  background-color: ${COLOR.WHITE};
`

export const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 35px;
  border: 1px solid ${({ isFocus }) => (isFocus ? "black" : "transparent")};
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 30px;

  a {
    color: ${COLOR.BLUE_VIOLET};
    font-family: ${FONT_FAMILY.SPACE};

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    margin-bottom: 20px;

    li {
      list-style-type: disc;
      margin-left: 20px;
      font-family: ${FONT_FAMILY.SPACE};
    }
  }
`
