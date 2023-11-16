'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function WalletID() {
    const params = useParams();
    const router = useRouter();

    return (
        <div>
            <h1>
                accountID: {params.id}, walletID: {params.walletID}
            </h1>
            <>
                <ul>
                    <li>mokData 1: s324234dwd4#dw3D3q3r$rw$trwtWt</li>
                    <li>mokData 2:@$$@$2@#423$23$23$24fW4W$</li>
                    <ul className="list">
                        <Link href={`/accounts/${params.id}/wallets`}>{'<- wallets'}</Link>
                        <Link href="/accounts">{`<- Back to list of accounts`}</Link>
                    </ul>
                </ul>
            </>
        </div>
    );
}
