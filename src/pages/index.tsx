import LandingLayout from "../components/layout/landing-layout"
import HomeHeader from "../components/page-sections/home-header"
import OurImpact from "../components/page-sections/our-impact"
import ImageDescription from "../components/page-sections/image-description"
import OurValues from "../components/page-sections/our-values"
import OurPartners from "../components/page-sections/our-partners"
import SuccessStories from "../components/page-sections/success-stories"
import Donate from "../components/page-sections/donate"
import ContactUs from "../components/page-sections/contact-us"
import OurProgramImageUrl from "../assets/images/our-program.jpg"


const ourProgramData = {
  title: "Our program",
  description:
    "Our <b>9-month</b> program is divided into <b>12 modules</b>. The last module is a <b>6-weeks intensive Final Project</b> where students work on a real project with a real partner. Our training takes place at <b>Epitech</b> (Brussels) every <b>Sunday</b>. During the week, students are supported online in their <b>self-study</b>, homework and peer learning.",
  cta: "Discover more",
  ctaLink: "/program",
  image: OurProgramImageUrl,
}

const donateData = {
  title: "Support the developers of tomorrow",
  description:
    "Help refugees build digital & soft skills for a career in web development. We are a non-profit organization. Thanks to your support we can improve and keep our program free of charge for students.",
}


const IndexPage = () => (
  <LandingLayout page="index">
    <HomeHeader />
    <ImageDescription data={ourProgramData} hasRectangleBackground />
    <OurImpact />
    <OurValues />
    <SuccessStories />
    <OurPartners />
    <Donate data={donateData} />
    <ContactUs />
  </LandingLayout>
)

export default IndexPage
