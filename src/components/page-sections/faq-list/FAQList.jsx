import React, { Fragment, useState } from "react"

import FAQCard from "../../faq-card"
import { Pane, Section, Wrapper, Title, Input } from "../../ui"
import { SHADOW } from "../../../utils/constants"
import { COLOR } from "../../../utils/constants"

import styled from "styled-components"

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLOR.BLUE_VIOLET};
`

const CATEGORY = {
  APPLICANT: "applicant",
  VOLUNTEER: "volunteer",
  PARTNERS: "partners",
}

const data = {
  titles: {
    [CATEGORY.APPLICANT]: "For applicants",
    [CATEGORY.VOLUNTEER]: "For volunteers",
    [CATEGORY.PARTNERS]: "For partners",
  },
  faqs: [
    {
      question: "What is the application process?",
      answer:
        "We're a non-profit that relies on support from people like you. Thanks to your support we can keep our program free of charge for all of our students.",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "Who can apply?",
      answer: "",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "I am not a refugee. Can I still apply?",
      answer: "",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "I am not living in Belgium. Can I still apply?",
      answer: "",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "When does the new class start?",
      answer: "",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "How long does the program take?",
      answer: "",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "How much time do I need to dedicate as a coach?",
      answer: "",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "Where can I find the curriculum?",
      answer: "",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "Where do classes take place on Sunday?",
      answer: "",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "What’s happening during the week at HackYourFuture?",
      answer: "",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "Do I have to prepare the presentations as a coach?",
      answer: "",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "What does a mentor do at HackYourFuture?",
      answer: "",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "How can I hire students?",
      answer: "",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "Where can I see your graduates’ profiles?",
      answer: "",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "How can I support HackYourFuture?",
      answer: "",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "How do I become a partner for the bootcamp?",
      answer: "",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "How can I donate computers?",
      answer: "",
      category: CATEGORY.PARTNERS,
    },
  ],
}

const categories = data.faqs
  .map(faq => faq.category)
  .filter((val, i, self) => self.indexOf(val) === i)

const FAQList = () => {
  const [filteredFaqs, setFilteredFaqs] = useState([])
  const [isFilterMode, setIsFilterMode] = useState(false)

  const onSearch = event => {
    const {
      target: { value },
    } = event

    if (value) {
      const matchingFaqs = data.faqs.filter(faq => {
        const question = faq.question.toLowerCase().trim()
        const searchQuery = value.toLowerCase().trim()

        return question.includes(searchQuery)
      })

      setIsFilterMode(true)
      setFilteredFaqs(matchingFaqs)
    } else {
      setIsFilterMode(false)
      setFilteredFaqs([])
    }
  }

  return (
    <Section>
      <Wrapper>
        <Pane margin="0 0 20px 0" alignItems="flex-start" width="100%">
          <Input type="text" onChange={onSearch} icon="search" />
        </Pane>

        {!isFilterMode &&
          categories.map(category => (
            <Pane key={category} direction="column" width="100%">
              <Title level={2} size="S">
                {data.titles[category]}
              </Title>
              <Pane
                direction="column"
                alignItems="center"
                width="100%"
                boxShadow={SHADOW.BOX}
                margin="0 0 40px 0"
              >
                {data.faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index, self) => (
                    <Fragment key={`${index}-${category}-fragment`}>
                      <FAQCard
                        key={`${index}-${category}-card`}
                        question={faq.question}
                        answer={faq.answer}
                      />
                      {self.length - 1 !== index && (
                        <Separator key={`${index}-${category}-separator`} />
                      )}
                    </Fragment>
                  ))}
              </Pane>
            </Pane>
          ))}

        {isFilterMode && filteredFaqs.length && (
          <Pane direction="column" width="100%">
            <Title level={2} size="S">
              Search results
            </Title>
            <Pane
              direction="column"
              alignItems="center"
              width="100%"
              boxShadow={SHADOW.BOX}
              margin="0 0 40px 0"
            >
              {filteredFaqs.map(faq => (
                <FAQCard
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Pane>
          </Pane>
        )}

        {isFilterMode && !filteredFaqs.length && (
          <Title level={4} size="XS">
            No results found
          </Title>
        )}
      </Wrapper>
    </Section>
  )
}

export default FAQList
