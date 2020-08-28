import React from "react"
import { Link } from "gatsby"

import { LeftContainer, RightContainer, Container } from "./style.js"
import { Title, Pane, Text, Button, Section, Wrapper } from "../../ui"

const ImageDescription = ({ data, isReverse }) => (
  <Section>
    <Wrapper>
      <Container hasPadding>
        <LeftContainer isReverse={isReverse}>
          {data.title && <Title level={2}>{data.title}</Title>}
          {data.subtitle && (
            <Title level={4} size="xs" isUpperCase={false}>
              {data.subtitle}
            </Title>
          )}
          {data.description && (
            <Text
              maxWidth="470px"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}
          {data.cta && (
            <Button
              as={data.isCtaExternal ? "a" : Link}
              {...{ [data.isCtaExternal ? "href" : "to"]: data.ctaLink }}
              variant="minimal"
              iconRight="arrow-right"
              target={data.isCtaExternal ? "_blank" : undefined}
            >
              {data.cta}
            </Button>
          )}
        </LeftContainer>
        <RightContainer isReverse={isReverse}>
          <Pane
            backgroundImage={`url(${data.image})`}
            backgroundSize="cover"
            width="100%"
            height="100%"
          />
        </RightContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default ImageDescription
