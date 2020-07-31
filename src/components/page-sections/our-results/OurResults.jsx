import React from "react"

import { StyledOurResults } from "./style.js"
import Section from "../../layout/section"
import { Title, Pane, Text } from "../../ui"
import { SHADOW, COLOR, SPACER } from "../../../utils/constants"

const data = {
  title: "Our results",
  description:
    "We graduated over 80 people in Belgium and more than 200 globally. In Belgium, over 85% found and retained a high-quality job as a developer.",
  results: [
    {
      title: "200+",
      description: "Graduates in the Netherlands, Denmark, Belgium and Canada.",
    },
    {
      title: "80+",
      description: "HackYourFuture graduates in Belgium since 2016.",
    },
    {
      title: "+85%",
      description: "Graduates employed as developers in Belgium.",
    },
  ],
}

const OurResults = () => (
  <StyledOurResults>
    <Section>
      <Pane direction="column" alignItems="center" boxShadow={SHADOW.BOX}>
        <div>
          <Title level={3}>{data.title}</Title>
          <Text textAlign="center" maxWidth="800px">
            {data.description}
          </Text>
        </div>
        <Pane justifyContent="space-between">
          {data.results.map((result, index) => (
            <Pane
              direction="column"
              background={COLOR.JACKSON_PURPLE}
              width="30%"
              padding={SPACER.M}
              key={index}
            >
              <Title isWhite>{result.title}</Title>
              <Text isWhite>{result.description}</Text>
            </Pane>
          ))}
        </Pane>
      </Pane>
    </Section>
  </StyledOurResults>
)

export default OurResults
