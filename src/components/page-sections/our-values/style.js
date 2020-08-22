import styled from "styled-components"

import { COLOR, MEDIA_QUERY, SPACER } from "../../../utils/constants"

export const Container = styled.div`
  display: flex;
  background-color: ${COLOR.WHITE_LILAC};
  padding: 100px;
  flex-direction: column;

  @media ${MEDIA_QUERY.TABLET} {
    padding: 50px;
  }
  @media ${MEDIA_QUERY.MOBILE} {
    padding: 20px;
  }
`

export const Card = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-start;

  > img {
    margin-bottom: ${SPACER.M};
  }

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-between;

  @media ${MEDIA_QUERY.DESKTOP} {
    > ${Card}:nth-child(1) {
      margin-bottom: ${SPACER.L};
    }
    > ${Card}:nth-child(2) {
      margin-bottom: ${SPACER.L};
    }
  }

  @media ${MEDIA_QUERY.SMALL_DESKTOP} {
    > ${Card}:nth-child(1) {
      margin-bottom: ${SPACER.L};
    }
    > ${Card}:nth-child(2) {
      margin-bottom: ${SPACER.L};
    }
  }

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;

    > ${Card}:not(:last-child) {
      margin-bottom: ${SPACER.L};
    }
  }
`
