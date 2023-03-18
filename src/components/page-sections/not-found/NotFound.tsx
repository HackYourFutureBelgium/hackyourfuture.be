import React from "react"
import { Link } from "gatsby"

import { Title, Text, Section, Wrapper, Button, Pane } from "../../ui"

const data = {
  title: "Oops",
  subtitle: "404 - Page not found",
  intro:
    "We’re trying to HackYourFuture, but you seem to try to hack our website!",
  cta: "Back to home",
}

const NotFound = () => (
  <Section>
    <Wrapper>
      <Title level={1} size="xl">
        {data.title}
      </Title>
      <Title isCenter level={2} size="l">
        {data.subtitle}
      </Title>
      <Pane maxWidth="400px" margin="20px 0 40px 0">
        <Text isCenter>{data.intro}</Text>
      </Pane>
      <LegacyButton as={Link} to="/">
        {data.cta}
      </LegacyButton>
    </Wrapper>
  </Section>
)

export default NotFound
