import styled from "styled-components"

import { MEDIA_QUERY } from "@utils"

type TopNavProps = {
  isMobile: boolean
}

export const StyledTopNav = styled.nav<TopNavProps>`
  display: flex;
  justify-content: flex-end;
  align-items: ${({ isMobile }) => (isMobile ? "flex-start" : "center")};
  flex-grow: ${({ isMobile }) => (isMobile ? 0 : 1)};
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};

  ${({ isMobile }) => {
    if (!isMobile) {
      return `
        @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
          display: none;
        }
      `
    } else {
      return `
        > * {
          margin: 10px 20px;
        }
      `
    }
  }}
`

export const StyledTopNavMobile = styled.nav`
  display: none;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: flex;
  }
`
