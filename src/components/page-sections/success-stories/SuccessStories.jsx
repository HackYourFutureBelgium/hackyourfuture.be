import React, { useState } from "react"

import {
  Container,
  Carousel,
  CarouselContent,
  CarouselCard,
  Btn,
} from "./style"
import { Section, Wrapper, Icon, Text, Title, Image } from "../../ui"
import hanimUrl from "../../../assets/alumni/hanim.jpg"
import edouardoUrl from "../../../assets/alumni/edouardo.jpg"
import gitaUrl from "../../../assets/alumni/gita.jpg"
import ramziUrl from "../../../assets/alumni/ramzi.jpg"
import { COLOR } from "../../../utils/constants"

const PrevButton = ({ onClick }) => (
  <Btn side="left" onClick={onClick}>
    <Icon name="arrow-left" />
  </Btn>
)
const NextButton = ({ onClick }) => (
  <Btn side="right" onClick={onClick}>
    <Icon name="arrow-right" />
  </Btn>
)

const data = {
  title: "Our success stories",
  stories: [
    {
      picture: hanimUrl,
      name: "Zeynep Hanim",
      company: "Optis (Cronos)",
      role: "Full-stack Developer",
      quote:
        "HYF is a light that I saw at the bottom as well, a hope that I held onto  as I was building a new life in a new country. It gave me a chance not  only to improve my knowledge but to boost my confidence. Also, it gave me a chance to meet many  wonderful people.",
    },
    {
      picture: edouardoUrl,
      name: "Edouardo",
      company: "Capgemini",
      role: "IT Consultant",
      quote:
        "Hack your future definitely built the bridge between the unknown and the doors of my personal success, writing code is now part of my life and I will never forget the lessons learned and time spent with the fellow students and coaches. A big thank you!",
    },
    {
      picture: gitaUrl,
      name: "Gita",
      company: "ttl.be",
      role: "QA Developer",
      quote:
        "What HYF brought to me is you should never give up and always try to find a way when you’re stuck. I’ve learned that dreaming big without big efforts will bring you nowhere. HackYourFuture was part of my journey to become who I am now.",
    },
    {
      picture: ramziUrl,
      name: "Ramzi",
      company: "AppTweak",
      role: "UX/UI Designer",
      quote:
        "Hack Your Future is one of the greatest programs that I joined. It has opened many doors for me to learn a lot about software and web development. Without this program, I wouldn't be at the current job which requires good knowledge in front-end development",
    },
  ],
}

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = newIndex => {
    if (newIndex < 0) {
      setActiveIndex(0)
    } else if (newIndex > 3) {
      setActiveIndex(3)
    } else {
      setActiveIndex(newIndex)
    }
  }

  return (
    <Section style={{ overflow: "hidden" }}>
      <Wrapper>
        <Container>
          <Title level={2}>{data.title}</Title>
          <Carousel>
            <PrevButton onClick={() => goTo(activeIndex - 1)} />
            <NextButton onClick={() => goTo(activeIndex + 1)} />
            <CarouselContent activeIndex={activeIndex}>
              {data.stories.map((story, index) => (
                <CarouselCard key={index} isActive={index === activeIndex}>
                  <div>
                    <Image src={story.picture} alt={story.name} />
                    <Title
                      level={4}
                      size="xs"
                      isUpperCase={false}
                      isCenter
                      style={{ marginBottom: "0" }}
                    >
                      {`${story.name} - ${story.company}`}
                    </Title>
                    <Text
                      isCenter
                      margin="0 0 20px 0"
                      style={{ color: COLOR.BLUE_VIOLET, fontWeight: 600 }}
                      isWorkFont
                    >
                      {story.role}
                    </Text>
                    <Text isCenter>"{story.quote}"</Text>
                  </div>
                </CarouselCard>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </Wrapper>
    </Section>
  )
}

export default SuccessStories
