import React from "react"
import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  margin-left: 30vw;
  flex-direction: column;
  width: 100%;

  background-color: ${COLOR.WHITE_LILAC};
  max-width: 65%;
  margin-bottom: 100px;
  padding-bottom: 100px;
`
export const Tle = styled.div`
  display: flex;
  justify-content: center;
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
`

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 10%;
  left:5%;
  right: 40%;
  width: 70%;
  height: 100%;
  
  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: none;
  }`

  export const TextContainer = styled.div`
  position: relative;
  z-index:1;
  padding:15px;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 550px;
  background: ${COLOR.WHITE_LILAC};
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #d0d0d0;
 

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    margin-bottom: 40px;
    margin-left:90px;
    padding-right: 0;
  }`