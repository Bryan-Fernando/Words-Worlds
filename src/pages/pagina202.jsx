import React, { useRef } from 'react';
import styles from './pagina202.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg202_audio1e.mp3';
import audio2e from '../assets/audios/pg202_audio2e.mp3';
import audio3e from '../assets/audios/pg202_audio3e.mp3';
import audio4e from '../assets/audios/pg202_audio4e.mp3';

const Pagina202 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg202_audio1e: audio1e,
            pg202_audio2e: audio2e,
            pg202_audio3e: audio3e,
            pg202_audio4e: audio4e,
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
        <div className={styles.page202__container}>
            <div className={styles.page202__pageContainer}>
                <header className={styles.page202__header}>
                    <h1 className={styles.page202__headerTitle}>Examples</h1>
                </header>

                <main className={styles.page202__mainContent}>
                    <section className={styles.page202__grammarSection}>
                        <div className={styles.page202__grammarHeader}>
                            <h2 className={styles.page202__grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.page202__grammarContent}>
                            <div className={styles.page202__grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Not</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* AVAILABILITY */}
                    <section className={styles.page202__exampleSection}>
                        <div className={styles.page202__sectionHeader}>
                            <em className={styles.page202__exampleTitle}>Availability</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page202__audio_icon}
                                onClick={() => playAudio('pg202_audio1e')}
                            />
                            <span className={styles.page202__separator}>/</span>
                            <em className={styles.page202__titleTranslation}>Disponibilidade</em>
                        </div>
                        <div className={styles.page202__exampleBox}>
                            <div
                                className={styles.page202__exampleRow}
                                onClick={() => playAudio('pg202_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>They</span>
                                <span className={styles.page202__highlight}>can't</span>
                                <span>—</span>
                                <span className={styles.page202__verbCell}>come</span>
                                <span className={styles.page202__objectCell}>to the meeting</span>
                            </div>
                            <div className={styles.page202__exampleRow}>
                                <span>Eles</span>
                                <span className={styles.page202__highlight}>não podem</span>
                                <span>—</span>
                                <span className={styles.page202__verbCell}>vir</span>
                                <span className={styles.page202__objectCell}>à reunião</span>
                            </div>
                        </div>
                    </section>

                    {/* REQUESTS */}
                    <section className={styles.page202__exampleSection}>
                        <div className={styles.page202__sectionHeader}>
                            <em className={styles.page202__exampleTitle}>Requests</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page202__audio_icon}
                                onClick={() => playAudio('pg202_audio3e')}
                            />
                            <span className={styles.page202__separator}>/</span>
                            <em className={styles.page202__titleTranslation}>Solicitações ou Pedidos</em>
                            <span className={styles.page202__separator}>(</span>
                            <em className={styles.page202__exampleTitle}>Recusados</em>
                            <span className={styles.page202__separator}>)</span>
                        </div>
                        <div className={styles.page202__exampleBox}>
                            <div
                                className={styles.page202__exampleRow}
                                onClick={() => playAudio('pg202_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>We</span>
                                <span className={styles.page202__highlight}>can't</span>
                                <span>—</span>
                                <span className={styles.page202__verbCell}>help</span>
                                <span className={styles.page202__objectCell}>you right now</span>
                            </div>
                            <div className={styles.page202__exampleRow}>
                                <span>Nós</span>
                                <span className={styles.page202__highlight}>não podemos</span>
                                <span>—</span>
                                <span className={styles.page202__verbCell}>te ajudar</span>
                                <span className={styles.page202__objectCell}>agora</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.page202__imagesSection}>
                        <div className={styles.page202__imagePlaceholder}></div>
                        <div className={styles.page202__imagePlaceholder}></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina202;
