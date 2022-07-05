import React from "react"
import PropTypes from "prop-types"

import { StyledBreadcrumbItem } from "./style"

const BreadcrumbItem = ({ children }) => {
  return <StyledBreadcrumbItem>{children}</StyledBreadcrumbItem>
}

BreadcrumbItem.propTypes = {
  children: PropTypes.node,
}

export default BreadcrumbItem
