import styled, { css } from 'styled-components';

export const Container = styled.div<any>`
  --visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: var(--visibility);
  transition: all ease 500ms;
  overflow-y: auto;
  z-index: 3;

  ${({ hasModal }) =>
    hasModal &&
    css`
      opacity: 1;
      --visibility: visible;
    `}
`;
export const ModalStyled = styled.section<any>`
  background: #ffffff;
  width: 800px;
  min-width: 800px;
  height: 500px;
  min-height: 600px;
  position: relative;
  padding: 0 20px;
  border-radius: 10px;
  transition: all ease 300ms;
  overflow-y: auto;
  will-change: transform;

  @media (max-width: 600px) {
    width: 95%;
    min-width: 95%;
  }

  header {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background: #ffffff;
    padding: 10px 0;

    h2 {
      font-size: 2.5rem;
      font-family: 'Jones Bold';
    }

    .close {
      position: relative;
      z-index: 2;
      margin-left: auto;
      width: 40px;
      height: 40px;
      border-radius: 100vw;
      cursor: pointer;
      background: rgba(215, 215, 215, 0.5);
      padding: 10px;
      margin-left: auto;
      .cls-1 {
        fill: none;
        stroke: black;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }
    }
  }
`;
