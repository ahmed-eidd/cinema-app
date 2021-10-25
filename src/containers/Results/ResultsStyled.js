import styled from 'styled-components';

export const ResultsStyled = styled.div`
  .Results {
    &__Container {
      display: grid;
      grid-template-columns: repeat(auto-fit, 15rem);
      gap: 3rem;
    }
    &__NoResults {
      padding: 2rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;
