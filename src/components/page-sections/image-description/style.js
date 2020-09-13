import React from "react"
import styled from "styled-components"

import { MEDIA_QUERY, COLOR } from "../../../utils/constants"

export const LeftContainer = styled(({ isReverse, ...rest }) => (
  <div {...rest} />
))`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

  > [data-target="link"],
  > a {
    margin-left: -20px;
  }

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 1;
    padding: 0 0 20px 0;
  }
`

export const RightContainer = styled(
  ({ isReverse, hasRectangleBackground, ...rest }) => <div {...rest} />
)`
  display: flex;
  width: 50%;
  height: 100%;
  min-height: 400px;
  order: ${({ isReverse }) => (isReverse ? 1 : 2)};
  padding: ${({ isReverse }) => (isReverse ? "0 50px 0 0" : "0 0 0 50px")};
  align-items: stretch;

  ${({ hasRectangleBackground }) =>
    hasRectangleBackground &&
    `
      > div:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: -15%;
        left: 40%;
        background-color: #F8F9FF;
        z-index: -1;
      }
    `}

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
