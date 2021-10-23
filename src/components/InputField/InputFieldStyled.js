import styled, { css } from 'styled-components';

export const InputFieldStyled = styled.div`
  width: 100%;
  min-height: 6.5rem;

  .InputField {
    border: none;
    background: transparent;
    ${({ theme }) =>
      theme &&
      css &&
      `
    border-bottom: ${
      theme.border.sm + ' ' + 'solid' + ' ' + theme.color.textColor
    };
    font-size:  ${theme.fontSizes.lg};
    color: ${theme.color.textColor};
    `}
    padding: 1.5rem;
    width: 100%;
    font-weight: 500;
    &::placeholder {
      color: var(--bs-gray-600);
      font-weight: 500;
    }

    &:focus {
      outline: none;
    }
  }

  .ErrorMessage {
    color: red;
    font-size: 0.9rem;
    text-transform: capitalize;
    text-align: start;
    margin-top: 0.3rem;
  }
`;
