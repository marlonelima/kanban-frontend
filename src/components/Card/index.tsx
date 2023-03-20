import { Container, Title } from '@components/Card/styles';
import { CardType } from '@components/Card/card.type';

function Card({ title }: CardType) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Card;
