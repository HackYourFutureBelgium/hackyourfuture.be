import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "./Text";
import { COLORS } from "../../utils/constants";

export const StyledText = styled(({ color, ...rest }) => <Text {...rest} />)`
  display: inline-flex;
  color: ${({ color }) => color};
`;

StyledText.propTypes = {
  color: PropTypes.oneOf(COLORS),
};
