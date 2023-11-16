'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function Wallets() {
    const params = useParams();
    const router = useRouter();

    return (
        <div>
            <h1>List of wallets, accountID: {params.id}</h1>

            <ul className="list">
                <Link href={`/accounts/${params.id}/wallets/1`}>wallet #1</Link>
                <Link href={`/accounts/${params.id}/wallets/2`}>wallet #2</Link>

                <Link href={`/accounts/${params.id}`}>{`<- account`}</Link>
                <Link href="/accounts">{`<- list of accounts`}</Link>
            </ul>
        </div>
    );
}
