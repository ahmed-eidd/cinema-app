import React from 'react';

const Poster = ({ img, rating, overview }) => {
  return (
    <div>
      <i className='far fa-heart'></i>
      <i className='fas fa-heart'></i>
      <div className='Poster__Rating'>
        <i className='far fa-heart'></i>
        <i className='fas fa-heart'></i>
      </div>
      <div className='Poster__Img'>
        <img src={img} alt='Movie Poster' />
      </div>
      <p className='Poseter__Overview'>{overview}</p>
    </div>
  );
};

export default Poster;
