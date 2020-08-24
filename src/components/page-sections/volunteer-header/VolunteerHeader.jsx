import React from "react"

import { Title, Pane, Text, Button, Section, Wrapper } from "../../ui"

const data = {
  title: "Volunteer",
  description:
    "HackYourFuture is possible only thanks to our many volunteer coaches and mentors. Do you also want to help to make the tech industry more inclusive and become part of our community?",
  cta1: "join as a coach",
  cta2: "Join as a mentor",
}

const VolunteerHeader = () => (
  <Section>
    <Wrapper>
      <Pane margin="10px 0" direction="column" alignItems="center">
        <Title level={2} isUpperCase size="l">
          {data.title}
        </Title>
        <Text isCenter maxWidth="550px">
          {data.description}
        </Text>
        <Pane justifyContent="center" margin="20px 0 0 0">
          <Button>{data.cta1}</Button>
          &nbsp; &nbsp;
          <Button>{data.cta2}</Button>
        </Pane>
      </Pane>
    </Wrapper>
  </Section>
)

export default VolunteerHeader
