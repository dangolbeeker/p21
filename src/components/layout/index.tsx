import React from 'react';
import styles from './index.module.scss';
import Head from 'next/head';
import { NavBar } from './navbar';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode;
  title?: string;
  hideMenu?: boolean;
};

export const Layout: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title && `${props.title} | `}Scott Beeker</title>
      </Head>
      <NavBar hideMenu={props.hideMenu}/>
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer/>
    </React.Fragment>
  );
};