import React from "react"

import { Title, Section, Wrapper } from "../../ui"

const data = {
  title: "what is hack your future about",
}

const AboutHeader = () => (
  <Section>
    <Wrapper>
      <Title level={1} size="xl">
        {data.title}
      </Title>
    </Wrapper>
  </Section>
)

export default AboutHeader
