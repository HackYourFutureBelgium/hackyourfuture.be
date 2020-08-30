import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-items: flex-start;
`

export const Input = styled.input`
  border: 1px solid white;
  border-radius: 3px;
  outline: none;
  background-color: transparent;
  padding: 10px 5px;
  color: white;
  width: 100%;
`

export const Textarea = styled.textarea`
  border: 1px solid white;
  border-radius: 3px;
  outline: none;
  padding: 10px 5px;
  color: white;
  background-color: transparent;
  margin-bottom: 20px;
  width: 100%;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  width: 100%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: ${COLOR.BLUE_VIOLET};
  padding: 50px 100px;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    padding: 20px;
  }
`

export const RightContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  min-height: 400px;
  padding-left: 60px;
  background-color: transparent;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    padding-left: 0;
    height: 200px;
  }
`
