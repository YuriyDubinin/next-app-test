'use client';

import { useRouter } from 'next/navigation';

export default function Accounts() {
    const router = useRouter();
    console.log('router: ', router);
    return (
        <div>
            <h1>list of accounts</h1>
            <>
                <ul>
                    <li className="btn btn-green" onClick={() => router.push('/pages/accounts/1')}>
                        account #1
                    </li>
                    <li className="btn btn-green" onClick={() => router.push('/pages/accounts/2')}>
                        account #2
                    </li>
                    <li className="btn btn-green" onClick={() => router.push('/pages/accounts/3')}>
                        account #3
                    </li>
                </ul>
            </>
        </div>
    );
}
