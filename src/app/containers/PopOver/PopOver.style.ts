import styled, { css } from 'styled-components';

export const Container = styled.div<any>`
  background: #ffffff;
  width: 100%;
  height: 0;
  position: relative;
  will-change: transform, opacity;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  ${({ animation }) => {
    return animation === 'show'
      ? css`
          animation: slideDown ease 350ms;
        `
      : animation === 'hide' &&
          css`
            animation: slideUp ease 350ms;
          `;
  }}

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-30px);
    }
  }

  .close--wrapper {
    position: sticky;
    top: 0;
    right: 0;
    width: 100%;
    height: 0;
    display: flex;
  }

  .close {
    position: relative;
    z-index: 2;
    margin-left: auto;
    width: 32px;
    height: 32px;
    border-radius: 100vw;
    cursor: pointer;
    background: #fff;
    padding: 6px;
    box-shadow: rgba(18, 38, 58, 0.4) 0px 7px 14px -10px;

    .cls-1 {
      fill: none;
      stroke: black;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2px;
    }
  }
`;

export const PopOverStyled = styled.div`
  background: #ffffff;
  position: absolute;
  top: 10px;
  height: 300px;
  overflow: auto;
  padding: 20px;
  width: 300px;
  min-width: 200px;
  border-radius: 15px;
  border: 2px solid rgba(225, 225, 225, 0.5);
  box-shadow: rgba(0, 0, 0, 0.22) 0px 7px 20px -10px;

  @media (max-width: 480px) {
    width: 90vw;
    left: 50%;
    transform: translateX(-50%);
  }
`;
