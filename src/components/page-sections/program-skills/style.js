import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 350px;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    margin-bottom: 50px;
  }
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 600px;
  flex-wrap: wrap;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    justify-content: center;
  }
`
