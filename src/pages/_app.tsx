// import {useEffect} from 'react';
// import {DefaultSeo} from 'next-seo';
import { AppProps } from 'next/app';
// import {useRouter} from 'next/router';

import { Layout } from '../components/layout';



function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
 
  
}



export default App

