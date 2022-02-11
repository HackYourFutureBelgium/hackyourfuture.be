import React, { useState } from "react"
import getStripe from "../../../utils/stripe"
import {
  getSessionPlan,
  getSessionDonation,
} from "../../../utils/stripe/session"

import {
  Form,
  FormSection,
  RadioLabel,
  RadioInput,
  Container,
  LeftContainer,
  RightContainer,
  Ul,
  Li,
  Input,
} from "./style"
import { Title, Button, Text, Section, Wrapper, Pane } from "../../ui"
import { COLOR } from "../../../utils/constants"

const Donate = ({ data }) => {
  const [isMonthly, setIsMonthly] = useState(true)
  const [amount, setAmount] = useState(10)
  const [message, setMessage] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const redirectToCheckout = async sessionId => {
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({ sessionId })
    if (error) {
      console.log("ERROR STRIPE: ", error)
      setIsLoading(false)
    }
  }

  const onSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    let session
    if (isMonthly) {
      session = await getSessionPlan(`monthly-${parseInt(amount)}`)
    } else {
      session = await getSessionDonation(amount * 100, message)
    }

    redirectToCheckout(session.id)
      .then(result => {
        if (result.error) {
          console.log("ERROR STRIPE RESULT: ", result.error)
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
      })
  }

  return (
    <Section background={COLOR.WHITE_LILAC} style={{ marginBottom: "50px" }}>
      <Wrapper>
        <Container>
          <LeftContainer>
            <Pane maxWidth="450px" direction="column">
              <Title>{data.title}</Title>
              <Text dangerouslySetInnerHTML={{ __html: data.description }} />
            </Pane>
          </LeftContainer>
          <RightContainer>
            <Form>
              <FormSection direction="row">
                <RadioLabel htmlFor="once">
                  <RadioInput
                    type="radio"
                    name="support"
                    id="once"
                    checked={!isMonthly}
                    onChange={() => setIsMonthly(false)}
                  />
                  <Text isWorkFont isPurple>
                    One time
                  </Text>
                </RadioLabel>
                <RadioLabel htmlFor="monthly">
                  <RadioInput
                    type="radio"
                    name="support"
                    id="monthly"
                    checked={isMonthly}
                    onChange={() => setIsMonthly(true)}
                  />
                  <Text isWorkFont isPurple>
                    Monthly
                  </Text>
                </RadioLabel>
              </FormSection>
              <FormSection>
                <Text as="label" htmlFor="amount-options" isPurple isWorkFont>
                  Select your amount
                </Text>
                <Ul id="amount-options">
                  <Li onClick={() => setAmount(10)} isActive={amount === 10}>
                    €10
                  </Li>
                  <Li onClick={() => setAmount(25)} isActive={amount === 25}>
                    €25
                  </Li>
                  <Li onClick={() => setAmount(50)} isActive={amount === 50}>
                    €50
                  </Li>
                  <Li onClick={() => setAmount(100)} isActive={amount === 100}>
                    €100
                  </Li>
                  <Li
                    onClick={() => setAmount(5000)}
                    isActive={amount === 5000}
                  >
                    Full scholarship
                  </Li>
                </Ul>
                <Text as="label" htmlFor="amount" isPurple isWorkFont>
                  Amount
                </Text>
                <Input
                  type="number"
                  value={amount}
                  onChange={({ target: { value } }) => setAmount(Number(value))}
                />
                <Text as="label" htmlFor="message" isPurple isWorkFont>
                  Message
                </Text>
                <Input
                  type="text"
                  value={message}
                  onChange={({ target: { value } }) => setMessage(value)}
                />
              </FormSection>
              <Button onClick={onSubmit} isLoading={isLoading}>
                Donate
              </Button>
            </Form>
          </RightContainer>
        </Container>
      </Wrapper>
    </Section>
  )
}

export default Donate
