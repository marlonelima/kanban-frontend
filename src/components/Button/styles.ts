import styled from 'styled-components';

type ButtonProps = {
  action: 'primary' | 'secondary' | 'caution'
}

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button<ButtonProps>`
  font-size: 0.8rem;
  color: ${({ action }) => ({
    primary: '#fff',
    secondary: '#525252',
    caution: '#fff',
  }[action])};
  padding: 0.5rem 1rem;
  background: ${({ action }) => ({
    primary: '#3d82eb',
    secondary: '#f4f4f4',
    caution: '#f5424e',
  }[action])};
  border: none;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
    transition: 0.3s;
  } 
`;
