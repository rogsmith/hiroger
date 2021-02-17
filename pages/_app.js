import '../styles/css/globals.css'
import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';
import { useStore } from '../stores/stores';

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
