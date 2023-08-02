import React from "react"
import styled from "styled-components"

import { COLOR, MEDIA_QUERY, FONT_FAMILY } from "../../../utils/constants"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Ul = styled.ul`
  display: flex;
  margin: 20px 0;
`

export const Input = styled(({ isDisabled, ...props }) => <input {...props} />)`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${COLOR.JACKSON_PURPLE};
  margin: 20px 0;
  font-size: 18px;
  padding: 5px;
  box-sizing: border-box;
  color: ${COLOR.JACKSON_PURPLE};
  background-color: transparent;
  outline: none;
`

export const Li = styled(({ isActive, ...props }) => (
  <li tabIndex={0} {...props} />
))`
  display: flex;
  border: 1px solid ${COLOR.JACKSON_PURPLE};
  color: ${({ isActive }) => (isActive ? "white" : COLOR.JACKSON_PURPLE)};
  padding: 15px 20px;
  cursor: pointer;
  justify-content: center;
  background-color: ${({ isActive }) =>
    isActive ? COLOR.JACKSON_PURPLE : "white"};
  font-family: ${FONT_FAMILY.POPPINS};

  &:not(:last-child) {
    border-right: none;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${COLOR.JACKSON_PURPLE};
    color: white;
  }

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    padding: 5px 10px;
    align-items: center;
  }
`

export const FormSection = styled(({ direction, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: ${({ direction }) => direction};

  &:first-child {
    margin-bottom: 20px;
  }
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
  overflow: hidden;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 80px;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    margin-top: 50px;
  }
`
