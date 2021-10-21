import { constants } from '../../helpers/constants';

export const actionTypes = {
  SWITCH_THEME: 'SWITCH_THEME',
};

const initialState = {
  currentTheme: constants.DARK_THEME,
};

const themeReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.SWITCH_THEME: {
      const newTheme =
        state.currentTheme === constants.LIGHT_THEME
          ? constants.DARK_THEME
          : constants.LIGHT_THEME;
      return {
        currentTheme: newTheme,
      };
    }

    default:
      return initialState;
  }
};

export default themeReducer;
