import React, { useState } from "react"

import {
  Form,
  Input,
  Textarea,
  Iframe,
  LeftContainer,
  RightContainer,
  Container,
} from "./style"
import { Title, Text, LegacyButton, Section } from "../../ui"

const data = {
  title: "Contact us",
  description:
    "We’re always happy to welcome people like you to our HYF community. Drop us a line and become part of it!",
}

const ContactUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")

  const sendEmail = () => {
    const mailTo = "mailto:info@hyfbe.be"
    const subject = `Message from website by <${email}>`
    window.open(
      `${mailTo}?cc=${email}&subject=${subject}&body=${body}`,
      "_blank"
    )
  }

  return (
    <Section padding="0" paddingMobile="0" style={{ marginBottom: "50px" }}>
      <Container>
        <LeftContainer>
          <Title isWhite>{data.title}</Title>
          <Text isWhite maxWidth="500px" margin="0 0 20px 0">
            {data.description}
          </Text>
          <Form>
            <Text as="label" htmlFor="full-name" isWhite margin="20px 0 5px 0">
              Full name
            </Text>
            <Input
              id="full-name"
              type="text"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
            <Text as="label" htmlFor="email" isWhite margin="20px 0 5px 0">
              Email address
            </Text>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <Text as="label" htmlFor="message" isWhite margin="20px 0 5px 0">
              Message
            </Text>
            <Textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={body}
              onChange={({ target: { value } }) => setBody(value)}
            />
            <LegacyButton isWhite onClick={sendEmail}>
              Send
            </LegacyButton>
          </Form>
        </LeftContainer>
        <RightContainer>
          {/*<Iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.356269538402558%2C50.84478366215189%2C4.358683526515962%2C50.84615377213845&amp;layer=mapnik&amp;marker=50.8454687221748%2C4.357476532459259"
            width="600"
            height="450"
            title="map"
          />*/}
          <Iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.404986500740052%2C50.83687552915718%2C4.411938786506654%2C50.83906399222352&amp;layer=mapnik&amp;marker=50.83796977351917%2C4.408462643623352" 
            width="600"
            height="450"
            title="map"
          />
        </RightContainer>
      </Container>
    </Section>
  )
}

export default ContactUs
