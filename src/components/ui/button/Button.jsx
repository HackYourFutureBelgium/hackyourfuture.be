import React from "react"
import PropTypes from "prop-types"

import Icon from "../icon"

const Button = ({ children, as, iconLeft, iconRight, isLoading, ...props }) => {
  const El = "p" || "button"

  let iconLeftContent = isLoading ? "spinner" : iconLeft

  return (
    <El {...props}>
      {iconLeftContent && <Icon name={iconLeftContent} data-side="left" />}
      {children}
      {iconRight && <Icon name={iconRight} data-side="right" />}
    </El>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: undefined,
  iconLeft: null,
  iconRight: null,
  isLoading: false,
}

export default Button
