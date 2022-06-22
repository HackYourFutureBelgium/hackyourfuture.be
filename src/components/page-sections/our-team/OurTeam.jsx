import React from "react"

import { Card, Container, CardsContainer } from "./style.js"
import { Title, Text, Section, Wrapper, Image, Icon, Pane } from "../../ui"

import hindUrl from "../../../assets/team/Hind.jpg"
import evanUrl from "../../../assets/team/Evan.jpg"
import lizhenUrl from "../../../assets/team/Lizhen.jpg"
import gelilaUrl from "../../../assets/team/Gelila.jpg"
import yoshiUrl from "../../../assets/team/Yoshi.jpg"
import danielUrl from "../../../assets/team/Daniel.jpg"

const data = {
  teams: [
    {
      picture: danielUrl,
      fullName: "Daniel Halasz",
      role: "Educational Officer @ HYF Lab Brussels",
      links: [
        { icon: "mail", link: "mailto:daniel@hackyourfuture.be" },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/danielhalaszphotography/",
        },
      ],
    },
    {
      picture: evanUrl,
      fullName: "Evan Cole",
      role: "Instructional Designer",
      links: [
        { icon: "mail", link: "mailto:evan@hackyourfuture.be" },
        { icon: "linkedin", link: "https://www.linkedin.com/in/evan-cole/" },
      ],
    },
    {
      picture: gelilaUrl,
      fullName: "Gelila Ali",
      role: "Educational Officer @ HYF Lab Antwerp",
      links: [
        { icon: "mail", link: "mailto:gelila@hackyourfuture.be" },
        { icon: "linkedin", link: "https://www.linkedin.com/in/gelilaali/" },
      ],
    },
    {
      picture: hindUrl,
      fullName: "Hind Channa",
      role: "Communication and Community Officer",
      links: [
        { icon: "mail", link: "mailto:hind@hackyourfuture.be" },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/hind-channa-223b07176/",
        },
      ],
    },
    {
      picture: lizhenUrl,
      fullName: "Lizhen Xu",
      role: "General Manager",
      links: [
        { icon: "mail", link: "mailto:lizhen@hackyourfuture.be" },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/lizhenxu/",
        },
      ],
    },

    // {
    //   picture: yoshiUrl,
    //   fullName: "Yoshi Malaise",
    //   role: "Educational Coordinator & Researcher",
    //   links: [
    //     { icon: "mail", link: "mailto:yoshi@hackyourfuture.be" },

    //     {
    //       icon: "linkedin",
    //       link: "https://www.linkedin.com/in/yoshi-malaise/",
    //     },
    //   ],
    // },
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
