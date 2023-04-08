import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: string
  isRequired?: boolean
}

const Input = ({ name, label, error, isRequired, ...props }: InputProps) => {
  return (
    <StyledInputDiv>
      {label && (
        <label htmlFor={name}>
          {label}{isRequired && "*"}
        </label>
      )}
      <StyledInput name={name} {...props} />
      {error && <StyledInputErrorDiv>{error}</StyledInputErrorDiv>}
    </StyledInputDiv>
  )
}

export default Input

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`
const StyledInput = styled.input`
  border: 1px solid rgba(24, 79, 244, 0.3);
  box-shadow: 0px 0px 0px 4px rgba(24, 79, 244, 0.05);
  background: #ffffff;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  transition: border 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  &:focus {
    outline: 2px solid #184ff4;
    box-shadow: 0px 0px 0px 4px rgba(24, 79, 244, 0.2);
  }
`
const StyledInputErrorDiv = styled.div`
  color: #ff0000;
  font-size: 12px;
  font-weight: 400;
`
