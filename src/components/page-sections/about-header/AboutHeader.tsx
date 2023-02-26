import React from "react"

import { Title, Section, Wrapper } from "../../ui"
import { COLOR } from "../../../utils/constants"

const data = {
  title: "what is hack your future about?",
}

const AboutHeader = () => (
  <Section>
    <Wrapper>
      <Title level={1} size="l" color={COLOR.BLUE_VIOLET}>
        {data.title}
      </Title>
    </Wrapper>
  </Section>
)

export default AboutHeader
