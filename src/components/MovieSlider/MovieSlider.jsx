import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic from '../../assets/pic.png';
import { MovieSliderStyled } from './MovieSliderStyled';

const MovieSlider = () => {
  const setting = {
    pause: 'hover',
    keyboard: false,
    touch: false,
    controls: false,
    indicators: false,
  };
  return (
    <MovieSliderStyled>
      <Carousel {...setting}>
        <Carousel.Item>
          <img className="MovieSlider__Img" src={pic} alt="First slide" />
          <Carousel.Caption bsPrefix="MovieSlider__Caption">
            <button className="MovieSlider__Caption__TrailerBtn">
              <i className="far fa-play-circle" />
              View Trailer
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="MovieSlider__Img" src={pic} alt="Second slide" />
          <Carousel.Caption bsPrefix="MovieSlider__Caption">
            <button className="MovieSlider__Caption__TrailerBtn">
              <i className="far fa-play-circle" />
              View Trailer
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="MovieSlider__Img" src={pic} alt="Third slide" />
          <Carousel.Caption bsPrefix="MovieSlider__Caption">
            <button className="MovieSlider__Caption__TrailerBtn">
              <i className="far fa-play-circle" />
              View Trailer
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </MovieSliderStyled>
  );
};

export default MovieSlider;
