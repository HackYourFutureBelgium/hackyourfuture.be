import Icon from "../icon"
import React from "react"

const Button = ({ children, is, iconLeft, iconRight, isLoading, ...props }) => {
  const El = is || "button"

  const iconLeftContent = isLoading ? "spinner" : iconLeft

  return (
    <El {...props}>
      {iconLeftContent && <Icon name={iconLeftContent} data-side="left" />}
      {children}
      {iconRight && <Icon name={iconRight} data-side="right" />}
    </El>
  )
}

Button.defaultProps = {
  children: undefined,
  iconLeft: null,
  iconRight: null,
  isLoading: false,
}

export default Button
