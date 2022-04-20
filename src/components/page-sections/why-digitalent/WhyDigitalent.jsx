import React from "react"

import SingleTestimonial from "../single-testimonial/SingleTestimonial"
import { Title, Section, Wrapper,Text,Icon,Image } from "../../ui"
import { COLOR } from "../../../utils/constants"
import imageUrl from "../../../assets/images/new-career.jpg"

const data ={
    name:"Why Digitalents?",
    quote:[
        "✅Companies have more hiring needs for specific profiles",
        "                 ✅Increasing number of graduates who after a year are still unemployed                ",
        "✅Digitalents aims at bridging the gap"],
    cta: "register now for our recruitment day",
    ctaLink: "https://docs.google.com/forms/d/1P8JxEyHHRNJs06e6_NpxrkuzQba1CGRacRtYbIV9N9k/edit#responses",
    image: imageUrl

}
const WhyDigtalent = ()=>{
    return(
    <Section padding="0" paddingMobile="10" style={{ marginBottom: "0px",paddingTop: "0px" }}>
      <SingleTestimonial data={data} isReverse/>
       </Section>

    )

};

export default WhyDigtalent