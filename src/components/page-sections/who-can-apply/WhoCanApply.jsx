import React from "react"

import { Container, Ul, Li, Content, TextContainer } from "./style"
import { Title, Text, Section, Wrapper, Icon } from "../../ui"
import { COLOR } from "../../../utils/constants"

const data = {
  title: "Who can apply?",
  description:
    "We teach motivated refugees and newcomers with limited access to education or the labor market who want to start their career in web development. The course is open to anyone staying in Belgium. Women are strongly encouraged to apply!",
  items: [
    "You’re <b>+18 years</b> old",
    "You’re <b>extremely motivated</b> to start a <b>career in web development</b>.",
    "You speak <b>English</b> at an intermediate level.",
    "You can study a minimum of <b>25 hours per week</b>.",
    "You are <b>recognized as a refugee</b> or waiting for your recognition.",
    "You are a migrant with <b>limited access to education or the labor market</b>.",
  ],
}

const WhoCanApply = () => (
  <Section background={COLOR.WHITE_LILAC}>
    <Wrapper>
      <Container>
        <Title level={2}>{data.title}</Title>
        <Content>
          <TextContainer>
            <Text>{data.description}</Text>
          </TextContainer>
          <Ul>
            {data.items.map((item, index) => (
              <Li key={index}>
                <Text dangerouslySetInnerHTML={{ __html: item }} />
                <Icon name="check" color={COLOR.JACKSON_PURPLE} />
              </Li>
            ))}
          </Ul>
        </Content>
      </Container>
    </Wrapper>
  </Section>
)

export default WhoCanApply
