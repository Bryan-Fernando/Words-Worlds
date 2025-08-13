import React, { useRef } from 'react';
import styles from './pagina203.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg203_audio1e.mp3';
import audio2e from '../assets/audios/pg203_audio2e.mp3';
import audio3e from '../assets/audios/pg203_audio3e.mp3';
import audio4e from '../assets/audios/pg203_audio4e.mp3';

const Pagina203 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg203_audio1e: audio1e,
            pg203_audio2e: audio2e,
            pg203_audio3e: audio3e,
            pg203_audio4e: audio4e,
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
        <div className={styles.page203__container}>
            <div className={styles.page203__pageContainer}>
                <header className={styles.page203__header}>
                    <h1 className={styles.page203__headerTitle}>Examples</h1>
                </header>

                <main className={styles.page203__mainContent}>
                    <section className={styles.page203__grammarSection}>
                        <div className={styles.page203__grammarHeader}>
                            <h2 className={styles.page203__grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.page203__grammarContent}>
                            <div className={styles.page203__grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Not</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* PROHIBITION */}
                    <section className={styles.page203__exampleSection}>
                        <div className={styles.page203__sectionHeader}>
                            <em className={styles.page203__exampleTitle}>Prohibition</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page203__audio_icon}
                                onClick={() => playAudio('pg203_audio1e')}
                            />
                            <span className={styles.page203__separator}>/</span>
                            <em className={styles.page203__titleTranslation}>Proibição</em>
                        </div>
                        <div className={styles.page203__exampleBox}>
                            <div
                                className={styles.page203__exampleRow}
                                onClick={() => playAudio('pg203_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>You</span>
                                <span className={styles.page203__highlight}>can't</span>
                                <span>—</span>
                                <span className={styles.page203__verbCell}>park</span>
                                <span className={styles.page203__objectCell}>here</span>
                            </div>
                            <div className={styles.page203__exampleRow}>
                                <span>Você</span>
                                <span className={styles.page203__highlight}>não pode</span>
                                <span>—</span>
                                <span className={styles.page203__verbCell}>estacionar</span>
                                <span className={styles.page203__objectCell}>aqui</span>
                            </div>
                        </div>
                    </section>

                    {/* ADVICE */}
                    <section className={`${styles.page203__exampleSection} ${styles.page203__fiveColumnSection}`}>
                        <div className={styles.page203__sectionHeader}>
                            <em className={styles.page203__exampleTitle}>Advice</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page203__audio_icon}
                                onClick={() => playAudio('pg203_audio3e')}
                            />
                            <span className={styles.page203__separator}>/</span>
                            <em className={styles.page203__titleTranslation}>Conselho</em>
                        </div>
                        <div className={styles.page203__exampleBox}>
                            <div
                                className={styles.page203__exampleRow}
                                onClick={() => playAudio('pg203_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>You</span>
                                <span className={styles.page203__highlight}>can't</span>
                                <span className={styles.page203__highlight}>always</span>
                                <span className={styles.page203__verbCell}>get want</span>
                                <span className={styles.page203__objectCell}>what you</span>
                            </div>
                            <div className={styles.page203__exampleRow}>
                                <span>Você</span>
                                <span className={styles.page203__highlight}>nem</span>
                                <span className={styles.page203__highlight}>sempre</span>
                                <span className={styles.page203__verbCell}>pode conseguir quer</span>
                                <span className={styles.page203__objectCell}>o que você</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.page203__imagesSection}>
                        <div className={styles.page203__imagePlaceholder}></div>
                        <div className={styles.page203__imagePlaceholder}></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina203;
