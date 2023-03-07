import React from "react"

import { Card, Container } from "./style"
import { Title, Text, Section, Wrapper, Image } from "../../ui"

import zoomUrl from "../../../assets/illustrations/zoom.svg"
import heartsUrl from "../../../assets/illustrations/diversity-inclusiveness.svg"
import handUrl from "../../../assets/illustrations/hand.svg"
import screenUrl from "../../../assets/illustrations/screen.svg"

const data = {
  items: [
    {
      illustration: zoomUrl,
      title: "Recruit students",
      description:
        "You can support us and increase diversity in your company at the same time. Please reach out to us if you’re looking for talented junior web developers with strong soft skills and a high sense for collaboration.",
    },
    {
      illustration: heartsUrl,
      title: "Corporate Volunteering",
      description:
        "Your employees can contribute to our community as voluntary coaches or mentors. We’re also happy to have one of your company-ambassadors for our Career Skills Sessions - inspirational speeches on Sundays before class starts.",
    },
    {
      illustration: handUrl,
      title: "Financial Support",
      description:
        "Would you like to give opportunities to incredibly motivated students? We have different tiers for financial support. We'll be most happy to discuss the most appropriate for your company or start-up.",
    },
    {
      illustration: screenUrl,
      title: "Computer donations",
      description:
        "Students can only develop their full potential if they have access to qualitative material to learn. Because not every student has the resources to buy a computer, we collect used computers from companies to borrow them for the duration of our program.",
    },
  ],
}

const SupportUsDetails = () => (
  <Section padding="0 20px">
    <Wrapper>
      <Container>
        {data.items.map(item => (
          <Card key={item.title}>
            <Image src={item.illustration} width="70px" height="70px" />
            <Title level={2} size="m">
              {item.title}
            </Title>
            <Text>{item.description}</Text>
          </Card>
        ))}
      </Container>
    </Wrapper>
  </Section>
)

export default SupportUsDetails
