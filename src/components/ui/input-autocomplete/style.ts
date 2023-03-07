import styled from "styled-components"

export const StyledContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

export const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  border: 1px solid grey;
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledDropdownList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 5px 0;
`

export const StyledDropdownListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${({ isActive }) => (isActive ? "#ebebeb" : "transparent")};

  &:hover {
    background-color: #ebebeb;
  }
`
