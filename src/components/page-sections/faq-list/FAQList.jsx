import React from "react"

import { StyledFAQList } from "./style.js"
import Section from "../../layout/section"
import FAQCard from "../../faq-card"
import { Pane } from "../../ui"
import { SHADOW } from "../../../utils/constants"

const data = {
  applicants: [
    {
      question: "What is the application process?",
      answer:
        "We're a non-profit that relies on support from people like you. Thanks to your support we can keep our program free of charge for all of our students.",
    },
    {
      question: "What is the application process?",
      answer:
        "We're a non-profit that relies on support from people like you. Thanks to your support we can keep our program free of charge for all of our students.",
    },
    {
      question: "What is the application process?",
      answer:
        "We're a non-profit that relies on support from people like you. Thanks to your support we can keep our program free of charge for all of our students.",
    },
    {
      question: "What is the application process?",
      answer:
        "We're a non-profit that relies on support from people like you. Thanks to your support we can keep our program free of charge for all of our students.",
    },
  ],
}

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
        {data.applicants.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Pane>
    </Section>
  </StyledFAQList>
)

export default FAQList
