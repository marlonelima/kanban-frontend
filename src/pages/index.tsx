import Head from 'next/head';
import React from 'react';

import BoardContainer from '@/components/Board/container';
import Modal from '@/components/Modal';
import { useAppContext } from '@/context';
import HeaderContainer from '@/components/Header/container';
import CreateCardFormContainer from '@/components/CreateCardForm/container';

export default function Home() {
  const { isModalOpened } = useAppContext();

  return (
    <>
      <Head>
        <title>My tasks</title>
      </Head>
      <main>
        <HeaderContainer />
        <BoardContainer />
        {isModalOpened && <Modal><CreateCardFormContainer /></Modal>}
      </main>
    </>
  );
}
