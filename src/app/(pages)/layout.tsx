import type { PropsWithChildren } from 'react';

import Header from '@/components/Header';

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
