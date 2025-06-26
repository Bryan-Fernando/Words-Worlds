import React, { useRef } from 'react';

import styles from './pagina128.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_exercise_e from '../assets/audios/global_exercise_e.mp3';
import global_exercise_p from '../assets/audios/global_exercise_p.mp3';

import pg128_audio1e from '../assets/audios/pg128_audio1e.mp3';
import pg128_audio2e from '../assets/audios/pg128_audio2e.mp3';
import pg128_audio3e from '../assets/audios/pg128_audio3e.mp3';
import pg128_audio4e from '../assets/audios/pg128_audio4e.mp3';
import pg128_audio5e from '../assets/audios/pg128_audio5e.mp3';
import pg128_audio6e from '../assets/audios/pg128_audio6e.mp3';
import pg128_audio7e from '../assets/audios/pg128_audio7e.mp3';
import pg128_audio8e from '../assets/audios/pg128_audio8e.mp3';
import pg128_audio9e from '../assets/audios/pg128_audio9e.mp3';
import pg128_audio10e from '../assets/audios/pg128_audio10e.mp3';
import pg128_audio11e from '../assets/audios/pg128_audio11e.mp3';
import pg128_audio12e from '../assets/audios/pg128_audio12e.mp3';
import pg128_audio13e from '../assets/audios/pg128_audio13e.mp3';

import pg128_audio1p from '../assets/audios/pg128_audio1p.mp3';
import pg128_audio2p from '../assets/audios/pg128_audio2p.mp3';
import pg128_audio3p from '../assets/audios/pg128_audio3p.mp3';
import pg128_audio4p from '../assets/audios/pg128_audio4p.mp3';
import pg128_audio5p from '../assets/audios/pg128_audio5p.mp3';
import pg128_audio6p from '../assets/audios/pg128_audio6p.mp3';
import pg128_audio7p from '../assets/audios/pg128_audio7p.mp3';
import pg128_audio8p from '../assets/audios/pg128_audio8p.mp3';
import pg128_audio9p from '../assets/audios/pg128_audio9p.mp3';
import pg128_audio10p from '../assets/audios/pg128_audio10p.mp3';
import pg128_audio11p from '../assets/audios/pg128_audio11p.mp3';
import pg128_audio12p from '../assets/audios/pg128_audio12p.mp3';
import pg128_audio13p from '../assets/audios/pg128_audio13p.mp3';


const pagina128 = () => {
    const currentAudioRef = useRef(null);

    const audioMap = {
        global_exercise_e,
        global_exercise_p,
        pg128_audio1e,
        pg128_audio2e,
        pg128_audio3e,
        pg128_audio4e,
        pg128_audio5e,
        pg128_audio6e,
        pg128_audio7e,
        pg128_audio8e,
        pg128_audio9e,
        pg128_audio10e,
        pg128_audio11e,
        pg128_audio12e,
        pg128_audio13e,
        pg128_audio1p,
        pg128_audio2p,
        pg128_audio3p,
        pg128_audio4p,
        pg128_audio5p,
        pg128_audio6p,
        pg128_audio7p,
        pg128_audio8p,
        pg128_audio9p,
        pg128_audio10p,
        pg128_audio11p,
        pg128_audio12p,
        pg128_audio13p
    };

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            currentAudioRef.current = audio;
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };


    return (
        <div>
            <div className={styles["page128__container"]}>
                <header className={styles["page128__header"]}>
                    <h1 className={styles["page128__title"]}>
                        Exercises
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page128__audio-icon"]}
                            onClick={() => playAudio('global_exercise_e')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page128__audio-icon"]}
                            onClick={() => playAudio('global_exercise_p')}
                        />
                    </h1>
                </header>
                <main className={styles["page128__main"]}>
                    <div className={styles["page128__main-container"]}>
                        <div className={styles["page128__text-container1"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                <span>
                                    Dialogue 1 – <span className={styles["page128__titulo-red"]}>Ordering at a Café</span>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                <span>
                                    Waiter: Hello! What would you like to drink?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio2p")}
                                    />
                                </span>

                                <span>
                                    <br /> <span className={styles["page128__paragraph-red"]}>Emma: I would like a lemonade, please.</span>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio3p")}
                                    />
                                </span>

                                <span>
                                    <br /> Waiter: And to eat?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio4p")}
                                    />
                                </span>

                                <span>
                                    <br /> <span className={styles["page128__paragraph-red"]}>Emma: I would like a sandwich.</span>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio5p")}
                                    />
                                </span>

                                <span>
                                    <br /> Waiter: Great! Anything else?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio6p")}
                                    />
                                </span>

                                <span>
                                    <br /> <span className={styles["page128__paragraph-red"]}>Emma: No, thank you.</span>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio7e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio7p")}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className={styles["page128__main-container"]}>
                        <div className={styles["page128__text-container2"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                <span>
                                    Dialogue 2 – <span className={styles["page128__titulo-red"]}>Making a Polite Request</span>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio8e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio8p")}
                                    />
                                </span>
                            </p>
                            <p>
                                <span>
                                    Liam: Hi, Anna! Would you like to play soccer?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio9e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio9p")}
                                    />
                                </span>

                                <span>
                                    <br /> <span className={styles["page128__paragraph-red"]}>Anna: Yes! I would love to play.</span>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio10e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio10p")}
                                    />
                                </span>

                                <span>
                                    <br /> Liam: Great! Let's go to the park.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio11e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio11p")}
                                    />
                                </span>

                                <span>
                                    <br /> <span className={styles["page128__paragraph-red"]}>Anna: Sure! But first, would you help me carry my bag?</span>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio12e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio12p")}
                                    />
                                </span>

                                <span>
                                    <br /> Liam: Of course!
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio13e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg128_audio13p")}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default pagina128;

