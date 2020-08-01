import React from "react"

import { StyledHomeHeader } from "./style.js"
import Section from "../../layout/section"
import { Title, Pane, Text, Button } from "../../ui"

const data = {
  title: "Hack Your Future",
  description:
    "HackYourFuture is a free 7-month web development program for talented refugees in Belgium with limited access to education and the labor market.",
  cta: "Apply now",
}

const HomeHeader = () => (
  <StyledHomeHeader>
    <Section>
      <Pane margin="60px 0 30px 0" direction="column" alignItems="center">
        <Title level={1} isUpperCase>
          {data.title}
        </Title>
        <Text textAlign="center" maxWidth="470px">
          {data.description}
        </Text>
        <Button>{data.cta}</Button>
      </Pane>
    </Section>
  </StyledHomeHeader>
)

export default HomeHeader
