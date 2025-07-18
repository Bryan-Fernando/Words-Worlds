import React, { useRef } from 'react';
import styles from './pagina208.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg208_audio1e.mp3';
import audio2e from '../assets/audios/pg208_audio2e.mp3';
import audio3e from '../assets/audios/pg208_audio3e.mp3';
import audio4e from '../assets/audios/pg208_audio4e.mp3';
import audio5e from '../assets/audios/pg208_audio5e.mp3';

const Pagina208 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg208_audio1e: audio1e,
            pg208_audio2e: audio2e,
            pg208_audio3e: audio3e,
            pg208_audio4e: audio4e,
            pg208_audio5e: audio5e,
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
                    <h1 className={styles.headerTitle}>Grammar</h1>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.grammarIntro}>
                        <div className={styles.modalVerb}>
                            <h2>
                                <span>Can</span>
                                <span> - Modal Verb</span>
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio icon"
                                    className={styles.page208__audio_icon}
                                    onClick={() => playAudio('pg208_audio1e')}
                                />
                            </h2>
                            <p><span>Can</span><span> - Verbo Modal</span></p>
                        </div>
                    </section>

                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span className={styles.redNot}>not</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section
                        className={styles.translationSection}
                        onClick={() => playAudio('pg208_audio2e')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.translationContent}>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>I</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>can't</span>
                                <span className={styles.blueText}>não <span className={`${styles.translationItem} ${styles.black}`}>sei</span></span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>drive</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>dirigir</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>a car</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>um carro</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg208_audio3e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>He</span>
                                    <span className={styles.pg213Black}>Ele</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>sabe</span></span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>cook</span>
                                    <span className={styles.pg213Black}>cozinhar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>italian food</span>
                                    <span className={styles.pg213Black}>comida italiana</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg208_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>She</span>
                                    <span className={styles.pg213Black}>Ela</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>sabe</span></span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>consegue</span></span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>swim</span>
                                    <span className={styles.pg213Black}>nadar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>very well</span>
                                    <span className={styles.pg213Black}>muito bem</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg208_audio5e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>It</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>pode</span></span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>consegue</span></span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>work</span>
                                    <span className={styles.pg213Black}>funcionar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>without batteries</span>
                                    <span className={styles.pg213Black}>sem pilhas</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className={styles.noteBox}>
                        <div className={styles.noteTitle}>Nota</div>
                        <div className={styles.noteContent}>
                            <div className={styles.noteRow}>
                                <span>Full Form</span>
                                <span>Contracted Form</span>
                            </div>
                            <div className={styles.noteFormula}>
                                <span>Can + not = Can’t</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina208;
