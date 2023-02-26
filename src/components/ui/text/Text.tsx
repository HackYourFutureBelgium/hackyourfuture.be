import PropTypes from "prop-types"

const Text = ({ as: As, children, isWhite, ...props }) => (
  <As {...props}>{children}</As>
)

Text.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  isWhite: PropTypes.bool,
}

Text.defaultProps = {
  as: "p",
  isWhite: false,
}

export default Text
