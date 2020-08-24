import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  z-index: 2;
  max-width: 45%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    max-width: 100%;
  }
`

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: none;
  }
`
