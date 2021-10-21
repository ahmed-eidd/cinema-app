import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
  .Footer__Icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    i {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color.textColor};
      cursor: pointer;
      transition: color 0.4s ease-in-out;
      &:hover {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
