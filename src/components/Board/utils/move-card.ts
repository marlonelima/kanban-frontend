import { ColumnType } from '@/components/Column/column.type';
import { DropResult } from 'react-beautiful-dnd';

function moveCard(state: Record<string, ColumnType>, drop: DropResult) {
  if (!drop.destination) return state;

  const card = state[drop.source.droppableId].items[drop.source.index];
  const newState = structuredClone(state);

  const originColumn = drop.source.droppableId;
  const destinationColumn = drop.destination.droppableId;

  delete newState[originColumn].items[drop.source.index];
  newState[originColumn].items = newState[originColumn]
    .items.filter((content) => content);

  newState[destinationColumn].items.splice(drop.destination.index, -1, card);

  return newState;
}

export default moveCard;
