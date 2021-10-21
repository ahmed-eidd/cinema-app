import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 98%;
    opacity: 0.3;
    margin: auto;
    height: 1px;
    background-color: ${(props) => props.theme.color.textColor};
  }
`;
