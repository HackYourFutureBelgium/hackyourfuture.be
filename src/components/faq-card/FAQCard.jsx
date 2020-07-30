import React from "react"
import PropTypes from "prop-types"

import { StyledFaqCard, StyledContent, StyledMain } from "./style"
import { Collapse, Text, Icon } from "../ui"

const FAQCard = ({ question, answer }) => (
  <StyledFaqCard>
    <Collapse
      content={<StyledContent tag="span">{answer}</StyledContent>}
      main={isContentOpen => (
        <StyledMain>
          <Text>{question}</Text>
          <Icon name="plus" />
        </StyledMain>
      )}
    />
  </StyledFaqCard>
)

FAQCard.propTypes = {
  answer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
}

export default FAQCard
