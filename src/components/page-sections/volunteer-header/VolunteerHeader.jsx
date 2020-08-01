import React from "react"

import { StyledVolunteerHeader } from "./style.js"
import Section from "../../layout/section"
import { Title, Pane, Text, Button } from "../../ui"

const data = {
  title: "Volunteer",
  description:
    "HackYourFuture is possible only thanks to our many volunteer coaches and mentors. Do you also want to help to make the tech industry more inclusive and become part of our community?",
  cta: "Join now",
}

const VolunteerHeader = () => (
  <StyledVolunteerHeader>
    <Section>
      <Pane margin="10px 0" direction="column" alignItems="center">
        <Title level={2} isUpperCase>
          {data.title}
        </Title>
        <Text textAlign="center" maxWidth="470px">
          {data.description}
        </Text>
        <Button>{data.cta}</Button>
      </Pane>
    </Section>
  </StyledVolunteerHeader>
)

export default VolunteerHeader
