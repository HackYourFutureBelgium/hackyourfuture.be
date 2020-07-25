import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ objectFit }) => objectFit};
  border-radius: ${({ radius }) => radius};
`;

StyledImage.defaultProps = {
  width: "auto",
  height: "auto",
  objectFit: "fill",
  radius: "10px",
};
