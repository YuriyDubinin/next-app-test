'use client';

import Logo from './components/Logo';
import Menu from './components/Menu';
import styles from './styles/style.module.css';

// declare type of my props

export default function Header(props: any) {
    return (
        <header className={styles.header}>
            <Logo />
            <Menu {...props} />
        </header>
    );
}
