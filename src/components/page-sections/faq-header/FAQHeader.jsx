import React from "react"

import { Title, Text, Section, Wrapper } from "../../ui"

const data = {
  title: "FAQ",
  intro: "frequently asked questions for applicants, volunteers & partners",
}

const FAQHeader = () => (
  <Section>
    <Wrapper direction="column">
      <Title level={1} size="L">
        {data.title}
      </Title>
      <Text textAlign="center" maxWidth="470px">
        {data.intro}
      </Text>
    </Wrapper>
  </Section>
)

export default FAQHeader
