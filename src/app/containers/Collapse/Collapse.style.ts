import styled from 'styled-components';

export const Container = styled.section<any>`
  width: 100%;

  .see__more__btn {
    margin: 25px auto 0;
  }
`;

export const ItemStyled = styled.article<any>`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: nowrap column;
  flex-flow: nowrap column;

  & ~ & {
    margin: 10px 0 0 0;
  }
`;

export const BodyStyled = styled.section<any>`
  width: 100%;
  height: ${({ active, height }) => {
    return active ? `${height}px` : '0px';
  }};
  overflow: ${({ active }) => (active ? 'auto' : 'hidden')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  -webkit-transition: all ease 400ms;
  -o-transition: all ease 400ms;
  transition: all ease 400ms;
  will-change: height;

  p {
    font-size: 1.6rem;
    padding: 5px 20px;
    color: #545854;
    font-family: 'Jones Light';

    /* @media (max-width: 600px) {
      font-size: 1.6rem;
    } */
  }
`;

export const HeaderStyled = styled.header<any>`
  width: 100%;
  cursor: pointer;
  background: #fff;
  padding: 0px 25px;
  border-radius: 10px;
  height: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 20px -20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 20px -20px;
  border: 1px solid rgba(225, 225, 225, 1);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  h3 {
    font-size: 1.8rem;
    color: var(--main-font-color);
    margin: 0;
    font-family: 'Jones Bold';

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
`;
