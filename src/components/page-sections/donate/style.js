import React from "react"
import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Ul = styled.ul`
  display: flex;
`

export const Li = styled(({ ...props }) => <li {...props} />)`
  display: flex;
  border: 1px solid ${COLOR.JACKSON_PURPLE};
  color: ${COLOR.JACKSON_PURPLE};
  padding: 15px 20px;
  cursor: pointer;
  justify-content: center;

  &:last-child {
    flex-grow: 1;
  }
`

export const FormSection = styled(({ direction, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`

FormSection.defaultProps = { direction: "column" }

export const RadioLabel = styled(({ htmlFor, id, ...props }) => (
  <label htmlFor={htmlFor} {...props} />
))`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
`

export const RadioInput = styled(({ ...props }) => <input {...props} />)`
  cursor: pointer;
  margin-right: 10px;
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
  width: 50%;
  /* padding: 50px 100px; */
  border: 1px solid red;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    /* padding: 20px; */
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid red;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
  }
`
