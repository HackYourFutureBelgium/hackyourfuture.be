import React from "react"

import {  Ul, Li,TextContainer,AbsoluteContainer,Container, Textt} from "./style"
import { Title, Text, Image, Section, Wrapper, Button } from "../../ui"
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
              <Text>
                <Title  direction="row" >{data.titel}</Title>
              {data.description.map((item, index) => (
           <Ul>
              <Li key={index}>
                <Text  dangerouslySetInnerHTML={{ __html: item }} />
              </Li>
              </Ul>
            ))}
            </Text>  
          </TextContainer>
          <Button
          is="a"
          href="https://docs.google.com/forms/d/18mkjWFDjqHW-_FV4tnqk_Zg2-lHuPCC4tAfwtsUeO9A/edit"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Register now for the next info day
        </Button>   

              <AbsoluteContainer>
        <Image src={data.image} width="90%" height="100%" objectFit="cover" />
      </AbsoluteContainer>
        </Container>
    </Wrapper>
    </Section>
    

    )

};

export default WhyDigtalent