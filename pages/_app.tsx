import "@/styles/sass/main.scss";
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Provider } from "react-redux";
import store from '@/store';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
