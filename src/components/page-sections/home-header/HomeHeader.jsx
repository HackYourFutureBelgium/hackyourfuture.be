import React from "react"

import { Title, Pane, Text, Section, Wrapper } from "../../ui"

const data = {
  title: "Helping new talent into the tech world",
  description:
    "HackYourFuture is a free <b>8-month web development program</b> for passionate refugees and other disadvantaged people with limited access to education and the labor market.",
}

const HomeHeader = () => (
  <Section>
    <Wrapper>
      <Pane
        margin="60px 0 30px 0"
        direction="column"
        alignItems="center"
        maxWidth="800px"
      >
        <Title level={1} size="XL" isUpperCase isCenter>
          {data.title}
        </Title>
        <Text
          isCenter
          maxWidth="470px"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </Pane>
    </Wrapper>
  </Section>
)

export default HomeHeader
