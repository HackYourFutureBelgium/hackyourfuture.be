/**
 * Landing Layout
 *
 * This component is use to define the landing page base layout.
 * - Include the top bar
 * - Include the footer
 */
import { Helmet } from "react-helmet"

import { GlobalStyle, StyledLandingLayout, StyledMain } from "./style"
import TopBar from "../../top-bar/TopBar"
import Footer from "../../footer/Footer"

const LandingLayout = ({ children, page }) => (
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
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;600;900&family=Work+Sans:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
      {/* <script type="text/javascript">{`function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6B8TKB');`}</script> */}
    </Helmet>
    <GlobalStyle />
    <StyledLandingLayout>
      <TopBar page={page} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLandingLayout>
  </>
)

export default LandingLayout
