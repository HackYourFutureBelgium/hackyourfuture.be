import React, { FC, HTMLAttributes, ReactNode } from "react"

import { StyledButton, StyledButtonProps } from './Button.styles'

type ButtonElementProps = {
  children?: ReactNode
  as?: "button"
} & StyledButtonProps & HTMLAttributes<HTMLButtonElement>

type AnchorElementProps = {
  children?: ReactNode
  as?: "a"
} & StyledButtonProps & HTMLAttributes<HTMLAnchorElement>

export type ButtonProps = ButtonElementProps | AnchorElementProps

export const Button: FC<ButtonProps> = ({
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
