import { Container, Title } from '@components/Card/styles';

type Props = {
  title: string,
  done: boolean
}

function Card({ title, done }: Props) {
  return (
    <Container done={done}>
      <Title>{title}</Title>
    </Container>
  );
}

export default Card;
