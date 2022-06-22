import React from "react"

import { Section, Wrapper, Title, Text, Image, Icon } from "../../ui"
import imageUrl from "../../../assets/images/bootcamp.jpg"
import SingleTestimonial from "../single-testimonial/SingleTestimonial"

const data = {
  name: "Objective",
  cta: "Check-out our partners",
  ctaLink: "https://hackyourfuture.be/",
  quote: [
    "In co-creation with hiring companies, train or upskill 100 persons with already someknowledge in programming",
    ",Increasing number of graduates who after a year are still unemployed and  ",
    "Digitalents aims at bridging the gap",
  ],
  image: imageUrl,
}
const Objective = () => {
  return (
    <Section
      padding="0"
      paddingMobile="10"
      style={{ marginBottom: "50px", paddingTop: "20px" }}
    >
      <SingleTestimonial data={data} />
    </Section>
  )
}

export default Objective
