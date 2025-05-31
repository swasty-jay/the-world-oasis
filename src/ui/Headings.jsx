import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${({ as }) =>
    as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;
      background: yellow;
    `}

  ${({ as }) =>
    as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      background: yellow;
    `}


    ${({ as }) =>
    as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      background: yellow;
    `}
`;
export default Heading;
