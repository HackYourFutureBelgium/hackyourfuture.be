import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

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
