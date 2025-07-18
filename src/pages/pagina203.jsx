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
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Examples</h1>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Not</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* PROHIBITION */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Prohibition</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page203__audio_icon}
                                onClick={() => playAudio('pg203_audio1e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Proibição</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg203_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>You</span>
                                <span className={styles.highlight}>can't</span>
                                <span>—</span>
                                <span className={styles.verbCell}>park</span>
                                <span className={styles.objectCell}>here</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>não pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>estacionar</span>
                                <span className={styles.objectCell}>aqui</span>
                            </div>
                        </div>
                    </section>

                    {/* ADVICE */}
                    <section className={`${styles.exampleSection} ${styles.fiveColumnSection}`}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Advice</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page203__audio_icon}
                                onClick={() => playAudio('pg203_audio3e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Conselho</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg203_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>You</span>
                                <span className={styles.highlight}>can't</span>
                                <span className={styles.highlight}>always</span>
                                <span className={styles.verbCell}>get</span>
                                <span className={styles.objectCell}>what you want</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>nem</span>
                                <span className={styles.highlight}>sempre</span>
                                <span className={styles.verbCell}>pode conseguir quer</span>
                                <span className={styles.objectCell}>o que você</span>
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

export default Pagina203;
