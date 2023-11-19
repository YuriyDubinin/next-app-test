import Image from 'next/image';

import background from '../../../public/background-main.jpg';
import styles from './styles/style.module.css';

export default function Background(props: any) {
    return (
        <div className={styles.background}>
            <Image src={background} width={1000} height={500} alt="main background" />
        </div>
    );
}
