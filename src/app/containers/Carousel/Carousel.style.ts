import styled from 'styled-components';
import { media } from 'styles/media';

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: 30px 0 0;
  transition: all ease 700ms;
  position: relative;
`;

export const DraggableArea = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background: transparent;
  top: 0;
  z-index: 2;
  touch-action: pan-y;
`;

export const Container = styled.section<any>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all ease 700ms;
  will-change: transform;
  position: relative;

  .carousel--item {
    display: flex;
    padding: 0 12px;
    flex-grow: 1;
    flex-shrink: 0;

    ${media.xsmall`
      flex-basis: 100%
    `}
    ${media.small`
      flex-basis: 100%
    `}
    ${media.medium`
      flex-basis: ${({ alocate }) => `calc(100% / ${alocate})`};
    `}
    ${media.large`
      flex-basis: ${({ alocate }) => `calc(100% / ${alocate})`};
    `}
    ${media.xlarge`
      flex-basis: ${({ alocate }) => `calc(100% / ${alocate})`};
    `}
  }
`;
