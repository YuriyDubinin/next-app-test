'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function AccountID() {
    const params = useParams();
    const router = useRouter();

    console.log('id: ', params.id);
    return (
        <div>
            <h1>admintID: {params.id}</h1>
            <ul>
                <Link href="/admins">{'<- Back to list of admins'}</Link>
            </ul>
        </div>
    );
}
