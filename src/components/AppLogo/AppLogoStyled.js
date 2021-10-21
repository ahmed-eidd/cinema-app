import styled from "styled-components";

export const LogoStyled = styled.h2`
  font-size: 1.5rem;
  position: relative;
  text-transform: uppercase;
  padding: 1rem;
  letter-spacing: 1px;
  color: ${(props) => props.theme.color.textColor};
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    width: 30%;
    background-color: ${(props) => props.theme.color.primary};
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;
