import React from "react"


import { Container, Card } from "./style"
import { Title, Text, Section, Wrapper} from "../../ui"
import { COLOR } from "../../../utils/constants"
import JdUrl from '../../../assets/team/eductional-officer.pdf'
const data = {
    title:"HackYourFuture is looking for Educational Officer @ Lab Brussels",
    description1: "HackYourFuture Belgium is a non-profit organization that offers programming training  to refugees, asylum seekers and others that have limited access to higher education and the job market in Belgium under the umbrella of Open Knowledge Belgium.",                                                                                          
    description2:" Under the overall guidance from the General Manager and under the direct supervision of the Education Coordinator & Researcher, the Education Officer is responsible for the HYF Lab @ Bruxelles at the operational level.",
   Link:JdUrl,

}


const JoinUs =()=>(
    <Section background={COLOR.WHITE_LILAC}>
     <Wrapper>
       
      <Container>
            <Title>Join Us</Title>
       <Card>
           <Title isUpperCase ={false}>{data.title}</Title>
           <Text>{data.description1}</Text>
           <br />
           <Text>{data.description2}<Text as="a"
           href = {data.Link}
            target="_blank"
            style ={{color:"#1C2294"}}
           >Read more ...</Text></Text>
           
           </Card>
           
   </Container>
    
   </Wrapper>
    </Section>
)

export default JoinUs