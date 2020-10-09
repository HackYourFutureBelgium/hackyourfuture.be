import React from "react"

import { TopContainer, BottomContainer } from "./style.js"
import { Title, Pane, Image, Button, Section, Wrapper } from "../../ui"
import printSimpleUrl from "../../../assets/partners/print-simple.svg"
import openKnowledgeUrl from "../../../assets/partners/open-knowledge.svg"
import digitalBelgiumUrl from "../../../assets/partners/digital-belgium.svg"
import arteveldeUrl from "../../../assets/partners/artevelde-hogeschool.svg"
import bruxellesEmploiUrl from "../../../assets/partners/bruxelles-emploi.svg"
import microsoftUrl from "../../../assets/partners/microsoft.svg"

const data = {
  title: "Our partners",
  cta: "Become a partner",
  partnerImages: [
    printSimpleUrl,
    openKnowledgeUrl,
    digitalBelgiumUrl,
    arteveldeUrl,
    bruxellesEmploiUrl,
    microsoftUrl,
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
            <Image
              src={value}
              width="100%"
              // // old grey-out styling for the <Image> elements
              // //   removed so the logos will be colored
              // //   preserved for posterity
              // style={{
              //   filter: "grayscale(1)",
              //   opacity: index === 1 || index === 3 ? "0.3" : 1,
              // }}
            />
          </Pane>
        ))}
      </BottomContainer>
    </Wrapper>
  </Section>
)

export default OurPartners
