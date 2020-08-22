import React from "react"
import styled from "styled-components"

export const RadioLabel = styled(({ htmlFor, id, ...props }) => (
  <label htmlFor={htmlFor} {...props} />
))`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const RadioInput = styled(({ ...props }) => <input {...props} />)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const RadioCheckMark = styled(({ ...props }) => <span {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: red;
  }

  ${RadioLabel}:checked ~ & {
    border: 1px solid black;
  }
  ${RadioLabel}:checked ~ &:after {
    display: block;
  }

  ${RadioLabel}:hover & {
    background-color: beige;
  }
`
