import React from "react"
import styled from "styled-components"

import { MEDIA_QUERY, SHADOW } from "../../../utils/constants"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  box-shadow: ${SHADOW.BOX};
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
