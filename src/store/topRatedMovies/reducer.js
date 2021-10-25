export const actionTypes = {
  FETCH_TOPRATED_MOVIES: 'FETCH_TOPRATED_MOVIES',
  FETCH_TOPRATED_MOVIES_SUCCESS: 'FETCH_TOPRATED_MOVIES_SUCCESS',
  FETCH_TOPRATED_MOVIES_FAIL: 'FETCH_TOPRATED_MOVIES_FAIL',
};
const initialState = {
  items: [],
  count: 0,
  isLoading: 0,
  error: '',
};

const topratedMoviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_TOPRATED_MOVIES: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actionTypes.FETCH_TOPRATED_MOVIES_SUCCESS: {
      return {
        ...state,
        items: payload.results,
        count: payload.total_results,
        isLoading: false,
      };
    }

    case actionTypes.FETCH_TOPRATED_MOVIES_FAIL: {
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

export default topratedMoviesReducer;
