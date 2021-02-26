// import {useEffect} from 'react';
// import {DefaultSeo} from 'next-seo';
import { AppProps } from 'next/app';
// import {useRouter} from 'next/router';



function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}



export default App

