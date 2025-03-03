import React from 'react';

import styles from './pagina67.module.css';

import pg67IconNotes from '../assets/icons/notes_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina67Imagem1 from '../assets/images/pagina67_imagem1.webp';
import pagina67Imagem2 from '../assets/images/pagina67_imagem2.webp';
import pagina67Imagem3 from '../assets/images/pagina67_imagem3.webp';
import pagina67Imagem4 from '../assets/images/pagina67_imagem4.webp';

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


const pagina67 = () => {

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
            <div className={styles["page67__container"]}>
                <header className={styles["page67__header"]}>
                    <h1 className={styles["page67__title"]}>
                        Reading and Comprehension Language Practice
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page67__audio-icon"]}
                            onClick={() => playAudio('global_readComPre')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page67__audio-icon"]}
                            onClick={() => playAudio('global_readComPrp')}
                        />
                    </h1>
                </header>
                <main className={styles["page67__main"]}>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container1"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My Daily Routine
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My daily routine is simple.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_2p")}
                                    />
                                </span>

                                <span>
                                    I <strong>am</strong> a teacher.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_3p")}
                                    />
                                </span>

                                <span>
                                    In the morning, I <strong>am</strong> at home.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_4p")}
                                    />
                                </span>

                                <span>
                                    Then, I <strong>am</strong> at work.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_5p")}
                                    />
                                </span>

                                <span>
                                    In the afternoon, I <strong>am</strong> busy with meetings and classes.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_6p")}
                                    />
                                </span>

                                <span>
                                    At night, I <strong>am</strong> at home again.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio1_7e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio1_7p")}
                                    />
                                </span>
                            </p>
                        </div>

                        <div className={styles["page67__image-container1"]}>
                            <img src={pagina67Imagem1} alt="Daily Routine" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container2"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    Hobbies and Interests
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My hobbies <strong>are</strong> simple.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_2p")}
                                    />
                                </span>

                                <span>
                                    I <strong>am</strong> interested in reading.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_3p")}
                                    />
                                </span>

                                <span>
                                    Books <strong>are</strong> my passion.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_4p")}
                                    />
                                </span>

                                <span>
                                    I <strong>am</strong> also fond of cooking.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_5p")}
                                    />
                                </span>

                                <span>
                                    Recipes <strong>are</strong> my inspiration.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_6p")}
                                    />
                                </span>

                                <span>
                                    In my free time, I <strong>am</strong> happy pursuing these activities.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio2_7e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio2_7p")}
                                    />
                                </span>
                            </p>
                        </div>

                        <div className={styles["page67__image-container2"]}>
                            <img src={pagina67Imagem2} alt="Hobbies" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container3"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My Friends
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio3_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio3_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My friends are great.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio3_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio3_2p")}
                                    />
                                </span>

                                <span>
                                    They are fun to be around.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio3_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio3_3p")}
                                    />
                                </span>

                                <span>
                                    We are always together.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio3_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio3_4p")}
                                    />
                                </span>

                                <span>
                                    We are happy when we play games.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio3_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio3_5p")}
                                    />
                                </span>

                                <span>
                                    We are sad when we have to say goodbye.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio3_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio3_6p")}
                                    />
                                </span>
                            </p>
                        </div>


                        <div className={styles["page67__image-container3"]}>
                            <img src={pagina67Imagem3} alt="Friends" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container4"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My Phone
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio4_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio4_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My phone is new.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio4_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio4_2p")}
                                    />
                                </span>

                                <span>
                                    It is a gift.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio4_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio4_3p")}
                                    />
                                </span>

                                <span>
                                    It is useful.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio4_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio4_4p")}
                                    />
                                </span>

                                <span>
                                    I am happy with it.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio4_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio4_5p")}
                                    />
                                </span>

                                <span>
                                    I am always texting my friends.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio4_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio4_6p")}
                                    />
                                </span>

                                <span>
                                    They are important to me.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page67__audio-icon"]}
                                        onClick={() => playAudio("pg67_audio4_7e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page67__audio-iconP"]}
                                        onClick={() => playAudio("pg67_audio4_7p")}
                                    />
                                </span>
                            </p>
                        </div>


                        <div className={styles["page67__image-container4"]}>
                            <img src={pagina67Imagem4} alt="Phone" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                </main>
                <aside className={styles["page67__aside"]}>
                    <div className={styles["page67__aside-container"]}>
                        <div className={styles["page67__aside-notes1"]}>
                            <img className={styles["page67__aside-img-notes"]} src={pg67IconNotes} alt="Word Bank Icon" />
                            <p><strong>Listening Comprehension and Pronunciation</strong></p>
                        </div>
                        <div className={styles["page67__aside-notes2"]}>
                            <p>Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers express themselves, and try to practice mimicking their pronunciation.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );

};

export default pagina67;
