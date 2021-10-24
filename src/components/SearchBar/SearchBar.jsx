import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { SearchBarStyled } from './SearchBarStyled';

const SearchBar = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  return (
    <SearchBarStyled currentTheme={currentTheme}>
      <Form.Control
        size="lg"
        className="SearchBar"
        type="text"
        placeholder="Search for a movie .."
      />
      <i className="fas fa-search SearchBar__Icon" />
    </SearchBarStyled>
  );
};

export default SearchBar;
