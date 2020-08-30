import React from "react"
import PropTypes from "prop-types"

import { StyledFaqCard, StyledContent, StyledMain } from "./style"
import { Collapse, Text, Icon } from "../ui"
import { COLOR } from "../../utils/constants"

const FAQCard = ({ question, answer }) => (
  <StyledFaqCard>
    <Collapse
      content={
        <StyledContent tag="span">
          <Text dangerouslySetInnerHTML={{ __html: answer }} />
        </StyledContent>
      }
      main={(isContentOpen, isFocus) => (
        <StyledMain isFocus={isFocus}>
          <Text style={{ color: COLOR.BLUE_VIOLET }}>{question}</Text>
          <Icon
            name={isContentOpen ? "minus" : "plus"}
            color={COLOR.BLUE_VIOLET}
          />
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
