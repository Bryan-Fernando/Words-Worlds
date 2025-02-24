import React from 'react';

import styles from './pagina65.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import pg65IconNotes from '../assets/icons/notes_icon.webp';

import pagina65Imagem1 from '../assets/images/pagina65_imagem1.webp';
import pagina65Imagem2 from '../assets/images/pagina65_imagem2.webp';
import pagina65Imagem3 from '../assets/images/pagina65_imagem3.webp';

import global_readComPrp from '../assets/audios/global_readComPrp.mp3';
import global_readComPre from '../assets/audios/global_readComPre.mp3';
import pg65_audio1_1e from "../assets/audios/pg65_audio1_1e.mp3";
import pg65_audio1_2e from "../assets/audios/pg65_audio1_2e.mp3";
import pg65_audio1_3e from "../assets/audios/pg65_audio1_3e.mp3";
import pg65_audio1_4e from "../assets/audios/pg65_audio1_4e.mp3";
import pg65_audio1_5e from "../assets/audios/pg65_audio1_5e.mp3";
import pg65_audio1_6e from "../assets/audios/pg65_audio1_6e.mp3";
import pg65_audio1_7e from "../assets/audios/pg65_audio1_7e.mp3";
import pg65_audio2_1e from "../assets/audios/pg65_audio2_1e.mp3";
import pg65_audio2_2e from "../assets/audios/pg65_audio2_2e.mp3";
import pg65_audio2_3e from "../assets/audios/pg65_audio2_3e.mp3";
import pg65_audio2_4e from "../assets/audios/pg65_audio2_4e.mp3";
import pg65_audio2_5e from "../assets/audios/pg65_audio2_5e.mp3";
import pg65_audio2_6e from "../assets/audios/pg65_audio2_6e.mp3";
import pg65_audio3_1e from "../assets/audios/pg65_audio3_1e.mp3";
import pg65_audio3_2e from "../assets/audios/pg65_audio3_2e.mp3";
import pg65_audio3_3e from "../assets/audios/pg65_audio3_3e.mp3";
import pg65_audio3_4e from "../assets/audios/pg65_audio3_4e.mp3";
import pg65_audio3_5e from "../assets/audios/pg65_audio3_5e.mp3";

const Pagina65 = () => {

    const audioMap = {
        global_readComPre: global_readComPre,
        global_readComPrp: global_readComPrp,
        pg65_audio1_1e: pg65_audio1_1e,
        pg65_audio1_2e: pg65_audio1_2e,
        pg65_audio1_3e: pg65_audio1_3e,
        pg65_audio1_4e: pg65_audio1_4e,
        pg65_audio1_5e: pg65_audio1_5e,
        pg65_audio1_6e: pg65_audio1_6e,
        pg65_audio1_7e: pg65_audio1_7e,
        pg65_audio2_1e: pg65_audio2_1e,
        pg65_audio2_2e: pg65_audio2_2e,
        pg65_audio2_3e: pg65_audio2_3e,
        pg65_audio2_4e: pg65_audio2_4e,
        pg65_audio2_5e: pg65_audio2_5e,
        pg65_audio2_6e: pg65_audio2_6e,
        pg65_audio3_1e: pg65_audio3_1e,
        pg65_audio3_2e: pg65_audio3_2e,
        pg65_audio3_3e: pg65_audio3_3e,
        pg65_audio3_4e: pg65_audio3_4e,
        pg65_audio3_5e: pg65_audio3_5e,
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
            <div className={styles["page65__container"]}>
                <header className={styles["page65__header"]}>
                    <h1 className={styles["page65__title"]}>
                        Reading and Comprehension Language Practice
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page65__audio-icon"]}
                            onClick={() => playAudio('global_readComPre')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page65__audio-icon"]}
                            onClick={() => playAudio('global_readComPrp')}
                        />
                    </h1>
                </header>

                <main className={styles["page65__main"]}>
                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--first"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg65_audio1_1e")}>Getting to Know Brazil</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg65_audio1_2e")}>Brazil is a beautiful country in South America.</span>
                                <span onClick={() => playAudio("pg65_audio1_3e")}>It <strong>is</strong> famous for its beautiful beaches </span>
                                <span onClick={() => playAudio("pg65_audio1_4e")}>culturally diverse</span>
                                <span onClick={() => playAudio("pg65_audio1_5e")}>, and delicious food.</span>
                                <span onClick={() => playAudio("pg65_audio1_6e")}>The official language of Brazil is Portuguese.</span>
                                <span onClick={() => playAudio("pg65_audio1_7e")}> People in Brazil <strong>are</strong> friendly and welcoming</span>
                            </p>
                        </div>
                        <div className={styles["page65__image-container--first"]}>
                            <img src={pagina65Imagem1} alt="Brazil Image 1" className={styles["page65__image-small"]} />
                        </div>
                    </div>

                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--second"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg65_audio2_1e")}>My Family</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg65_audio2_2e")}>My family is small.</span>
                                <span onClick={() => playAudio("pg65_audio2_3e")}> There <strong>are</strong> four people in my family:</span>
                                <span onClick={() => playAudio("pg65_audio2_4e")}> my father, my mother, my sister, and me.</span>
                                <span onClick={() => playAudio("pg65_audio2_5e")}> My father is tall, and my mother <strong>is</strong> kind.</span> <span onClick={() => playAudio("pg65_audio2_6e")}>My sister <strong>is</strong> funny, and I <strong>am</strong> happy.</span>
                            </p>
                        </div>
                        <div className={styles["page65__image-container--second"]}>
                            <img src={pagina65Imagem2} alt="Brazil Image 2" className={styles["page65__image-small"]} />
                        </div>
                    </div>

                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--third"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg65_audio3_1e")}>School</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => playAudio("pg65_audio3_2e")}>My school is big and colorful.</span>
                                <span onClick={() => playAudio("pg65_audio3_3e")}> There <strong>are</strong> many students and teachers.</span>
                                <span onClick={() => playAudio("pg65_audio3_4e")}> The classrooms <strong>are</strong> bright, and the playground <strong>is</strong> fun.</span>
                                <span onClick={() => playAudio("pg65_audio3_5e")}> I <strong>am</strong> excited to learn every day.</span>
                            </p>
                        </div>
                        <div className={styles["page65__image-container--third"]}>
                            <img src={pagina65Imagem3} alt="School Image 3" className={styles["page65__image-small"]} />
                        </div>
                    </div>
                </main>

                <aside className={styles["page65__aside"]}>
                    <div className={styles["page65__aside-content"]}>
                        <div className={styles["page65__aside-note--first"]}>
                            <img className={styles["page65__aside-note-icon"]} src={pg65IconNotes} alt="Word Bank Icon" />
                            <p><strong>Listening Comprehension and Pronunciation</strong></p>
                        </div>
                        <div className={styles["page65__aside-note--second"]}>
                            <p>
                                Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers express themselves, and try to practice mimicking their pronunciation.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );

};

export default Pagina65;
