'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import './styles/style.css';

export default function Accounts() {
    const router = useRouter();

    const [isAdmin, setIsAdmin] = useState(false);

    console.log('router: ', router);
    return (
        <div>
            <h1>list of accounts</h1>
            <>
                <ul className='list'>
                    <Link href="/accounts/1">account #1</Link>
                    <Link href="/accounts/2">account #2</Link>
                    <Link href="/accounts/3">account #3</Link>
                    <Link
                        prefetch={true} // prefetch works only oon production
                        href={{
                            pathname: '/accounts/0',
                            query: {
                                userName: 'premiumUser',
                            },
                        }}
                    >
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem
                            dolorum tempore vero eligendi.
                        </div>
                    </Link>
                </ul>
            </>
        </div>
    );
}
