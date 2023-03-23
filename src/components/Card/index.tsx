import {
  Categories, Category, Container, Title,
} from './styles';

type Props = {
  title: string,
  done: boolean
  onClick: () => void
}

function Card({ title, done, onClick }: Props) {
  return (
    <Container done={done} onClick={onClick}>
      <Title>{title}</Title>
      <Categories>
        <Category>Series</Category>
      </Categories>
    </Container>
  );
}

export default Card;
