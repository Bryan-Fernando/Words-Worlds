import React, { useRef } from 'react';
import styles from './pagina205.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg205_audio1e.mp3';
import audio2e from '../assets/audios/pg205_audio2e.mp3';
import audio3e from '../assets/audios/pg205_audio3e.mp3';
import audio4e from '../assets/audios/pg205_audio4e.mp3';

const Pagina205 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg205_audio1e: audio1e,
            pg205_audio2e: audio2e,
            pg205_audio3e: audio3e,
            pg205_audio4e: audio4e,
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
                                <span>Verb</span>
                                <span>Adv</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* PERMISSION */}
                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Permission</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page205__audio_icon}
                                onClick={() => playAudio('pg205_audio1e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Permissão</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg205_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>we</span>
                                <span>—</span>
                                <span className={styles.verbCell}>leave</span>
                                <span className={styles.objectCell}>early today?</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Nós</span>
                                <span>podemos</span>
                                <span>—</span>
                                <span className={styles.verbCell}>sair</span>
                                <span className={styles.objectCell}>mais cedo hoje?</span>
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
                                className={styles.page205__audio_icon}
                                onClick={() => playAudio('pg205_audio3e')}
                            />
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Sugestões</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div
                                className={styles.exampleRow}
                                onClick={() => playAudio('pg205_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>I</span>
                                <span>—</span>
                                <span className={styles.verbCell}>give</span>
                                <span className={styles.objectCell}>you some advice?</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Eu</span>
                                <span>posso</span>
                                <span>—</span>
                                <span className={styles.verbCell}>te dar</span>
                                <span className={styles.objectCell}>um conselho?</span>
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

export default Pagina205;
