import { Draggable } from 'react-beautiful-dnd';
import { CardType } from './card.type';
import Card from '.';
import { useAppContext } from '../../context';

type Props = {
  index: number,
  done: boolean
} & CardType;

function CardContainer({ id, index, ...data }: Props) {
  const { setModalCardId } = useAppContext();

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style, paddingBottom: '0.5rem' }}

        >
          <Card onClick={() => setModalCardId(id)} {...data} />
        </div>
      )}
    </Draggable>
  );
}

export default CardContainer;
