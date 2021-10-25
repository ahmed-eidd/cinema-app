import React from 'react';
import PageItem from 'react-bootstrap/PageItem';
import PaginationBt from 'react-bootstrap/Pagination';

const Pagination = ({ pages }) => {
  return (
    <PaginationBt>
      <PageItem>{pages}</PageItem>;
    </PaginationBt>
  );
};

export default Pagination;
