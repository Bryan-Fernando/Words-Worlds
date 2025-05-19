import React, { useState } from 'react';
import clock1 from '../assets/images/clock1.png';
import clock2 from '../assets/images/clock2.png';
import clock3 from '../assets/images/clock3.png';
import clock_w from '../assets/audios/clock-w.mp3';
import clock_1 from '../assets/audios/clock1.mp3';
import clock_2 from '../assets/audios/clock2.mp3';
import clock_3 from '../assets/audios/clock3.mp3';
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
        <div className={styles.pg91Container}>
            <header className={styles.pg91Header}>
                <h1 className={styles.pg91HeaderH1}>Grammar</h1>
                <div>
                    <h2 className={styles.pg91HeaderH2}>Telling the time</h2>
                    <p>Dizendo as horas</p>
                </div>
            </header>
            <main className={styles.pg91Main}>
                <div className={styles.clockTextContainer}>
                    <p onClick={() => handleClockChange(1)}> <span onClick={() => playAudio('clock_w')}>What time is it?</span><span onClick={() => playAudio('clock_1')}> It is one o’clock</span></p>
                    <p onClick={() => handleClockChange(2)}><span onClick={() => playAudio('clock_w')}>What time is it?</span><span onClick={() => playAudio('clock_2')}> It is two o’clock</span></p>
                    <p onClick={() => handleClockChange(3)}><span onClick={() => playAudio('clock_w')}>What time is it?</span><span onClick={() => playAudio('clock_3')}> It is three o’clock</span></p>
                </div>
                <div className={styles.clockImageContainer}>
                    <img src={currentClock} alt="Clock showing selected time" />
                </div>
            </main>
        </div>
    );
};

export default Pagina146;
