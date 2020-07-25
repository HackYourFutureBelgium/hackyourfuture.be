import React from "react"
import PropTypes from "prop-types"

import { StyledHeader } from "./style"
import Logo from "../logo/Logo"
import TopNav from "../navigation/top-nav/TopNav"

const TopBar = props => {
  return (
    <StyledHeader>
      <Logo />
      <TopNav />
    </StyledHeader>
  )
}

TopBar.propTypes = {}

TopBar.defaultProps = {}

export default TopBar
