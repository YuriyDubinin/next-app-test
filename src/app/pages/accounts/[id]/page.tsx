'use client';

import { useParams, useRouter } from 'next/navigation';

export default function AccountID() {
    const params = useParams();
    const router = useRouter();

    console.log('id: ', params.id);
    return (
        <div>
            <h1>accountID: {params.id}</h1>
            <ul>
                <li
                    onClick={() => router.push(`/pages/accounts/${params.id}/wallets`)}
                >{`$ wallets`}</li>
                <li
                    onClick={() => router.push('/pages/accounts')}
                >{`<- Back to list of accounts`}</li>
            </ul>
        </div>
    );
}
