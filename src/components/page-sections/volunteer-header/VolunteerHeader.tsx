import React from "react"

import { Title, Pane, Text, Button, Section, Wrapper } from "../../ui"

const data = {
  title: "Volunteer",
  description:
    "HackYourFuture is possible only thanks to our many volunteer coaches and mentors. Do you also want to help to make the tech industry more inclusive and become part of our community?",
  cta1: "join as a coach",
  cta1Link:
    "https://form.typeform.com/to/yfzzQxtI",
  cta2: "Join as a mentor",
  cta2Link:
    "https://docs.google.com/forms/d/e/1FAIpQLSdsTmIgbCA2X02NUFsVSE-BQJIx6_KWpABujlZYA9PP8JgHJg/viewform",
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
          <LegacyButton
            as="a"
            href={data.cta1Link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {data.cta1}
          </LegacyButton>
          &nbsp; &nbsp;
          <LegacyButton
            as="a"
            href={data.cta2Link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {data.cta2}
          </LegacyButton>
        </Pane>
      </Pane>
    </Wrapper>
  </Section>
)

export default VolunteerHeader
