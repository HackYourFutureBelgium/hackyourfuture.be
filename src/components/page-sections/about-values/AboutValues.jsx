import React from "react"

import { COLOR } from "../../../utils/constants"
import { Section, Wrapper, Pane, Image, Title } from "../../ui"
import communityIllu from "../../../assets/illustrations/community.svg"
import diversityIllu from "../../../assets/illustrations/diversity-inclusiveness.svg"
import handsIllu from "../../../assets/illustrations/hands.svg"
import strongIllu from "../../../assets/illustrations/strong.svg"
import connectionIllu from "../../../assets/illustrations/connection.svg"

const data = {
  items: [
    { illustration: communityIllu, title: "A passionate and divers community" },
    { illustration: diversityIllu, title: "Volunteers who truly care" },
    { illustration: handsIllu, title: " A dedicated team" },
    { illustration: strongIllu, title: "A family where empowerment is key" },
    {
      illustration: connectionIllu,
      title: "A network related to the tech world",
    },
  ],
}

const AboutValues = () => (
  <Section background={COLOR.WHITE_LILAC}>
    <Wrapper direction="row">
      {data.items.map(item => (
        <Pane key={item.title} direction="column" alignItems="center">
          <Pane margin="0 0 20px 0" justifyContent="center">
            <Image src={item.illustration} />
          </Pane>
          <Title level={3} size="xs" isCenter>
            {item.title}
          </Title>
        </Pane>
      ))}
    </Wrapper>
  </Section>
)

export default AboutValues
