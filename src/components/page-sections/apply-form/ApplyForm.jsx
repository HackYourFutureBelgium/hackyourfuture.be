import React from "react"

import { Iframe } from "./style"
import { Title, Section, Wrapper } from "../../ui"

const data = {
  title: "Apply now",
  applyForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSf5lqmVhTPQPbz-y4vr3_sVtfhPar4InYcgXQhVXRJmj3nQVw/viewform",
}

const ApplyForm = () => (
  <Section>
    <Wrapper>
      <Title level={3} maxWidth="300px">
        {data.title}
      </Title>

      <Iframe src={data.applyForm} title="Apply" />
    </Wrapper>
  </Section>
)

export default ApplyForm
