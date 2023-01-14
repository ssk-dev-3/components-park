import '../styles/globals.css';
import '../styles/app.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Components Park</title>
        <meta name="description" content="It's a website where I can freely play with the things I want to try out in conding." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
