import { css } from '@emotion/css';

export const container = () => css`
  display: flex;
`;

export const video = () => css`
  height: auto;
  object-fit: cover;
  width: 100%;

  @media screen and (max-width: 1024px) {
    ${video__mobile()}
  }

  @media screen and (min-width: 1024px) {
    ${video__desktop()}
  }
`;

export const video__mobile = () => css`
  max-width: 100vw;
`;

export const video__desktop = () => css`
  max-width: 1024px;
`;
