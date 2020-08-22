import React from "react"

import { TopContainer, BottomContainer, Card } from "./style"
import { Title, Pane, Text, Section, Wrapper } from "../../ui"
import { SHADOW } from "../../../utils/constants"

const data = {
  title: "Our impact",
  description:
    "We graduated over 80 people in Belgium and more than 200 globally. In Belgium, over 85% found and retained a high-quality job as a developer.",
  results: [
    {
      title: "200+",
      description: "Graduates in the Netherlands, Denmark, Belgium and Canada.",
    },
    {
      title: "80+",
      description: "HackYourFuture graduates in Belgium since 2016.",
    },
    {
      title: "+85%",
      description: "Graduates employed as developers in Belgium.",
    },
  ],
}

const OurImpact = () => (
  <Section>
    <Wrapper>
      <Pane
        direction="column"
        alignItems="center"
        boxShadow={SHADOW.BOX}
        padding="50px"
        margin="50px 0"
      >
        <TopContainer>
          <Title level={2}>{data.title}</Title>
          <Text textAlign="center" maxWidth="800px">
            {data.description}
          </Text>
        </TopContainer>
        <BottomContainer>
          {data.results.map((result, index) => (
            <Card key={index}>
              <Title isWhite>{result.title}</Title>
              <Text isWhite>{result.description}</Text>
            </Card>
          ))}
        </BottomContainer>
      </Pane>
    </Wrapper>
  </Section>
)

export default OurImpact
