import { cookies } from 'next/headers';

import styles from './styles/index.module.css';

import Background from '@/components/Backgrond';

export default function Main() {
    console.log('cookie: ', cookies().getAll());
    return (
        <main className={styles.main}>
            <Background />
        </main>
    );
}
