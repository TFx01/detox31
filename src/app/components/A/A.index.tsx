import React from 'react';
import { Container } from './A.style';

export default function A({ title, size, ...rest }) {
  return (
    <Container size={size} {...rest}>
      {title}
    </Container>
  );
}
