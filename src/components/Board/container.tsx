import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ColumnType } from '@components/Column/column.type';

import Board from '.';

const ColumnsList: ColumnType[] = [
  {
    title: 'To Do',
    slug: 'to_do',
    color: '#D4AC53',
    items: [
      { id: '1', title: 'How To Get Away With Murder' },
    ],
  }, {
    title: 'Doing',
    slug: 'doing',
    color: '#d453c3',
    items: [
      { id: '2', title: 'The Big Bang Theory' },
    ],
  }, {
    title: 'Done',
    slug: 'done',
    color: '#7ad453',
    items: [
      { id: '3', title: 'Sherlock' },
    ],
  },
];

function BoardContainer() {
  const [columns, setColumns] = useState<ColumnType[]>(ColumnsList);

  const moveCard = (state: ColumnType[], drop: DropResult) => {
    const newState = structuredClone(state);
    const origin = state.findIndex((column) => column.slug === drop.source.droppableId);
    const item = state[origin].items[drop.source.index];

    if (!drop.destination) return state;

    const destination = state.findIndex((column) => column.slug
    === drop.destination!.droppableId);

    if (drop.destination.droppableId !== drop.source.droppableId) {
      newState[destination].items.splice(drop.destination.index, -1, item);
      delete newState[origin].items[drop.source.index];
    } else {
      delete newState[origin].items[drop.source.index];
      newState[destination].items.splice(drop.destination.index, -1, item);
    }

    // removing empty spaces for bug prevention
    newState[origin].items = newState[origin].items.filter((content) => content);
    newState[destination].items = newState[destination].items.filter((content) => content);

    return newState;
  };

  return (
    <DragDropContext onDragEnd={(drop) => setColumns((state) => moveCard(state, drop))}>
      <Board columns={columns} />
    </DragDropContext>
  );
}

export default BoardContainer;
