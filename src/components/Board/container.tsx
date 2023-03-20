import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { ColumnsListType } from '@components/Column/column.type';

import Board from '.';
import moveCard from './utils/move-card';

const ColumnsList: ColumnsListType = {
  to_do: {
    title: 'To Do',
    slug: 'to_do',
    color: '#D4AC53',
    items: [
      { id: '1', title: 'How To Get Away With Murder' },
    ],
  },
  doing: {
    title: 'Doing',
    slug: 'doing',
    color: '#d453c3',
    items: [
      { id: '2', title: 'The Big Bang Theory' },
    ],
  },

  done: {
    title: 'Done',
    slug: 'done',
    color: '#7ad453',
    items: [
      { id: '3', title: 'Sherlock' },
    ],

  },
};

function BoardContainer() {
  const [columns, setColumns] = useState<ColumnsListType>(ColumnsList);

  return (
    <DragDropContext onDragEnd={(drop) => setColumns((state) => moveCard(state, drop))}>
      <Board columns={columns} />
    </DragDropContext>
  );
}

export default BoardContainer;
