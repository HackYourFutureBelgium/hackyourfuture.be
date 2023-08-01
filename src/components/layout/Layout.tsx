/**
 * Landing Layout
 *
 * This component is use to define the landing page base layout.
 * - Include the top bar
 * - Include the footer
 */
import { Helmet } from "react-helmet"
import React, { ReactNode } from 'react'

import { GlobalStyle, StyledLandingLayout, StyledMain } from "./Layout.styles"
import { TopBar } from "@components"
import Footer from "../footer/Footer"
import { Page } from "@types"

type LayoutProps = {
  children: ReactNode
  page?: Page
}

export const Layout = ({ children, page }: LayoutProps) => (
  <>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Helping new talent into the tech world"
      />
      <title>Hack Your Future Belgium</title>
      <link rel="canonical" href="https://hackyourfuture.be/" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;600;900&family=Work+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <StyledLandingLayout>
      <TopBar page={page} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLandingLayout>
  </>
)
