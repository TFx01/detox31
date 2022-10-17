import React from 'react';
import { Container } from './Flex.style';

export default function Flex({ children, css, media }: any) {
  return (
    <Container css={css} media={media}>
      {children}
    </Container>
  );
}
