import React from 'react';
import { useDispatch } from 'react-redux';
import { limitText } from '../../helpers/limitText';
import {
  fetchTrailerAction,
  openModalAction,
} from '../../store/trailerModal/actions';
import { PosterStyled } from './PosterStyled';

/* eslint-disable react/prop-types */

const Poster = ({ img, rating, overview, id }) => {
  const dispatch = useDispatch();
  const trailerModalHandler = (movieId) => {
    dispatch(openModalAction());
    dispatch(fetchTrailerAction(movieId));
  };

  return (
    <PosterStyled>
      <div
        className='Poster__Backdrop'
        onClick={() => trailerModalHandler(id)}
      ></div>
      <div className='Poster__FavBtn' onClick={() => console.log('fav')}>
        <i className='far fa-heart' />
      </div>
      <div className='Poster__HoverMenu'>
        <div className='Poster__Rating'>
          {`${rating} / 10 `}
          <i className='fas fa-star'></i>
        </div>
        <p className='Poster__Overview'>{limitText(overview, 80)}</p>
      </div>
      <div className='Poster__Img'>
        <img src={img} alt='Movie Poster' />
      </div>
    </PosterStyled>
  );
};

export default Poster;
