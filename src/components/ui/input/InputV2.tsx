import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import styled from "styled-components"

type HTMLProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>

export interface InputProps extends HTMLProps {
  id: string
  name?: string
  label?: string
  error?: string
  isRequired?: boolean
  as?: "input" | "textarea"
  resize?: "none" | "both" | "horizontal" | "vertical"
}

const Input: FC<InputProps> = ({
  id,
  name,
  label,
  error,
  isRequired,
  as,
  resize = "none",
  ...props
}) => {
  const isError = Boolean(error)
  return (
    <StyledInputDiv isError={isError}>
      {label && (
        <label htmlFor={id}>
          {label}
          {isRequired && "*"}
        </label>
      )}
      <StyledInput
        as={as}
        id={id}
        isError={isError}
        resize={resize}
        {...props}
      />
      {isError && (
        <StyledInputErrorDiv>
          <span>{error}</span>
        </StyledInputErrorDiv>
      )}
    </StyledInputDiv>
  )
}

export default Input

interface StyledInputDivProps {
  isError: boolean
}

const StyledInputDiv = styled.div<StyledInputDivProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin-bottom: 1.5rem;
  ${({ isError }) => isError && "position: relative;"}
`

interface StyledInputProps extends Pick<InputProps, "resize"> {
  isError: boolean
}

const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid
    ${({ isError }) =>
      isError ? "rgba(250, 0, 0, 0.3)" : "rgba(24, 79, 244, 0.3)"};
  box-shadow: 0 0 0 0.25rem
    ${({ isError }) =>
      isError ? "rgba(250, 0, 0, 0.05)" : "rgba(24, 79, 244, 0.05)"};
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  transition: border 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: 2px solid ${({ isError }) => (isError ? "#fa0000" : "#3505DB")};
    box-shadow: 0 0 0 0.25rem
      ${({ isError }) =>
        isError ? "rgba(250, 0, 0, 0.2)" : "rgba(24, 79, 244, 0.2)"};
  }
  ${({ resize }) => `resize: ${resize}`};
`
const StyledInputErrorDiv = styled.div`
  color: #ff0000;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  top: calc(100% + 0.5rem);
  z-index: 1;
`
