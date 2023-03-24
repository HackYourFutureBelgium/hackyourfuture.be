import React, { FC, HTMLAttributes, ReactNode } from "react"
import styled, { css } from "styled-components"

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

interface StyledButtonProps {
  size: ButtonProps["size"]
  variant: ButtonProps["variant"]
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  width: fit-content;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  border-style: none;
  cursor: pointer;
  padding: ${({ size }) => (size === "small" ? "10px 24px" : "10px 32px")};
  gap: ${({ size }) => (size === "small" ? "10px" : "16px")};
  border-radius: 8px;
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
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #295bf6;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: rgba(255, 255, 255, 0.1);
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `}
`

export default Button
