import styled from 'styled-components';

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
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

export const Count = styled.span`
  color: #D4AC53;
  background: #F5F2E3;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.6rem;
  margin-left: 0.5rem;
`;

export const List = styled.div``;
