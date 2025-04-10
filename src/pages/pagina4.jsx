import React, { useRef } from 'react';

import styles from './pagina4.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pg4_audio1e from '../assets/audios/pg4_audio1e.mp3';
import pg4_audio1p from '../assets/audios/pg4_audio1p.mp3';
import pg4_audio2e from '../assets/audios/pg4_audio2e.mp3';
import pg4_audio2p from '../assets/audios/pg4_audio2p.mp3';
import pg4_audio3p from '../assets/audios/pg4_audio3p.mp3';
import pg4_audio4p from '../assets/audios/pg4_audio4p.mp3';
import pg4_audio5p from '../assets/audios/pg4_audio5p.mp3';
import pg4_audio6p from '../assets/audios/pg4_audio6p.mp3';
import pg4_audio7p from '../assets/audios/pg4_audio7p.mp3';
import pg4_audio8p from '../assets/audios/pg4_audio8p.mp3';
import pg4_audio9p from '../assets/audios/pg4_audio9p.mp3';
import pg4_audio10p from '../assets/audios/pg4_audio10p.mp3';
import pg4_audio11p from '../assets/audios/pg4_audio11p.mp3';
import pg4_audio12p from '../assets/audios/pg4_audio12p.mp3';
import pg4_audio13p from '../assets/audios/pg4_audio13p.mp3';
import pg4_audio14p from '../assets/audios/pg4_audio14p.mp3';
import pg4_audio15p from '../assets/audios/pg4_audio15p.mp3';
import pg4_audio16p from '../assets/audios/pg4_audio16p.mp3';
import pg4_audio3e from '../assets/audios/pg4_audio3e.mp3';
import pg4_audio4e from '../assets/audios/pg4_audio4e.mp3';
import pg4_audio5e from '../assets/audios/pg4_audio5e.mp3';
import pg4_audio6e from '../assets/audios/pg4_audio6e.mp3';
import pg4_audio7e from '../assets/audios/pg4_audio7e.mp3';
import pg4_audio8e from '../assets/audios/pg4_audio8e.mp3';
import pg4_audio9e from '../assets/audios/pg4_audio9e.mp3';
import pg4_audio10e from '../assets/audios/pg4_audio10e.mp3';
import pg4_audio11e from '../assets/audios/pg4_audio11e.mp3';
import pg4_audio12e from '../assets/audios/pg4_audio12e.mp3';
import pg4_audio13e from '../assets/audios/pg4_audio13e.mp3';
import pg4_audio14e from '../assets/audios/pg4_audio14e.mp3';
import pg4_audio15e from '../assets/audios/pg4_audio15e.mp3';
import pg4_audio16e from '../assets/audios/pg4_audio16e.mp3';



const Pagina4 = () => {
    const currentAudioRef = useRef(null);

    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play();
    };

    return (
        <div className={styles["page4"]}>
            <div className={styles["page4__container"]}>
                <header className={styles["page4__header"]}>
                    <h1 className={styles["page4__header-title"]}>
                        Grammar To Be (Be)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page4__icon"]}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4_audio1e);
                            }}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page4__icon"]}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4_audio1p);
                            }}
                        />
                    </h1>
                    <h2 className={styles["page4__header-subtitle"]}>
                        Subject Pronouns
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page4__icon"]}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4_audio2e);
                            }}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page4__icon"]}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4_audio2p);
                            }}
                        />
                    </h2>
                </header>
                <main className={styles["page4__main"]}>
                    <table className={styles["page4__table"]}>
                        <thead>
                            <tr>
                                <th className={styles["page4__table-header"]}>I</th>
                                <th className={styles["page4__table-header"]}>He</th>
                                <th className={styles["page4__table-header"]}>She</th>
                                <th className={styles["page4__table-header"]}>It</th>
                                <th className={styles["page4__table-header"]}>We</th>
                                <th className={styles["page4__table-header"]}>You</th>
                                <th className={styles["page4__table-header"]}>You and...</th>
                                <th className={styles["page4__table-header"]}>They</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles["page4__table-cell"]}>Eu</td>
                                <td className={styles["page4__table-cell"]}>Ele</td>
                                <td className={styles["page4__table-cell"]}>Ela</td>
                                <td className={styles["page4__table-cell"]}>(Não traduzir)</td>
                                <td className={styles["page4__table-cell"]}>Nós</td>
                                <td className={styles["page4__table-cell"]}>Você</td>
                                <td className={styles["page4__table-cell"]}>Você e... / Vocês</td>
                                <td className={styles["page4__table-cell"]}>Eles/Elas</td>
                            </tr>
                            <tr>
                                <td className={`${styles["page4__table-cell"]} ${styles["page4__table-highlight"]}`}>I am</td>
                                <td colSpan="3" className={`${styles["page4__table-cell"]} ${styles["page4__table-highlight"]}`}>He is/ She is/ It is</td>
                                <td colSpan="4" className={`${styles["page4__table-cell"]} ${styles["page4__table-highlight"]}`}>We are/ You are/ They are</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
                <hr className={styles["page4__divider"]} />

                <aside className={styles["page4__aside"]}>
                    <div className={styles["page4__aside-affirmative"]}>
                        <div>
                            <h3 className={styles["page4__aside-title"]}>AFFIRMATIVE</h3>
                            <p>
                                I am = I’m a student
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio3e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio3p)}
                                />
                            </p>
                            <hr />
                            <p>
                                He is = He’s a teacher
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio4e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio4p)}
                                />
                            </p>
                            <p>
                                She is = She’s married
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio5e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio5p)}
                                />
                            </p>
                            <p>
                                It is = It’s hot
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio6e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio6p)}
                                />
                            </p>
                            <hr />
                            <p>
                                We are = We’re Brazilians
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio7e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio7p)}
                                />
                            </p>
                            <p>
                                You are = You’re single
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio8e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio8p)}
                                />
                            </p>
                            <p>
                                They are = They’re from Portugal
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio9e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio9p)}
                                />
                            </p>
                        </div>
                    </div>

                    <div className={styles["page4__aside-negative"]}>
                        <div>
                            <h3 className={styles["page4__aside-title"]}>NEGATIVE</h3>
                            <p>
                                I’m not Spanish
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio10e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio10p)}
                                />
                            </p>
                            <hr />
                            <p>
                                He’s not a lawyer
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio11e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio11p)}
                                />
                            </p>
                            <p>
                                She’s not single
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio12e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio12p)}
                                />
                            </p>
                            <p>
                                It’s not cold
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio13e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio13p)}
                                />
                            </p>
                            <hr />
                            <p>
                                We’re not Portuguese
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio14e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio14p)}
                                />
                            </p>
                            <p>
                                You’re not Italian
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio15e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio15p)}
                                />
                            </p>
                            <p>
                                They’re not Brazilians
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio16e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page4__icon"]}
                                    onClick={() => playAudio(pg4_audio16p)}
                                />
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina4;