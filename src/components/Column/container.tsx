import { Droppable } from 'react-beautiful-dnd';
import Column from '.';
import { ColumnType } from './column.type';
import { List } from './styles';
import CardContainer from '../Card/container';

type Props = ColumnType & { counter: number };

function ColumnContainer(props: Props) {
  const { slug, items } = props;

  return (
    <Column {...props}>
      <Droppable key={slug} droppableId={slug}>
        {(provided) => (
          <List
            ref={provided.innerRef}
            {...props}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <CardContainer key={item.id + slug} index={index} done={slug === 'done'} {...item} />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Column>
  );
}

export default ColumnContainer;
