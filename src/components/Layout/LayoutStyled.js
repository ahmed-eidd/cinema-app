import styled from 'styled-components';

export const LayoutStyled = styled.div`
  min-height: 100vh;
  color: ${(props) => props.theme.color.textColor};
  background: ${(props) => props.theme.color.contentColor};
`;
