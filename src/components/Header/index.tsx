import { Container, Title } from './styles';
import Button from '../Button';

type Props = {
  title: string,
  onClick: () => void;
}

function Header({ title, onClick }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Button onClick={onClick} text="Create" action="primary" />
    </Container>
  );
}

export default Header;
