import styled from 'styled-components';

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
`;
