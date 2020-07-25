import React from "react"
import PropTypes from "prop-types"

const Text = ({ is, children, ...props }) => <Is {...props}>{children}</Is>

Text.propTypes = {
  children: PropTypes.node.isRequired,
  is: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
}

Text.defaultProps = {
  is: "p",
}

export default Text
