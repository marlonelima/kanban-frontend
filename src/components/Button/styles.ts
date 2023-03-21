import styled from 'styled-components';

type ButtonProps = {
  action: 'primary' | 'secondary'
}

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button<ButtonProps>`
  font-size: 0.8rem;
  color: ${({ action }) => (action === 'primary' ? '#fff' : '#525252')};
  padding: 0.5rem 1rem;
  background: ${({ action }) => (action === 'primary' ? '#3d82eb' : '#f4f4f4')};
  border: none;
  border-radius: 0.5rem;

  &:hover{
  cursor: pointer;
  filter: brightness(0.9);
  transition: 0.3s;
}


`;
