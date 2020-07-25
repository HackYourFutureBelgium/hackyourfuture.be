import React from "react"
import styled from "styled-components"

import Text from "./Text"

export const StyledText = styled(({ ...rest }) => <Text {...rest} />)`
  display: inline-flex;
  color: black;
`
