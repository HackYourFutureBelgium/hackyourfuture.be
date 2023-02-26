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

import linkedin from "../../../assets/illustrations/linkedin.svg"
import twitter from "../../../assets/illustrations/twitter.svg"
import mail from "../../../assets/social/mail.svg"

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
  if (["twitter", "linkedin", "mail"].includes(name)) {
    if (name === "twitter")
      return (
        <img
          alt="twitter"
          src={twitter}
          style={{ width: "15px", height: "15px", objectFit: "contain" }}
        />
      )
    else if (name === "linkedin")
      return (
        <img
          alt="linkedin"
          src={linkedin}
          style={{ width: "15px", height: "15px", objectFit: "contain" }}
        />
      )
    else if (name === "mail")
      return (
        <img
          alt="mail"
          src={mail}
          style={{ width: "15px", height: "15px", objectFit: "contain" }}
        />
      )
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

Icon.defaultProps = {
  name: "plus",
}

export default Icon
