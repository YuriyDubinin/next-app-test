import clsx from '@/libs/clsx';
import { Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--var-montserrat' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={montserrat.variable}>{children}</body>
        </html>
    );
}
