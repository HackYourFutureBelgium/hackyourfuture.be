import React from "react"
import styled from "styled-components"
import { darken, rgba } from "polished"
import { Link } from "gatsby"

import { MEDIA_QUERY, FONT_FAMILY } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  position: relative;
  background: none;
  z-index: 1;
  flex: 0 0 auto;

  @media ${MEDIA_QUERY.MOBILE} {
    padding: 20px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  line-height: 150%;
  font-family: ${FONT_FAMILY.WORK};
  font-weight: 500;
  color: inherit;
`

export const Text = styled.div`
  font-size: 18px;
  line-height: 150%;
  font-family: ${FONT_FAMILY.WORK};
  font-weight: 400;
  color: inherit;
`

type LeftProps = {
  $isReverse: boolean
}

export const Left = styled.div<LeftProps>`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 50px 0 0;
  padding: ${p => (p.$isReverse ? "0 0 0 50px" : "0 50px 0 0")};
  width: 50%;
  order: ${p => (p.$isReverse ? 2 : 1)};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 1;
    padding: 0 0 20px 0;
  }
`
type RightProps = LeftProps

export const Right = styled.div<RightProps>`
  display: flex;
  width: 50%;
  height: 100%;
  min-height: 400px;
  order: ${p => (p.$isReverse ? 1 : 2)};
  padding: ${p => (p.$isReverse ? "0 50px 0 0" : "0 0 0 50px")};
  align-items: stretch;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 2;
    padding: 0;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
  @media ${MEDIA_QUERY.MOBILE} {
    margin: 0;
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
