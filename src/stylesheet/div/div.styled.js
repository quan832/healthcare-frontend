import styled, { css } from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  ${(props) =>
    props.rowReverse &&
    css`
      flex-direction: row-reverse;
    `}

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
`;
