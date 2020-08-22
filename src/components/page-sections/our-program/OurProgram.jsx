import React from "react"

import { LeftContainer, RightContainer, Container } from "./style.js"
import { Title, Pane, Text, Button, Section, Wrapper } from "../../ui"
import OurProgramImageUrl from "../../../images/our-program.png"

const data = {
  title: "Our program",
  description:
    "Our <b>8-month</b> program is divided into <b>14 modules</b> of 2 to 6 weeks. After the program, students join a <b>4-weeks intensive bootcamp</b> to work on a real project with a real partner. Our training takes place at <b>BeCentral</b> (Brussels) every <b>Sunday</b>. During the week, students are supported online in their <b>self-study</b>, homework and peer learning.",
  cta: "Discover more",
}

const OurProgram = () => (
  <Section>
    <Wrapper>
      <Container>
        <LeftContainer>
          <Title level={2}>{data.title}</Title>
          <Text
            maxWidth="470px"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <Button>{data.cta}</Button>
        </LeftContainer>
        <RightContainer>
          <Pane
            backgroundImage={`url(${OurProgramImageUrl})`}
            backgroundSize="cover"
            width="100%"
            height="100%"
          />
        </RightContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default OurProgram
