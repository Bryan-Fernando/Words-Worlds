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
        <div className={styles.page204__container}>
            <div className={styles.page204__pageContainer}>
                <header className={styles.page204__header}>
                    <h1 className={styles.page204__headerTitle}>Examples</h1>
                </header>

                <main className={styles.page204__mainContent}>
                    <section className={styles.page204__grammarSection}>
                        <div className={styles.page204__grammarHeader}>
                            <h2 className={styles.page204__grammarTitle}>Interrogative Form</h2>
                        </div>
                        <div className={styles.page204__grammarContent}>
                            <div className={styles.page204__grammarRow}>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* REQUESTS */}
                    <section className={styles.page204__exampleSection}>
                        <div className={styles.page204__sectionHeader}>
                            <em className={styles.page204__exampleTitle}>Requests</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page204__audio_icon}
                                onClick={() => playAudio('pg204_audio1e')}
                            />
                            <span className={styles.page204__separator}>/</span>
                            <em className={styles.page204__titleTranslation}>Solicitações ou Pedidos</em>
                        </div>
                        <div className={styles.page204__exampleBox}>
                            <div
                                className={styles.page204__exampleRow}
                                onClick={() => playAudio('pg204_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>you</span>
                                <span>—</span>
                                <span className={styles.page204__verbCell}>help</span>
                                <span>me with this project?</span>

                            </div>
                            <div className={styles.page204__exampleRow}>
                                <span>Você</span>
                                <span>pode</span>
                                <span>—</span>
                                <span className={styles.page204__verbCell}>me ajudar</span>
                                <span>com este projeto?</span>

                            </div>
                        </div>
                    </section>

                    {/* ABILITY */}
                    <section className={styles.page204__exampleSection}>
                        <div className={styles.page204__sectionHeader}>
                            <em className={styles.page204__exampleTitle}>Ability</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page204__audio_icon}
                                onClick={() => playAudio('pg204_audio3e')}
                            />
                            <span className={styles.page204__separator}>/</span>
                            <em className={styles.page204__titleTranslation}>Habilidade</em>
                        </div>
                        <div className={styles.page204__exampleBox}>
                            <div
                                className={styles.page204__exampleRow}
                                onClick={() => playAudio('pg204_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>she</span>
                                <span>—</span>
                                <span className={styles.page204__verbCell}>drive</span>
                                <span>a car?</span>

                            </div>
                            <div className={styles.page204__exampleRow}>
                                <span>Ela</span>
                                <span>sabe</span>
                                <span>—</span>
                                <span className={styles.page204__verbCell}>dirigir</span>
                                <span>um carro?</span>

                            </div>
                        </div>
                    </section>

                    <section className={styles.page204__imagesSection}>
                        <div className={styles.page204__imagePlaceholder}></div>
                        <div className={styles.page204__imagePlaceholder}></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina204;
