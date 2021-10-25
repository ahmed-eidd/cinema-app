import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ImgUrl } from '../../helpers/ImgUrl';
import {
  fetchTrailerAction,
  openModalAction,
} from '../../store/trailerModal/actions';
import { MovieSliderStyled } from './MovieSliderStyled';

const MovieSlider = ({ items = [] }) => {
  const setting = {
    pause: 'hover',
    keyboard: false,
    touch: true,
    controls: true,
    indicators: false,
  };

  const dispatch = useDispatch();

  const onTrailerModalHandler = (movieId) => {
    dispatch(openModalAction());
    dispatch(fetchTrailerAction(movieId));
  };

  return (
    <MovieSliderStyled>
      <Carousel {...setting}>
        {items.map((el) => (
          <Carousel.Item key={el.id}>
            <img
              className='MovieSlider__Img'
              src={ImgUrl(el.backdrop_path)}
              alt='First slide'
            />
            <Carousel.Caption bsPrefix='MovieSlider__Caption'>
              <p className='MovieSlider__Title'>{el.title}</p>
              <button
                className='MovieSlider__Caption__TrailerBtn'
                onClick={() => onTrailerModalHandler(el.id)}
              >
                <i className='far fa-play-circle' />
                View Trailer
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </MovieSliderStyled>
  );
};

export default MovieSlider;
