import styled from "styled-components"

import { sectionCss, wrapperCss } from "@styles"

export const Container = styled.header`
  ${sectionCss}
  position: fixed;
  height: 85px;
  box-sizing: border-box;
  z-index: 100;
`

export const Wrapper = styled.div`
  ${wrapperCss}
`

export const MobileNavHeader = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid black;
  min-height: 60px;
  width: 100%;
`

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
`
