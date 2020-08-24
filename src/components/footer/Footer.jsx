import React from "react"

import { Title, Pane, Text, Image, Section, Wrapper } from "../ui"

import facebookUrl from "../../assets/social/facebook.svg"
import twitterUrl from "../../assets/social/twitter.svg"
import githubUrl from "../../assets/social/github.svg"
import linkedinUrl from "../../assets/social/linkedin.svg"

const data = {
  title: "Hack Your Future",
  address: "BeCentral\nCantersteen 12\n1000 Bruxelles",
  email: "contact@hackyourfuture.be",
  socials: [
    { link: "https://www.facebook.com/HackYFutureBE/", image: facebookUrl },
    { link: "https://twitter.com/HackYFutureBE", image: twitterUrl },
    { link: "https://github.com/HackYourFutureBelgium", image: githubUrl },
    {
      link: "https://www.linkedin.com/company/hackyourfuture-belgium/",
      image: linkedinUrl,
    },
  ],
}

const Footer = () => (
  <Section hasShadow>
    <Wrapper>
      <Pane direction="column" alignItems="center">
        <Title level={3} isUpperCase>
          {data.title}
        </Title>
        <Text isCenter>{data.address}</Text>
        <Text as="a" href="mailto:contact@hackyourfuture.be">
          {data.email}
        </Text>
        <Pane justifyContent="center" margin="20px 0">
          {data.socials.map((social, index) => (
            <Text
              as="a"
              href={social.link}
              target="_blank"
              key={index}
              margin="0 10px"
            >
              <Image src={social.image} width="26px" height="26px" />
            </Text>
          ))}
        </Pane>
      </Pane>
    </Wrapper>
  </Section>
)

export default Footer
