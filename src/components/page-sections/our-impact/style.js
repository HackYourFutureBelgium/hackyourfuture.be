import styled from "styled-components"

import { MEDIA_QUERY, COLOR, SPACER } from "../../../utils/constants"

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 50px 0;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
  }
`

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${MEDIA_QUERY.MOBILE} {
    flex-direction: column;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.BLUE_VIOLET};
  width: 30%;
  padding: ${SPACER.M};

  @media ${MEDIA_QUERY.MOBILE} {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`
