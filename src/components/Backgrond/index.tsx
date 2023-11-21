import Image from 'next/image';

import BackgroundDefault from '../../../public/background-default.jpg';
import BackgroundMain from '../../../public/background-main.jpg';
import styles from './styles/style.module.css';

export default function Background(props: object) {
    const imgMap = new Map<string, object>();

    imgMap.set('MAIN', BackgroundMain);
    imgMap.set('DEFAULT', BackgroundDefault);

    return (
        <div className={styles.background}>
            <Image src={imgMap.get(props['src'])} width={1000} height={500} alt="main background" />
        </div>
    );
}
