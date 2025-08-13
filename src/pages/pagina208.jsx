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
        <div className={styles.page208__container}>
            <div className={styles.page208__pageContainer}>
                <header className={styles.page208__header}>
                    <h1 className={styles.page208__headerTitle}>Grammar</h1>
                </header>

                <main className={styles.page208__mainContent}>
                    <section className={styles.page208__grammarIntro}>
                        <div className={styles.page208__modalVerb}>
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

                    <section className={styles.page208__grammarSection}>
                        <div className={styles.page208__grammarHeader}>
                            <h2 className={styles.page208__grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.page208__grammarContent}>
                            <div className={styles.page208__grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span className={styles.page208__redNot}>not</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section
                        className={styles.page208__translationSection}
                        onClick={() => playAudio('pg208_audio2e')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.page208__translationContent}>
                            <div className={styles.page208__translationColumn}>
                                <span className={`${styles.page208__translationItem} ${styles.page208__red}`}>I</span>
                                <span className={`${styles.page208__translationItem} ${styles.page208__black}`}>Eu</span>
                            </div>
                            <div className={styles.page208__translationColumn}>
                                <span className={`${styles.page208__translationItem} ${styles.page208__red}`}>can't</span>
                                <span className={styles.page208__blueText}>não <span className={`${styles.page208__translationItem} ${styles.page208__black}`}>sei</span></span>
                                
                            </div>
                            <div className={styles.page208__translationColumn}>
                                <span className={`${styles.page208__translationItem} ${styles.page208__red}`}>—</span>
                                <span className={`${styles.page208__translationItem} ${styles.page208__black}`}>—</span>
                            </div>
                            <div className={styles.page208__translationColumn}>
                                <span className={`${styles.page208__translationItem} ${styles.page208__red}`}>drive</span>
                                <span className={`${styles.page208__translationItem} ${styles.page208__black}`}>dirigir</span>
                            </div>
                            <div className={styles.page208__translationColumn}>
                                <span className={`${styles.page208__translationItem} ${styles.page208__red}`}>a car</span>
                                <span className={`${styles.page208__translationItem} ${styles.page208__black}`}>um carro</span>


                            </div>
                        </div>
                    </section>

                    <section className={styles.page208__tableContent}>
                        <div className={styles.page208__tableGroup}>
                            <div
                                className={styles.page208__tableRow}
                                onClick={() => playAudio('pg208_audio3e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>He</span>
                                    <span className={styles.page208__pg213Black}>Ele</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>can't</span>                              
                                    <span className={styles.page208__blueText}>não <span className={styles.page208__pg213Black}> sabe</span></span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Dash}>—</span>
                                    <span className={styles.page208__pg213Dash}>—</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>cook</span>
                                    <span className={styles.page208__pg213Black}>cozinhar</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>italian food</span>
                                    <span className={styles.page208__pg213Black}>comida italiana.</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.page208__tableGroup}>
                            <div
                                className={styles.page208__tableRow}
                                onClick={() => playAudio('pg208_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>She</span>
                                    <span className={styles.page208__pg213Black}>Ela</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>can't</span>
                                    <span className={styles.page208__blueText}>não <span className={styles.page208__pg213Black}> sabe</span></span>
                                    <span className={styles.page208__blueText}>não <span className={styles.page208__pg213Black}> consegue</span></span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Dash}>—</span>
                                    <span className={styles.page208__pg213Dash}>—</span>
                                    <span className={styles.page208__pg213Dash}>—</span>

                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>swim</span>
                                    <span className={styles.page208__pg213Black}>nadar</span>
                                    <span className={styles.page208__pg213Black}>nadar</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>very well</span>
                                    <span className={styles.page208__pg213Black}>muito bom</span>
                                    <span className={styles.page208__pg213Black}>muito bom</span>
                                </div>




                            </div>


                        </div>

                        <div className={styles.page208__tableGroup}>
                            <div
                                className={styles.page208__tableRow}
                                onClick={() => playAudio('pg208_audio5e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>It</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>can't</span>
                                    <span className={styles.page208__blueText}>não <span className={styles.page208__pg213Black}> pode</span></span>
                                    <span className={styles.page208__blueText}>não <span className={styles.page208__pg213Black}> consegue</span></span>                         
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Dash}>—</span>
                                    <span className={styles.page208__pg213Dash}>—</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>work</span>
                                    <span className={styles.page208__pg213Black}>funcionar</span>
                                    <span className={styles.page208__pg213Black}>funcionar</span>
                                </div>
                                <div className={styles.page208__pg213Cell}>
                                    <span className={styles.page208__pg213Red}>without batteries</span>
                                    <span className={styles.page208__pg213Black}>sem pilhas</span>
                                    <span className={styles.page208__pg213Black}>sem pilhas</span>
                                </div>
                            </div>

                        </div>








                    </section>
                    <div className={styles.page208__noteBox}>
                        <div className={styles.page208__noteTitle}>
                            Nota
                        </div>
                        <div className={styles.page208__noteContent}>
                            <div className={styles.page208__noteRow}>
                                <span>Full Form</span>
                                <span>Contracted Form</span>
                            </div>
                            <div className={styles.page208__noteFormula}>
                               <span> Can + not = Can't</span>
                            </div>
                        </div>
                    </div>




                </main>
            </div>
        </div>
    );
};

export default Pagina208;
