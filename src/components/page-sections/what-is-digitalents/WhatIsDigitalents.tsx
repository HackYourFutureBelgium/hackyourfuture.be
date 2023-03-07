import React from "react"
import { Title, Pane, Text, Section, Wrapper } from "../../ui"


const data = {
    title: "What is DIGITALENTS?",
    description:
      "DIGITALENTS is a brand new HackYourFuture project financially supported by the Digital Belgium Skills Fund, and endorsed by Agoria and the VBO-FEB. It is aimed to train and upskill newcomers and refugees who already have some knowledge in programming."
  }
const WhatIsDigitalents = () => {
  return (
    <Section>
    <Wrapper>
      <Pane margin="10px 0" direction="column" alignItems="center">
        <Title level={5} isUpperCase size="l">
          {data.title}
        </Title>
        <Text isCenter maxWidth="550px">
          {data.description}
        </Text>
        <Pane justifyContent="center" margin="20px 0 0 0" />
      </Pane>
    </Wrapper>
  </Section>
  )
}

export default WhatIsDigitalents

