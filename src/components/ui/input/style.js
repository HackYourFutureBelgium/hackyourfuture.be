import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid grey;
    outline: none;
  }
`;
