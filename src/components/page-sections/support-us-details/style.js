import styled from "styled-components"

import { MEDIA_QUERY, SHADOW } from "../../../utils/constants"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  box-shadow: ${SHADOW.BOX};
  padding: 40px 50px;
  margin-bottom: 50px;

  > img {
    margin-bottom: 20px;
  }

  @media ${MEDIA_QUERY.SMALL_DESKTOP} {
    width: 48%;
  }
  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;

    &:first-child {
      margin-bottom: 50px;
    }
  }
`
