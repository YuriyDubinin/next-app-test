import Background from '@/components/Backgrond';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import styles from './styles/style.module.css';

export const metadata: Metadata = {
    title: 'Next Net App',
    description: '',
    openGraph: {
        title: 'Next Net App',
        description: '',
        url: 'exampledomen.com',
        siteName: 'Next Net App',
        images: [
            {
                url: '/',
                width: 1260,
                height: 800,
            },
        ],
    },
};

export default function Main() {
    console.log('cookie: ', cookies().getAll());
    return (
        <main className={styles.main}>
            <Background />
        </main>
    );
}
