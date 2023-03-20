import Head from 'next/head';
import React from 'react';

import Header from '@components/Header';
import BoardContainer from '@/components/Board/container';

export default function Home() {
  return (
    <>
      <Head>
        <title>My board</title>
      </Head>
      <main>
        <Header />
        <BoardContainer />
      </main>
    </>
  );
}
