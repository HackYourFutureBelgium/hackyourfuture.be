import React from "react"
import { Link } from "gatsby"

import { Container, AbsoluteContainer } from "./style"
import { Title, Text, Section, Wrapper, Image, Button } from "../../ui"
import imageUrl from "../../../assets/images/new-career.jpg"
import { COLOR } from "../../../utils/constants"

const data = {
  title: "Your new career starts here",
  description:
    "HackYourFuture Lab @ Antwerp is a <b>free 9-month front end web development program</b> for newcomers passionate about code and living in Antwerp. You don’t need any technical background to start, only loads of motivation.<br/><br/>If you live in Antwerp and want to kickstart your career in the IT sector, take your chance!<br/><b>Women are strongly encouraged to apply!</b><br><br>",
  cta1: "Class starts: 19 September 2021 (applications open now! Only for people living in Antwerp)",
  cta2: "Deadline for Applications: 6 August 2021",
  cta: "Apply Now",
  ctaLink:
    "https://forms.gle/5ZfYgfoypAgEd8i27",
  image: imageUrl,
}

const ProgramHeader = () => (
  <Section style={{ marginBottom: "20px" }}>
    <Wrapper direction="row" justifyContent="flex-start">
      <Container>
        <Title level={1} size="L" color={COLOR.BLUE_VIOLET}>
          {data.title}
        </Title>
        <Text
          margin="10px 0"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <Text
          margin="10px 0"
          style={{ textDecoration: "underline", color: COLOR.BLUE_VIOLET }}
        >
          {data.cta1}
        </Text>
        <Text
          margin="10px 0 50px 0"
          style={{ textDecoration: "underline", color: COLOR.BLUE_VIOLET }}
        >
          {data.cta2}
        </Text>
        <Button
          is="a"
          href={data.ctaLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {data.cta}
        </Button>
      </Container>
      <AbsoluteContainer>
        <Image src={data.image} width="100%" height="100%" objectFit="cover" />
      </AbsoluteContainer>
    </Wrapper>
  </Section>
)

export default ProgramHeader
