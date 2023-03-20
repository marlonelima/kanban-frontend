import { Droppable } from 'react-beautiful-dnd';
import Column from '.';
import CardContainer from '../Card/container';
import { ColumnType } from './column.type';
import { List } from './styles';

function ColumnContainer(props: ColumnType) {
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
              <CardContainer key={item.id + slug} index={index} {...item} />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Column>
  );
}

export default ColumnContainer;
