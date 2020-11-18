import React from "react"

import { Card, Container, CardsContainer } from "./style.js"
import { Title, Text, Section, Wrapper, Image, Icon, Pane } from "../../ui"

import manonUrl from "../../../assets/team/manon.jpg"
import lienUrl from "../../../assets/team/lien.png"
import evanUrl from "../../../assets/team/evan.png"

const data = {
  teams: [
    {
      picture: manonUrl,
      fullName: "Manon Brulard",
      role: "Co-Founder & General Coordinator",
      links: [
        { icon: "mail", link: "mailto:manon@hackyourfuture.be" },
        { icon: "twitter", link: "https://twitter.com/BrulardManon" },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/manon-brulard-6a84833a/",
        },
      ],
    },
    {
      picture: lienUrl,
      fullName: "Lien Arits",
      role: "Community & Communication Coordinator",
      links: [
        { icon: "mail", link: "mailto:lien@hackyourfuture.be" },
        { icon: "twitter", link: "" },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/lien-arits-88722683/",
        },
      ],
    },
    {
      picture: evanUrl,
      fullName: "Evan Cole",
      role: "Educational Coordinator",
      links: [
        { icon: "mail", src: "mailto:evan@hackyourfuture.be" },
        { icon: "twitter", src: "" },
        { icon: "linkedin", src: "https://www.linkedin.com/in/evan-cole/" },
      ],
    },
  ],
}

const OurTeam = () => (
  <Section>
    <Wrapper>
      <Container>
        <Title>Our team</Title>
        <CardsContainer>
          {data.teams.map(member => (
            <Card key={member.fullName}>
              <Image
                src={member.picture}
                width="180px"
                height="180px"
                objectFit="cover"
                radius="100%"
                style={{
                  marginBottom: "20px",
                  filter: "grayscale(1)",
                  minHeight: "180px",
                  minWidth: "180px",
                }}
              />
              <Title
                level={4}
                size="s"
                isUpperCase={false}
                style={{ marginBottom: "0" }}
              >
                {member.fullName}
              </Title>
              <Pane
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: "55px" }}
              >
                <Text isCenter isWorkFont isPurpleLight>
                  {member.role}
                </Text>
              </Pane>
              <Pane justifyContent="space-around" maxWidth="100px">
                {member.links.map((link, index) => (
                  <Text
                    key={`${index}-${member.fullName}`}
                    as="a"
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Icon
                      name={link.icon}
                      style={{ width: "28px", height: "28px" }}
                    />
                  </Text>
                ))}
              </Pane>
            </Card>
          ))}
        </CardsContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default OurTeam
