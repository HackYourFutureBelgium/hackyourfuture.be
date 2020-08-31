import React from "react"
import PropTypes from "prop-types"

import Icon from "../icon"

const ButtonMinimal = ({ children, as, isLoading, ...props }) => {
  const El = as || "button"

  return (
    <El {...props}>
      {children}
      <Icon name="arrow-right" data-side="right" />
    </El>
  )
}

ButtonMinimal.propTypes = {
  children: PropTypes.node,
}

ButtonMinimal.defaultProps = {
  children: undefined,
  iconLeft: null,
  iconRight: null,
  isLoading: false,
}

export default ButtonMinimal
