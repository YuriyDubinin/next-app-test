'use client';

import { useRouter } from 'next/navigation';

export default function Admins() {
    const router = useRouter();
    console.log('router: ', router);
    return (
        <div>
            <h1>list of admins</h1>
            <>
                <ul>
                    <li className="btn btn-green" onClick={() => router.push('/admins/1')}>
                        admin #1
                    </li>
                    <li className="btn btn-green" onClick={() => router.push('/admins/2')}>
                        admin #2
                    </li>
                </ul>
            </>
        </div>
    );
}
