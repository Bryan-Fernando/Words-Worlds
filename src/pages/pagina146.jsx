import React, { useState } from 'react';
import clock1 from '../assets/images/clock1.png';
import clock2 from '../assets/images/clock2.png';
import clock3 from '../assets/images/clock3.png';
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
                    <p onClick={() => handleClockChange(1)}>What time is it? It is one o’clock</p>
                    <p onClick={() => handleClockChange(2)}>What time is it? It is two o’clock</p>
                    <p onClick={() => handleClockChange(3)}>What time is it? It is three o’clock</p>
                </div>
                <div className={styles.clockImageContainer}>
                    <img src={currentClock} alt="Clock showing selected time" />
                </div>
            </main>
        </div>
    );
};

export default Pagina146;
