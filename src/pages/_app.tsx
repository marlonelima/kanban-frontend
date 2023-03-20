import Head from 'next/head';
import GlobalStyle from '@/styles/globalStyles';

import type { AppProps } from 'next/app';
import AppContext from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppContext>
  );
}
