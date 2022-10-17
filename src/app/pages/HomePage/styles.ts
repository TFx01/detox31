import styled from 'styled-components';
import { media } from 'styles/media';

export const MainHeader = styled.header`
  display: flex;
  align-items: center;

  ${media.xsmall`
    flex-direction: column-reverse;
  `}
  ${media.small`
    flex-direction: column-reverse;
  `}
  ${media.medium`
    flex-direction:row;
  `}
  ${media.large`
    flex-direction:row;
  `}
  ${media.xlarge`
    flex-direction: row;
  `}
  > div {
    display: flex;
    flex-direction: column;
    h1 {
      max-width: 700px;
      margin-bottom: 0;
      width: 100%;
      color: var(--main-font-color);
      /* color: #fff; */
    }

    h2 {
      font-family: 'Jones Light';
      /* color: var(--main-font-color); */
      color: #545854;

      ${media.xsmall`
        font-size: 2rem;
      `}
      ${media.small`
        font-size: 2rem;
      `}
      ${media.medium`
        font-size: 2.2rem;
      `}
      ${media.large`
        font-size: 2.2rem;
      `}
      ${media.xlarge`
        font-size: 2.2rem;
      `}
    }

    p {
      font-family: 'Jones Medium';
      color: var(--main-font-color);
      ${media.xsmall`
        font-size: 2rem;
      `}
      ${media.small`
        font-size: 2rem;
      `}
      ${media.medium`
        font-size: 2.2rem;
      `}
      ${media.large`
        font-size: 2.2rem;
      `}
      ${media.xlarge`
        font-size: 2.2rem;
      `}
    }
  }
  img {
    width: auto;
    height: 100%;
    min-height: 100%;
    /* filter: drop-shadow(16px 16px 80px rgba(6, 214, 160, 0.18)); */

    /* ${media.xsmall`
      width: 100%;
    `}
    ${media.small`
      width: 80%;
    `}
    ${media.medium`
      width: 50%;
    `}
    ${media.large`
      width: 50%;
    `}
    ${media.xlarge`
      width: 50%;
    `} */
  }
`;
export const HeaderDescritive = styled.header`
  flex-direction: column;
  padding: 40px 0 30px;
  > div {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    max-width: 750px;
    h2 {
      /* width: fit-content; */
      color: var(--main-font-color);
      margin-bottom: 0;
    }

    p {
      /* color: #e2e2e2; */
      color: #545854;

      font-family: 'Jones Medium';

      ${media.xsmall`
      font-size: 2rem;

      `}
      ${media.small`
      font-size: 2rem;

        `}
      ${media.medium`
      font-size: 2.2rem;

        `}
      ${media.large`
      font-size: 2rem;

        `}
      ${media.xlarge`
      font-size: 2rem;
        `}
    }
  }
`;

export const Benefits = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-flow: wrap row;
  gap: 10px;
  li {
    display: flex;
    align-items: center;
    color: #545854;
    font-family: 'Jones Book';
    font-size: 1.6rem;
    background: rgba(255, 255, 255, 1);
    /* background: rgba(6, 214, 160, 0.2); */
    padding: 16px 20px;
    border-radius: 10px;
    /* width: 440px; */
    height: min-content;
    display: flex;
    box-shadow: rgba(18, 38, 58, 0.1) 0px 7px 14px -10px;
    border: 1px solid rgba(225, 225, 225, 1);

    ${media.xsmall`
      width: 100%;
    `}
    ${media.small`
      justify-content: flex-start;
      width: 100%;
    `}
    ${media.medium`
      width: fit-content;
      justify-content: center;
    `}
    ${media.large`
     justify-content: center;
      width: fit-content;
    `}
    ${media.xlarge`
      justify-content: center;
      width: fit-content;
    `}

    svg {
      margin: 0 15px 0 0;
      background: #1ab51a;
      padding: 5px;
      color: #fff;
      border-radius: 100vw;
    }

    /* ~ li {
      margin: 10px 0;
    } */
  }
`;

export const BenefitsPopOver = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;

  > li {
    display: flex;
    align-items: center;
    color: #545854;

    font-family: 'Jones Book';
    font-size: 1.6rem;
    background: rgba(255, 255, 255, 1);
    padding: 16px 20px;
    border-radius: 10px;
    height: min-content;
    display: flex;
    box-shadow: rgba(18, 38, 58, 0.1) 0px 7px 14px -10px;
    border: 1px solid rgba(225, 225, 225, 1);
    padding: 16px 20px;
    width: 100%;
    svg {
      margin: 0 15px 0 0;
      background: #1ab51a;
      padding: 5px;
      border-radius: 100vw;
      color: #fff;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
    }

    span {
      font-size: 1.5rem;
      margin: 0;
      flex: 1;
      font-family: 'Jones Book';
    }

    /* ~ li {
      margin: 10px 0;
    } */
  }
`;

export const StyledCarouselItem = styled.article`
  background: #045028;
  width: 100%;
  border-radius: 15px;
  padding: 0px 20px;
  height: 465px;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 10px -10px;

  header {
    height: 35%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  header p {
    z-index: 2;
    position: relative;
    background: rgba(255, 255, 255, 1);
    color: var(--main-font-color);
    padding: 2px 15px;
    width: 100%;
    /* margin: 0; */
    border-radius: 100vw;
    width: fit-content;
    font-size: 1.8rem;
    font-family: 'Jones Bold';
    box-shadow: rgba(18, 38, 58, 0.12) 0px 7px 14px -10px;
  }

  div:nth-child(2) {
    height: 50%;
    position: relative;
    padding: 0 12px;
  }
  div:nth-child(2) p {
    font-family: 'Jones Light';
    line-height: 1.8;
    color: #e2e2e2;
    padding: 7px 0 0;
  }
  img {
    top: 0;
    z-index: 1;
    width: 100%;
    height: 35%;
    object-fit: cover;
    right: 0;
    position: absolute;
  }
`;

export const Client = styled.article`
  background: rgba(255, 255, 255, 0.07);
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
  height: auto;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 12px -10px;
  border: 1px solid rgba(225, 225, 225, 1);

  header {
    display: flex;
    align-items: center;
    gap: 17px;
    padding: 10px 0 20px;
    width: 100%;
    border-bottom: 1px solid rgba(225, 225, 225, 1);

    img {
      width: 68px;
      border-radius: 100vw;
      /* box-shadow: rgba(18, 38, 58, 0.5) 0px 7px 14px -10px; */
      border: 3px solid var(--main-green-color);
    }

    h2 {
      font-size: 2rem;
      color: var(--main-font-color);
      margin: 10px 0;
      font-family: 'Jones Bold';
    }
  }

  /* > div {
    display: flex;
    width: 100%;
  } */
`;

export const Tabs = styled.div`
  margin: 15px 0 0;
  width: auto;

  .tabs {
    margin-bottom: 10px;
    button {
      border: none;
      background: rgba(255, 255, 255, 0.2);
      color: var(--main-font-color);
      font-family: 'Jones Medium';
      text-transform: capitalize;
      padding: 10px 15px;
      cursor: pointer;
      opacity: 1;
      transition: opacity ease 100ms;
      border-bottom: 2px solid transparent;

      &.selected {
        border-bottom: 2px solid var(--main-green-color);
      }

      @media (min-width: 1024px) {
        :hover {
          opacity: 0.6;
        }
      }
    }

    button.selected {
      background: rgba(255, 255, 255, 0.2);
    }

    button ~ button {
      margin-left: 2px;
    }
  }

  .tab__videos {
    > div:not(.no__video) {
      position: relative;
      cursor: pointer;
      ::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        top: 0;
        left: 0;
      }
      > svg {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        z-index: 2;
      }
    }

    .no__video {
      display: flex;
      width: 100%;
      height: 100%;
      p {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 1.4rem;
        color: var(--main-green-color);
      }
    }
  }

  .tab__photos,
  .tab__videos {
    position: relative;
    display: flex;
    flex-flow: wrap row;
    gap: 10px;
    img {
      border-radius: 15px;
      height: 150px;
      width: 100px;
      object-fit: cover;
      cursor: pointer;
      transition: filter ease 500ms;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;

export const Avaliations = styled.div`
  padding: 0 0 30px;

  > article {
    margin: 10px 0;
    padding: 10px 30px 23px;

    p {
      font-family: 'Jones Light';
      color: #545854;
    }
  }
`;

export const ProductRow = styled.section`
  display: flex;
  gap: 10px;
  width: 100%;
  margin: 100px 0 0;
  flex-flow: wrap row;
`;
export const Product = styled.div`
  height: auto;
  background: rgba(255, 255, 255, 0.07);
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 250px;
  border-radius: 10px;
  height: 640px;
  padding: 20px 15px;
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 10px -10px;
  position: relative;
  border: 1px solid rgba(225, 225, 225, 1);

  > div {
    margin: 10px 0;
  }

  .discount {
    position: relative;
    margin-top: 10px;
    /* top: -65px; */
    /* background: #fff; */
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 20px -10px; */
    padding: 10px;
    border-radius: 100vw;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 1px solid rgba(225, 225, 225, 0.5); */

    p {
      padding: 0;
      margin: 0;
      font-family: 'Jones Bold';
      font-size: 1.4rem;
      color: #545854;
    }
  }

  .top {
    height: 70px;
    h3 {
      font-size: 3rem;
      font-family: 'Jones Black';
      color: var(--main-font-color);
      margin: 0;
      text-align: center;
    }
  }

  .product {
    position: relative;
    img {
      position: relative;
      width: 200px;
    }

    img ~ img {
      position: absolute;
      z-index: 2;
    }

    img:nth-child(1) {
      z-index: 3;
    }

    img:nth-child(2) {
      left: -30px;
    }
    img:nth-child(3) {
      left: 30px;
    }
    img:nth-child(4) {
      left: -50px;
      z-index: 1;
    }
    img:nth-child(5) {
      z-index: 1;
      left: 50px;
    }
  }

  .cta {
    p {
      color: #045028;
      text-align: center;
      font-size: 1.4rem;
      max-width: 90%;
      margin: 0 auto;
      line-height: 1.4;
    }
    span {
      font-family: 'Jones Bold';
      font-size: 1.8rem;
    }

    p:last-child {
      font-size: 4.8rem;
      margin-top: 10px;
      font-family: 'Jones Black';
    }
  }

  .btn {
    width: calc(100% / 1.5);
  }
`;
