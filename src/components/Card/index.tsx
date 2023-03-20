import { CardType } from './card.type';
import { Container, Title } from './styles';

function Card({ title }: CardType) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Card;
