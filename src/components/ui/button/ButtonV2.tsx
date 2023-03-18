import React, { FC, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?: "small" | "medium";
    variant?: "default" | "primary" | "secondary";
}

const Button: FC<Props> = ({ children, size = "medium", variant = "default", ...props }) => (
    <StyledButton size={size} variant={variant} {...props}>
        {children}
    </StyledButton>
);

interface StyledButtonProps {
    size: Props["size"];
    variant: Props["variant"];
}

const StyledButton = styled.button<StyledButtonProps>`
  border-style: none;
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
`;

export default Button;
