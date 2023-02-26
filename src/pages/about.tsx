import LandingLayout from "../components/layout/landing-layout"
import AboutHeader from "../components/page-sections/about-header"
import AboutValues from "../components/page-sections/about-values"
import MissionVision from "../components/page-sections/mission-vision"
import ImageDescription from "../components/page-sections/image-description"
import OurTeam from "../components/page-sections/our-team"
import graduationUrl from "../assets/images/graduation.jpg"


const DescriptionHistoryData = {
  title: "History",
  description:
    "HackYourFuture was initially founded in 2015 in Amsterdam.<br/>Because our curriculum is 100% open, the school was replicated in many countries, including Belgium in 2018.<br/><br/>All International Chapters share the aim to enable refugees and disadvantaged people to build digital skills for a career in web development, facilitate the integration of newcomers, and address the shortage of qualified workforce in the IT sector.",
  image: graduationUrl,
}

const AboutPage = () => (
  <LandingLayout page="about">
    <AboutHeader />
    <AboutValues />
    <MissionVision />
    <ImageDescription data={DescriptionHistoryData} />
    <OurTeam />
  </LandingLayout>
)

export default AboutPage
