import React, { useRef } from 'react';
import styles from './pagina207.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg207_audio1e.mp3';
import audio2e from '../assets/audios/pg207_audio2e.mp3';
import audio3e from '../assets/audios/pg207_audio3e.mp3';
import audio4e from '../assets/audios/pg207_audio4e.mp3';
import audio5e from '../assets/audios/pg207_audio5e.mp3';

const Pagina207 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg207_audio1e: audio1e,
            pg207_audio2e: audio2e,
            pg207_audio3e: audio3e,
            pg207_audio4e: audio4e,
            pg207_audio5e: audio5e,
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
        <div className={styles.page207__container}>
            <div className={styles.page207__pageContainer}>
                <header className={styles.page207__header}>
                    <h1 className={styles.page207__headerTitle}>Grammar</h1>
                </header>

                <main className={styles.page207__mainContent}>
                    <section className={styles.page207__grammarIntro}>
                        <div className={styles.page207__modalVerb}>
                            <h2>
                                <span>Can</span><span> - Modal Verb </span>
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio icon"
                                    className={styles.page207__audio_icon}
                                    onClick={() => playAudio('pg207_audio1e')}
                                />
                            </h2>
                            <p><span>Can</span><span> - Verbo Modal</span></p>
                        </div>
                    </section>

                    <section className={styles.page207__grammarSection}>
                        <div className={styles.page207__grammarHeader}>
                            <h2 className={styles.page207__grammarTitle}>Affirmative Form</h2>
                        </div>
                        <div className={styles.page207__grammarContent}>
                            <div className={styles.page207__grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.page207__tableContent}>
                        <div className={styles.page207__tableGroup}>
                            <div
                                className={styles.page207__tableRow}
                                onClick={() => playAudio('pg207_audio2e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>We</span><span className={styles.page207__pg213Black}>Nós</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>can</span><span className={styles.page207__pg213Black}>podemos</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Dash}>—</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>visit</span><span className={styles.page207__pg213Black}>visitar</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>my sister in Lisbon.</span><span className={styles.page207__pg213Black}>minha irmã em Lisboa.</span></div>
                            </div>
                        </div>

                        <div className={styles.page207__tableGroup}>
                            <div
                                className={styles.page207__tableRow}
                                onClick={() => playAudio('pg207_audio3e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>You <span className={styles.page207__blueText}>(sg)</span></span><span className={styles.page207__pg213Black}>Você</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>can</span><span className={styles.page207__pg213Black}>pode</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Dash}>—</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>meet</span><span className={styles.page207__pg213Black}>me encontrar</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>me tomorrow afternoon</span><span className={styles.page207__pg213Black}>amanhã à tarde</span></div>
                            </div>


                        </div>

                        <div className={styles.page207__tableGroup}>
                            <div
                                className={styles.page207__tableRow}
                                onClick={() => playAudio('pg207_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>Y'all <span className={styles.page207__blueText}>(pl)</span></span><span className={styles.page207__pg213Black}>Vocês</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>can</span><span className={styles.page207__pg213Black}>sabem</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Dash}>—</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>cook</span><span className={styles.page207__pg213Black}>cozinhar</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>really well</span><span className={styles.page207__pg213Black}>muito bem</span></div>
                            </div>
                        </div>

                        <div className={styles.page207__tableGroup}>
                            <div
                                className={styles.page207__tableRow}
                                onClick={() => playAudio('pg207_audio5e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>They</span><span className={styles.page207__pg213Black}>Eles/Elas</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>can</span><span className={styles.page207__pg213Black}>sabem</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Dash}>—</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>read</span><span className={styles.page207__pg213Black}>ler</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Red}>Chinese</span><span className={styles.page207__pg213Black}>chinês</span></div>
                                </div>

                            {/* Traduções (sem áudio e sem pointer) */}
                            <div className={styles.page207__tableRow}>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>Eles/Elas</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>podem</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Dash}>—</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>ler</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>chinês</span></div>
                                </div>

                            <div className={styles.page207__tableRow}>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>Eles/Elas</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>conseguem</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Dash}>—</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>ler</span></div>
                                <div className={styles.page207__pg213Cell}><span className={styles.page207__pg213Black}>chinês</span></div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina207;
