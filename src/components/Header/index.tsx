import Link from 'next/link';
import styles from './styles.module.scss';

import logo from '../../../public/img/logo.png';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.container}>
            <Image src={logo} width={175} height={30} alt="Logo Legião Digital" placeholder="blur" /> 
            <ul>
                <li>
                    <Link href="#">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Contato
                    </Link>
                </li>
            </ul>
            <button>
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
    )
}