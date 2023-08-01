import React, { useState } from "react"

import { Container, Wrapper, MobileNavHeader } from "./TopBar.styles"
import { Pane, Dialog, Button } from "../ui"
import Logo from "../logo/Logo"
import { TopNav } from "@components"
import { BREAKPOINT } from "@utils"
import { Page } from "@types"

type TopBarProps = {
  page?: Page
}

export const TopBar = ({ page }: TopBarProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <Container>
      <Wrapper>
        <Logo />
        <TopNav
          onBurgerNavClicked={() => setIsMobileNavOpen(true)}
          currentPage={page}
          isMobile={false}
        />
      </Wrapper>
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
    </Container>
  )
}
