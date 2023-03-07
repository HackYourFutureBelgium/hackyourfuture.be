import React from "react"

const Text = ({ as: As, children, isWhite, ...props }) => (
  <As {...props}>{children}</As>
)

Text.defaultProps = {
  as: "p",
  isWhite: false,
}

export default Text
