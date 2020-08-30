import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import VolunteerHeader from "../components/page-sections/volunteer-header"
import WhyVolunteer from "../components/page-sections/why-volunteer"
import SingleTestimonial from "../components/page-sections/single-testimonial"
import anthonyPictureUrl from "../assets/testimonials/anthony.png"
import eleniPictureUrl from "../assets/testimonials/eleni.png"

const testimonialAnthonyData = {
  name: "Anthony",
  role: "Coach HackYourFuture",
  quote:
    "“I’m currently in a privileged position so I feel it is time for me to help the community that helped me when I was learning. Additionally, I want to help increase diversity in the development community. HackYourFuture gives me the opportunity to learn new soft skills like presenting and mentoring. And above all it is just fun!”",
  image: anthonyPictureUrl,
  cta: "Discover our Coaches Guidebook",
  ctaLink: "https://home.hackyourfuture.be/coaches",
}
const testimonialEleniData = {
  name: "Eleni",
  role: "Mentor HackYourFuture",
  quote:
    "“Hack Your  Future is one of the greatest programs that I joined. It has opened many doors for me to learn a lot about software and web development. Without this program, I wouldn't be at the current job which requires good knowledge in front-end development”",
  image: eleniPictureUrl,
  cta: "Discover our Mentor Guidebook",
  ctaLink: "https://home.hackyourfuture.be/mentors",
}

const VolunteerPage = () => (
  <LandingLayout page="volunteer">
    <VolunteerHeader />
    <WhyVolunteer />
    <SingleTestimonial data={testimonialAnthonyData} />
    <SingleTestimonial data={testimonialEleniData} isReverse />
  </LandingLayout>
)

export default VolunteerPage
