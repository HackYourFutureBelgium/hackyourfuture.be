import React, { useState } from "react"

import { StyledHeader, MobileNavHeader } from "./style"
import { Pane, Dialog, Button } from "../ui"
import Logo from "../logo/Logo"
import TopNav from "../navigation/top-nav/TopNav"
import { BREAKPOINT } from "../../utils/constants"

const TopBar = ({ page }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <StyledHeader>
      <Pane
        width="100%"
        maxWidth={BREAKPOINT.XL}
        margin="auto"
        height="100%"
        alignItems="center"
      >
        <Logo />
        <TopNav
          onBurgerNavClicked={() => setIsMobileNavOpen(true)}
          currentPage={page}
        />
      </Pane>
      <Dialog isVisible={isMobileNavOpen} isFullScreen>
        <MobileNavHeader>
          <Button
            iconLeft="arrow-left"
            onClick={() => setIsMobileNavOpen(false)}
            variant="minimal"
          >
            Back
          </Button>
        </MobileNavHeader>
        {/* <MobileNav> */}
        <TopNav isMobile />
        {/* </MobileNav> */}
      </Dialog>
    </StyledHeader>
  )
}

export default TopBar
