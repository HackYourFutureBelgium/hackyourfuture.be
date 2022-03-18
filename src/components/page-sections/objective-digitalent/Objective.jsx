import React from "react"

import {Container, Tle,Ul,Li,AbsoluteContainer, TextContainer } from "./style"
import {Section, Wrapper,Title,Text ,Image } from "../../ui"
//import { COLOR } from "../../../utils/constants"
import imageUrl from "../../../assets/images/bootcamp.jpg"


const data ={
    titel:"Objective",
    text: "In co-creation with hiring companies, train or upskill 100 persons with already someknowledge in programming:",
    description:[
        "Increasing number of graduates who after a year are still unemployed </br>",
        "Digitalents aims at bridging the gap </br></br>"],
    image: imageUrl

}
const Objective = ()=>{
    return(
    <Section>
    <Wrapper>
      <Container >
        <TextContainer>
        <Title><Tle>{data.titel}</Tle></Title>
        <Text>{data.text}</Text>
        {data.description.map((item, index) => (
           <Ul>
              <Li key={index}>
                <Text  dangerouslySetInnerHTML={{ __html: item }} />
              </Li>
              </Ul>
            ))}
             </TextContainer>
      </Container>
      <AbsoluteContainer>
        <Image src={data.image} width="70%" height="70%" objectFit="cover" />
      </AbsoluteContainer>
    </Wrapper>
  </Section>

    )

};

export default Objective