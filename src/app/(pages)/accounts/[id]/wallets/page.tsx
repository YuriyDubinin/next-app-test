'use client';

import { useParams, useRouter } from 'next/navigation';

export default function Wallets() {
    const params = useParams();
    const router = useRouter();

    const arr = ['ololo', 'alala'];

    const [key, value] = arr;

    return (
        <div>
            <h1>List of wallets, accountID: {params.id}</h1>
            <>
                <ul>
                    <li onClick={() => router.push(`/accounts/${params.id}/wallets/1`)}>
                        wallet #1
                    </li>
                    <li onClick={() => router.push(`/accounts/${params.id}/wallets/2`)}>
                        wallet #2
                    </li>
                    <li onClick={() => router.push(`/accounts/${params.id}`)}>{`<- account`}</li>
                    <li onClick={() => router.push('/accounts')}>{`<- list of accounts`}</li>
                </ul>
            </>
        </div>
    );
}
