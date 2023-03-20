import React from 'react';
import { ColumnType } from './column.type';
import {
  Container, Count, Header, Title,
} from './styles';

type Props = {
  title: string;
  counter: number;
  children: any;
} & ColumnType;

const Column = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <Container ref={ref}>
    <Header>
      <Title>{props.title}</Title>
      <Count color={props.color}>{props.counter}</Count>
    </Header>
    {props.children}
  </Container>
));

export default Column;
