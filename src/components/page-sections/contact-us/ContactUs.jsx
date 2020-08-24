import React from "react"

import { Form, Input, Textarea } from "./style"
import { Title, Pane, Text, Button, Section, Wrapper } from "../../ui"
import { COLOR } from "../../../utils/constants"

const data = {
  title: "Contact us",
  description:
    "We’re always happy to welcome people like you to our HYF community. Drop us a line and become part of it!",
}

const ContactUs = () => {
  // once OR monthly
  // const [paymentType, setPaymentType] = useState("once")

  return (
    <Section>
      <Wrapper direction="row">
        <Pane background={COLOR.BLUE_VIOLET} direction="column">
          <Title isWhite>{data.title}</Title>
          <Text isWhite>{data.description}</Text>
          <Form>
            <Text as="label" htmlFor="full-name" isWhite>
              Full name
            </Text>
            <Input id="full-name" type="text" />
            <Text as="label" htmlFor="email" isWhite>
              Email address
            </Text>
            <Input type="email" id="email" />
            <Text as="label" htmlFor="message" isWhite>
              Message
            </Text>
            <Textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></Textarea>
            <Button isWhite>Send</Button>
          </Form>
        </Pane>
        <Pane>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.356269538402558%2C50.84478366215189%2C4.358683526515962%2C50.84615377213845&amp;layer=mapnik&amp;marker=50.8454687221748%2C4.357476532459259"
            width="600"
            height="450"
            frameborder="0"
            title="map"
          ></iframe>
        </Pane>
      </Wrapper>
    </Section>
  )
}

export default ContactUs
