import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBarStyled } from './SearchBarStyled';
import { debounce } from 'lodash';
import { useHistory, useLocation } from 'react-router';
import { fetchSearchedMoviesAction } from '../../store/searchMovies/actions';

const SearchBar = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.searchedMovies.page);
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const [query, setQuery] = useState('');

  const updateQuery = () => {
    if (query.length > 3) {
      dispatch(fetchSearchedMoviesAction(query, currentPage));
      if (location.pathname !== '/results' && query !== '') {
        history.push('/results');
      }
    }
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [query]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    delayedQuery();

    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [query, delayedQuery]);
  return (
    <SearchBarStyled currentTheme={currentTheme}>
      <Form.Control
        size='lg'
        className='SearchBar'
        type='text'
        placeholder='Search for a movie ..'
        onChange={onChange}
      />
      <i className='fas fa-search SearchBar__Icon' />
    </SearchBarStyled>
  );
};

export default SearchBar;
