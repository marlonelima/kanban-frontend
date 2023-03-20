import React from 'react';
import { ColumnType } from '@components/Column/column.type';
import { Columns } from '../Column/styles';
import ColumnContainer from '../Column/container';

type Props = {
  columns: ColumnType[]
}

function Board({ columns }: Props) {
  return (
    <Columns>
      {React.Children.toArray(
        columns.map((column) => <ColumnContainer key={column.slug} {...column} />),
      )}
    </Columns>
  );
}

export default Board;
