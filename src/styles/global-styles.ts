import { createGlobalStyle } from 'styled-components';

import JonesBlack from 'assets/fonts/Jones-Black.otf';
import JonesBook from 'assets/fonts/Jones-Book.otf';
import JonesBold from 'assets/fonts/Jones-Bold.otf';
import JonesMedium from 'assets/fonts/Jones-Medium.otf';
import JonesLight from 'assets/fonts/Jones-Light.otf';

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 10px;
    --main-green-color: #0e761a;
    --main-font-color: var(--main-green-color);
  }

  @font-face {
    font-family: 'Jones Black';
    src: url(${JonesBlack});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Jones Bold';
    src: url(${JonesBold});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Jones Book';
    src: url(${JonesBook});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Jones Medium';
    src: url(${JonesMedium});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Jones Light';
    src: url(${JonesLight});
    font-weight: normal;
    font-style: normal;
  }

  h1,h2,h3{
    line-height: 1;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Jones Black';
    /* background: #0f3b32; */
    background: #fff;
  }

  body.block--scroll{
    overflow: hidden;
  }

  img{
    width: 100%;
    max-width: 100%;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
  }

  p,
  label {
    font-family: 'Jones Medium';
    font-size: 1.6rem;
    line-height: 1.6;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
