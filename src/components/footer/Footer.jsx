import React from "react"

import { StyledFooter } from "./style"
import { Title, Pane, Text, Image } from "../ui"

import facebookUrl from "../../assets/social/facebook.svg"
import twitterUrl from "../../assets/social/twitter.svg"
import githubUrl from "../../assets/social/github.svg"
import linkedinUrl from "../../assets/social/linkedin.svg"

const data = {
  title: "Hack Your Future",
  address: "BeCentral Cantersteen 12 1000 Bruxelles",
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

const Footer = props => (
  <StyledFooter>
    <Pane direction="column">
      <Title level={3} isUpperCase>
        {data.title}
      </Title>
      <Text>{data.address}</Text>
      <Text is="a" href="mailto:contact@hackyourfuture.be">
        {data.email}
      </Text>
      <Pane>
        {data.socials.map((social, index) => (
          <Text is="a" href={social.link} target="_blank">
            <Image src={social.image} width="26px" height="26px" />
          </Text>
        ))}
      </Pane>
    </Pane>
  </StyledFooter>
)

export default Footer
