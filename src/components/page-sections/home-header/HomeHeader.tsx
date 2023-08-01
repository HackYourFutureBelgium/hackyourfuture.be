import React from "react"

import { Container } from "./style"
import { Title, Section, Wrapper } from "../../ui"
import homeHeaderImageUrl from "../../../assets/images/home-header.jpg"

const data = {
  title: "Helping new talent into the tech world",
}

type HomeHeaderProps = {
  title: string
}

const HomeHeader = ({ title }: HomeHeaderProps) => (
  <Section
    background={`transparent url(${homeHeaderImageUrl}) no-repeat center center`}
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

export default HomeHeader
