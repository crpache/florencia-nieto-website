import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h3`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 15px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Title = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;

export default Title; 