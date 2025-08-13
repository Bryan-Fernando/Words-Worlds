import React, { useRef } from 'react';
import styles from './pagina201.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg201_audio1e.mp3';
import audio2e from '../assets/audios/pg201_audio2e.mp3';
import audio3e from '../assets/audios/pg201_audio3e.mp3';
import audio4e from '../assets/audios/pg201_audio4e.mp3';

const Pagina201 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg201_audio1e: audio1e,
            pg201_audio2e: audio2e,
            pg201_audio3e: audio3e,
            pg201_audio4e: audio4e,
        };

        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }

        const audio = new Audio(audioMap[audioId]);
        currentAudio.current = audio;
        audio.play();
    };

    return (
        <div className={styles.page201__container}>
            <div className={styles.page201__pageContainer}>
                <header className={styles.page201__header}>
                    <h1 className={styles.page201__headerTitle}>Examples</h1>
                </header>

                <main className={styles.page201__mainContent}>
                    <section className={styles.page201__grammarSection}>
                        <div className={styles.page201__grammarHeader}>
                            <h2 className={styles.page201__grammarTitle}>Affirmative Form</h2>
                        </div>
                        <div className={styles.page201__grammarContent}>
                            <div className={styles.page201__grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* CAPACITY */}
                    <section className={styles.page201__exampleSection}>
                        <div className={styles.page201__sectionHeader}>
                            <em className={styles.page201__exampleTitle}>Capacity</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page201__audio_icon}
                                onClick={() => playAudio('pg201_audio1e')}
                            />
                            <span className={styles.page201__separator}>/</span>
                            <em className={styles.page201__titleTranslation}>Capacidade</em>
                        </div>
                        <div className={styles.page201__exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg201_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>this car</span>
                                <span className={styles.page201__highlight}>can</span>
                                <span>—</span>
                                <span className={styles.page201__verbCell}>seat</span>
                                <span className={styles.page201__objectCell}>five people</span>
                            </div>
                            <div className={styles.page201__exampleRow}>
                                <span>Esse carro</span>
                                <span className={styles.page201__highlight}>pode consegue</span>
                                <span>—</span>
                                <span className={styles.page201__verbCell}>acomodar</span>
                                <span className={styles.page201__objectCell}>cinco pessoas</span>
                            </div>
                        </div>
                    </section>

                    {/* KNOWLEDGE */}
                    <section className={styles.page201__exampleSection}>
                        <div className={styles.page201__sectionHeader}>
                            <em className={styles.page201__exampleTitle}>Knowledge</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page201__audio_icon}
                                onClick={() => playAudio('pg201_audio3e')}
                            />
                            <span className={styles.page201__separator}>/</span>
                            <em className={styles.page201__titleTranslation}>Conhecimento</em>
                        </div>
                        <div className={styles.page201__exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg201_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>He</span>
                                <span className={styles.page201__highlight}>can</span>
                                <span>—</span>
                                <span className={styles.page201__verbCell}>solve</span>
                                <span className={styles.page201__objectCell}>complex math problems</span>
                            </div>
                            <div className={styles.page201__exampleRow}>
                                <span>Ele</span>
                                <span className={styles.page201__highlight}>pode <br />consegue <br />sabe</span>
                                <span>—</span>
                                <span className={styles.page201__verbCell}>solucionar / resolver</span>
                                <span className={styles.page201__objectCell}>problemas matematicos complexos</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.page201__imagesSection}>
                        <div className={styles.page201__imagePlaceholder}></div>
                        <div className={styles.page201__imagePlaceholder}></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina201;
