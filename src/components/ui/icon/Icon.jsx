import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faMinus,
  faTimes,
  faBars,
  faArrowLeft,
  faArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"

const getIcon = name => {
  switch (name) {
    case "search":
      return faSearch
    case "arrow-right":
      return faArrowRight
    case "arrow-left":
      return faArrowLeft
    case "bars":
      return faBars
    case "times":
      return faTimes
    case "minus":
      return faMinus
    case "plus":
    default:
      return faPlus
  }
}

const Icon = ({ name, ...props }) => (
  <FontAwesomeIcon icon={getIcon(name)} {...props} />
)

Icon.propTypes = {
  name: PropTypes.oneOf([
    "plus",
    "minus",
    "times",
    "arrow-left",
    "arrow-right",
    "bars",
    "search",
  ]).isRequired,
}

Icon.defaultProps = {
  name: "plus",
}

export default Icon
