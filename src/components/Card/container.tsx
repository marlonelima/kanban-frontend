import { Draggable } from 'react-beautiful-dnd';
import { CardType } from '@components/Card/card.type';
import Card from '@components/Card/.';

type Props = {
  index: number
} & CardType;

function CardContainer({ id, index, ...data }: Props) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style, paddingBottom: '0.5rem' }}
        >
          <Card id={id} {...data} />
        </div>
      )}
    </Draggable>
  );
}

export default CardContainer;
