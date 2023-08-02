import React from "react"

import { Container, Wrapper, Title } from "./HomeHeader.styles"

type HomeHeaderProps = {
  title: string,
  image?: string
}

export const HomeHeader = ({ title, image }: HomeHeaderProps) => (
  <Container style={{ background: `transparent url(${image}) no-repeat center center` }}>
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  </Container>
)
