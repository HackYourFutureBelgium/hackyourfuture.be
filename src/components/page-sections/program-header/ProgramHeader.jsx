import React from "react"
import { Link } from "gatsby"

import { Container, AbsoluteContainer } from "./style"
import { Title, Text, Section, Wrapper, Image, Button } from "../../ui"
import imageUrl from "../../../assets/images/new-career.jpg"
import { COLOR } from "../../../utils/constants"

const data = {
  title: "Your new career starts here",
  description:
    "HackYourFuture is a <b>free 9-month front end web development program</b> for refugees, newcomers and ‘anderstalige’ jobseekers passionate about code and web development. You don’t need any technical background to start, only loads of motivation.<br/><br/>If you want to kickstart your career in the IT sector, take your chance!<br/><b>Women are strongly encouraged to apply!</b><br><br>",
  cta1: "We are launching two new web-dev classes, one in ANTWERPEN and one in BRUSSELS",
  cta2 : 'Applications for these new classes starting in March are open now', 
  cta: "Apply Now",
  ctaLink: "https://forms.gle/jevj2Ti6brB9pAdw8",
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
        <br></br>
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
