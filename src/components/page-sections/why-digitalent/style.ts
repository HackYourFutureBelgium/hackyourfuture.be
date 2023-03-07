import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"


export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }

`
export const Card = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  padding: 30px;
  max-width: 550px;
  z-index: 1;
  background: ${COLOR.WHITE_LILAC};
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #d0d0d0;

  @media ${MEDIA_QUERY.SMALL_DESKTOP} {
    width: 48%;
  }
  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;

    &:first-child {
      margin-bottom: 50px;
    }
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
  color: ${COLOR.WHITE_LILAC};

  &:after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border: 2px solid ${COLOR.BLUE_VIOLET};
    border-radius: 100%;
    position: absolute;
    top: 4px;
    left: 1px;
  }
  > svg {
    position: absolute;
    left: 0;
    top: 4px;
    transform: scale(0.7);
  }
`

export const AbsoluteContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  min-height: 400px;
  right: 7%;
  z-index: -1;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: none;
  }
`
