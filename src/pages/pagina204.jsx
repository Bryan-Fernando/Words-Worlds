import React, { useRef } from 'react';
import styles from './pagina204.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg204_audio1e.mp3';
import audio2e from '../assets/audios/pg204_audio2e.mp3';
import audio3e from '../assets/audios/pg204_audio3e.mp3';
import audio4e from '../assets/audios/pg204_audio4e.mp3';

const Pagina204 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg204_audio1e: audio1e,
            pg204_audio2e: audio2e,
            pg204_audio3e: audio3e,
            pg204_audio4e: audio4e,
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
                            <h2 className={styles.grammarTitle}>Interrogative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* REQUESTS */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Requests</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page204__audio_icon}
                                onClick={() => playAudio('pg204_audio1e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Solicitações ou Pedidos</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg204_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>you</span>
                                <span>—</span>
                                <span className={styles.verbCell}>help</span>
                                <span>me with this project?</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span>pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>me ajudar</span>
                                <span>com este projeto?</span>
                            </div>
                        </div>
                    </section>

                    {/* ABILITY */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Ability</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page204__audio_icon}
                                onClick={() => playAudio('pg204_audio3e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Habilidade</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg204_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>she</span>
                                <span>—</span>
                                <span className={styles.verbCell}>drive</span>
                                <span>a car?</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Ela</span>
                                <span>sabe</span>
                                <span>—</span>
                                <span className={styles.verbCell}>dirigir</span>
                                <span>um carro?</span>
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

export default Pagina204;
