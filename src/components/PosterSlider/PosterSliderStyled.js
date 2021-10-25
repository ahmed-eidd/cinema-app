import styled from 'styled-components';

export const PosterSliderStyled = styled.div`



  .PosterSlider {
    &__Info {
      padding: 2rem;
      width: 90%;
      margin: 1rem auto;
    }

    &__Title {
      font-size: 3rem;
    }

    &__NextArrow,
    &__PrevArrow {
      position: absolute;
      color: red;
    }
    .slick-prev {
      color: red;
      top: 10% !important;
      position: absolute;
    }
  }
`;
