import styled from "styled-components"

export const StyledLandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const StyledMain = styled.main`
  display: flex;
  max-width: ${({ fullWidth }) => (fullWidth ? "none" : "1200px")};
  margin: 0 auto;
  padding: ${({ fullWidth }) => (fullWidth ? "0" : "0 40px")};
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
`
