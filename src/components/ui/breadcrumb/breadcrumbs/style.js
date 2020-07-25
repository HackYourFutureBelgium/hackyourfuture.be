import styled from "styled-components";

export const StyledBreadcrumbs = styled.ul`
  display: flex;
  margin: 10px 0;

  > li {
    &:not(:last-child) {
      margin-right: 5px;

      &:after {
        content: ">";
        margin-left: 5px;
      }
    }
  }
`;
