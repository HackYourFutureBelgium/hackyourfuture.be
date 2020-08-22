import React from "react"

import { TopContainer, BottomContainer } from "./style.js"
// import Section from "../../ui/section/section"
import { Title, Pane, Image, Button, Section, Wrapper } from "../../ui"
import printSimpleUrl from "../../../assets/partners/print-simple.svg"
import openKnowledgeUrl from "../../../assets/partners/open-knowledge.svg"
import digitalBelgiumUrl from "../../../assets/partners/digital-belgium.svg"
import arteveldeUrl from "../../../assets/partners/artevelde-hogeschool.svg"
import bruxellesEmploiUrl from "../../../assets/partners/bruxelles-emploi.svg"

const data = {
  title: "Our partners",
  cta: "Become a partner",
  partnerImages: [
    printSimpleUrl,
    openKnowledgeUrl,
    digitalBelgiumUrl,
    arteveldeUrl,
    bruxellesEmploiUrl,
  ],
}

const OurPartners = () => (
  <Section>
    <Wrapper>
      <TopContainer>
        <Title level={2}>{data.title}</Title>
        <Button variant="minimal" iconRight="arrow-right">
          {data.cta}
        </Button>
      </TopContainer>
      <BottomContainer>
        {data.partnerImages.map((value, index) => (
          <Pane width="170px" key={index}>
            <Image src={value} width="100%" />
          </Pane>
        ))}
      </BottomContainer>
    </Wrapper>
  </Section>
)

export default OurPartners
