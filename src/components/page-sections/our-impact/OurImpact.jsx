import React from "react"

import { TopContainer, BottomContainer, Card, Container } from "./style"
import { Title, Pane, Text, Section, Wrapper } from "../../ui"
import { SHADOW } from "../../../utils/constants"

const data = {
  title: "Our impact",
  description:
    "We graduated over 80 people in Belgium and more than 200 globally. In Belgium, over 85% found and retained a high-quality job as a developer.",
  results: [
    {
      title: "80",
      description:
        "Students graduated since HackYourFuture Belgium was founded in 2018",
    },
    {
      title: "70%",
      description:
        "Of our graduates find an internship, a job or start university.",
    },
    {
      title: "200+",
      description: "Alumni in the Netherlands, Denmark, Belgium and Canada.",
    },
  ],
}

const OurImpact = () => (
  <Section>
    <Wrapper>
      <Container>
        <TopContainer>
          <Title level={2}>{data.title}</Title>
          <Text isCenter maxWidth="800px">
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
      </Container>
    </Wrapper>
  </Section>
)

export default OurImpact
