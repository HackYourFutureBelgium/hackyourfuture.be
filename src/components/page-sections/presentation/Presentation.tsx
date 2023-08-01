import React from "react"

import { Section, Title, Text, Left, Right, Container, Button } from "./Presentation.styles"
import { Pane, Wrapper } from "../../ui"
import { markDownToHtml } from "../../../utils"
import type { DataBlock, DataBlockOptions } from '../../../@types/data'

type PresentationProps = Pick<DataBlock, 'title'> & DataBlockOptions

const Presentation = ({
  title,
  description = '',
  isRevert = false,
  cta
}: PresentationProps) => (
  <Section>
    <Wrapper>
      <Container>
        <Left $isReverse={isRevert}>
          <Title>{title}</Title>

          {description && <Text dangerouslySetInnerHTML={{ __html: markDownToHtml(description) }} />}

          {console.log('+++', cta)}
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

        <Right $isReverse={isRevert}>
          <Pane
            // backgroundImage={`url(${data.image})`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="relative"
            zIndex="auto"
            style={{ minHeight: "300px" }}
          />
        </Right>
      </Container>
    </Wrapper>
  </Section>
)

export default Presentation
