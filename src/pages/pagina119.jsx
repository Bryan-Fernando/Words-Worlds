import React, { useRef } from 'react';

import styles from './pagina119.module.css';

import pagina118_imagem1 from '../assets/images/pagina118_imagem1.jpg';

// Importação dos áudios
import pg119_audio1 from '../assets/audios/pg119_audio1.mp3';
import pg119_audio2 from '../assets/audios/pg119_audio2.mp3';
import pg119_audio3 from '../assets/audios/pg119_audio3.mp3';
import pg119_audio4 from '../assets/audios/pg119_audio4.mp3';
import pg119_audio5 from '../assets/audios/pg119_audio5.mp3';
import pg119_audio6 from '../assets/audios/pg119_audio6.mp3';
import pg119_audio7 from '../assets/audios/pg119_audio7.mp3';
import pg119_audio8 from '../assets/audios/pg119_audio8.mp3';
import pg119_audio9 from '../assets/audios/pg119_audio9.mp3';
import pg119_audio10 from '../assets/audios/pg119_audio10.mp3';
import pg119_audio11 from '../assets/audios/pg119_audio11.mp3';
import pg119_audio12 from '../assets/audios/pg119_audio12.mp3';
import pg119_audio13 from '../assets/audios/pg119_audio13.mp3';
import pg119_audio14 from '../assets/audios/pg119_audio14.mp3';
import pg119_audio15 from '../assets/audios/pg119_audio15.mp3';
import pg119_audio16 from '../assets/audios/pg119_audio16.mp3';
import pg119_audio17 from '../assets/audios/pg119_audio17.mp3';
import pg119_audio18 from '../assets/audios/pg119_audio18.mp3';
import pg119_audio19 from '../assets/audios/pg119_audio19.mp3';
import pg119_audio20 from '../assets/audios/pg119_audio20.mp3';
import pg119_audio21 from '../assets/audios/pg119_audio21.mp3';
import pg119_audio22 from '../assets/audios/pg119_audio22.mp3';

const audioMap = {
    pg119_audio1,
    pg119_audio2,
    pg119_audio3,
    pg119_audio4,
    pg119_audio5,
    pg119_audio6,
    pg119_audio7,
    pg119_audio8,
    pg119_audio9,
    pg119_audio10,
    pg119_audio11,
    pg119_audio12,
    pg119_audio13,
    pg119_audio14,
    pg119_audio15,
    pg119_audio16,
    pg119_audio17,
    pg119_audio18,
    pg119_audio19,
    pg119_audio20,
    pg119_audio21,
    pg119_audio22
};

const Pagina119 = () => {
    const currentAudioRef = useRef(null);

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioMap[audioKey]);
        currentAudioRef.current = audio;
        audio.play();
    };

    return (
        <div>
            <div className={styles["page119__container"]}>
                <header className={styles["page119__header"]}>
                    <h1
                        className={styles["page119__header--h1"]}
                        onClick={() => playAudio('pg119_audio1')}
                        style={{ cursor: 'pointer' }}
                    >
                        Real-life Conversation
                    </h1>
                    <div className={styles["page119__header--divider"]}>
                        <div className={styles["page119__header--icon"]}></div>
                        <h2
                            className={styles["page119__subtitle"]}
                            onClick={() => playAudio('pg119_audio2')}
                            style={{ cursor: 'pointer' }}
                        >
                            1. Present Simple Tense
                        </h2>
                        <p className={styles["page119__subtext"]}>
                            Presente Simples
                        </p>
                    </div>
                </header>
                <main className={styles["page119__main"]}>
                    <div className={styles["page119__frame--text"]}>
                        <p>
                            <span onClick={() => playAudio('pg119_audio3')} style={{ cursor: 'pointer' }}>
                                Story/Dialogue Idea: “A day in My Life“
                            </span>
                            <br />
                            <span onClick={() => playAudio('pg119_audio4')} style={{ cursor: 'pointer' }}>
                                Characters: John and Sarah
                            </span>
                            <br />
                            <span onClick={() => playAudio('pg119_audio5')} style={{ cursor: 'pointer' }}>
                                Setting: A café, talking about daily routines
                            </span>
                        </p>
                    </div>
                    <div className={styles["page119__container--text"]}>
                        <h3 onClick={() => playAudio('pg119_audio6')} style={{ cursor: 'pointer' }}>Dialogue:</h3>
                        <p onClick={() => playAudio('pg119_audio7')} style={{ cursor: 'pointer' }}>John: Hi, Sarah! How are you?</p>
                        <p className={styles["page119__text--red"]} onClick={() => playAudio('pg119_audio8')} style={{ cursor: 'pointer' }}>
                            Sarah: I’m great, John! How about you?
                        </p>
                        <p onClick={() => playAudio('pg119_audio9')} style={{ cursor: 'pointer' }}>John: I’m good too. So, what’s your typical day like?</p>
                        <p className={styles["page119__text--red"]}>
                            <span onClick={() => playAudio('pg119_audio10')} style={{ cursor: 'pointer' }}>
                                Sarah: Well, I usually wake up at 6:30 in the morning.
                            </span>{" "}
                            <span onClick={() => playAudio('pg119_audio11')} style={{ cursor: 'pointer' }}>
                                I make coffee and eat breakfast.
                            </span>{" "}
                            <span onClick={() => playAudio('pg119_audio12')} style={{ cursor: 'pointer' }}>
                                Then, I leave for work at 8 a.m.
                            </span>
                        </p>
                        <p onClick={() => playAudio('pg119_audio13')} style={{ cursor: 'pointer' }}>John: Do you walk to work?</p>
                        <p className={styles["page119__text--red"]}>
                            <span onClick={() => playAudio('pg119_audio14')} style={{ cursor: 'pointer' }}>
                                Sarah: No, I take the bus.
                            </span>{" "}
                            <span onClick={() => playAudio('pg119_audio15')} style={{ cursor: 'pointer' }}>It’s faster.</span> 
                            <span onClick={() => playAudio('pg119_audio16')} style={{ cursor: 'pointer' }}>I work from 9 a.m. to 5 p.m.</span> <span onClick={() => playAudio('pg119_audio17')} style={{ cursor: 'pointer' }}>After work, I sometimes go to the gym or watch TV at home.</span>
                            <span onClick={() => playAudio('pg119_audio18')} style={{ cursor: 'pointer' }}>What about you?</span>
                        </p>
                        <p>
                            <span onClick={() => playAudio('pg119_audio19')} style={{ cursor: 'pointer' }}>
                                John: My routine is similar.
                            </span>{" "}
                            <span onClick={() => playAudio('pg119_audio20')} style={{ cursor: 'pointer' }}>
                                I wake up at 7 a.m., have breakfast, and drive to work.
                            </span>{" "}
                            <span onClick={() => playAudio('pg119_audio21')} style={{ cursor: 'pointer' }}>
                                I work until 6 p.m. In the evenings, I like to cook dinner and read a book before going to bed.
                            </span>
                        </p>
                    </div>
                    <div className={styles["page119__frame--text--gray"]}>
                        <p onClick={() => playAudio('pg119_audio22')}
                                style={{ cursor: 'pointer' }}>
                            <span
                                className={styles["page119__title--bold"]}
                            >
                                Focus:
                            </span> Routine actions, habits, and frequency adverbs like “usually“ and “sometimes“
                        </p>
                    </div>
                    <div className={styles["page119__container--image"]}>
                        <img className={styles["page119__image"]} src={pagina118_imagem1} alt="" />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina119;