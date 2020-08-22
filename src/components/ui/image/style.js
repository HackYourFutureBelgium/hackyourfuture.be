import React from "react"
import styled from "styled-components"

export const StyledImage = styled(
  ({ width, height, objectFit, radius, alt, ...rest }) => (
    <img alt={alt} {...rest}></img>
  )
)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ objectFit }) => objectFit};
  border-radius: ${({ radius }) => radius};
`

StyledImage.defaultProps = {
  width: "auto",
  height: "auto",
  objectFit: "fill",
  radius: "0",
}
