import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.span`
  font-weight: 600;
`;

export const Description = styled.p`
  width: 500px;
  height: 300px;
  overflow-y: auto;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  &:not(:last-child){
    margin-bottom: 1rem;
  }
`;
