import styled from 'styled-components';

export const MovieSliderStyled = styled.div`
  width: 100%;
  position: relative;

  .MovieSlider {
    &__Img {
      width: 90%;
      max-height: 25rem;
      object-fit: cover;
      background-position: center;
      display: block;
      margin: 0 auto;
    }

    &__Title {
      font-size: 3rem;
      font-weight: bold;
    }
  }

  .MovieSlider__Caption {
    position: absolute;
    top: 40%;
    left: 15%;

    &__TrailerBtn {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.color.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      font-size: 1.5rem;
      transition: all 0.2s ease-in-out;
      padding: 1rem;

      &:hover {
        box-shadow: -3px 4px ${({ theme }) => theme.color.primary};
        transform: translateY(-3px);
        /* letter-spacing: 1px; */
      }
      i {
        transition: transform 0.2s ease-in-out;
        font-size: 2rem;
      }
    }
  }
`;
