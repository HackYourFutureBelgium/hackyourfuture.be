import React from "react"
import { Link } from "gatsby"

import { LeftContainer, RightContainer, Container } from "./style"
import { Title, Pane, Text, Button, Section, Wrapper } from "../../ui"
import { COLOR } from "../../../utils/constants"

const ImageDescription = ({
  data,
  isReverse,
  hasRectangleBackground,
  hasPurpleBackground,
  hasBigTitle,
  hasTitleLightPurple,
  sectionPadding,
  hasExceptionalYOffset,
}) => (
  <Section
    padding={sectionPadding}
    style={{
      backgroundColor: hasPurpleBackground ? COLOR.WHITE_LILAC : "none",
      overflow: "hidden",
    }}
  >
    <Wrapper>
      <Container hasPadding>
        <LeftContainer
          isReverse={isReverse}
          hasExceptionalYOffset={hasExceptionalYOffset}
        >
          {data.title && (
            <Title
              level={2}
              size={hasBigTitle ? "l" : "s"}
              color={hasTitleLightPurple ? COLOR.BLUE_VIOLET : undefined}
            >
              {data.title}
            </Title>
          )}
          {data.subtitle && (
            <Title level={4} size="s" isUpperCase={false}>
              {data.subtitle}
            </Title>
          )}
          {data.description && (
            <Text
              maxWidth="470px"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}
          {data.cta && !data.isCtaExternal && (
            <Link to={data.ctaLink} data-target="link">
              <Button variant="minimal" iconRight="arrow-right">
                {data.cta}
              </Button>
            </Link>
          )}
          {data.cta && data.isCtaExternal && (
            <Button
              is="a"
              href={data.ctaLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              variant="minimal"
              iconRight="arrow-right"
            >
              {data.cta}
            </Button>
          )}
        </LeftContainer>
        <RightContainer
          isReverse={isReverse}
          hasRectangleBackground={hasRectangleBackground}
        >
          <Pane
            backgroundImage={`url(${data.image})`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="relative"
            zIndex="auto"
            style={{ minHeight: "300px" }}
          />
        </RightContainer>
      </Container>
    </Wrapper>
  </Section>
)

export default ImageDescription
