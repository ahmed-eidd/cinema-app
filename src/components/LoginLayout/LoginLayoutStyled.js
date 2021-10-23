import styled from 'styled-components';

export const LoginLayoutStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr repeat(8, 11.75rem) 1fr;
  .LoginLayout {
    &__Nav {
      padding: 3rem 0;
      grid-column: 2/4;
    }

    &__Content {
      grid-column: 2/6;
    }

    &__Shape {
      position: absolute;
      top: 0%;
      right: 0%;
      height: 100%;
      width: auto;
    }

    &__Footer {
      grid-column: 1/-1;
      align-self: end;
    }
  }
`;
