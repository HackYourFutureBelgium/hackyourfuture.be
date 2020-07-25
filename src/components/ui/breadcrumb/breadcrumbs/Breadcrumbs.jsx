import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbs } from "./style";

const Breadcrumbs = ({ children }) => {
  return <StyledBreadcrumbs>{children}</StyledBreadcrumbs>;
};

Breadcrumbs.propTypes = {
  children: PropTypes.node,
};

export default Breadcrumbs;
