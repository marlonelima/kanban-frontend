import Card from '@components/Card';
import {
  Container,
  Count, Header, List, Title,
} from './styles';

type Props = {
  title: string
}

function Column({ title }: Props) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Count>5</Count>
      </Header>
      <List>
        <Card />
      </List>
    </Container>
  );
}

export default Column;
