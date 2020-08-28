import React from "react"

import { Card, Container } from "./style.js"
import { Title, Text, Section, Wrapper, Image, Icon, Pane } from "../../ui"

import manonUrl from "../../../assets/team/manon.png"
import lienUrl from "../../../assets/team/lien.png"
import evanUrl from "../../../assets/team/evan.png"

const data = {
  teams: [
    {
      picture: manonUrl,
      fullName: "Manon Brulard",
      role: "Co-Founder & General Coordinator",
      links: [
        { icon: "envelope", link: "" },
        { icon: "twitter", link: "" },
        { icon: "linkedin", link: "" },
      ],
    },
    {
      picture: lienUrl,
      fullName: "Lien Arits",
      role: "Community & Communication Coordinator",
      links: [
        { icon: "envelope", link: "" },
        { icon: "twitter", link: "" },
        { icon: "linkedin", link: "" },
      ],
    },
    {
      picture: evanUrl,
      fullName: "Evan Cole",
      role: "Educational Coordinator",
      links: [
        { icon: "envelope", src: "" },
        { icon: "twitter", src: "" },
        { icon: "linkedin", src: "" },
      ],
    },
  ],
}

const OurTeam = () => (
  <Section>
    <Wrapper>
      <Container>
        {data.teams.map(member => (
          <Card key={member.fullName}>
            <Image
              src={member.picture}
              width="200px"
              height="200px"
              objectFit="cover"
            />
            <Text isCenter>{member.fullName}</Text>
            <Text isCenter>{member.role}</Text>
            <Pane>
              {member.links.map((link, index) => (
                <Text
                  key={`${index}-${member.fullName}`}
                  as="a"
                  href={`mailto:${link.src}`}
                >
                  <Icon name={link.icon} />
                </Text>
              ))}
            </Pane>
          </Card>
        ))}
      </Container>
    </Wrapper>
  </Section>
)

export default OurTeam
