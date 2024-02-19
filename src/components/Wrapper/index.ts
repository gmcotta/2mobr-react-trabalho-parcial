import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 8rem;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.sm}px) {
      padding: 0 2rem;
    }
  `}
`;
