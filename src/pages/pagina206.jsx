import React, { useRef } from 'react';
import styles from './pagina206.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg206_audio1e.mp3';
import audio2e from '../assets/audios/pg206_audio2e.mp3';
import audio3e from '../assets/audios/pg206_audio3e.mp3';
import audio4e from '../assets/audios/pg206_audio4e.mp3';
import audio5e from '../assets/audios/pg206_audio5e.mp3';

const Pagina206 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg206_audio1e: audio1e,
            pg206_audio2e: audio2e,
            pg206_audio3e: audio3e,
            pg206_audio4e: audio4e,
            pg206_audio5e: audio5e,
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
                                    className={styles.page206__audio_icon}
                                    onClick={() => playAudio('pg206_audio1e')}
                                />
                            </h2>
                            <p><span>Can</span><span> - Verbo Modal</span></p>
                        </div>

                        <div className={styles.tenseBox}>
                            <p><strong>Simple Present - </strong>Presente do Indicativo</p>
                        </div>

                        <div
                            className={styles.explanationBox}
                        >
                            <p>
                                <span>Can</span> é um verbo auxiliar ou modal que significa <strong>poder, saber ou conseguir</strong> e só pode ser usado / conjugado no presente simples.
                            </p>
                        </div>
                    </section>

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

                    <section
                        className={styles.translationSection}
                        onClick={() => playAudio('pg206_audio2e')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.translationContent}>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>I</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>can</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>sei</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>posso</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>consigo</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>play</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>tocar</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>tocar</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>tocar</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>the piano</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>piano</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>piano</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>piano</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            {/* He */}
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg206_audio3e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>He</span>
                                    <span className={styles.pg213Black}>Ele</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>pode</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>stay</span>
                                    <span className={styles.pg213Black}>ficar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>at Danny's</span>
                                    <span className={styles.pg213Black}>na casa do Danny</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* She */}
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg206_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>She</span>
                                    <span className={styles.pg213Black}>Ela</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>sabe</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>speak</span>
                                    <span className={styles.pg213Black}>falar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>three languages</span>
                                    <span className={styles.pg213Black}>três idiomas</span>
                                </div>
                            </div>

                            {/* Traduções She */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>Ela</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>pode</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Dash}>—</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>falar</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>três idiomas</span></div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>Ela</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>consegue</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Dash}>—</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>falar</span></div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Black}>três idiomas</span></div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* It */}
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg206_audio5e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>It</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>pode</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>be</span>
                                    <span className={styles.pg213Black}>ser</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>dangerous</span>
                                    <span className={styles.pg213Black}>perigoso</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina206;
