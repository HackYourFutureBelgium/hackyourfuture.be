import React from "react"


import { Container, Card } from "./style"
import { Title, Text, Section, Wrapper} from "../../ui"
import { COLOR } from "../../../utils/constants"
import JdUrl from '../../../assets/team/eductional-officer.pdf'
import Jd2Url from "../../../assets/team/JD-marketing.pdf"

const data = {
    jobs:[
    {title:" Educational Officer @ Lab Brussels",
    description1: "HackYourFuture Belgium is a non-profit organization that offers programming training  to refugees, asylum seekers and others that have limited access to higher education and the job market in Belgium under the umbrella of Open Knowledge Belgium.",                                                                                          
    description2:" Under the overall guidance from the General Manager and under the direct supervision of the Education Coordinator & Researcher, the Education Officer is responsible for the HYF Lab @ Bruxelles at the operational level.",
   link:JdUrl,},
   {
       title:"COMMUNITY & MARKETING MANAGER",
       description1:"Under the direct supervision of the General Manager of HackYourFuture Belgium (HYFBE),the Community & Marketing Manager is responsible for the recruitment of students, the HYFcommunity management as well as the marketing of related events and activities.",
       description2:"",
       link: Jd2Url
   }
    ]
}


const JoinUs =()=>(
    <Section background={COLOR.WHITE_LILAC}>
         <Wrapper>
            <Title>Join Us</Title>
    {data.jobs.map(job =>(
               
      <Container>
            <Card>
                 <Title isUpperCase>{job.title}</Title>
                 <Text>{job.description1}</Text>
                 <br/>
                 <Text>{job.description2}<Text as="a"
           href = {job.link}
            target="_blank"
            style ={{color:"#1C2294"}}
           >Read more ...</Text></Text>
                
</Card>        
</Container>
    
  
            
            ))}
        
            </Wrapper>    
   
    </Section>
)

export default JoinUs