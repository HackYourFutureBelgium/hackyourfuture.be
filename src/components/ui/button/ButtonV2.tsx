import React, { FC, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    children?: ReactNode;
    size?: "small" | "medium";
    variant?: "default" | "primary" | "secondary";
    element?: "button" | "a";
}

const Button: FC<Props> = ({ children, size = "medium", variant = "default", element = "button", ...props }) => {

    const StyledElement = element === "button" ? StyledButton : StyledAnchor as FC<StyledButtonProps>;

    return (
        <StyledElement size={size} variant={variant} {...props} >
            {children}
        </StyledElement>
    )
}
interface StyledButtonProps {
    size: Props["size"];
    variant: Props["variant"];
}


const getDefaultStyles = ({ size, variant }: StyledButtonProps) => css`
display: flex;
width: fit-content;
font-family: "Poppins", sans-serif;
font-size: 16px;
border-style: none;
  cursor: pointer;
  padding: ${size === "small" ? "10px 24px" : "10px 32px"};
  gap: ${size === "small" ? "10px" : "16px"};
  border-radius: 8px;
//   TODO: Colors should be replaced with theme colors in the design system
  color: #ffffff; 
  transition: background-color 0.2s ease-in-out;

  ${variant === "default" &&
    css`
        background-color: transparent;
        &:hover {
            background-color: #295bf6;
        }
    `}
  
  ${variant === "primary" &&
    css`
      background-color: #295bf6;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `}

  ${variant === "secondary" &&
    css`
      background-color: rgba(255, 255, 255, 0.1);
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `}
`;
const StyledButton = styled.button<StyledButtonProps>`
${getDefaultStyles}
`;

const StyledAnchor = styled.a<StyledButtonProps>`
${getDefaultStyles}
`;

export default Button;
