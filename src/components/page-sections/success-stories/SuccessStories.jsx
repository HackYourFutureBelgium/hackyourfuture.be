import React from "react"
// import styled from "styled-components"
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import { Section, Wrapper } from "../../ui"

const SuccessStories = () => {
  return (
    <Section>
      <Wrapper>
        <Carousel
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}
        >
          <img src="https://picsum.photos/200?1" alt="lol" />
          <img src="https://picsum.photos/200?2" alt="lol" />
          <img src="https://picsum.photos/200?3" alt="lol" />
        </Carousel>
      </Wrapper>
    </Section>
  )
}

export default SuccessStories
