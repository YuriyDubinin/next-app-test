'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import './styles/style.css';

export default function AccountID() {
    const params = useParams();
    const router = useRouter();

    return (
        <div>
            <h1>accountID: {params.id}</h1>
            <ul className="list">
                <Link href={`/accounts/${params.id}/wallets`}>wallets</Link>
                <Link href="/accounts">{`<- Back to list of accounts`}</Link>
            </ul>
        </div>
    );
}
