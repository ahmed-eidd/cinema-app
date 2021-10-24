import styled, { css } from 'styled-components';
import { constants } from '../../helpers/constants';

const light = css`
  background-color: var(--bs-white) !important ;
  color: ${(props) => props.theme.color.textColor};
  border: 1px solid var(--bs-gray-700) !important;
  &::placeholder {
    color: ${(props) => props.theme.color.textColor};
  }
  &:focus {
    border: 1px solid var(--bs-gray-700) !important;
  }
`;

const dark = css`
  background-color: var(--bs-gray-700) !important ;
  color: ${(props) => props.theme.color.textColor};
  &::placeholder {
    color: ${(props) => props.theme.color.textColor};
  }
`;

export const SearchBarStyled = styled.div`
  position: relative;

  .SearchBar {
    width: 350px !important;
    border: none !important;
    border-radius: 20px !important;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    ${({ currentTheme }) => (currentTheme === constants.DARK_THEME ? dark : light)};
  }
  .SearchBar__Icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.color.textColor};
  }

  .SearchBar:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;
