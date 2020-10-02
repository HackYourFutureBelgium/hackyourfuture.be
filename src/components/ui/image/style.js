import React from "react"
import styled from "styled-components"

export const StyledImage = styled(
  ({ width, height, objectFit, radius, alt, ...rest }) => (
    // this empty string is to prevent screenreaders from reading the source of the img, which is the default behavior in some systems
    <img alt={alt || ''} {...rest} />
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
