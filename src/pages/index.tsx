import React from 'react';
import Head from 'next/head';

import Column from '@components/Column';
import Header from '@components/Header';
import { Columns } from '@components/Column/styles';

const ColumnsList = [
  {
    title: 'To Do',
    slug: 'to_do',
    color: '#D4AC53',
  }, {
    title: 'Doing',
    slug: 'doing',
    color: '#d453c3',
  }, {
    title: 'Done',
    slug: 'done',
    color: '#7ad453',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My board</title>
      </Head>
      <main>
        <Header />
        <Columns>
          {React.Children.toArray(
            ColumnsList.map((column) => <Column title={column.title} />),
          )}
        </Columns>
      </main>
    </>
  );
}
