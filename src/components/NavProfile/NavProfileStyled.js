import styled from "styled-components";


export const NavProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  position: relative;

  .NavProfile__Initial {
    background-color: ${(props) => props.theme.color.primary};
    color: var(--bs-white);
    font-size: 1.5rem;
    text-transform: uppercase;
    border-radius: 50%;

    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .NavProfile__Icon {
    transform: ${(props) => (props.menuOpen ? 'rotate(-180deg)' : 'rotate(0)')};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .NavProfile__Menu {
    position: absolute;
    width: 100%;
    z-index: 10;
    /* top: 130%; */
    transform: ${(props) =>
      props.menuOpen ? 'translateY(85%)' : 'translateY(100%)'};
    opacity: ${(props) => (props.menuOpen ? '1' : '0')};
    background-color: ${(props) => props.theme.color.contentColor};
    border: 1px solid ${(props) => props.theme.color.textColor};
    border-radius: 4px;
    transition: transform 0.4s ease-in-out, opacity 0.2s ease-out 0.1s;
    /* border: ; */
  }

  .NavProfile__Menu__Item,
  .NavProfile__Menu__Item--toggle {
    padding: 1rem;
    color: ${(props) => props.theme.color.textColor};
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.contentColor};
      background-color: ${(props) => props.theme.color.primary};
    }
  }

  .NavProfile__Menu__Item--toggle {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .NavProfile__Menu__Switch {
    input {
      &:checked {
        background-color: ${(props) => props.theme.color.primary} !important;
        border-color: ${(props) => props.theme.color.primary} !important;
      }
      &:focus {
        border-color: ${(props) => props.theme.color.primary} !important;
      }
    }
  }
`;