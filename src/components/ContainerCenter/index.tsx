
import styles from './styles.module.scss';

export default function ContainerCenter( {children}: any ) {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}