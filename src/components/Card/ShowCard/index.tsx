import Button from '../../Button';
import {
  Container, Description, InputGroup, Title,
} from './styles';

type Props = {
  onEdit: ()=>void;
  onDelete: ()=>void;
  onCancel: ()=>void;
  title: string,
  description: string
}

function ShowCard({
  onEdit, onDelete, onCancel, title, description,
}:Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <InputGroup>
        <Button action="primary" text="Edit" onClick={onEdit} />
        <Button action="caution" text="Delete" onClick={onDelete} />
        <Button action="secondary" text="Cancel" onClick={onCancel} />
      </InputGroup>
    </Container>
  );
}

export default ShowCard;
