import styled from 'styled-components';

export const NavProfileMenuStyled = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  transform: ${({ open }) => (open ? 'translateY(85%)' : 'translateY(100%)')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  background-color: ${({ theme }) => theme.color.contentColor};
  border: 1px solid ${({ theme }) => theme.color.textColor};
  border-radius: 4px;
  transition: transform 0.4s ease-in-out, opacity 0.2s ease-out 0.1s;

  .NavProfile__Menu__Item,
  .NavProfile__Menu__Item--toggle {
    padding: 1rem;
    color: ${({ theme }) => theme.color.textColor};
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.color.contentColor};
      background-color: ${({ theme }) => theme.color.primary};
    }
  }

  .NavProfile__Menu__Item--toggle {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      margin: 0;
      cursor: pointer;
    }
  }
  .NavProfile__Menu__Switch {
    input {
      &:checked {
        background-color: ${({ theme }) => theme.color.primary} !important;
        border-color: ${({ theme }) => theme.color.primary} !important;
      }
      &:focus {
        border-color: ${({ theme }) => theme.color.primary} !important;
      }
    }
  }
`;
