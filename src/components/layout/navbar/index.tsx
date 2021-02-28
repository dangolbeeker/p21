import React, { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { Avatar, Divider, Drawer, Hidden, Container, AppBar, Toolbar, IconButton, List, ListItem } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { AnchorLink } from '../../../components/links/anchorLink';

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
          </div>
          {!props.hideMenu && (
            <React.Fragment>
              <Hidden xsDown>
                <ul className={styles.menu}>
                  {menuItems.map(item => (
                    <li key={item.to} className={styles.menuItem}><AnchorLink to={item.to}>{item.text}</AnchorLink></li>
                  ))}
                </ul>
              </Hidden>
              <Hidden smUp>
                <div>
                  <IconButton onClick={handleClickHamburger}><Menu/></IconButton>
                </div>
                <Drawer anchor='right' open={openSideMenu} onClose={handleCloseSideMenu}>
                  <List className={styles.sideMenu}>
                    {menuItems.map(item => (
                      <React.Fragment key={item.to}>
                        <AnchorLink to={item.to}><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>{item.text}</ListItem></AnchorLink>
                        <Divider/>
                      </React.Fragment>
                    ))}
                  </List>
                </Drawer>
              </Hidden>
            </React.Fragment>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};