import React, { Fragment, useState } from "react"

import FAQCard from "../../faq-card"
import { Pane, Section, Wrapper, Title, Input } from "../../ui"
import { SHADOW } from "../../../utils/constants"
import { COLOR } from "../../../utils/constants"

import styled from "styled-components"

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLOR.BLUE_VIOLET};
`

const CATEGORY = {
  APPLICANT: "applicant",
  VOLUNTEER: "volunteer",
  PARTNERS: "partners",
}

const data = {
  titles: {
    [CATEGORY.APPLICANT]: "For applicants",
    [CATEGORY.VOLUNTEER]: "For volunteers",
    [CATEGORY.PARTNERS]: "For partners",
  },
  faqs: [
    {
      question: "What is the application process?",
      answer:
        "The application process is organised in 3 steps: a registration, a technical assignment and a video interview.<br/><br/>First, you will need to register before the deadline on our website by clicking <a>here</a> and fill in all the relevant information we ask for.<br/><br/>Second, you will receive an automatic email with a link to an assignment. This assignment will take you around 25 hours to finish. Make sure to start on time! Once the assignment is done, you will have to submit it for review.</br><br/>Finally, we will assess the quality of your techincal assignment and if positive, invite you for a video interview. During the interview, we will assess your level of English and your motivation. Students who are selected will receive a confirmation email after all interviews have been carried out. Good luck!",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "Who can apply?",
      answer:
        "We teach motivated refugees and other vulnerable individuals with limited access to education or the labor market. Anyone living in Belgium, who wants to start a career in web development is welcome to apply. However, priority will always be given to refugees and asylum seekers. Women are strongly encouraged to apply!<br/><br/>The requirements:</br><ul><li>You’re +18 years old</li><li>You’re extremely motivated to start a career in web development.</li><li>You speak English at an intermediate level.</li><li>You can study a minimum of 25 hours per week.</li><li>You are recognized as a refugee or waiting for your recognition.</li><li>You are a migrant with limited access to education or the labor market.</li></ul>We’re a free program. We cover transportation costs and provide laptops for students that don't have their own during the training.",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "I am not a refugee. Can I still apply?",
      answer:
        "HackYourFuture is a program for people who have limited access to higher education and the job market in Belgium and priority will always be given to refugees and asylum seekers. You are welcome to apply to the program, but please explain in your motivation why you believe you are disadvantaged in Belgium and need the HackYourFuture program.",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "I am not living in Belgium. Can I still apply?",
      answer:
        "HackYourFuture is also present in other countries like <a href='https://www.hackyourfuture.net/international/' target='_blank'>the Netherlands and Denmark</a>. If we’re not active (yet) in your country, please reach out to us, so we can connect you with similar coding schools across Europe. Or you can choose to do self-study. All the resources we use in the HackYourFuture Belgium program are available online and you can find it <a href='https://home.hackyourfuture.be/curriculum' target='_blank'>here</a>",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "When does the new class start?",
      answer:
        "Keep an eye on <a href='' target='_blank'>The Program</a> page to find out when the next class will start! We also communicate on social media when a new call for applications is launched.",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "How long does the program take?",
      answer:
        "Our curriculum is divided into 14 modules. In total it takes 8 months. After graduating, you will get support from a voluntary mentor to look for an internship or job.",
      category: CATEGORY.APPLICANT,
    },
    {
      question: "How much time do I need to dedicate as a coach?",
      answer:
        "The time you might spend with us depends on which role you take. You can discover the different coaching roles <a href='https://home.hackyourfuture.be/coaches/coaching-roles' target='_blank'>here</a>!<br/><br/>Please <a href='https://docs.google.com/forms/d/e/1FAIpQLSef3OH8546MJNllcvrv7KomHelqzrKNpnLRVbI1ZqbeajnluA/viewform' target='_blank'>reach out to us</a> so we can discuss it in a call. We’re happy to see your face while explaining how you can become part of our mission.",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "Where can I find the curriculum?",
      answer:
        "Our open curriculum can be found <a href='https://home.hackyourfuture.be/curriculum' target='_blank'>here</a>.<br/><br/>For a more profound dive, don’t hesitate to explore our <a target='°blank' href='https://github.com/HackYourFutureBelgium'>Github page</a>!",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "Where do classes take place on Sunday?",
      answer:
        "We normally organize all our Sunday classes at BeCentral, on top of Brussels Central Station. However, during the COVID-19 pandemic, the classes take place remotely.",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "What’s happening during the week at HackYourFuture?",
      answer:
        "During the week, students work on their group assignments. If stuck, students ask questions on their class channel. On Fridays, students submit their group homework, which is then reviewed by one of the coaches.",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "Do I have to prepare the presentations as a coach?",
      answer:
        "No. The class presentations are prepared by our educational coordinator. You will only need to be available for a call a week prior to the beginning of your module to align on the goals and targets.",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "What does a mentor do at HackYourFuture?",
      answer:
        "We provide our graduates-to-be with a personal mentor, with whom they do a mentorship journey. During 6 weeks, our voluntary mentors guide our students towards finding a first internship or job experience, helping them with their CV and LinkedIn profile, giving them feedback on their motivational letters and doing mock interviews.<br/><br/>Please <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdsTmIgbCA2X02NUFsVSE-BQJIx6_KWpABujlZYA9PP8JgHJg/viewform'>reach out to us</a> so we can discuss it in a call. We’re happy to see your face while explaining how you can become part of our mission.",
      category: CATEGORY.VOLUNTEER,
    },
    {
      question: "How can I hire students?",
      answer:
        "After the 8-months program, our students will be looking to do an internship between 1 and 3 months. On top of having a degree from the home country, the students have learned the basics of web development. If you’d like to find out more about how we teach and our curriculum, <a href='https://home.hackyourfuture.be/curriculum#the-modules' target='_blank'>click here</a>. They usually have the basics of French and/or Dutch and are incredibly eager to learn!",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "Where can I see your graduates’ profiles?",
      answer:
        "We are most happy to share our graduates’ profiles with you. Please contact us on <a href='mailto:contact@hackyourfuture.be'>contact@hackyourfuture.be</a>!<br/><br/>Currently, our alumni are working on an alumni platform, where you will be able to consult the freshly graduated students who are currently looking for an internship or job. It will be online soon. In the meantime, don’t hesitate to reach out to us.",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "How can I support HackYourFuture?",
      answer:
        "HackYourFuture Belgium can only improve thanks to the help of our donors and sponsors. By supporting our organisation, you have an impact on the lives of newcomers in Belgium, who want to work hard to take their future into their own hands.<br/><br/>If you want to donate, please visit our <a href='/support-us' target='_blank'>Support us</a> page.<br/><br/>If you’d like to support us on a more structural basis, please contact us via <a href='mailto:contact@hackyourfuture.be'>contact@hackyourfuture.be</a>.<br/><br/>We’d love to hear from you and explore the most appropriate way of collaborating!",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "How do I become a partner for the bootcamp?",
      answer:
        "The bootcamp takes place once every 4 months. During 4 intensive weeks, our newly grads are challenged to work on a real project, with a real partner. Each team of 4 graduates is guided by a freelance coach.<br/><br/>Do you have a project you’d like to explore? Would you like to give an opportunity to incredibly motivated graduates? Get in touch via <a href='mailto:contact@hackyourfuture.be'>contact@hackyourfuture.be</a>!",
      category: CATEGORY.PARTNERS,
    },
    {
      question: "How can I donate computers?",
      answer:
        "Students can only develop their full potential if they have access to qualitative material to learn. Because not every student has the resources to buy a computer, we collect used computers from companies to borrow them for the duration of our program.<br/><br/>If your company has unused computers in stock, we would be incredibly grateful to make them useful again! Contact us via <a href='mailto:contact@hackyourfuture.be'>contact@hackyourfuture.be</a>",
      category: CATEGORY.PARTNERS,
    },
  ],
}

const categories = data.faqs
  .map(faq => faq.category)
  .filter((val, i, self) => self.indexOf(val) === i)

const FAQList = () => {
  const [filteredFaqs, setFilteredFaqs] = useState([])
  const [isFilterMode, setIsFilterMode] = useState(false)

  const onSearch = event => {
    const {
      target: { value },
    } = event

    if (value) {
      const matchingFaqs = data.faqs.filter(faq => {
        const question = faq.question.toLowerCase().trim()
        const searchQuery = value.toLowerCase().trim()

        return question.includes(searchQuery)
      })

      setIsFilterMode(true)
      setFilteredFaqs(matchingFaqs)
    } else {
      setIsFilterMode(false)
      setFilteredFaqs([])
    }
  }

  return (
    <Section>
      <Wrapper>
        <Pane margin="0 0 20px 0" alignItems="flex-start">
          <Pane width="400px">
            <Input
              type="text"
              onChange={onSearch}
              icon="search"
              placeholder="Search a keyword"
            />
          </Pane>
        </Pane>

        {!isFilterMode &&
          categories.map(category => (
            <Pane key={category} direction="column" width="100%">
              <Title level={2} size="S">
                {data.titles[category]}
              </Title>
              <Pane
                direction="column"
                alignItems="center"
                width="100%"
                boxShadow={SHADOW.BOX}
                margin="0 0 40px 0"
              >
                {data.faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index, self) => (
                    <Fragment key={`${index}-${category}-fragment`}>
                      <FAQCard
                        key={`${index}-${category}-card`}
                        question={faq.question}
                        answer={faq.answer}
                      />
                      {self.length - 1 !== index && (
                        <Separator key={`${index}-${category}-separator`} />
                      )}
                    </Fragment>
                  ))}
              </Pane>
            </Pane>
          ))}

        {isFilterMode && filteredFaqs.length ? (
          <Pane direction="column" width="100%">
            <Title level={2} size="S">
              Search results
            </Title>
            <Pane
              direction="column"
              alignItems="center"
              width="100%"
              boxShadow={SHADOW.BOX}
              margin="0 0 40px 0"
            >
              {filteredFaqs.map((faq, index, self) => (
                <Fragment key={`${index}-fragment`}>
                  <FAQCard question={faq.question} answer={faq.answer} />
                  {self.length - 1 !== index && <Separator />}
                </Fragment>
              ))}
            </Pane>
          </Pane>
        ) : null}

        {isFilterMode && !filteredFaqs.length && (
          <Title level={4} size="xs" style={{ marginTop: "50px" }}>
            No results found
          </Title>
        )}
      </Wrapper>
    </Section>
  )
}

export default FAQList
