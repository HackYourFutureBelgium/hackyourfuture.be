import React, { useState } from "react"

import { InputContainer, StyledInput } from "./style"
import Icon from "../icon"

const Input = ({ icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <InputContainer isFocused={isFocused} hasExtraPaddingLeft={!!icon}>
      {icon ? <Icon name={icon} /> : null}
      <StyledInput
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        {...props}
      />
    </InputContainer>
  )
}

export default Input
