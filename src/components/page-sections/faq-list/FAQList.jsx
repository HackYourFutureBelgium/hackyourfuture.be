import React from "react"

import { StyledFAQList } from "./style.js"
import Section from "../../layout/section"
import FAQCard from "../../faq-card"
import { Title, Pane, Text } from "../../ui"
import { SHADOW } from "../../../utils/constants"

const FAQList = () => (
  <StyledFAQList>
    <Section>
      <Pane
        margin="20px 0"
        direction="column"
        alignItems="center"
        width="100%"
        boxShadow={SHADOW.BOX}
      >
        <FAQCard question="What?" answer="answer..." />
      </Pane>
    </Section>
  </StyledFAQList>
)

export default FAQList
