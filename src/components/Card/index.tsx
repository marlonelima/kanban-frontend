import {
  Categories, Category, Container, Title,
} from '@components/Card/styles';

type Props = {
  title: string,
  done: boolean
}

function Card({ title, done }: Props) {
  return (
    <Container done={done}>
      <Title>{title}</Title>
      <Categories>
        <Category>Series</Category>
      </Categories>
    </Container>
  );
}

export default Card;
