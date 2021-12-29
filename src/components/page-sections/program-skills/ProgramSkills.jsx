import React from "react"

import { Container, LeftContainer, RightContainer } from "./style"
import { Title, Pane, Text, Section, Wrapper, Image, Button } from "../../ui"
import { COLOR } from "../../../utils/constants"
import htmlUrl from "../../../assets/images/html.svg"
import cssUrl from "../../../assets/images/css.svg"
import javascriptUrl from "../../../assets/images/javascript.svg"
import nodejsUrl from "../../../assets/images/node-js.svg"
import mysqlUrl from "../../../assets/images/sql-lite.svg"
import reactjsUrl from "../../../assets/images/react-js.svg"

const data = {
  title: "9-month program",
  cta1: "Discover the full curriculum here",
  cta2: "Become a coach",
  images: [
    { src: htmlUrl, name: "HTML" },
    { src: cssUrl, name: "CSS" },
    { src: javascriptUrl, name: "JavaScript" },
    { src: nodejsUrl, name: "NodeJS" },
    { src: mysqlUrl, name: "Database" },
    { src: reactjsUrl, name: "React" },
  ],
}

const ProgramSkills = () => (
  <Section>
    <Wrapper>
      <Container>
        <LeftContainer>
          <Title level={2}>{data.title}</Title>
          <Pane margin="10px 0">
            <Button
              as="a"
              href="https://home.hackyourfuture.be/curriculum#the-modules"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {data.cta1}
            </Button>
          </Pane>
          <Pane margin="10px 0">
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSef3OH8546MJNllcvrv7KomHelqzrKNpnLRVbI1ZqbeajnluA/viewform"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {data.cta2}
            </Button>
          </Pane>
        </LeftContainer>
        <RightContainer>
          {data.images.map((image, index) => {
            return (
              <Pane
                key={index}
                direction="column"
                alignItems="center"
                justifyContent="center"
                width="200px"
                height="150px"
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  width="65px"
                  height="60px"
                  style={{ objectFit: "contain" }}
                />
                <Text isCenter isPurple margin="10px 0 0 0" isWorkFont>
                  {image.name}
                </Text>
              </Pane>
            )
          })}
        </RightContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default ProgramSkills
