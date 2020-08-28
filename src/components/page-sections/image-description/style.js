import React from "react"
import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const LeftContainer = styled(({ isReverse, ...rest }) => (
  <div {...rest} />
))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 50px 0 0;
  padding: ${({ isReverse }) => (isReverse ? "0 0 0 50px" : "0 50px 0 0")};
  width: 50%;
  order: ${({ isReverse }) => (isReverse ? 2 : 1)};

  > p {
    margin-bottom: 20px;
  }

  > h4 {
    margin-bottom: 5px;
  }

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 1;
    padding: 0 0 20px 0;
  }
`

export const RightContainer = styled(({ isReverse, ...rest }) => (
  <div {...rest} />
))`
  width: 50%;
  height: 100%;
  min-height: 400px;
  order: ${({ isReverse }) => (isReverse ? 1 : 2)};
  padding: ${({ isReverse }) => (isReverse ? "0 50px 0 0" : "0 0 0 50px")};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 2;
    padding: 0;
  }
`

export const Container = styled(({ hasPadding, ...rest }) => <div {...rest} />)`
  width: 100%;
  display: flex;
  margin: ${({ hasPadding }) => (hasPadding ? "50px 0" : "0")};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
  @media ${MEDIA_QUERY.MOBILE} {
    margin: 0;
  }
`

Container.defaultProps = {
  hasPadding: false,
}
