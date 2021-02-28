import React from 'react';
import Link from 'next/link';
import { ExternalLink } from './links';
import styles from './index.module.scss';


export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <small>
                &copy;2021-forever
            </small>
            <ul>
                <li className={styles.listItem}>
                <ExternalLink className={styles.link} href='https://github.com/dangolbeeker/p21'>View on GitHub</ExternalLink>
        </li>
        </ul>

    </footer>
  );
};