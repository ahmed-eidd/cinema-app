import { constants } from '../helpers/constants';

export const Theme = (currentTheme) => {
  const themeColor =
    currentTheme === constants.LIGHT_THEME ? lightTheme : darkTheme;
  return {
    color: {
      primary: '#ffcc33',
      ...themeColor,
    },
    border: {
      sm: '1px',
      md: '2px',
      lg: '3px',
    },
    borderRaduis: {
      sm: '4px',
      md: '6px',
      lg: '8px',
    },
    fontSizes: {
      sm: '.8rem',
      md: '1rem',
      lg: '1.2rem',
      xl: '1.5rem',
    },
    fonts: {
      primary: 'Poppins',
    },
  };
};

const darkTheme = {
  textColor: '#fff',
  contentColor: '#000000',
};

const lightTheme = {
  contentColor: '#fff',
  textColor: '#000000',
};
