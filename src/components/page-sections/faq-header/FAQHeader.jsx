import React from "react"

import { StyledFAQHeader } from "./style.js"
import Section from "../../layout/section"
import { Title, Pane, Text } from "../../ui"

const FAQHeader = () => (
  <StyledFAQHeader>
    <Section>
      <Pane margin="20px 0" direction="column" alignItems="center">
        <Title level={2} isUpperCase>
          FAQ
        </Title>
        <Text textAlign="center" maxWidth="470px">
          We have an amazing community of developers. Do you want to help us out
          to make the tech industry more inclusive and make new friends? Join
          our community!
        </Text>
      </Pane>
    </Section>
  </StyledFAQHeader>
)

export default FAQHeader
