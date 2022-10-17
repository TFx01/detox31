import styled, { css } from 'styled-components';
import { media } from 'styles/media';

export const Container = styled.div<any>`
  display: flex;
  width: 100%;

  ${({ css }) => css}
  ${({ media: media__ }) => {
    if (media__) {
      const { xsmall, small, medium, large, xlarge } = media__;
      const xsmall__ = media.xsmall`
      ${xsmall}
      `;
      const small__ = media.small`
      ${small}
      `;
      const medium__ = media.medium`
      ${medium}
      `;
      const large__ = media.large`
      ${large}
      `;
      const xlarge__ = media.xlarge`
      ${xlarge}
      `;

      return css`
        ${xsmall__}
        ${small__}
        ${medium__}
        ${large__}
        ${xlarge__}
      `;
    }

    return '';
  }}
`;
