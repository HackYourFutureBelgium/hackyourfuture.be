import React from "react"

import { StyledHomeHeader } from "./style.js"
import Section from "../../layout/section"
import { Title, Pane, Text } from "../../ui"

const HomeHeader = () => (
  <StyledHomeHeader>
    <Section>
      <Pane margin="100px 0" direction="column" alignItems="center">
        <Title level={1} isUpperCase>
          Hack Your Future
        </Title>
        <Text textAlign="center" maxWidth="470px">
          HackYourFuture is a free 7-month web development program for talented
          refugees in Belgium with limited access to education and the labor
          market.
        </Text>
      </Pane>
    </Section>
  </StyledHomeHeader>
)

export default HomeHeader
