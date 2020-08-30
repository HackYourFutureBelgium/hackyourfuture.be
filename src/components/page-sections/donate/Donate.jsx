import React, { useState, useEffect } from "react"

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
} from "./style"
import { Title, Button, Text, Section, Wrapper } from "../../ui"

const PAYMENT_API =
  "https://wt-00b50724a47109acb762597a6836a906-0.sandbox.auth0-extend.com/stripe-payment"

const Donate = ({ data }) => {
  const [isMonthly, setIsMonthly] = useState(true)
  const [amount, setAmount] = useState(10)

  // useEffect(() => {

  // }, [])

  const getPaymentSession = data => {
    return fetch(`${PAYMENT_API}/session`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    }).then(r => r.json())
  }

  const onSubmit = () => {
    // const amount = parseInt($amountField.value) * 100

    const data = {}
    if (isMonthly) data.amount = amount * 100
    else data.plan = `monthly-${parseInt(amount)}`

    getPaymentSession(data)
      .then(session => {
        if (session.error) throw session.error
        return stripe.redirectToCheckout({ sessionId: session.id })
      })
      .then(result => {
        if (result.error) throw session.error
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <Section>
      <Wrapper>
        <Container>
          <LeftContainer>
            <Title>{data.title}</Title>
            <Text dangerouslySetInnerHTML={{ __html: data.description }} />
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
                  <Text>One time</Text>
                </RadioLabel>
                <RadioLabel htmlFor="monthly">
                  <RadioInput
                    type="radio"
                    name="support"
                    id="monthly"
                    checked={isMonthly}
                    onChange={() => setIsMonthly(true)}
                  />
                  <Text>Monthly</Text>
                </RadioLabel>
              </FormSection>
              <FormSection>
                <Text as="label" htmlFor="amount-options">
                  Select your amount
                </Text>
                <Ul id="amount-options">
                  <Li onClick={() => setAmount(10)}>€10</Li>
                  <Li onClick={() => setAmount(25)}>€25</Li>
                  <Li onClick={() => setAmount(50)}>€50</Li>
                  <Li onClick={() => setAmount(100)}>€100</Li>
                  <Li onClick={() => setAmount(2000)}>Full scholarship</Li>
                </Ul>
                <Text as="label" htmlFor="amount">
                  Select your amount
                </Text>
                <input
                  type="number"
                  value={amount}
                  onChange={({ target: { value } }) => setAmount(value)}
                />
              </FormSection>
              <Button onClick={onSubmit}>Donate</Button>
            </Form>
          </RightContainer>
        </Container>
      </Wrapper>
    </Section>
  )
}

export default Donate
