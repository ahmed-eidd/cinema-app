import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster';
import { PosterSliderStyled } from './PosterSliderStyled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImgUrl } from '../../helpers/ImgUrl';

const Arrow = ({ className, onClick, type }) => {
  return (
    <div>
      {type === 'left' && (
        <i onClick={onClick} className={`fas fa-chevron-left ${className}`} />
      )}
      {type === 'right' && (
        <i onClick={onClick} className={`fas fa-chevron-right ${className}`} />
      )}
    </div>
  );
};

const PosterSlider = ({ items, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <PosterSliderStyled>
      <div className='PosterSlider__Info'>
        <p className='PosterSlider__Title'>{title}</p>
      </div>
      <Slider
        nextArrow={<Arrow type='left' className='PosterSlider__NextArrow' />}
        prevArrow={<Arrow type='right' className='PosterSlider__PrevArrow' />}
        {...settings}
      >
        {items?.map((el) => (
          <Poster
            key={el.id}
            id={el.id}
            overview={el.overview}
            rating={el.vote_average}
            img={ImgUrl(el.poster_path)}
          />
        ))}
      </Slider>
    </PosterSliderStyled>
  );
};

export default PosterSlider;
