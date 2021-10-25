export const actionTypes = {
  OPEN_TRAILER_MODAL: 'OPEN_TRAILER_MODAL',
  CLOSE_TRAILER_MODAL: 'CLOSE_TRAILER_MODAL',
  OPEN_TRAILER_MODAL_FAIL: 'OPEN_TRAILER_MODAL_FAIL',
  FETCH_TRAILER: 'FETCH_TRAILER',
  FETCH_TRAILER_SUCCESS: 'FETCH_TRAILER_SUCCESS',
  FETCH_TRAILER_FAIL: 'FETCH_TRAILER_FAIL',
};

const initialState = {
  modalOpen: false,
  trailer: null,
  isLoading: false,
  error: null,
};

const trailerModalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.OPEN_TRAILER_MODAL: {
      return {
        ...state,
        modalOpen: true,
      };
    }
    case actionTypes.CLOSE_TRAILER_MODAL: {
      return {
        ...state,
        modalOpen: false,
      };
    }
    case actionTypes.FETCH_TRAILER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.FETCH_TRAILER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        trailer: payload,
      };
    }
    case actionTypes.FETCH_TRAILER_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default trailerModalReducer;
