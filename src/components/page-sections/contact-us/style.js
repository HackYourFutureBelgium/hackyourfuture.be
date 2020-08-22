import React from "react"
import styled from "styled-components"

export const Form = styled(props => <form {...props} />)`
  display: flex;
  flex-direction: column;
`

export const Input = styled(props => <input {...props} />)`
  border: 1px solid white;
  border-radius: 3px;
  outline: none;
  background-color: transparent;
`

export const Textarea = styled(props => <textarea {...props} />)`
  border: 1px solid white;
  border-radius: 3px;
  outline: none;
  background-color: transparent;
`
