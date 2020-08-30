import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import ProgramHeader from "../components/page-sections/program-header"
import ProgramSkills from "../components/page-sections/program-skills"
import WhoCanApply from "../components/page-sections/who-can-apply"
import ImageDescription from "../components/page-sections/image-description"

import bootcampUrl from "../assets/images/bootcamp.jpg"
import mentorshipUrl from "../assets/images/mentorship.jpg"
import hackthetalkUrl from "../assets/images/hack-the-talk.jpg"

const DescriptionOneData = {
  title: "But that's not it",
  subtitle: "Bootcamp",
  description:
    "We challenge our graduates to a 4-weeks intensive bootcamp, where they build open source projects with a social impact. During the bootcamp, the students get acquainted with new skills, discover new ways to collaborate, processes and learn about the industry best practices that are expected in the local labor market.",
  cta: "Discover more",
  ctaLink: "https://bootcamp.hackyourfuture.be/",
  isCtaExternal: true,
  image: bootcampUrl,
}
const DescriptionTwoData = {
  subtitle: "Towards a job: Mentorship Program",
  description:
    "Career guidance is an essential part of our program, as the real challenge for our graduates is finding an internship or job as a junior web developer.<br/><br/>Thanks to our voluntary mentors, we offer our students a career guiding journey when graduating from our program. Each student has its own mentor, who helps with updating their CV and LinkedIn profile, writing a motivation letter, doing a mock interview, and leading them through the job-hunting jungle in the IT sector",
  cta: "Become a mentor",
  ctaLink:
    "https://docs.google.com/forms/d/e/1FAIpQLSdsTmIgbCA2X02NUFsVSE-BQJIx6_KWpABujlZYA9PP8JgHJg/viewform",
  isCtaExternal: true,
  image: mentorshipUrl,
}
const DescriptionThreeData = {
  subtitle: "HackTheTalks",
  description:
    "On Sunday mornings, before class starts, we regularly organize HackTheTalks. These are inspirational sessions by experts, within and outside the IT sector, to share their knowledge with our community. It can be about how to organize a healthy work environment, it may as well be about how to constantly keep updated as a junior web developer. In other words, highly valuable mornings!",
  image: hackthetalkUrl,
}

const ProgramPage = () => (
  <LandingLayout page="program">
    <ProgramHeader />
    <WhoCanApply />
    <ProgramSkills />
    <ImageDescription data={DescriptionOneData} />
    <ImageDescription data={DescriptionTwoData} isReverse />
    <ImageDescription data={DescriptionThreeData} />
  </LandingLayout>
)

export default ProgramPage
