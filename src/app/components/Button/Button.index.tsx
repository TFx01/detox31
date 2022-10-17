import React from 'react';
import { Container } from './Button.style';

export default function Button({ title, size, ...rest }) {
  return (
    <Container size={size} {...rest}>
      {title}
    </Container>
  );
}
