import styled from "styled-components"

import { MEDIA_QUERY, SHADOW } from "../../../utils/constants"

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:5px;
  align-items: center;
  box-shadow: 5px 4px 8px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;

  @media ${MEDIA_QUERY.SMALL_DESKTOP} {
    /* width: 48%; */
  }
  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`
