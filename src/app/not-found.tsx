import Background from '@/components/Backgrond';
import type { Metadata } from 'next';

import styles from './styles/style.module.css';

export const metadata: Metadata = {
    title: 'Page not found',
    description: 'This page does not exist',
};

export default function NotFound() {
    return (
        <main className={styles.main}>
            <Background src={'DEFAULT'} />
        </main>
    );
}
