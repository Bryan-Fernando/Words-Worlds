import React, { useState } from 'react';
import styles from './pagina171.module.css';

import clock9 from '../assets/images/pagina171_imagem1.webp';
import clock10 from '../assets/images/pagina171_imagem2.webp';
import clock11 from '../assets/images/pagina171_imagem3.webp';
import clock12 from '../assets/images/pagina171_imagem4.webp';

const Pagina171 = () => {
    const [selectedClock, setSelectedClock] = useState(9);

    const handleShowClock = (clockNumber) => {
        setSelectedClock(clockNumber);
    };

    const getClockImage = () => {
        switch (selectedClock) {
            case 9: return clock9;
            case 10: return clock10;
            case 11: return clock11;
            case 12: return clock12;
            default: return clock9;
        }
    };

    return (
        <div className={styles["page171__container"]}>

            {/* Texto à esquerda */}
            <div className={styles["page171__left-content"]}>
                <div className={styles["page171__header"]}>
                    <div className={styles["page171__system-title"]}>Sistema Digital</div>
                    <h1 className={styles["page171__main-title"]}>How to Ask and Tell the Time</h1>
                    <p className={styles["page171__subtitle"]}>Como Perguntar e Dizer as Horas</p>
                </div>

                <div className={styles["page171__examples"]}>

                    {/* Exemplo 9:00 */}
                    <div className={styles["page171__example-block"]}>
                        <p>A: What time is it?</p>
                        <p
                            className={styles["page171__text-red"]}
                            onClick={() => handleShowClock(9)}
                        >
                            B: It is nine o'clock
                        </p>
                    </div>

                    {/* Exemplo 10:00 */}
                    <div className={styles["page171__example-block"]}>
                        <p>A: What time is it?</p>
                        <p
                            className={styles["page171__text-red"]}
                            onClick={() => handleShowClock(10)}
                        >
                            B: It is ten o'clock
                        </p>
                    </div>

                    {/* Exemplo 11:00 */}
                    <div className={styles["page171__example-block"]}>
                        <p>A: What time is it?</p>
                        <p
                            className={styles["page171__text-red"]}
                            onClick={() => handleShowClock(11)}
                        >
                            B: It is eleven o'clock
                        </p>
                    </div>

                    {/* Exemplo 12:00 */}
                    <div className={styles["page171__example-block"]}>
                        <p>A: What time is it?</p>
                        <p
                            className={styles["page171__text-red"]}
                            onClick={() => handleShowClock(12)}
                        >
                            B: It is twelve o'clock
                        </p>
                    </div>
                </div>


                <section className={styles["page171__note-audio"]}>
                    <div className={styles["page171__note-audio-header"]}>
                        Nota:
                    </div>
                    <div className={styles["page171__note-audio-content"]}>
                        <p>Somente Áudio: ( Que horas são ? )</p>
                        <p>Somente Áudio: ( É uma hora )</p>
                    </div>
                </section>

            </div>

            {/* Imagem à direita */}
            <div className={styles["page171__clock-container"]}>
                <img src={getClockImage()} alt="Clock" className={styles["page171__clock-image"]} />
            </div>
        </div>
    );
};

export default Pagina171;
