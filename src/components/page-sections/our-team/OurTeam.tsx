import React from "react"

import { Card, Container, CardsContainer } from "./style"
import { Title, Text, Section, Wrapper, Image, Icon, Pane } from "../../ui"

//import hindUrl from "../../../assets/team/Hind2.jpg"
// import evanUrl from "../../../assets/team/Evan.jpg"
import lizhenUrl from "../../../assets/team/Lizhen.jpg"
import anthonyUrl from "../../../assets/team/anthony.jpg"
import lucieUrl from "../../../assets/team/lucie.png"
import donatelloUrl from "../../../assets/team/donatello.png"
//import danielUrl from "../../../assets/team/Daniel.jpg"
// import tugbaUrl from "../../../assets/team/Tugba.jpg"

const data = {
  teams: [
  //  {
  //    picture: danielUrl,
  //    fullName: "Daniel Halasz",
  //    role: "Educational Officer",
  //    links: [
  //      { icon: "mail", link: "mailto:daniel@hackyourfuture.be" },
  //      {
  //        icon: "linkedin",
  //        link: "https://www.linkedin.com/in/danielhalaszphotography/",
  //      },
  //    ],
  //  },
    // {
    //   picture: evanUrl,
    //   fullName: "Evan Cole",
    //   role: "Instructional Designer",
    //   links: [
    //     { icon: "mail", link: "mailto:evan@hackyourfuture.be" },
    //     { icon: "linkedin", link: "https://www.linkedin.com/in/evan-cole/" },
    //   ],
    // },
    // {
    //   picture: tugbaUrl,
    //   fullName: "Tugba Yildiz",
    //   role: "Educational Officer",
    //   links: [
    //     { icon: "mail", link: "mailto:tugba@hackyourfuture.be" },
    //     { icon: "linkedin", link: "https://www.linkedin.com/in/yildiztugba/" },
    //   ],
    // },
   // {
   //   picture: hindUrl,
   //   fullName: "Hind Channa",
   //   role: "Communication and Community Officer",
   //   links: [
   //     { icon: "mail", link: "mailto:hind@hackyourfuture.be" },
   //     {
   //       icon: "linkedin",
   //      link: "https://www.linkedin.com/in/hind-channa-223b07176/",
   //     },
   //   ],
   // },
   {
    picture: lucieUrl,
    fullName: "Lucie Kroemer",
    role: "Board Member",
    links: [
     // { icon: "mail", link: "mailto:lizhen@hackyourfuture.be" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/lizhenxu/",
      },
    ],
  },
  {
    picture: anthonyUrl,
    fullName: "Anthony Meirlaen",
    role: "Board Member",
    links: [
    //  { icon: "mail", link: "mailto:lizhen@hackyourfuture.be" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/lizhenxu/",
      },
    ],
  },
  {
    picture: donatelloUrl,
    fullName: "Donatello Cartella",
    role: "Board Member",
    links: [
      //{ icon: "mail", link: "mailto:lizhen@hackyourfuture.be" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/lizhenxu/",
      },
    ],
  },
    {
      picture: lizhenUrl,
      fullName: "Lizhen Xu",
      role: "Board Member and General Manager",
      links: [
        { icon: "mail", link: "mailto:lizhen@hackyourfuture.be" },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/lizhenxu/",
        },
      ],
    },
  ],
}

const OurTeam = () => (
  <Section>
    <Wrapper>
      <Container>
        <Title>Founders and Board Members</Title>
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
                      color={undefined}
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
