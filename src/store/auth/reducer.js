export const actionTypes = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAIL: 'LOGIN_USER_FAIL',
  LOGOUT_USER: 'LOGOUT_USER',
};

const initialState = {
  userName: null,
  token: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        userName: payload.userName,
        token: `${payload.password}${payload.userName}`,
        loading: false,
      };
    }
    case actionTypes.LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case actionTypes.LOGOUT_USER: {
      return {
        ...state,
        userName: null,
        token: null,
      };
    }
    default:
      return initialState;
  }
};

export default authReducer;
