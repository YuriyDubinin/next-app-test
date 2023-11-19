import Header from '@/components/Header';
import type { PropsWithChildren } from 'react';

export default function PagesLayout({ children }: PropsWithChildren<unknown>) {
    const name = 'Yura';
    const surname = 'Dubinin';

    return (
        <>
            <Header name={name} surname={surname} />
            <div>{children}</div>
        </>
    );
}
