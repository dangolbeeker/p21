import React, { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { Avatar, Divider, Drawer, Hidden, Container, AppBar, Toolbar, IconButton, List, ListItem } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { AnchorLink } from '../../links/anchorLink';

type Props = {
  hideMenu: boolean;
};

export const NavBar: React.FC<Props> = (props: Props) => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const handleClickSideMenuItem = () => {
    setOpenSideMenu(false);
  };

  const handleClickHamburger = () => {
    setOpenSideMenu(true);
  };

  const handleCloseSideMenu = () => {
    setOpenSideMenu(false);
  };

  const menuItems = [
    { text: 'Skills', to: 'skills' },
    { text: 'Portfolio', to: 'portfolios' },
    { text: 'Book Me!', to: 'booking' },
    { text: 'Resume', to: 'resume' },
  ];

  return (
    <AppBar className={styles.root}>
      <Container maxWidth='md'>
        <Toolbar className={styles.toolbar}>
          <div className={styles.title}>
            <Avatar className={styles.titleLogo} src='/images/me.jpeg'/>
            <Link href='/'>
              <a className={styles.titleText}>Scott Beeker</a>
            </Link>
            <link href='/booking'>
            </link>
            <link href='/skills'></link>
          <link href='/portfolio'>
          </link>
          <link href='/resume'></link>
          </div>
         </Toolbar>
      </Container>
    </AppBar>
  );
};