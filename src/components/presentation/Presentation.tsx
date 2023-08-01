import React from "react"

import { Section, Wrapper, Title, Text, Left, Right, Button, Image } from "./Presentation.styles"
import { markDownToHtml } from "../../utils"
import type { DataBlock, DataBlockOptions } from '../../@types/data'

type PresentationProps = Pick<DataBlock, 'title'> & DataBlockOptions

export const Presentation = ({
  cta,
  description = '',
  image,
  isDark = false,
  isRevert = false,
  title,
}: PresentationProps) => (
  <Section $isDark={isDark}>
    <Wrapper>
      <Left $isReverse={isRevert} $isDark={isDark}>
        <Title>{title}</Title>
        {description && <Text dangerouslySetInnerHTML={{ __html: markDownToHtml(description) }} />}
        {cta && (
          <Button
            to={cta["cta-url"] as string}
          // onClick={() => {
          //   if (!cta?.["cta-url"]) return
          //   console.log('hey', cta)
          //   window.open(cta["cta-url"], cta["cta-url"].startsWith('http') ? '_blank' : "_self")
          // }}
          >
            {cta["cta-label"]}
          </Button>
        )}
      </Left>
      <Right $isReverse={isRevert} $isDark={isDark}>
        {image && <Image alt={image} src={image} />}
        <CircleQuarter />
      </Right>
    </Wrapper>
  </Section>
)

const CircleQuarter = () => (
  <svg width="406" height="438" viewBox="0 0 406 438" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15527e-05 -414C224.07 -414 405.714 -232.356 405.714 -8.28574V32.2857C405.714 256.356 224.07 438 9.15527e-05 438V235.143C89.628 235.143 162.286 121.914 162.286 32.2857V-8.28574C162.286 -97.9136 89.628 -211.143 9.15527e-05 -211.143V-414Z" />
  </svg>
)
