import React, { useState } from 'react';

import styles from './pagina146.module.css';

const Pagina146 = () => {
    const [currentClock, setCurrentClock] = useState(clock1);

    const handleClockChange = (clockNumber) => {
        switch (clockNumber) {
            case 1:
                setCurrentClock(clock1);
                break;
            case 2:
                setCurrentClock(clock2);
                break;
            case 3:
                setCurrentClock(clock3);
                break;
            default:
                setCurrentClock(clock1);
        }
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    }

    const audioMap = {
        clock_w,
        clock_1,
        clock_2,
        clock_3
    };

    return (
        <div>
            <div className={styles.pg91Container}>
                <header className={styles.pg91Header}>
                    <h1 className={styles.pg91HeaderH1}>Grammar</h1>
                    <div>
                        <h2 className={styles.pg91HeaderH2}>Telling the time</h2>
                        <p>Dizendo as horas</p>
                    </div>
                </header>
                <main className={styles.pg91Main}>
                    <div></div>
                </main>
            </div>
        </div>
    );
};

export default Pagina146;
