import React, { FC, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?: "small" | "medium";
    variant?: "default" | "secondary";
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
  padding: ${(props) => (props.size === "small" ? "10px 24px" : "10px 32px")};
  gap: ${(props) => (props.size === "small" ? "10px" : "16px")};
  border-radius: 8px;
  color: #ffffff;
  
  ${(props) =>
        props.variant === "default" &&
        css`
      background: #295bf6;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `}

  ${(props) =>
        props.variant === "secondary" &&
        css`
      background: rgba(255, 255, 255, 0.1);
    `}
`;

export default Button;
