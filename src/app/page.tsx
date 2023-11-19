import Background from '@/components/Backgrond';
import { cookies } from 'next/headers';

import styles from './styles/style.module.css';

export default function Main() {
    console.log('cookie: ', cookies().getAll());
    return (
        <main className={styles.main}>
            <Background />
        </main>
    );
}
