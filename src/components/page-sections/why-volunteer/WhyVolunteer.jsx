import React from "react"

import { Container, TasksContainer, TaskContainer } from "./style"
import { COLOR } from "../../../utils/constants"
import { Title, Pane, Text, Image, Section, Wrapper } from "../../ui"
import illuCommunity from "../../../assets/illustrations/community.svg"
import illuDiversity from "../../../assets/illustrations/diversity-inclusiveness.svg"
import illuCommitment from "../../../assets/illustrations/commitment.svg"
import illuOpen from "../../../assets/illustrations/open.svg"

const data = {
  title: "Why should I volunteer at HYF?",
  values: [
    {
      description:
        "You will contribute to improving the lives of others through tech education",
      image: illuCommunity,
    },
    {
      description:
        "You will become better expert of your own craft by teaching your knowledge ",
      image: illuDiversity,
    },
    {
      description:
        "You will be exposed to different cultures and different ways of thinking & working ",
      image: illuCommitment,
    },
    {
      description:
        "You will become a part of HackYourFuture’s professional network",
      image: illuOpen,
    },
  ],
}

const WhyVolunteer = () => (
  <Section background={COLOR.WHITE_LILAC}>
    <Wrapper>
      <Container>
        <Pane width="60%">
          <Title level={3} maxWidth="300px">
            {data.title}
          </Title>
        </Pane>
        <TasksContainer>
          {data.values.map((value, index) => (
            <TaskContainer key={index}>
              <Pane width="300px">
                <Image src={value.image} />
              </Pane>
              <Text>{value.description}</Text>
            </TaskContainer>
          ))}
        </TasksContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default WhyVolunteer
