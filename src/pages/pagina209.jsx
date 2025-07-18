import React, { useRef } from 'react';
import styles from './pagina209.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg209_audio1e.mp3';
import audio2e from '../assets/audios/pg209_audio2e.mp3';
import audio3e from '../assets/audios/pg209_audio3e.mp3';
import audio4e from '../assets/audios/pg209_audio4e.mp3';
import audio5e from '../assets/audios/pg209_audio5e.mp3';

const Pagina209 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg209_audio1e: audio1e,
            pg209_audio2e: audio2e,
            pg209_audio3e: audio3e,
            pg209_audio4e: audio4e,
            pg209_audio5e: audio5e,
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
                                    className={styles.page209__audio_icon}
                                    onClick={() => playAudio('pg209_audio1e')}
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
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            {/* We */}
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg209_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>We</span>
                                    <span className={styles.pg213Black}>Nós</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>podemos</span></span>
                                </div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Dash}>—</span></div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>stay out</span>
                                    <span className={styles.pg213Black}>ficar fora</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>late.</span>
                                    <span className={styles.pg213Black}>até tarde.</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* You (sg) */}
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg209_audio3e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>You <span className={styles.blueText}>(sg)</span></span>
                                    <span className={styles.pg213Black}>Você</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>pode</span></span>
                                </div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Dash}>—</span></div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>enter</span>
                                    <span className={styles.pg213Black}>entrar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>without a ticket</span>
                                    <span className={styles.pg213Black}>sem um ingresso</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* Y'all */}
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg209_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Y'all <span className={styles.blueText}>(pl)</span></span>
                                    <span className={styles.pg213Black}>Vocês</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>podem</span></span>
                                </div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Dash}>—</span></div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>swim</span>
                                    <span className={styles.pg213Black}>nadar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>in this river</span>
                                    <span className={styles.pg213Black}>neste rio</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* They */}
                            <div
                                className={styles.tableRow}
                                onClick={() => playAudio('pg209_audio5e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>They</span>
                                    <span className={styles.pg213Black}>Eles/Elas</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}>podem</span></span>
                                </div>
                                <div className={styles.pg213Cell}><span className={styles.pg213Dash}>—</span></div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>play</span>
                                    <span className={styles.pg213Black}>jogar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>soccer today</span>
                                    <span className={styles.pg213Black}>futebol hoje</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina209;
