import styled from 'styled-components';

type CountProps = {
  color: string;
}

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  padding: 0 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  &:not(:last-child){
    padding-right: 1rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 0.8rem;
`;

export const Count = styled.span<CountProps>`
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.6rem;
  margin-left: 0.5rem;

  color: ${({ color }) => color};
  background: ${({ color }) => color}20;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
