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
  -ms-touch-action: pan-y;
  touch-action: pan-y;
`;

export const Container = styled.section<any>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-transition: all ease 700ms;
  -o-transition: all ease 700ms;
  transition: all ease 700ms;
  will-change: transform;
  position: relative;

  .carousel--item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 12px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;

    ${media.xsmall`
      -ms-flex-preferred-size: 100%;
       flex-basis: 100%
    `}
    ${media.small`
      -ms-flex-preferred-size: 100%;
       flex-basis: 100%
    `}
    ${media.medium`
      -ms-flex-preferred-size: ${({ alocate }) => `calc(100% / ${alocate})`};
      flex-basis: ${({ alocate }) => `calc(100% / ${alocate})`};
    `}
    ${media.large`
      -ms-flex-preferred-size: ${({ alocate }) => `calc(100% / ${alocate})`};
      flex-basis: ${({ alocate }) => `calc(100% / ${alocate})`};
    `}
    ${media.xlarge`
      -ms-flex-preferred-size: ${({ alocate }) => `calc(100% / ${alocate})`};
      flex-basis: ${({ alocate }) => `calc(100% / ${alocate})`};
    `}
  }
`;
