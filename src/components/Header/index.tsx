import { Container, CreateButton, Title } from '@components/Header/styles';

function Header() {
  return (
    <Container>
      <Title>My tasks</Title>
      <CreateButton>Create</CreateButton>
    </Container>
  );
}

export default Header;
