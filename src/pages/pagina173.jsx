import React, { useState } from 'react';
import styles from './pagina173.module.css';

import clock10_04 from '../assets/images/pagina173_imagem1.webp';
import clock10_05 from '../assets/images/pagina173_imagem2.webp';
import clock10_06 from '../assets/images/pagina173_imagem3.webp';
import image4 from '../assets/images/pagina173_imagem4.webp';
import image5 from '../assets/images/pagina173_imagem5.webp';

const Pagina173 = () => {
    const [selectedClock, setSelectedClock] = useState('10:04');

    const handleShowClock = (time) => {
        setSelectedClock(time);
    };

    const getClockImage = () => {
        switch (selectedClock) {
            case '10:04': return clock10_04;
            case '10:05': return clock10_05;
            case '10:06': return clock10_06;
            default: return clock10_04;
        }
    };

    return (
        <div className={styles["page173__container"]}>

            <div className={styles["page173__content-row"]}>
                {/* Texto à esquerda */}
                <div className={styles["page173__left-content"]}>
                    <div className={styles["page173__header"]}>
                        <div className={styles["page173__system-title"]}>Sistema Digital</div>
                        <h1 className={styles["page173__main-title"]}>How to Ask and Tell the Time</h1>
                        <p className={styles["page173__subtitle"]}>Como Perguntar e Dizer as Horas</p>
                    </div>

                    <div className={styles["page173__examples"]}>

                        {/* Exemplo 10:04 */}
                        <div className={styles["page173__example-block"]}>
                            <p><strong>A:</strong> What time is it?</p>
                            <p
                                className={styles["page173__text-red"]}
                                onClick={() => handleShowClock('10:04')}
                            >
                                <strong>B:</strong> It’s ten <span className={styles["page173__text-blue"]}>oh</span> four
                            </p>
                        </div>

                        {/* Exemplo 10:05 */}
                        <div className={styles["page173__example-block"]}>
                            <p><strong>A:</strong> What time is it?</p>
                            <p
                                className={styles["page173__text-red"]}
                                onClick={() => handleShowClock('10:05')}
                            >
                                <strong>B:</strong> It’s ten <span className={styles["page173__text-blue"]}>oh</span> five
                            </p>
                        </div>

                        {/* Exemplo 10:06 */}
                        <div className={styles["page173__example-block"]}>
                            <p><strong>A:</strong> What time is it?</p>
                            <p
                                className={styles["page173__text-red"]}
                                onClick={() => handleShowClock('10:06')}
                            >
                                <strong>B:</strong> It’s ten <span className={styles["page173__text-blue"]}>oh</span> six
                            </p>
                        </div>
                    </div>
                </div>

                {/* Relógio à direita */}
                <div className={styles["page173__clock-container"]}>
                    <img src={getClockImage()} alt="Clock" className={styles["page173__clock-image"]} />
                </div>
            </div>

            {/* Imagens de pessoas */}
            <div className={styles["page173__image-pair"]}>
                <img src={image4} alt="Conversation 1" className={styles["page173__photo"]} />
                <img src={image5} alt="Conversation 2" className={styles["page173__photo"]} />
            </div>
        </div>
    );
};

export default Pagina173;
