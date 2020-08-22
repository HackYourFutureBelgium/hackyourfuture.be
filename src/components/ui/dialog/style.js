import styled from "styled-components"

import { SHADOW } from "../../../utils/constants"

export const Container = styled.div`
  position: fixed;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  flex: 80;
  z-index: 100;
`
export const Layer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0005;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "70%")};
  height: ${({ isFullScreen }) => (isFullScreen ? "100vh" : "auto")};
  min-height: 400px;
  min-width: 50%;
  max-width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "90%")};
  position: relative;
  box-shadow: ${SHADOW.BOX};
`

export const CloseContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
`
