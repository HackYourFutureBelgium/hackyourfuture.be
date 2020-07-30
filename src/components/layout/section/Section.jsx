import React from "react"
import PropTypes from "prop-types"

import { StyledSection } from "./style"

const Section = ({ children }) => <StyledSection>{children}</StyledSection>

Section.propTypes = {
  children: PropTypes.any,
}

export default Section
