import styled from 'styled-components';
import { media } from './media';

export const Section = styled.section`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  ~ section {
    margin-top: 90px;
  }

  header {
    display: flex;

    ${media.xsmall`
      flex-diretion: column;
    `}
    ${media.small`
      flex-diretion: column;
    `}
    ${media.medium`
      flex-diretion: row;
    `}
    ${media.large`
      flex-diretion: row;
    `}
    ${media.xlarge`
      flex-diretion: row;
    `}
  }

  h1 {
    font-size: 7rem;
    ${media.xsmall`
      font-size: 4.5rem;
    `}
    ${media.small`
      font-size: 4.5rem;
    `}
    ${media.medium`
      font-size: 5rem;
    `}
    ${media.large`
      font-size: 7rem;
    `}
    ${media.xlarge`
      font-size: 7rem;
    `}
  }
  h2 {
    font-size: 6rem;
    color: var(--main-font-color);
    ${media.xsmall`
      font-size: 5rem;
    `}
    ${media.small`
      font-size: 5rem;
    `}
    ${media.medium`
      font-size: 5rem;
    `}
    ${media.large`
      font-size: 6rem;
    `}
    ${media.xlarge`
      font-size: 6rem;
    `}
  }

  .center {
    margin: 0 auto;
    width: fit-content;
  }
`;
