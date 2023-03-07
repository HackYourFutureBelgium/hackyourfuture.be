import React from "react"

import { Card, Container } from "./style"
import { Title, Text, Section, Wrapper, Image } from "../../ui"

import mountainUrl from "../../../assets/illustrations/mountain.svg"
import binocularsUrl from "../../../assets/illustrations/binoculars.svg"

const data = {
  items: [
    {
      illustration: mountainUrl,
      title: "Our mission",
      description:
        "We aim to empower refugees by teaching them the necessary skills for a career in software development. We believe coding can help people in disadvantaged situations live up to their potential, get back control of their own lives and be an important change to their environment.",
    },
    {
      illustration: binocularsUrl,
      title: "Our vision",
      description:
        "We believe in an IT world where everyone has access to open knowledge and open education, in order to participate actively in society. We believe diversity is essential on IT company floors, which can be increased by hiring our graduates as junior web developers.",
    },
  ],
}

const MissionVision = () => (
  <Section>
    <Wrapper>
      <Container>
        {data.items.map(item => (
          <Card key={item.title}>
            <Image src={item.illustration} width="70px" height="70px" />
            <Title level={2} size="s">
              {item.title}
            </Title>
            <Text>{item.description}</Text>
          </Card>
        ))}
      </Container>
    </Wrapper>
  </Section>
)

export default MissionVision
