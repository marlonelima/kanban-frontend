import React from 'react';
import { ColumnsListType } from '@components/Column/column.type';
import { Columns } from '../Column/styles';
import ColumnContainer from '../Column/container';

type Props = {
  columns: ColumnsListType;
}

function Board({ columns }: Props) {
  return (
    <Columns>
      {React.Children.toArray(
        Object.values(columns).map((column) => <ColumnContainer key={column.slug} {...column} />),
      )}
    </Columns>
  );
}

export default Board;
