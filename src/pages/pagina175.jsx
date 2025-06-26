import React, { useState } from 'react';
import styles from './pagina175.module.css';

import clock10_10 from '../assets/images/pagina175_imagem1.webp';
import clock10_15 from '../assets/images/pagina175_imagem2.webp';
import clock10_20 from '../assets/images/pagina175_imagem3.webp';
import clock10_25 from '../assets/images/pagina175_imagem4.webp';

const Pagina175 = () => {
    const [selectedClock, setSelectedClock] = useState('10:10');

    const handleShowClock = (time) => {
        setSelectedClock(time);
    };

    const getClockImage = () => {
        switch (selectedClock) {
            case '10:10': return clock10_10;
            case '10:15': return clock10_15;
            case '10:20': return clock10_20;
            case '10:25': return clock10_25;
            default: return clock10_10;
        }
    };

    return (
        <div className={styles["page175__container"]}>

            <div className={styles["page175__content-row"]}>
                {/* Texto lado esquerdo */}
                <div className={styles["page175__left-content"]}>
                    <div className={styles["page175__header"]}>
                        <div className={styles["page175__system-title"]}>Sistema Digital</div>
                        <h1 className={styles["page175__main-title"]}>How to Ask and Tell the Time</h1>
                        <p className={styles["page175__subtitle"]}>Como Perguntar e Dizer as Horas</p>
                    </div>

                    <div className={styles["page175__examples"]}>

                        {/* 10:10 */}
                        <div className={styles["page175__example-block"]}>
                            <p>A: What time is it?</p>
                            <p
                                className={styles["page175__text-red"]}
                                onClick={() => handleShowClock('10:10')}
                            >
                                B: It’s ten ten
                            </p>
                        </div>

                        {/* 10:15 */}
                        <div className={styles["page175__example-block"]}>
                            <p>A: What time is it?</p>
                            <p
                                className={styles["page175__text-red"]}
                                onClick={() => handleShowClock('10:15')}
                            >
                                B: It’s ten fifteen
                            </p>
                        </div>

                        {/* 10:20 */}
                        <div className={styles["page175__example-block"]}>
                            <p>A: What time is it?</p>
                            <p
                                className={styles["page175__text-red"]}
                                onClick={() => handleShowClock('10:20')}
                            >
                                B: It’s ten twenty
                            </p>
                        </div>

                        {/* 10:25 */}
                        <div className={styles["page175__example-block"]}>
                            <p>A: What time is it?</p>
                            <p
                                className={styles["page175__text-red"]}
                                onClick={() => handleShowClock('10:25')}
                            >
                                B: It’s ten twenty-five
                            </p>
                        </div>
                    </div>

                    {/* Nota Azul Final */}
                    <section className={styles["page175__note"]}>
                        <div className={styles["page175__note-header"]}>
                            Nota:
                        </div>
                        <div className={styles["page175__note-content"]}>
                            <p>
                                A partir de 10:09 retira-se <span className={styles["page175__text-red"]}>oh</span> em inglês.<br />
                                Em português permanece o <span className={styles["page175__text-red"]}>E</span>.<br />
                                <span className={styles["page175__text-red"]}>Ex: Ten ten = Dez e dez</span>
                            </p>
                        </div>
                    </section>
                </div>

                {/* Relógio lado direito */}
                <div className={styles["page175__clock-container"]}>
                    <img src={getClockImage()} alt="Clock" className={styles["page175__clock-image"]} />
                </div>
            </div>
        </div>
    );
};

export default Pagina175;
