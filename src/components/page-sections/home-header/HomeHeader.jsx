import React from "react"

import { Container } from "./style"
import { Title, Section, Wrapper } from "../../ui"
import homeHeaderImageUrl from "../../../assets/images/home-header.jpg"

const data = {
  title: "Helping new talent into the tech world",
}

const HomeHeader = () => (
  <Section
    background={`transparent url(${homeHeaderImageUrl}) no-repeat center center`}
    hasOverlay
  >
    <Wrapper>
      <Container>
        <Title level={1} size="XL" isUpperCase isCenter isWhite>
          {data.title}
        </Title>
      </Container>
    </Wrapper>
  </Section>
)

export default HomeHeader
