import Head from 'next/head';
import React from 'react';

import BoardContainer from '@/components/Board/container';
import Modal from '@/components/Modal';
import { useAppContext } from '@/context';
import HeaderContainer from '@/components/Header/container';
import EditCardFormContainer from '@/components/Card/EditCardForm/container';
import ShowCardContainer from '@/components/Card/ShowCard/container';

export default function Home() {
  const { modalOpenedId } = useAppContext();

  return (
    <>
      <Head>
        <title>My tasks</title>
      </Head>
      <main>
        <HeaderContainer />
        <BoardContainer />
        {modalOpenedId !== null && (
          <Modal>
            {modalOpenedId !== '0' ? <ShowCardContainer /> : <EditCardFormContainer />}
          </Modal>
        )}
      </main>
    </>
  );
}
