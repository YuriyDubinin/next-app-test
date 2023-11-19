import type { Metadata } from 'next';
import Background from '@/components/Backgrond';
import { cookies } from 'next/headers';

import styles from './styles/style.module.css';

export const metadata: Metadata = {
    title: 'Next App Test',
    description: 'Generated by create next app',
    openGraph: {
        title: 'Next App Test',
        description: 'Generated by create next app',
        url: 'exampledomen.com',
        siteName: 'Next-net'
    }
};

export default function Main() {
    console.log('cookie: ', cookies().getAll());
    return (
        <main className={styles.main}>
            <Background />
        </main>
    );
}
