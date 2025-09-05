import React, { useRef } from 'react';
import styles from './pagina210.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg210_audio1e.mp3';
import audio2e from '../assets/audios/pg210_audio2e.mp3';
import audio3e from '../assets/audios/pg210_audio3e.mp3';
import audio4e from '../assets/audios/pg210_audio4e.mp3';
import audio5e from '../assets/audios/pg210_audio5e.mp3';

const Pagina210 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg210_audio1e: audio1e,
            pg210_audio2e: audio2e,
            pg210_audio3e: audio3e,
            pg210_audio4e: audio4e,
            pg210_audio5e: audio5e,
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
        <div className={styles.page210__container}>
            <div className={styles.page210__pageContainer}>
                <header className={styles.page210__header}>
                    <h1 className={styles.page210__headerTitle}>Grammar</h1>
                </header>

                <main className={styles.page210__mainContent}>
                    <section className={styles.page210__grammarIntro}>
                        <div className={styles.page210__modalVerb}>
                            <h2>
                                <span>Can</span>
                                <span> - Modal Verb</span>
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio icon"
                                    className={styles.page210__audio_icon}
                                    onClick={() => playAudio('pg210_audio1e')}
                                />
                            </h2>
                            <p><span>Can</span><span> - Verbo Modal</span></p>
                        </div>
                    </section>

                    <section className={styles.page210__grammarSection}>
                        <div className={styles.page210__grammarHeader}>
                            <h2 className={styles.page210__grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.page210__grammarContent}>
                            <div className={styles.page210__grammarRow}>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section
                        className={styles.page210__translationSection}
                        onClick={() => playAudio('pg210_audio2e')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.page210__translationContent}>
                            <div className={styles.page210__translationColumn}>
                                <span className={`${styles.page210__translationItem} ${styles.page210__red}`}>can</span>
                            </div>
                            <div className={styles.page210__translationColumn}>
                                <span className={`${styles.page210__translationItem} ${styles.page210__red}`}>It</span>
                                <span className={`${styles.page210__translationItem} ${styles.page210__black}`}>Eu</span>
                                
                                
                            </div>
                            <div className={styles.page210__translationColumn}>
                                <span className={`${styles.page210__translationItem} ${styles.page210__red}`}>—</span>
                                <span className={`${styles.page210__translationItem} ${styles.page210__black}`}>—</span>
                            </div>
                            <div className={styles.page210__translationColumn}>
                                <span className={`${styles.page210__translationItem} ${styles.page210__red}`}>clean</span>
                                <span className={`${styles.page210__translationItem} ${styles.page210__black}`}>posso limpar</span>
                            </div>
                            <div className={styles.page210__translationColumn}>
                                <span className={`${styles.page210__translationItem} ${styles.page210__red}`}>the kitchen now?</span>
                                <span className={`${styles.page210__translationItem} ${styles.page210__black}`}>a cozinha agora?</span>


                            </div>
                        </div>
                    </section>

                    <section className={styles.page210__tableContent}>
                        <div className={styles.page210__tableGroup}>
                            {/* He */}
                            <div
                                className={styles.page210__tableRow}
                                onClick={() => playAudio('pg210_audio3e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>can</span>
                                </div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>he</span>
                                    <span className={styles.page210__pg213Black}>Ele</span>
                                </div>
                                <div className={styles.page210__pg213Cell}><span className={styles.page210__pg213Dash}>—</span></div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>help</span>
                                    <span className={styles.page210__pg213Black}>pode nos ajudar?</span>
                                </div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>us?</span>
                             
                                </div>
                            </div>
                        </div>

                        <div className={styles.page210__tableGroup}>
                            {/* She */}
                            <div
                                className={styles.page210__tableRow}
                                onClick={() => playAudio('pg210_audio4e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page210__pg213Cell}><span className={styles.page210__pg213Red}>Can</span></div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>She</span>
                                    <span className={styles.page210__pg213Black}>Ela</span>
                                </div>
                                <div className={styles.page210__pg213Cell}><span className={styles.page210__pg213Dash}>—</span></div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>understand</span>
                                    <span className={styles.page210__pg213Black}>consegue entender</span>
                                </div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>Spanish?</span>
                                    <span className={styles.page210__pg213Black}>espanhol?</span>
                                   
                                </div>
                            </div>
                        </div>

                        <div className={styles.page210__tableGroup}>
                            {/* It */}
                            <div
                                className={styles.page210__tableRow}
                                onClick={() => playAudio('pg210_audio5e')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.page210__pg213Cell}><span className={styles.page210__pg213Red}>Can</span></div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>it</span>
                                    <span className={styles.page210__pg213Black}>-</span>
                                </div>
                                <div className={styles.page210__pg213Cell}><span className={styles.page210__pg213Dash}>—</span></div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>be</span>
                                    <span className={styles.page210__pg213Black}>Pode ser</span>
                                </div>
                                <div className={styles.page210__pg213Cell}>
                                    <span className={styles.page210__pg213Red}>true?</span>
                                    <span className={styles.page210__pg213Black}>verdade?</span>
                            
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={styles.page210__noteBox}>
                        <div className={styles.page210__noteTitle}>
                            Nota
                        </div>
                        <div className={styles.page210__noteContent}>
                            <div className={styles.page210__noteRow}>
                                <span>Full Form</span>
                                <span>Contracted Form</span>
                            </div>
                            <div className={styles.page210__noteFormula}>
                               <span> Can + not = Can't</span>
                            </div>
                        </div>
                    </div>




                </main>
            </div>
        </div>
    );
};

export default Pagina210;
