import React from "react"

import {
  PictureContainer,
  QuoteContainer,
  ContentContainer,
  Container,
} from "./style"
import { Title, Text, Image, Button, Section, Wrapper } from "../../ui"
import { COLOR } from "../../../utils/constants"

const SingleTestimonial = ({ data, isReverse }) => (
  <Section>
    <Wrapper>
      <Container isReverse={isReverse}>
        <PictureContainer isReverse={isReverse}>
          <Image src={data.image} width="100%" height="100%" />
        </PictureContainer>
        <QuoteContainer isReverse={isReverse}>
          <ContentContainer>
            <Title
              level={4}
              size="s"
              isUpperCase={false}
              style={{ marginBottom: "0" }}
            >
              {data.name}
            </Title>
            <Text
              color={COLOR.BLUE_VIOLET}
              size="xs"
              isPurpleLight
              isWorkFont
              style={{ marginBottom: "20px" }}
            >
              {data.role}
            </Text>
            <Text>{data.quote}</Text>
          </ContentContainer>
          <Button
            as="a"
            href={data.ctaLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            hasRadius={false}
          >
            {data.cta}
          </Button>
        </QuoteContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default SingleTestimonial
