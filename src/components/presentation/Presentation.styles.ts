import styled from "styled-components"
import { darken } from "polished"
import { Link } from "gatsby"

import { MEDIA_QUERY, FONT_FAMILY } from "@utils"
import { sectionCss, wrapperCss } from "@styles"

type SectionProps = {
  $isDark: boolean
}

export const Section = styled.section<SectionProps>`
  ${sectionCss}
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  background: ${p => (p.$isDark ? "#060620" : "#f6f8ff")};
  z-index: 1;
  overflow: hidden;
  color: ${p => (p.$isDark ? "white" : "black")};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    padding: 50px 16px;
  }

  @media ${MEDIA_QUERY.MOBILE} {
    padding: 20px;
  }
`

export const Wrapper = styled.div`
  ${wrapperCss}
`

export const Title = styled.h2`
  font-size: 32px;
  line-height: 150%;
  font-family: ${FONT_FAMILY.POPPINS};
  font-weight: 500;
  color: currentColor;
`

export const Text = styled.div`
  font-size: 18px;
  line-height: 150%;
  font-family: ${FONT_FAMILY.POPPINS};
  font-weight: 400;
  color: currentColor;
`

type LeftProps = {
  $isReverse: boolean
  $isDark: boolean
}

export const Left = styled.div<LeftProps>`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 50px;
  width: 50%;
  order: ${p => (p.$isReverse ? 2 : 1)};
  gap: 24px;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 1;
    padding-right: 0;
  }
`
type RightProps = LeftProps

export const Right = styled.div<RightProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  min-height: 300px;
  order: ${p => (p.$isReverse ? 1 : 2)};
  align-items: stretch;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 2;
    padding: 0;
  }

  > svg {
    position: absolute;
    top: -20px;
    right: 0;
    fill: ${p => (p.$isDark ? "#2559E7" : "white")};
    z-index: -1;
    transform: rotate(90deg);
  }
`

export const Button = styled(Link)`
  display: flex;
  width: fit-content;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  border-style: none;
  cursor: pointer;
  padding: 0.625rem 2rem;
  gap: 1rem;
  border-radius: 0.5rem;
  color: #ffffff;
  transition: background-color 0.2s ease-in-out;
  background-color: #295bf6;

  &:hover {
    background-color: ${darken(0.05, "#295bf6")};
  }
  &:active {
    background-color: ${darken(0.2, "#295bf6")};
  }
  &:focus {
    outline: 2px solid #ffffff;
  }
`

export const Image = styled.img`
  width: 550px;
  max-width: 100%;
  height: 380px;
  object-fit: cover;
  z-index: 2;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
  }
`
