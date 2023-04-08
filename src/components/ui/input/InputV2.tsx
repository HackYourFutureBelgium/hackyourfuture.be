import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: string
  isRequired?: boolean
}

const Input = ({
  name,
  label,
  error,
  isRequired,
  ...props
}: InputProps) => {
  return (
    <StyledInputDiv>
      {label && (
        <label htmlFor={name}>
          {label}
          {isRequired && "*"}
        </label>
      )}
      <StyledInput name={name} error={error} {...props} />
      <StyledInputErrorDiv>
        <span>{error}</span>
      </StyledInputErrorDiv>
    </StyledInputDiv>
  )
}

export default Input
const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin-bottom: 1.5rem;
  position: relative;
`

type StyledInputProps = Pick<InputProps, "error">

const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid
    ${({ error }) =>
      error ? "rgba(250, 0, 0, 0.3)" : "rgba(24, 79, 244, 0.3)"};
  box-shadow: 0 0 0 0.25rem
    ${({ error }) =>
      error ? "rgba(250, 0, 0, 0.05)" : "rgba(24, 79, 244, 0.05)"};
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 16px;
  transition: border 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  &:focus {
    outline: 2px solid ${({ error }) => (error ? "#fa0000" : "#184ff4")};
    box-shadow: 0 0 0 0.25rem
      ${({ error }) =>
        error ? "rgba(250, 0, 0, 0.2)" : "rgba(24, 79, 244, 0.2)"};
  }
`
const StyledInputErrorDiv = styled.div`
  color: #ff0000;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  top: calc(100% + 0.25rem);
  z-index: 1;
`
