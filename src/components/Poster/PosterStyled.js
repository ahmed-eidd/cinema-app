import styled from 'styled-components';

export const PosterStyled = styled.div`
  width: 15rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover .Poster__Backdrop {
    opacity: 0.5;
  }

  &:hover .Poster__HoverMenu {
    transform: translateY(-10%);
  }

  &:hover .Poster__FavBtn {
    transform: translateY(0);
  }

  img {
    width: 100%;
    height: 100%;
  }
  .Poster {
    &__Backdrop {
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      position: absolute;
    }
    &__Rating {
      color: var(--bs-white);
      i {
        color: ${({ theme }) => theme.color.primary};
      }
    }

    &__HoverMenu,
    &__FavBtn {
      position: absolute;
      transition: transform 0.3s ease-in-out;
      padding: 1rem;
    }

    &__FavBtn {
      right: 0;
      cursor: pointer;
      transform: translateY(-100%);
      i {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.color.primary};
      }
    }
    &__HoverMenu {
      bottom: 0;
      transform: translateY(100%);
    }

    &__Overview {
      color: var(--bs-white);
    }
  }
`;
