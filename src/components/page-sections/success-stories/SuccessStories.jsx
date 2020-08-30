import React, { useState } from "react"
import styled from "styled-components"

import { Section, Wrapper } from "../../ui"
import { Icon, Text, Title, Image } from "../../ui"
import { SHADOW, COLOR, MEDIA_QUERY } from "../../../utils/constants"
import hanimUrl from "../../../assets/alumni/hanim.jpg"
import gitaUrl from "../../../assets/alumni/gita.jpg"
import ramziUrl from "../../../assets/alumni/ramzi.jpg"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Carousel = styled.div`
  width: 50%;
  min-height: 500px;
  position: relative;
  box-sizing: border-box;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 80%;
  }
`

const CarouselContent = styled.div`
  position: absolute;
  width: 300%;
  box-sizing: border-box;
  display: flex;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 33.333}%)`};
  transition: transform 0.3s ease;
`

const CarouselCard = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 500px;
  box-sizing: border-box;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  transition: all 0.3s ease;
  transform: ${({ isActive }) => (isActive ? "none" : "scale(0.8)")};

  > div {
    box-sizing: border-box;
    text-align: center;
    box-shadow: ${SHADOW.BOX};
    width: 100%;
    height: 100%;
    padding: 50px;

    @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
      padding: 20px;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
    margin-bottom: 20px;

    @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
      width: 100px;
      height: 100px;
    }
  }
`

const Btn = styled.button`
  position: absolute;
  left: ${({ side }) => (side === "left" ? "-40px" : "auto")};
  right: ${({ side }) => (side === "right" ? "-40px" : "auto")};
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  background-color: transparent;
  color: ${COLOR.BLUE_VIOLET};
  border: none;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }
`

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
  stories: [
    {
      picture: hanimUrl,
      name: "Zeynep Hanim",
      company: "Optis (Cronos)",
      role: "Full-stack Developer",
      quote:
        "HYF is a light that I saw at the bottom a well, a hope that I held onto  as I was building a new life in a new country. It gave me chance not  only to improve my knowledge but to boost my confidence. Also,  gave me  chance to meet many  wonderful people.",
    },
    {
      picture: gitaUrl,
      name: "Gita",
      company: "The Test Leader",
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
        "Hack Your  Future is one of the greatest programs that I joined. It has opened many doors for me to learn a lot about software and web development. Without this program, I wouldn't be at the current job which requires good knowledge in front-end development.",
    },
  ],
}

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const goTo = newIndex => {
    if (newIndex < 0) {
      setActiveIndex(0)
    } else if (newIndex > 2) {
      setActiveIndex(2)
    } else {
      setActiveIndex(newIndex)
    }
  }

  return (
    <Section>
      <Wrapper>
        <Container>
          <Carousel>
            <PrevButton onClick={() => goTo(activeIndex - 1)} />
            <NextButton onClick={() => goTo(activeIndex + 1)} />
            <CarouselContent activeIndex={activeIndex}>
              {data.stories.map((story, index) => (
                <CarouselCard key={index} isActive={index === activeIndex}>
                  <div>
                    <Image src={story.picture} alt={story.name} />
                    <Title level={4} size="xs" isUpperCase={false} isCenter>
                      {`${story.name} - ${story.company}`}
                    </Title>
                    <Text isCenter margin="20px 0">
                      {story.role}
                    </Text>
                    <Text isCenter>{story.quote}</Text>
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
