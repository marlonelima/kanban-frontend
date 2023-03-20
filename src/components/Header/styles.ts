import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  display: flex;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const CreateButton = styled.button`
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  background: #3d82eb;
  border: none;
  border-radius: 0.5rem;

  &:hover{
    cursor: pointer;
    filter: brightness(0.9);
    transition: 0.3s;
  }
`;
