import React from "react"
import styled from "styled-components"

import { SHADOW, MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled(({ isReverse, ...props }) => (
  <div {...props} />
))`
  display: flex;
  width: 100%;
  justify-content: ${({ isReverse }) =>
    isReverse ? "flex-end" : "flex-start"};
  align-items: flex-end;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const PictureContainer = styled(({ isReverse, ...props }) => (
  <div {...props} />
))`
  display: flex;
  width: 50%;
  min-width: 50%;
  order: ${({ isReverse }) => (isReverse ? 2 : 1)};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    order: 1;
    min-width: 100%;
  }
`

export const QuoteContainer = styled(({ isReverse, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: ${({ isReverse }) => (isReverse ? "flex-end" : "flex-start")};
  max-width: 500px;
  order: ${({ isReverse }) => (isReverse ? 1 : 2)};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    order: 2;
    max-width: 100%;
  }
`

export const ContentContainer = styled(({ isReverse, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  box-shadow: ${SHADOW.BOX};
  padding: 40px 50px;
`
