import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const StyledIcon = styled.i`
  display: inline-flex;
  width: 10px;
  height: 10px;
`

const getIcon = name => {
  switch (name) {
    case "minus":
      return faMinus
    case "plus":
    default:
      return faPlus
  }
}

const Icon = ({ name }) => <FontAwesomeIcon icon={getIcon(name)} />

Icon.propTypes = {
  name: PropTypes.oneOf(["plus", "minus"]).isRequired,
}

Icon.defaultProps = {
  name: "plus",
}

export default Icon
