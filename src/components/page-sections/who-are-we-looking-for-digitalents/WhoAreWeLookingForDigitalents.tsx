import React from "react"

import {Section} from "../../ui"
import imageUrl from "../../../assets/images/digitalents.jpg"
import SingleTestimonial from "../single-testimonial/SingleTestimonial"


const data ={
    name:"Who are we looking for?",
    cta: "Apply now for our DIGITALENTS programme",
    ctaLink: "https://docs.google.com/forms/d/1P8JxEyHHRNJs06e6_NpxrkuzQba1CGRacRtYbIV9N9k/edit#responses",
    quote:[
      "Do you already have some knowledge in programming?",
      "                             Are you highly motivated to enrich your digital skills?",
      "                             Do you have the time to commit to your track of choice for 10 weeks?"],

    image: imageUrl,
}
const WhoAreWeLookingForDigitalents = ()=>{
    return(
      <Section padding="0" paddingMobile="10" style={{ marginBottom: "50px",paddingTop: "20px" }}>
          <SingleTestimonial data={data} isReverse/>
      </Section>
 
    )

};

export default WhoAreWeLookingForDigitalents