import React from "react"

import { Container, Layer, Modal, CloseContainer } from "./style"
import Button from "../button"

const Dialog = ({ children, isVisible, onClose, isFullScreen }) => {
  return (
    <Container isVisible={isVisible}>
      <Layer>
        <Modal isFullScreen={isFullScreen}>
          {children}
          {onClose && (
            <CloseContainer>
              <LegacyButton iconLeft="times" onClick={onClose} />
            </CloseContainer>
          )}
        </Modal>
      </Layer>
    </Container>
  )
}

Dialog.defaultProps = {
  isVisible: false,
  onClose: null,
}

export default Dialog
