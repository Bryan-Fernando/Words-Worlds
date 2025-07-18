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
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Examples</h1>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Affirmative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* CAPACITY */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Capacity</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page201__audio_icon}
                                onClick={() => playAudio('pg201_audio1e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Capacidade</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg201_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>this car</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>seat</span>
                                <span className={styles.objectCell}>five people</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Esse carro</span>
                                <span className={styles.highlight}>pode consegue</span>
                                <span>—</span>
                                <span className={styles.verbCell}>acomodar</span>
                                <span className={styles.objectCell}>cinco pessoas</span>
                            </div>
                        </div>
                    </section>

                    {/* KNOWLEDGE */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Knowledge</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page201__audio_icon}
                                onClick={() => playAudio('pg201_audio3e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Conhecimento</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg201_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>He</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>solve</span>
                                <span className={styles.objectCell}>complex math problems</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Ele</span>
                                <span className={styles.highlight}>pode <br />consegue <br />sabe</span>
                                <span>—</span>
                                <span className={styles.verbCell}>solucionar / resolver</span>
                                <span className={styles.objectCell}>problemas matematicos complexos</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.imagesSection}>
                        <div className={styles.imagePlaceholder}></div>
                        <div className={styles.imagePlaceholder}></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina201;
