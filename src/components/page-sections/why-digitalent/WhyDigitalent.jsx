import React from "react"

import {  Ul, Li,TextContainer,AbsoluteContainer,Container, Textt} from "./style"
import { Title, Text, Image, Section, Wrapper, } from "../../ui"
import imageUrl from "../../../assets/images/new-career.jpg"

const data ={
    titel:"Why Digitalents?",
    description:[
        "Companies have more hiring needs for specific profiles </br>",
        "Increasing number of graduates who after a year are still unemployed </br>",
        "Digitalents aims at bridging the gap </br></br>"],
    image: imageUrl

}
const WhyDigtalent = ()=>{
    return(
    <Section >
    <Wrapper>
        <Container>
          <TextContainer>
              <Textt>
                <Title  direction="row" >{data.titel}</Title>
              {data.description.map((item, index) => (
           <Ul>
              <Li key={index}>
                <Text  dangerouslySetInnerHTML={{ __html: item }} />
              </Li>
              </Ul>
            ))}
            </Textt>
            </TextContainer>

              <AbsoluteContainer>
        <Image src={data.image} width="90%" height="100%" objectFit="cover" />
      </AbsoluteContainer>
        </Container>
    </Wrapper>
    </Section>
    

    )

};

export default WhyDigtalent