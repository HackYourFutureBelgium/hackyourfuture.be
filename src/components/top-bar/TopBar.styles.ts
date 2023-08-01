import styled from "styled-components"

import { sectionCss, WrapperCss } from "@styles"

export const Container = styled.header`
  ${sectionCss}
  height: 85px;
  box-sizing: border-box;
`

export const Wrapper = styled.div`
  ${WrapperCss}
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
