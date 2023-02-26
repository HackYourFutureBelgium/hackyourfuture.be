import PropTypes from "prop-types"

const Title = ({ level, children, ...props }) => {
  const H = `h${level}`
  // @ts-ignore
  return <H {...props}>{children}</H>
}

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
}

Title.defaultProps = {
  level: 1,
}

export default Title
