import React from 'react';
import { useSelector } from 'react-redux';
import Poster from '../../components/Poster/Poster';
import { ImgUrl } from '../../helpers/ImgUrl';
import { ResultsStyled } from './ResultsStyled';

const Results = () => {
  const items = useSelector((state) => state.searchedMovies.items);
  return (
    <ResultsStyled>
      {items?.length > 0 ? (
        <div className='Results__Container'>
          {items?.map((el) => (
            <Poster
              id={el.id}
              img={ImgUrl(el.poster_path)}
              overview={el.overview}
              key={el.id}
            />
          ))}
        </div>
      ) : (
        <p className='Results__NoResults'>No Results! Search Again</p>
      )}
    </ResultsStyled>
  );
};

export default Results;
