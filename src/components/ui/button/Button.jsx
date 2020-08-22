import React from "react"
import PropTypes from "prop-types"

import Icon from "../icon"

const Button = ({ children, component, iconLeft, iconRight, ...props }) => {
  const El = component || "button"

  return (
    <El type={component} {...props}>
      {iconLeft && <Icon name={iconLeft} data-side="left" />}
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
}

export default Button
