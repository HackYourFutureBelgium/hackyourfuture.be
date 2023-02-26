import React from "react"

import { StyledCheckboxContainer, StyledInput, StyledLabel } from "./style"

const Checkbox = ({ label, id, ...props }) => {
  return (
    <StyledCheckboxContainer>
      <StyledInput type="checkbox" id={id || label || ""} {...props} />
      {label && <StyledLabel htmlFor={id || label}>{label}</StyledLabel>}
    </StyledCheckboxContainer>
  )
}

export default Checkbox
