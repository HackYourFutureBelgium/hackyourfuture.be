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
  faCheck,
  faEnvelope,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons"

import Linkedin from "../../../assets/illustrations/linkedin.svg"
import Twitter from "../../../assets/illustrations/twitter.svg"

const getIcon = name => {
  switch (name) {
    case "spinner":
      return faSpinner
    case "envelope":
      return faEnvelope
    case "check":
      return faCheck
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

const Icon = ({ name, color, ...props }) => {
  if (["twitter", "linkedin"].includes(name)) {
    // if (name === "twitter") return <Twitter />
    // else if (name === "linkedin") return <Linkedin />
    return null
  } else {
    return (
      <FontAwesomeIcon
        icon={getIcon(name)}
        {...props}
        pulse={name === "spinner"}
        style={{ color: color || "inherit" }}
      />
    )
  }
}
Icon.propTypes = {
  name: PropTypes.oneOf([
    "plus",
    "minus",
    "times",
    "arrow-left",
    "arrow-right",
    "bars",
    "search",
    "check",
    "envelope",
    "spinner",
  ]).isRequired,
}

Icon.defaultProps = {
  name: "plus",
}

export default Icon
