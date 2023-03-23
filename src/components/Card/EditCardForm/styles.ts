import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;

  .ql-container{
    flex: 1;
    height: 100%;
    max-height: 255px;
    border: none;
  }

  .ql-toolbar{
    border-radius: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ql-editor{
    max-height: 260px;
    border: none;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  &:not(:last-child){
    margin-bottom: 1rem;
  }
`;

export const Label = styled.label`
  font-size: 0.6rem;
  font-weight: 500;
  color: #ccc;
`;

export const TitleInput = styled.input`
  width: 500px;
  padding: 0.7rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
`;
