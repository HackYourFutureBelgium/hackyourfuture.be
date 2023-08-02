import styled from "styled-components"

import { sectionCss, wrapperCss } from "@styles"
import { FONT_FAMILY, MEDIA_QUERY } from "@utils"

export const Container = styled.div`
  ${sectionCss}
  height: 75vh;
  background-size: cover;
  position: relative;
  z-index: 10;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    height: 35vh;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 11;
  }
`

export const Wrapper = styled.div`
  ${wrapperCss}
  z-index: 20;
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 800px;
  font-family: ${FONT_FAMILY.POPPINS};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 32px;
  }
`
