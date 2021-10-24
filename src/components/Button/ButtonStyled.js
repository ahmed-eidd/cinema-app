import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 0.8rem 3.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.textColor};
  background: transparent;
  border: ${({ theme }) => `${theme.border.lg} solid ${theme.color.primary}`};
  font-weight: 500;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    right: 0;
    background-color: ${({ theme }) => theme.color.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    transform-origin: left;
    z-index: 1;
  }
  &:hover::before {
    transform: scaleX(1);
  }

  .Button {
    &__Text {
      z-index: 5;
      position: relative;
    }

    &__Spinner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0%;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.color.contentColor};
      z-index: 10;

      span {
        color: ${({ theme }) => theme.color.textColor};
      }
    }
  }
`;
