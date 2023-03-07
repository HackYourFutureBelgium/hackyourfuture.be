import React from "react"

const Title = ({ level, children, ...props }) => {
  const H = `h${level}`
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <H {...props}>{children}</H>
}

Title.defaultProps = {
  level: 1,
}

export default Title
