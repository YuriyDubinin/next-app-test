import Image from 'next/image';

import './styles/index.css';

import background from '../../../public/background-main.jpg';

export default function Background(props: any) {
    return (
        <div className="main-background">
            <Image src={background} width={1000} height={500} alt="main background" />
        </div>
    );
}
