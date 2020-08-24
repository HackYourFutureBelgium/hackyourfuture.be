import React from "react"

import LandingLayout from "../components/layout/landing-layout"
import ProgramHeader from "../components/page-sections/program-header"
import ProgramSkills from "../components/page-sections/program-skills"
import WhoCanApply from "../components/page-sections/who-can-apply"
import ImageDescription from "../components/page-sections/image-description"

import OurProgramImageUrl from "../images/our-program.png"

const DescriptionOneData = {
  title: "But that's not it",
  subtitle: "Bootcamp",
  description:
    "We aim to empower refugees by teaching them the necessary skills for a career in software development. We believe coding can help people in disadvantaged situations live up to their potential, get back control of their own lives and be an important change to their environment.",
  cta: "Discover more",
  image: OurProgramImageUrl,
}
const DescriptionTwoData = {
  subtitle: "Towards a job: Mentorship Program",
  description:
    "Career guidance is an essential part of our program, as the real challenge for our graduates is finding an internship or job as a junior web developer.<br>Thanks to our volunteer-mentors, we offer our students a career guiding journey during the last six weeks of our program. Each student has its own mentor, who helps with updating their CV and LinkedIn profile, writing a motivation letter, doing a mock interview, and lead them through the job-hunting jungle in the IT sector.",
  cta: "Become a mentor",
  image: OurProgramImageUrl,
}
const DescriptionThreeData = {
  subtitle: "HackTheTalks",
  description:
    "On Sunday mornings, before class starts, we regularly organize HackTheTalks. These are inspirational sessions by experts, within and outside the IT sector, to share their knowledge with our community. It can be about how to organize a healthy work environment, it may as well be about how to constantly keep updated as a junior web developer. In other worths, highly valuable mornings!",
  image: OurProgramImageUrl,
}

const ProgramPage = () => (
  <LandingLayout>
    <ProgramHeader />
    <ProgramSkills />
    <WhoCanApply />
    <ImageDescription data={DescriptionOneData} />
    <ImageDescription data={DescriptionTwoData} isReverse />
    <ImageDescription data={DescriptionThreeData} />
  </LandingLayout>
)

export default ProgramPage
