import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
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
    transition: transform 0.4s ease-in-out;
  }

  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.color.textColor};
  }
  &:hover::before {
    transform: translateX(0);
  }
  &:hover::after {
    transform: translateX(-100%);
  }
`;
