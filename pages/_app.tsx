// import {useEffect} from 'react';
// import {DefaultSeo} from 'next-seo';
import { AppProps } from 'next/app';
// import {useRouter} from 'next/router';

import { Layout } from '../components/layout';


export default function App({ Component, pageProps }) {
return (  <Layout>
 <Component {...pageProps} />
  </Layout>
)
 
  
}





