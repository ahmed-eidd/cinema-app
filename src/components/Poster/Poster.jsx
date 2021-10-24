import React from 'react';

/* eslint-disable react/prop-types */

const Poster = ({ img, rating, overview }) => (
  <div>
    <i className="far fa-heart" />
    <i className="fas fa-heart" />
    <div className="Poster__Rating">
      <i className="far fa-heart" />
      <i className="fas fa-heart" />
    </div>
    <div className="Poster__Img">
      <img src={img} alt="Movie Poster" />
    </div>
    <p className="Poseter__Overview">{overview}</p>
  </div>
);

export default Poster;
