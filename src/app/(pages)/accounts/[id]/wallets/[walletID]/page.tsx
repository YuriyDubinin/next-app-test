'use client';

import { useParams, useRouter } from 'next/navigation';

export default function WalletID() {
    const params = useParams();
    const router = useRouter();

    console.log('id: ', params.id);
    console.log('walletID: ', params.walletID);
    return (
        <div>
            <h1>
                accountID: {params.id}, walletID: {params.walletID}
            </h1>
            <>
                <ul>
                    <li>mokData 1: s324234dwd4#dw3D3q3r$rw$trwtWt</li>
                    <li>mokData 2:@$$@$2@#423$23$23$24fW4W$</li>
                    <ul>
                        <li
                            onClick={() => router.push(`/accounts/${params.id}/wallets`)}
                        >{`<- account`}</li>
                        <li onClick={() => router.push('/accounts')}>{`<- list of accounts`}</li>
                    </ul>
                </ul>
            </>
        </div>
    );
}
