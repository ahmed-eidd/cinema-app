import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieSlider from '../../components/MovieSlider/MovieSlider';
import PosterSlider from '../../components/PosterSlider/PosterSlider';
import { fetchTopRatedAction } from '../../store/topRatedMovies/actions';
import { fetchUpcomingMoviesAction } from '../../store/upcomingMovies/actions';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const dispatch = useDispatch();
  const upcomingMoviesSelector = useSelector(
    (state) => state.upcomingMovies.items
  );
  const upcomingMoviesLoading = useSelector(
    (state) => state.upcomingMovies.isLoading
  );
  const topRatedSelector = useSelector((state) => state.topRatedMovies.items);
  const topRatedLoading = useSelector(
    (state) => state.topRatedMovies.isLoading
  );
  useEffect(() => {
    dispatch(fetchUpcomingMoviesAction());
    dispatch(fetchTopRatedAction());
  }, [dispatch]);
  return (
    <div>
      {upcomingMoviesLoading && topRatedLoading ? (
        <Spinner />
      ) : (
        <>
          <MovieSlider items={upcomingMoviesSelector} />
          <PosterSlider
            items={upcomingMoviesSelector}
            title='Upcoming Movies'
          />
          <PosterSlider items={topRatedSelector} title='Top Rated Movies' />
        </>
      )}
    </div>
  );
};

export default Home;
