import React from "react"
import PropTypes from "prop-types"

const Text = ({ is: Is, children, isWhite, ...props }) => (
  <Is {...props}>{children}</Is>
)

Text.propTypes = {
  children: PropTypes.node,
  is: PropTypes.string,
  isWhite: PropTypes.bool,
}

Text.defaultProps = {
  is: "p",
  isWhite: false,
}

export default Text
