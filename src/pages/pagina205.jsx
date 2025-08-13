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
        <div className={styles.page205__container}>
            <div className={styles.page205__pageContainer}>
                <header className={styles.page205__header}>
                    <h1 className={styles.page205__headerTitle}>Examples</h1>
                </header>

                <main className={styles.page205__mainContent}>
                    <section className={styles.page205__grammarSection}>
                        <div className={styles.page205__grammarHeader}>
                            <h2 className={styles.page205__grammarTitle}>Interrogative Form</h2>
                        </div>
                        <div className={styles.page205__grammarContent}>
                            <div className={styles.page205__grammarRow}>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Verb</span>
                                <span>Adv</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* PERMISSION */}
                    <section className={styles.page205__exampleSection}>
                        <div className={styles.page205__sectionHeader}>
                            <em className={styles.page205__exampleTitle}>Permission</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page205__audio_icon}
                                onClick={() => playAudio('pg205_audio1e')}
                            />
                            <span className={styles.page205__separator}>/</span>
                            <em className={styles.page205__titleTranslation}>Permissão</em>
                        </div>
                        <div className={styles.page205__exampleBox}>
                            <div
                                className={styles.page205__exampleRow}
                                onClick={() => playAudio('pg205_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>we</span>
                                <span>—</span>
                                <span className={styles.page205__verbCell}>leave</span>
                                <span className={styles.page205__objectCell}>early today?</span>
                            </div>
                            <div className={styles.page205__exampleRow}>
                                <span>Nós</span>
                                <span>podemos</span>
                                <span>—</span>
                                <span className={styles.page205__verbCell}>sair</span>
                                <span className={styles.page205__objectCell}>mais cedo hoje?</span>
                            </div>
                        </div>
                    </section>

                    {/* SUGGESTIONS */}
                    <section className={styles.page205__exampleSection}>
                        <div className={styles.page205__sectionHeader}>
                            <em className={styles.page205__exampleTitle}>Suggestions</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page205__audio_icon}
                                onClick={() => playAudio('pg205_audio3e')}
                            />
                            <span className={styles.page205__separator}>/</span>
                            <em className={styles.page205__titleTranslation}>Sugestões</em>
                        </div>
                        <div className={styles.page205__exampleBox}>
                            <div
                                className={styles.page205__exampleRow}
                                onClick={() => playAudio('pg205_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Can</span>
                                <span>I</span>
                                <span>—</span>
                                <span className={styles.page205__verbCell}>give</span>
                                <span className={styles.page205__objectCell}>you some advice?</span>
                            </div>
                            <div className={styles.page205__exampleRow}>
                                <span>Eu</span>
                                <span>posso</span>
                                <span>—</span>
                                <span className={styles.page205__verbCell}>te dar</span>
                                <span className={styles.page205__objectCell}>um conselho?</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.page205__imagesSection}>
                        <div className={styles.page205__imagePlaceholder}></div>
                        <div className={styles.page205__imagePlaceholder}></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina205;