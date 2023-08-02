import styled from "styled-components"

export const StickyNoteContainer = styled.div`
  position: fixed;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: yellow;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  z-index: 999;
  max-width: 250px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`
