import React from 'react';
import { ColumnType } from '@components/Column/column.type';
import {
  Container, Count, Header, Title,
} from '@components/Column/styles';

type Props = {
  title: string;
  counter: number;
  children: any;
} & ColumnType;

function Column({
  title, color, counter, children,
}: Props) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Count color={color}>{counter}</Count>
      </Header>
      {children}
    </Container>
  );
}

export default Column;
