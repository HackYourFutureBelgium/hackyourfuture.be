import React from "react"
import PropTypes from "prop-types"
import { StickyNoteContainer } from "./style"

const Note = ({ text }) => {
  return <StickyNoteContainer>{text}</StickyNoteContainer>
}

Note.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Note
