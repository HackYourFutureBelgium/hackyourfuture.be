import React from "react"

import { CardContainer, Card, Container } from "./style"
import { Title, Text, Image, Section, Wrapper } from "../../ui"
import illuCommunity from "../../../assets/illustrations/community.svg"
import illuDiversity from "../../../assets/illustrations/diversity-inclusiveness.svg"
import illuCommitment from "../../../assets/illustrations/commitment.svg"
import illuOpen from "../../../assets/illustrations/open.svg"

const data = {
  title: "Our core values",
  values: [
    {
      title: "Community",
      description:
        "We’re largely dependent on volunteers. That’s what makes us an engaged grassroots community, as our students call it ‘the HYF family’.",
      image: illuCommunity,
    },
    {
      title: "Diversity & inclusiveness",
      description:
        "Our program is adapted to suit people with different backgrounds, often in vulnerable situations. We teach on Sundays to allow everyone to take control of their personal lives during the week.",
      image: illuDiversity,
    },
    {
      title: "Commitment",
      description:
        "Our program is free of charge, although we ask for strong commitment during our 7 month-journey. And you know what? Many alumni stay actively involved!",
      image: illuCommitment,
    },
    {
      title: "Open",
      description:
        "Sharing is caring. Our curriculum is 100% open. We believe in knowledge for the many, not the few.",
      image: illuOpen,
    },
  ],
}

const OurValues = () => (
  <Section justifyContent="flex-end" padding="50px 0">
    <Wrapper margin="0">
      <Container>
        <Title level={3}>{data.title}</Title>
        <CardContainer>
          {data.values.map((value, index) => (
            <Card key={index}>
              <Image src={value.image} />
              <Title level={3} size="S" isUpperCase={false}>
                {value.title}
              </Title>
              <Text>{value.description}</Text>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default OurValues
