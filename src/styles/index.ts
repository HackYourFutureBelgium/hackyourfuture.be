import { css } from "styled-components"

import { BREAKPOINT, MEDIA_QUERY } from "@utils"

export const sectionCss = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex: 0 0 auto;
`

export const wrapperCss = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: ${BREAKPOINT.XL};
  padding: 0;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`
