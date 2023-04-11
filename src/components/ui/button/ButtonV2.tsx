import React, { FC, HTMLAttributes, ReactNode } from "react"
import styled, { css } from "styled-components"
import { darken, rgba } from "polished"

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode
  size?: "small" | "medium"
  variant?: "default" | "primary" | "secondary"
  as?: "button" | "a"
}

const Button: FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "default",
  as = "button",
  ...props
}) => (
  <StyledButton size={size} variant={variant} as={as} {...props}>
    {children}
  </StyledButton>
)

type StyledButtonProps = Pick<ButtonProps, "size" | "variant">

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  width: fit-content;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  border-style: none;
  cursor: pointer;
  padding: ${({ size }) =>
    size === "small" ? "0.625rem 1.5rem" : "0.625rem 2rem"};
  gap: ${({ size }) => (size === "small" ? "0.625rem" : "1rem")};
  border-radius: 0.5rem;
  //   TODO: Colors should be replaced with theme colors in the design system
  color: #ffffff;
  transition: background-color 0.2s ease-in-out;

  ${({ variant }) =>
    variant === "default" &&
    css`
      background-color: transparent;
      &:hover {
        background-color: #295bf6;
      }
      &:active {
        background-color: ${darken(0.2, "#295bf6")};
      }
      &:focus {
        outline: 2px solid #295bf6;
      }
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #295bf6;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      &:active {
        background-color: ${darken(0.2, rgba(255, 255, 255, 0.1))};
      }
      &:focus {
        outline: 2px solid #ffffff;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: rgba(255, 255, 255, 0.1);
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:active {
        background-color: ${darken(0.2, rgba(255, 255, 255, 0.2))};
      }
      &:focus {
        outline: 2px solid #295bf6;
      }
    `}
`

export default Button
