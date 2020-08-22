import React from "react"

import { Container, AbsoluteContainer } from "./style"
import { Title, Text, Section, Wrapper, Image, Button } from "../../ui"
// import { FONT_SIZE_TITLE } from "../../../utils/constants"

const data = {
  title: "Your new career starts here",
  description:
    "HackYourFuture is a free 7-month web development program for passionate refugees and vulnerable newcomers in Belgium. You don’t need any technical background to start.<br/><br/>We launch two new classes every 4 months. Women are strongly encouraged to apply!",
  cta1: "Next class starts : 20 September (Full)",
  cta2: "Following class starts: 10 January 2020",
  cta: "Appley Now",
}

const ProgramHeader = () => (
  <Section>
    <Wrapper direction="row">
      <Container>
        <Title level={1} size="XL">
          {data.title}
        </Title>
        <Text
          maxWidth="45%"
          margin="10px 0"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <Text margin="10px 0">{data.cta1}</Text>
        <Text margin="10px 0">{data.cta2}</Text>
        <Button>{data.cta}</Button>
      </Container>
      <AbsoluteContainer>
        <Image
          src="https://picsum.photos/600?1"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </AbsoluteContainer>
    </Wrapper>
  </Section>
)

export default ProgramHeader
