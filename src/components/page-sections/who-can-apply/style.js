import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Content = styled.div`
  display: flex;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  padding-right: 100px;
  width: 45%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    margin-bottom: 40px;
    padding-right: 0;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Li = styled.li`
  position: relative;
  padding-left: 30px;
  margin: 3px 0;

  &:after {
    content: "";
    display: block;
    width: 25px;
    height: 25px;
    border: 2px solid ${COLOR.JACKSON_PURPLE};
    border-radius: 100%;
    position: absolute;
    top: 0px;
    left: -4px;
  }

  > svg {
    position: absolute;
    left: 0;
    top: 4px;
  }
`
