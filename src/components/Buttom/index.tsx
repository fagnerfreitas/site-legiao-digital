
import styles from './styles.module.scss';

interface ButtomType {
    children: string;
}

export default function Buttom({children}: ButtomType) {

    return (
        <button className={styles.buttom}>
         {children}
        </button>
    )
}