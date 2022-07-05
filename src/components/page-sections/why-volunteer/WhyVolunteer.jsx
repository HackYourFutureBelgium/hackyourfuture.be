import React from "react"

import { Container, TasksContainer, Task } from "./style"
import { COLOR } from "../../../utils/constants"
import { Title, Pane, Text, Image, Section, Wrapper } from "../../ui"
import illuConnection from "../../../assets/illustrations/connection.svg"
import illuKnowledge from "../../../assets/illustrations/knowledge.svg"
import illuCulture from "../../../assets/illustrations/culture.svg"
import illuCodeBoard from "../../../assets/illustrations/code-board.svg"

const data = {
  title: "Why should I volunteer at HYF?",
  values: [
    {
      description:
        "You will contribute to <b>improving the lives</b> of others through <b>tech education</b>",
      image: illuConnection,
    },
    {
      description:
        "You will become a better expert by <b>teaching your knowledge</b>",
      image: illuKnowledge,
    },
    {
      description:
        "You will be exposed to different <b>cultures</b> and different ways of thinking & working",
      image: illuCulture,
    },
    {
      description:
        "You will become a part of HackYourFuture’s <b>professional network</b>",
      image: illuCodeBoard,
    },
  ],
}

const WhyVolunteer = () => (
  <Section background={COLOR.WHITE_LILAC}>
    <Wrapper>
      <Container>
        <Pane width="60%" minWidth="300px">
          <Title level={3} maxWidth="300px">
            {data.title}
          </Title>
        </Pane>
        <TasksContainer>
          {data.values.map((value, index) => (
            <Task key={index}>
              <div>
                <Image src={value.image} objectFit="contain" />
              </div>
              <Text dangerouslySetInnerHTML={{ __html: value.description }} />
            </Task>
          ))}
        </TasksContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default WhyVolunteer
