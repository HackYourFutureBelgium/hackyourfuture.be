import styled from "styled-components"

import { COLOR, MEDIA_QUERY, SHADOW } from "../../../utils/constants"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Content = styled.div`
  display: flex;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  box-shadow: ${SHADOW.BOX};
  padding: 40px 50px;
  margin: 10px;

  @media ${MEDIA_QUERY.SMALL_DESKTOP} {
    width: 80%;
  }
  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;

    &:first-child {
      margin-bottom: 50px;
    }
  }
`
