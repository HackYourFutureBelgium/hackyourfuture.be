/**
 * Landing Layout
 *
 * This component is use to define the landing page base layout.
 * - Include the top bar
 * - Include the footer
 */

import React from "react"
import PropTypes from "prop-types"

import { StyledLandingLayout, StyledMain } from "./style"
import TopBar from "../../top-bar/TopBar"
import Footer from "../../footer/Footer"

const LandingLayout = ({ isFullWidth, children }) => {
  return (
    <StyledLandingLayout>
      <TopBar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLandingLayout>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node,
  /**
   * isFullWidth define if the layout take full width of window or the
   * maximum width defined by breakpoints inside the style
   */
  isFullWidth: PropTypes.bool,
}

LandingLayout.defaultProps = {
  isFullWidth: false,
}

export default LandingLayout
