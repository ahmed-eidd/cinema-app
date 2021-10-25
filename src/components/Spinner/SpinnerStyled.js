import styled from 'styled-components';

export const SpinnerStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.contentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 5;
  div {
    width: 10rem !important;
    height: 10rem !important;
  }
`;
