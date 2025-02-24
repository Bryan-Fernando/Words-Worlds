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
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio1_1e")}>My Daily Routine</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio1_2e")}>My daily routine is simple. </span>
                                <span onClick={() => playAudio("pg67_audio1_3e")}>I <strong>am</strong> a teacher. </span>
                                <span onClick={() => playAudio("pg67_audio1_4e")}>In the morning, I <strong>am</strong> at home. </span>
                                <span onClick={() => playAudio("pg67_audio1_5e")}>Then, I <strong>am</strong> at work. </span>
                                <span onClick={() => playAudio("pg67_audio1_6e")}>In the afternoon, I <strong>am</strong> busy with meetings and classes. </span>
                                <span onClick={() => playAudio("pg67_audio1_7e")}>At night, I <strong>am</strong> at home again.</span>
                            </p>
                        </div>

                        <div className={styles["page67__image-container1"]}>
                            <img src={pagina67Imagem1} alt="Daily Routine" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container2"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio2_1e")}>Hobbies and Interests</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio2_2e")}>My hobbies <strong>are</strong> simple. </span>
                                <span onClick={() => playAudio("pg67_audio2_3e")}>I <strong>am</strong> interested in reading. </span>
                                <span onClick={() => playAudio("pg67_audio2_4e")}>Books <strong>are</strong> my passion. </span>
                                <span onClick={() => playAudio("pg67_audio2_5e")}>I <strong>am</strong> also fond of cooking. </span>
                                <span onClick={() => playAudio("pg67_audio2_6e")}>Recipes <strong>are</strong> my inspiration. </span>
                                <span onClick={() => playAudio("pg67_audio2_7e")}>In my free time, I <strong>am</strong> happy pursuing these activities.</span>
                            </p>
                        </div>

                        <div className={styles["page67__image-container2"]}>
                            <img src={pagina67Imagem2} alt="Hobbies" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container3"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio3_1e")}>My Friends</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio3_2e")}>My friends are great. </span>
                                <span onClick={() => playAudio("pg67_audio3_3e")}>They are fun to be around. </span>
                                <span onClick={() => playAudio("pg67_audio3_4e")}>We are always together. </span>
                                <span onClick={() => playAudio("pg67_audio3_5e")}>We are happy when we play games. </span>
                                <span onClick={() => playAudio("pg67_audio3_6e")}>We are sad when we have to say goodbye.</span>
                            </p>
                        </div>

                        <div className={styles["page67__image-container3"]}>
                            <img src={pagina67Imagem3} alt="Friends" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container4"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio4_1e")}>My Phone</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg67_audio4_2e")}>My phone is new. </span>
                                <span onClick={() => playAudio("pg67_audio4_3e")}>It is a gift. </span>
                                <span onClick={() => playAudio("pg67_audio4_4e")}>It is useful. </span>
                                <span onClick={() => playAudio("pg67_audio4_5e")}>I am happy with it. </span>
                                <span onClick={() => playAudio("pg67_audio4_6e")}>I am always texting my friends. </span>
                                <span onClick={() => playAudio("pg67_audio4_7e")}>They are important to me.</span>
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
