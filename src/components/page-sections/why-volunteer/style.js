import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const TasksContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;

  @media ${MEDIA_QUERY.MOBILE} {
    flex-direction: column;
  }
`

export const TaskContainer = styled.div`
  display: flex;
  width: 50%;
  padding: 20px;

  @media ${MEDIA_QUERY.MOBILE} {
    width: 100%;
  }
`
