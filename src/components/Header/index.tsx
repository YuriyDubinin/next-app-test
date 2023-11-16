'use client';

import Logo from './components/Logo';
import Menu from './components/Menu';

// declare type of my props

export default function Header(props: any) {
    return (
        <header>
            <Logo />
            <Menu {...props} />
        </header>
    );
}
