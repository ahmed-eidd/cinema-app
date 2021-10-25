export const actionTypes = {
  FETCH_SEARCHED_MOVIES: 'FETCH_SEARCHED_MOVIES',
  FETCH_SEARCHED_MOVIES_SUCCESS: 'FETCH_SEARCHED_MOVIES_SUCCESS',
  FETCH_SEARCHED_MOVIES_FAIL: 'FETCH_SEARCHED_MOVIES_FAIL',
};
const initialState = {
  items: [],
  count: 0,
  page: 2,
  totalPages: 0,
  isLoading: false,
  error: '',
};

const searchedMoviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_SEARCHED_MOVIES: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actionTypes.FETCH_SEARCHED_MOVIES_SUCCESS: {
      return {
        ...state,
        items: payload.results,
        count: payload.total_results,
        page: payload.pageNum,
        totalPages: payload.total_pages,
        isLoading: false,
      };
    }

    case actionTypes.FETCH_SEARCHED_MOVIES_FAIL: {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default searchedMoviesReducer;
