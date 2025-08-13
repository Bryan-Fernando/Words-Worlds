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
        <div className={styles.page206__container}>
            <div className={styles.page206__pageContainer}>
                <header className={styles.page206__header}>
                    <h1 className={styles.page206__headerTitle}>Grammar</h1>
                </header>

                <main className={styles.page206__mainContent}>
                    <section className={styles.page206__grammarIntro}>
                        <div className={styles.page206__modalVerb}>
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

                        <div className={styles.page206__tenseBox}>
                            <p><strong>Simple Present - </strong>Presente do Indicativo</p>
                        </div>

                        <div
                            className={styles.page206__explanationBox}
                        >
                            <p>
                                <span>Can</span> é um verbo auxiliar ou modal que significa <strong>poder, saber ou conseguir</strong> e só pode ser usado / conjugado no presente simples.
                            </p>
                        </div>
                    </section>

                    <section className={styles.page206__grammarSection}>
                        <div className={styles.page206__grammarHeader}>
                            <h2 className={styles.page206__grammarTitle}>Affirmative Form</h2>
                        </div>
                        <div className={styles.page206__grammarContent}>
                            <div className={styles.page206__grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section
                        className={styles.page206__translationSection}
                        onClick={() => playAudio('pg206_audio2e')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.page206__translationContent}>
                            <div className={styles.page206__translationColumn}>
                                <span className={`${styles.page206__translationItem} ${styles.page206__red}`}>I</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>Eu</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>Eu</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>Eu</span>
                            </div>
                            <div className={styles.page206__translationColumn}>
                                <span className={`${styles.page206__translationItem} ${styles.page206__red}`}>can</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>sei</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>posso</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>consigo</span>
                            </div>
                            <div className={styles.page206__translationColumn}>
                                <span className={`${styles.page206__translationItem} ${styles.page206__red}`}>—</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>—</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>—</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>—</span>
                            </div>
                            <div className={styles.page206__translationColumn}>
                                <span className={`${styles.page206__translationItem} ${styles.page206__red}`}>play</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>tocar</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>tocar</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>tocar</span>
                            </div>
                            <div className={styles.page206__translationColumn}>
                                <span className={`${styles.page206__translationItem} ${styles.page206__red}`}>the piano</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>piano</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>piano</span>
                                <span className={`${styles.page206__translationItem} ${styles.page206__black}`}>piano</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.page206__tableContent}>
                        <div className={styles.page206__tableGroup}>
                            {/* He */}
                            <div
                                className={styles.page206__tableRow}
                                onClick={() => playAudio('pg206_audio3e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>He</span>
                                    <span className={styles.page206__pg213Black}>Ele</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>can</span>
                                    <span className={styles.page206__pg213Black}>pode</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Dash}>—</span>
                                    <span className={styles.page206__pg213Dash}>—</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>stay</span>
                                    <span className={styles.page206__pg213Black}>ficar</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>at Danny's</span>
                                    <span className={styles.page206__pg213Black}>na casa do Danny</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.page206__tableGroup}>
                            {/* She */}
                            <div className={styles.page206__tableRow}
                                onClick={() => playAudio('pg206_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >

                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>She</span>
                                    <span className={styles.page206__pg213Black}>Ela</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>can</span>
                                    <span className={styles.page206__pg213Black}>sabe</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Dash}>—</span>
                                    <span className={styles.page206__pg213Dash}>—</span>
                                  
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>speak</span>
                                    <span className={styles.page206__pg213Black}>falar</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>three languages</span>
                                    <span className={styles.page206__pg213Black}>três idiomas</span>
                                </div>
                            </div>

                            {/* Traduções She */}
                            <div className={styles.page206__tableRow}>
                                <div className={styles.page206__pg213Cell}><span className={styles.page206__pg213Black}>Ela</span></div>
                                <div className={styles.page206__pg213Cell}><span className={styles.page206__pg213Black}>pode</span></div>
                                <div className={styles.page206__pg213Cell}><span className={styles.page206__pg213Dash}>—</span></div>
                                <div className={styles.page206__pg213Cell}><span className={styles.page206__pg213Black}>falar</span></div>
                                <div className={styles.page206__pg213Cell}><span className={styles.page206__pg213Black}>três idiomas</span></div>
                            </div>
                            <div className={styles.page206__tableRow}>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Black}>Ela</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Black}>consegue</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Dash}>—</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Black}>falar</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Black}>três idiomas</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.page206__tableGroup}>
                            {/* It */}
                            <div
                                className={styles.page206__tableRow}
                                onClick={() => playAudio('pg206_audio5e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>It</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>can</span>
                                    <span className={styles.page206__pg213Black}>pode</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Dash}>—</span>
                                    <span className={styles.page206__pg213Dash}>—</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>be</span>
                                    <span className={styles.page206__pg213Black}>ser</span>
                                </div>
                                <div className={styles.page206__pg213Cell}>
                                    <span className={styles.page206__pg213Red}>dangerous</span>
                                    <span className={styles.page206__pg213Black}>perigoso</span>
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
