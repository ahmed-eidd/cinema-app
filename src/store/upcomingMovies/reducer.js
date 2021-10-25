export const actionTypes = {
  FETCH_UPCOMING_MOVIES: 'FETCH_UPCOMING_MOVIES',
  FETCH_UPCOMING_MOVIES_SUCCESS: 'FETCH_UPCOMING_MOVIES_SUCCESS',
  FETCH_UPCOMING_MOVIES_FAIL: 'FETCH_UPCOMING_MOVIES_FAIL',
};
const initialState = {
  items: [],
  count: 0,
  isLoading: 0,
  error: '',
};

const upcomingMoviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_UPCOMING_MOVIES: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actionTypes.FETCH_UPCOMING_MOVIES_SUCCESS: {
      return {
        ...state,
        items: payload.results,
        count: payload.total_results,
        isLoading: false,
      };
    }

    case actionTypes.FETCH_UPCOMING_MOVIES_FAIL: {
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

export default upcomingMoviesReducer;
