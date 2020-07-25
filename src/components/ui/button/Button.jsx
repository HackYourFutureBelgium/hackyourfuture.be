import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, component, ...props }) => {
  const El = component || "button";

  return (
    <El type={component} {...props}>
      {children}
    </El>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: undefined,
};

export default Button;
