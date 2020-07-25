import React from "react";
import styled from "styled-components";

import Title from "./Title";
import { COLOR } from "../../utils/constants";

export const StyledTitle = styled(({ ...rest }) => <Title {...rest} />)`
  display: "inline-flex";
  color: ${COLOR.TITLE};
  font-size: 1.8rem;
  line-height: 2rem;
  margin: 0 0 20px 0;
`;
