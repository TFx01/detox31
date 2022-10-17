import styled from 'styled-components';
import { media } from 'styles/media';

export const GalleryWrapper = styled.div<any>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  padding: 10px 0;
  display: flex;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  justify-content: center;
  flex-flow: wrap row;
  z-index: 2;
  overflow: auto;
  scroll-behavior: smooth;
  transition: all ease 350ms;
  will-change: opacity;

  svg {
    position: fixed;
    right: 70px;
    top: 40px;
    width: 40px;
    padding: 8px;
    background: rgba(0, 0, 0, 1);
    border-radius: 100vw;
    cursor: pointer;

    .cls-1 {
      fill: none;
      stroke: white;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2px;
    }
  }
`;

export const GalleryStyled = styled.div<any>`
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;
  position: relative;
  transition: transform ease 500ms;
  width: auto;
  align-items: center;

  img {
    width: 100%;
    border-radius: 15px;

    ${media.xsmall`
      width: 90%;
    `}
    ${media.small`
      width: 90%;
    `}
    ${media.medium`
      width: 50%;
    `}
    ${media.large`
      width: 35%;
    `}
    ${media.xlarge`
      width: 35%;
    `}
  }
`;
