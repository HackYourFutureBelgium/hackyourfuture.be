import React from "react"

import { StyledOurProgram } from "./style.js"
import Section from "../../layout/section"
import { Title, Pane, Text, Button } from "../../ui"
import OurProgramImageUrl from "../../../images/our-program.png"

const data = {
  title: "Our program",
  description:
    "Our 7-month program is divided into 12 modules of 2 to 6 weeks. After the program, students join a 4-weeks intensive bootcamp to work on a real project with a real partner. Our training takes place at BeCentral (Brussels) every Sunday. During the week, students are supported online in their self-study, homework and peer learning.",
  cta: "Discover more",
}

const OurProgram = () => (
  <StyledOurProgram>
    <Section>
      <Pane>
        <Pane direction="column" alignItems="flex-start">
          <Title level={3}>{data.title}</Title>
          <Text textAlign="center" maxWidth="800px">
            {data.description}
          </Text>
          <Button>{data.cta}</Button>
        </Pane>
        <Pane
          backgroundImage={`url(${OurProgramImageUrl})`}
          backgroundSize="cover"
        />
      </Pane>
    </Section>
  </StyledOurProgram>
)

export default OurProgram
