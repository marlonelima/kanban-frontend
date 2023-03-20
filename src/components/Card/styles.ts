import styled, { css } from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #f4f4f4; 

  ${({ done }) => done && css`
  text-decoration: line-through;
    filter: brightness(0.95);
  `}
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
`;
