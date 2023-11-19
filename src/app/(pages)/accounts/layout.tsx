import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Accounts',
    description: 'List of accounts',
};

export default function AccountsLayout({ children }: PropsWithChildren<unknown>) {
    return <div>{children}</div>;
}
