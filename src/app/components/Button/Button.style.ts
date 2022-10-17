import styled, { css } from 'styled-components';

const SIZES = {
  md: '130px',
  lg: '180px',
  auto: 'auto',
  full: '100%',
};

function size({ size }) {
  return SIZES[size];
}

export const Container = styled.button<any>`
  --cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      --cursor: not-allowed;
      opacity: 0.5;
      cursor: var(--cursor);
    `}

  background: #2a9b60;
  border: none;
  width: ${size};
  height: 42px;
  border-radius: 100vw;
  padding: 0px 15px;
  cursor: var(--cursor);
  font-family: 'Jones Bold';
  color: #fff;
  font-size: 1.4rem;
  text-transform: uppercase;
  border: 2px solid rgba(39, 108, 52, 0.5);
  box-shadow: rgba(18, 38, 58, 1) 0px 7px 14px -10px;
  transition: filter ease 350ms;

  &:hover {
    filter: brightness(1.12);
  }
`;
