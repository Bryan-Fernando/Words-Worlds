import React, { useRef } from 'react';
import styles from './pagina200.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg200_audio1e.mp3';
import audio2e from '../assets/audios/pg200_audio2e.mp3';
import audio3e from '../assets/audios/pg200_audio3e.mp3';
import audio4e from '../assets/audios/pg200_audio4e.mp3';

const Pagina200 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg200_audio1e: audio1e,
            pg200_audio2e: audio2e,
            pg200_audio3e: audio3e,
            pg200_audio4e: audio4e,
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

                    {/* ADVICE */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Advice</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page200__audio_icon}
                                onClick={() => playAudio('pg200_audio1e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Conselho</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg200_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>You</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>talk</span>
                                <span className={styles.objectCell}>to a doctor about your symptoms</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>falar</span>
                                <span className={styles.objectCell}>com um médico sobre seus sintomas</span>
                            </div>
                        </div>
                    </section>

                    {/* SUGGESTIONS */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Suggestions</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page200__audio_icon}
                                onClick={() => playAudio('pg200_audio3e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Sugestões</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg200_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>You</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>take</span>
                                <span className={styles.objectCell}>a different route to avoid traffic</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>pegar</span>
                                <span className={styles.objectCell}>um caminho diferente para evitar o trânsito</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.imagesSection}>
                        <div className={styles.imagePlaceholder} />
                        <div className={styles.imagePlaceholder} />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina200;
