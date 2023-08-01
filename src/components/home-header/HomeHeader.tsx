import React from "react"

import { Container } from "./HomeHeader.styles"
import { Title, Section, Wrapper } from "../ui"
// import homeHeaderImageUrl from "../../../assets/images/home-header.jpg"

type HomeHeaderProps = {
  title: string,
  image?: string
}

export const HomeHeader = ({ title, image }: HomeHeaderProps) => (
  <Section
    background={`transparent url(${image}) no-repeat center center`}
    style={{ backgroundSize: "cover" }}
    hasOverlay
  >
    <Wrapper>
      <Container>
        <Title level={1} size="XL" isUpperCase isCenter isWhite>
          {title}
        </Title>
      </Container>
    </Wrapper>
  </Section>
)
