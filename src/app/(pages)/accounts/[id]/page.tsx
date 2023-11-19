'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import styles from './styles/style.module.css';

// dynamic SEO
// const fetchAccount = async (postId: string) => {
//     const post = await fetch(`/api/accounts/${postId}`, {
//         method: 'GET',
//     });
//     return post.json();
// }

// export async function generateMetadata({params}: any) {
//     const {account} = await fetchAccount(params.id)

//     return {
//         title: account[0].title,
//         description: account[0].description
//     }
// }

export default function Account() {
    // fetch from here with the params id

    const params = useParams();
    const router = useRouter();

    return (
        <div>
            <h1>accountID: {params.id}</h1>
            <ul className={styles.list}>
                <Link href={`/accounts/${params.id}/wallets`}>wallets</Link>
                <Link href="/accounts">{`<- Back to list of accounts`}</Link>
            </ul>
        </div>
    );
}
