import React from "react"

import { COLOR } from "../../../utils/constants"
import { Section, Wrapper, Title, Text} from "../../ui"
import { Card, Container } from "./style"


const data = {
  firstTitle: "DIGITALENTS programme offers two tracks", 
  items : [
    {title : "Typescript", 
    description : "In this track you will solve advanced programming problems with Typescript which is a valuable skill as noted by top engineering companies (FAANG). You will create a web application including backend API and React-Typescript UI."}, 
    {title : "ASP.Net", 
    description : "After finishing this track you will have basic understanding of C# and .NET. You will connect to database to change and retrieve data and create a simple web application using ASP.NET Core."}
  ]
}


const TwoTracksDigitalents = () => (
  <Section background={COLOR.WHITE_LILAC}>
    <Wrapper direction="row" style={{ flexWrap: "wrap" }}>
    <Title
      level={3}
      size="m"
      isCenter
      isUpperCase={false}
      color={COLOR.BLUE_VIOLET}> {data.firstTitle} </Title>
      <Wrapper> 
        <Container>
          {data.items.map(item => (
            <Card key={item.title}> 
            <Title level={2} size="s">{item.title}</Title>
          <Text>{item.description}</Text>
            </Card>
          ))}
         </Container>
          </Wrapper>
      </Wrapper>
  </Section>
)

export default TwoTracksDigitalents
