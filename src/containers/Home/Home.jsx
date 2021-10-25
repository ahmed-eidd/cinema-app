import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieSlider from '../../components/MovieSlider/MovieSlider';
import PosterSlider from '../../components/PosterSlider/PosterSlider';
import { fetchTopRatedAction } from '../../store/topRatedMovies/actions';
import { fetchUpcomingMoviesAction } from '../../store/upcomingMovies/actions';

const Home = () => {
  const dispatch = useDispatch();
  const upcomingMoviesSelector = useSelector((state) => state.upcomingMovies.items);
  const topRatedSelector = useSelector((state) => state.topRatedMovies.items);
  useEffect(() => {
    dispatch(fetchUpcomingMoviesAction());
    dispatch(fetchTopRatedAction())
  }, [dispatch]);
  return (
    <div>
      <MovieSlider items={upcomingMoviesSelector} />
      <PosterSlider items={upcomingMoviesSelector} title="Upcoming Movies" />
      <PosterSlider items={topRatedSelector} title="Top Rated Movies" />
    </div>
  );
};

export default Home;
