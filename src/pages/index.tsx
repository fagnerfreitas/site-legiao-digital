
import Header from '../components/Header';
import styles from './styles.module.scss';

import Image from 'next/image';
import Banner from '../../public/img/home/banner.jpg';

import Buttom from '../components/Buttom';
import Link from 'next/link';
import ContainerCenter from '../components/ContainerCenter';

export default function Page() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.backgroundfilter}>
                        <ContainerCenter>
                            <div className={styles.textBox}>
                                <h1>Se você ainda não tem um site, vamos te ajudar nos primeiros passos, e colocar seu negócio na internet</h1>
                                <p>Reflita com cuidado, a sua empresa está preparada para concorrer em um mundo 100% conectado? </p>

                                <Link href="#">
                                    <Buttom>Quero meu site</Buttom>
                                </Link>
                            </div>
                        </ContainerCenter>
                    </div>
                </div>


                <div className={styles.session2}>
                    <ContainerCenter>
                        <div className={styles.container}>
                            <div className={styles.textBox}>
                                <strong>Nossos serviços</strong>
                                <h2>Oque nós <span>Fazemos</span></h2>
                                <div className={styles.line}></div>
                                <p>Ter um site próprio é o mínimo que sua empresa precisa para ter uma presença digital.</p>
                                <Link href="#">
                                    <Buttom>Quero meu site</Buttom>
                                </Link>
                            </div>
                            <div className={styles.containerCards}>
                                <div className={styles.card}>
                                    <span className="material-symbols-outlined">home</span>
                                    <strong>Web Site</strong>
                                    
                                </div>
                                <div className={styles.card}>
                                    <span className="material-symbols-outlined">home</span>
                                    <strong>SEO</strong>
                                </div>
                                <div className={styles.card}>
                                    <span className="material-symbols-outlined">home</span>
                                    <strong>Hospedagem</strong>
                                </div>
                                <div className={styles.card}>
                                    <span className="material-symbols-outlined">home</span>
                                    <strong>Sistemas Web</strong>
                                </div>
                            </div>
                        </div>
                    </ContainerCenter>
                </div>

            </div>
        </>

    )
}
