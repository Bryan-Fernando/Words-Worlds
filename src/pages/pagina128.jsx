import React from 'react';

import styles from './pagina128.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_readComPrp from '../assets/audios/global_readComPrp.mp3';
import global_readComPre from '../assets/audios/global_readComPre.mp3';
import pg67_audio1_1e from "../assets/audios/pg67_audio1_1e.mp3";
import pg67_audio1_2e from "../assets/audios/pg67_audio1_2e.mp3";
import pg67_audio1_3e from "../assets/audios/pg67_audio1_3e.mp3";
import pg67_audio1_4e from "../assets/audios/pg67_audio1_4e.mp3";
import pg67_audio1_5e from "../assets/audios/pg67_audio1_5e.mp3";
import pg67_audio1_6e from "../assets/audios/pg67_audio1_6e.mp3";
import pg67_audio1_7e from "../assets/audios/pg67_audio1_7e.mp3";
import pg67_audio2_1e from "../assets/audios/pg67_audio2_1e.mp3";
import pg67_audio2_2e from "../assets/audios/pg67_audio2_2e.mp3";
import pg67_audio2_3e from "../assets/audios/pg67_audio2_3e.mp3";
import pg67_audio2_4e from "../assets/audios/pg67_audio2_4e.mp3";
import pg67_audio2_5e from "../assets/audios/pg67_audio2_5e.mp3";
import pg67_audio2_6e from "../assets/audios/pg67_audio2_6e.mp3";
import pg67_audio2_7e from "../assets/audios/pg67_audio2_7e.mp3";
import pg67_audio3_1e from "../assets/audios/pg67_audio3_1e.mp3";
import pg67_audio3_2e from "../assets/audios/pg67_audio3_2e.mp3";
import pg67_audio3_3e from "../assets/audios/pg67_audio3_3e.mp3";
import pg67_audio3_4e from "../assets/audios/pg67_audio3_4e.mp3";
import pg67_audio3_5e from "../assets/audios/pg67_audio3_5e.mp3";
import pg67_audio3_6e from "../assets/audios/pg67_audio3_6e.mp3";
import pg67_audio4_1e from "../assets/audios/pg67_audio4_1e.mp3";
import pg67_audio4_2e from "../assets/audios/pg67_audio4_2e.mp3";
import pg67_audio4_3e from "../assets/audios/pg67_audio4_3e.mp3";
import pg67_audio4_4e from "../assets/audios/pg67_audio4_4e.mp3";
import pg67_audio4_5e from "../assets/audios/pg67_audio4_5e.mp3";
import pg67_audio4_6e from "../assets/audios/pg67_audio4_6e.mp3";
import pg67_audio4_7e from "../assets/audios/pg67_audio4_7e.mp3";
import pg67_audio1_1p from "../assets/audios/pg67_audio1_1p.mp3";
import pg67_audio1_2p from "../assets/audios/pg67_audio1_2p.mp3";
import pg67_audio1_3p from "../assets/audios/pg67_audio1_3p.mp3";
import pg67_audio1_4p from "../assets/audios/pg67_audio1_4p.mp3";
import pg67_audio1_5p from "../assets/audios/pg67_audio1_5p.mp3";
import pg67_audio1_6p from "../assets/audios/pg67_audio1_6p.mp3";
import pg67_audio1_7p from "../assets/audios/pg67_audio1_7p.mp3";
import pg67_audio2_1p from "../assets/audios/pg67_audio2_1p.mp3";
import pg67_audio2_2p from "../assets/audios/pg67_audio2_2p.mp3";
import pg67_audio2_3p from "../assets/audios/pg67_audio2_3p.mp3";
import pg67_audio2_4p from "../assets/audios/pg67_audio2_4p.mp3";
import pg67_audio2_5p from "../assets/audios/pg67_audio2_5p.mp3";
import pg67_audio2_6p from "../assets/audios/pg67_audio2_6p.mp3";
import pg67_audio2_7p from "../assets/audios/pg67_audio2_7p.mp3";
import pg67_audio3_1p from "../assets/audios/pg67_audio3_1p.mp3";
import pg67_audio3_2p from "../assets/audios/pg67_audio3_2p.mp3";
import pg67_audio3_3p from "../assets/audios/pg67_audio3_3p.mp3";
import pg67_audio3_4p from "../assets/audios/pg67_audio3_4p.mp3";
import pg67_audio3_5p from "../assets/audios/pg67_audio3_5p.mp3";
import pg67_audio3_6p from "../assets/audios/pg67_audio3_6p.mp3";
import pg67_audio4_1p from "../assets/audios/pg67_audio4_1p.mp3";
import pg67_audio4_2p from "../assets/audios/pg67_audio4_2p.mp3";
import pg67_audio4_3p from "../assets/audios/pg67_audio4_3p.mp3";
import pg67_audio4_4p from "../assets/audios/pg67_audio4_4p.mp3";
import pg67_audio4_5p from "../assets/audios/pg67_audio4_5p.mp3";
import pg67_audio4_6p from "../assets/audios/pg67_audio4_6p.mp3";
import pg67_audio4_7p from "../assets/audios/pg67_audio4_7p.mp3";


const pagina128 = () => {

    const audioMap = {
        global_readComPre: global_readComPre,
        global_readComPrp: global_readComPrp,
        pg67_audio1_1e: pg67_audio1_1e,
        pg67_audio1_2e: pg67_audio1_2e,
        pg67_audio1_3e: pg67_audio1_3e,
        pg67_audio1_4e: pg67_audio1_4e,
        pg67_audio1_5e: pg67_audio1_5e,
        pg67_audio1_6e: pg67_audio1_6e,
        pg67_audio1_7e: pg67_audio1_7e,
        pg67_audio2_1e: pg67_audio2_1e,
        pg67_audio2_2e: pg67_audio2_2e,
        pg67_audio2_3e: pg67_audio2_3e,
        pg67_audio2_4e: pg67_audio2_4e,
        pg67_audio2_5e: pg67_audio2_5e,
        pg67_audio2_6e: pg67_audio2_6e,
        pg67_audio2_7e: pg67_audio2_7e,
        pg67_audio3_1e: pg67_audio3_1e,
        pg67_audio3_2e: pg67_audio3_2e,
        pg67_audio3_3e: pg67_audio3_3e,
        pg67_audio3_4e: pg67_audio3_4e,
        pg67_audio3_5e: pg67_audio3_5e,
        pg67_audio3_6e: pg67_audio3_6e,
        pg67_audio4_1e: pg67_audio4_1e,
        pg67_audio4_2e: pg67_audio4_2e,
        pg67_audio4_3e: pg67_audio4_3e,
        pg67_audio4_4e: pg67_audio4_4e,
        pg67_audio4_5e: pg67_audio4_5e,
        pg67_audio4_6e: pg67_audio4_6e,
        pg67_audio4_7e: pg67_audio4_7e,
        pg67_audio1_1p: pg67_audio1_1p,
        pg67_audio1_2p: pg67_audio1_2p,
        pg67_audio1_3p: pg67_audio1_3p,
        pg67_audio1_4p: pg67_audio1_4p,
        pg67_audio1_5p: pg67_audio1_5p,
        pg67_audio1_6p: pg67_audio1_6p,
        pg67_audio1_7p: pg67_audio1_7p,
        pg67_audio2_1p: pg67_audio2_1p,
        pg67_audio2_2p: pg67_audio2_2p,
        pg67_audio2_3p: pg67_audio2_3p,
        pg67_audio2_4p: pg67_audio2_4p,
        pg67_audio2_5p: pg67_audio2_5p,
        pg67_audio2_6p: pg67_audio2_6p,
        pg67_audio2_7p: pg67_audio2_7p,
        pg67_audio3_1p: pg67_audio3_1p,
        pg67_audio3_2p: pg67_audio3_2p,
        pg67_audio3_3p: pg67_audio3_3p,
        pg67_audio3_4p: pg67_audio3_4p,
        pg67_audio3_5p: pg67_audio3_5p,
        pg67_audio3_6p: pg67_audio3_6p,
        pg67_audio4_1p: pg67_audio4_1p,
        pg67_audio4_2p: pg67_audio4_2p,
        pg67_audio4_3p: pg67_audio4_3p,
        pg67_audio4_4p: pg67_audio4_4p,
        pg67_audio4_5p: pg67_audio4_5p,
        pg67_audio4_6p: pg67_audio4_6p,
        pg67_audio4_7p: pg67_audio4_7p,

    };

    const playAudio = (audioKey) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };


    return (
        <div>
            <div className={styles["page128__container"]}>
                <header className={styles["page128__header"]}>
                    <h1 className={styles["page128__title"]}>
                        Exercises
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page128__audio-icon"]}
                            onClick={() => playAudio('global_readComPre')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page128__audio-icon"]}
                            onClick={() => playAudio('global_readComPrp')}
                        />
                    </h1>
                </header>
                <main className={styles["page128__main"]}>
                    <div className={styles["page128__main-container"]}>
                        <div className={styles["page128__text-container1"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                <span>
                                    Dialogue 1 – <spam className={styles["page128__titulo-red"]}>Ordering at a Café</spam>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                <span>
                                    Waiter: Hello! What would you like to drink ?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_2p")}
                                    />
                                </span>

                                <span>
                                   <br /> <spam className={styles["page128__paragraph-red"]}>Emma: I would like a lemonade, please.</spam>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_3p")}
                                    />
                                </span>

                                <span>
                                    <br /> Waiter: And to eat ?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_4p")}
                                    />
                                </span>

                                <span>
                                    <br /> <spam className={styles["page128__paragraph-red"]}>Emma: I would like a sandwich.</spam>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_5p")}
                                    />
                                </span>

                                <span>
                                    <br /> Waiter: Great! Anything else ?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_6p")}
                                    />
                                </span>

                                <span>
                                <br /> <spam className={styles["page128__paragraph-red"]}>Emma: No, thank you.</spam>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_7e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_7p")}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["page128__main-container"]}>
                        <div className={styles["page128__text-container2"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                <span>
                                    Dialogue 2 – <spam className={styles["page128__titulo-red"]}>Making a Polite Request</spam>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                <span>
                                    Liam: Hi, Anna! Would you like to play soccer?
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_2p")}
                                    />
                                </span>

                                <span>
                                 <br /> <spam className={styles["page128__paragraph-red"]}>Anna: Yes! I would love to play.</spam>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_3p")}
                                    />
                                </span>

                                <span>
                                    <br /> Liam: Great! Let's go to the park.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_4p")}
                                    />
                                </span>

                                <span>
                                <br /> <spam className={styles["page128__paragraph-red"]}>Anna: Sure! But ﬁrst, would you help me carry my bag ?</spam>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_5p")}
                                    />
                                </span>

                                <span>
                                    <br /> Liam: Of course !
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page128__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page128__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_6p")}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );

};

export default pagina128;

