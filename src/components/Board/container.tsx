import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ColumnContainer from '@components/Column/container';
import { Columns } from '@components/Column/styles';
import moveCard from '@components/Board/utils/move-card';
import { useAppContext } from '@/context';

function BoardContainer() {
  const { setBoard, board } = useAppContext();

  return (
    <DragDropContext onDragEnd={(drop) => setBoard((state) => moveCard(state, drop))}>
      <Columns>
        {React.Children.toArray(
          Object.values(board).map((column) => (
            <ColumnContainer
              counter={column.items.length}
              key={column.slug}
              {...column}
            />
          )),
        )}
      </Columns>
    </DragDropContext>
  );
}

export default BoardContainer;
