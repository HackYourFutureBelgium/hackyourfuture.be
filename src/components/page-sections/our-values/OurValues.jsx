import React from "react"

import { StyledOurValues } from "./style.js"
import Section from "../../layout/section"
import { Title, Pane, Text, Image } from "../../ui"
import illuCommunity from "../../../assets/illustrations/community.svg"
import illuDiversity from "../../../assets/illustrations/diversity-inclusiveness.svg"
import illuCommitment from "../../../assets/illustrations/commitment.svg"
import illuOpen from "../../../assets/illustrations/open.svg"

const data = {
  title: "Our values",
  values: [
    {
      title: "Community",
      description:
        "We’re largely dependent on volunteers. That’s what makes us an engaged grassroots community, as our students call it ‘the HYF family’.",
      image: illuCommunity,
    },
    {
      title: "Diversity & inclusiveness",
      description:
        "Our program is adapted to suit people with different backgrounds, often in vulnerable situations. We teach on Sundays to allow everyone to take control of their personal lives during the week.",
      image: illuDiversity,
    },
    {
      title: "Commitment",
      description:
        "Our program is free of charge, although we ask for strong commitment during our 7 month-journey. And you know what? Many alumni stay actively involved!",
      image: illuCommitment,
    },
    {
      title: "Open",
      description:
        "Sharing is caring. Our curriculum is 100% open. We believe in knowledge for the many, not the few.",
      image: illuOpen,
    },
  ],
}

const OurValues = () => (
  <StyledOurValues>
    <Section>
      <Pane>
        <Pane direction="column" alignItems="flex-start" width="150px">
          <Title level={3}>{data.title}</Title>
        </Pane>
        <Pane grow={1} wrap="wrap">
          {data.values.map((value, index) => (
            <Pane key={index} width="50%">
              <Pane width="170px">
                <Image src={value.image} />
              </Pane>
              <Pane direction="column" grow={1}>
                <Title level={3}>{value.title}</Title>
                <Text>{value.description}</Text>
              </Pane>
            </Pane>
          ))}
        </Pane>
      </Pane>
    </Section>
  </StyledOurValues>
)

export default OurValues
