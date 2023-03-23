import { StyledButton } from './styles';

type Props = {
  text: string,
  action: 'primary' | 'secondary' | 'caution',
  onClick: () => void
};

function Button({ text, action, ...rest }: Props) {
  return <StyledButton {...rest} action={action}>{text}</StyledButton>;
}

export default Button;
