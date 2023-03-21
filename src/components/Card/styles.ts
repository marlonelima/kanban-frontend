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

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Category = styled.button`
  color: #fff;
  font-size: 0.6rem;
  padding: 0.3rem 0.6rem;
  background: #cf3a69;
  margin-top: 0.7rem;
  border-radius: 0.4rem;
  border:  none;
`;
