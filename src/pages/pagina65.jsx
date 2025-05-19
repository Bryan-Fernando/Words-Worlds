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
import pg65_audio1_1p from "../assets/audios/pg65_audio1_1p.mp3";
import pg65_audio1_2p from "../assets/audios/pg65_audio1_2p.mp3";
import pg65_audio1_3p from "../assets/audios/pg65_audio1_3p.mp3";
import pg65_audio1_4p from "../assets/audios/pg65_audio1_4p.mp3";
import pg65_audio1_5p from "../assets/audios/pg65_audio1_5p.mp3";
import pg65_audio1_6p from "../assets/audios/pg65_audio1_6p.mp3";
import pg65_audio1_7p from "../assets/audios/pg65_audio1_7p.mp3";
import pg65_audio2_1e from "../assets/audios/pg65_audio2_1e.mp3";
import pg65_audio2_2e from "../assets/audios/pg65_audio2_2e.mp3";
import pg65_audio2_3e from "../assets/audios/pg65_audio2_3e.mp3";
import pg65_audio2_4e from "../assets/audios/pg65_audio2_4e.mp3";
import pg65_audio2_5e from "../assets/audios/pg65_audio2_5e.mp3";
import pg65_audio2_6e from "../assets/audios/pg65_audio2_6e.mp3";
import pg65_audio2_1p from "../assets/audios/pg65_audio2_1p.mp3";
import pg65_audio2_2p from "../assets/audios/pg65_audio2_2p.mp3";
import pg65_audio2_3p from "../assets/audios/pg65_audio2_3p.mp3";
import pg65_audio2_4p from "../assets/audios/pg65_audio2_4p.mp3";
import pg65_audio2_5p from "../assets/audios/pg65_audio2_5p.mp3";
import pg65_audio2_6p from "../assets/audios/pg65_audio2_6p.mp3";
import pg65_audio3_1e from "../assets/audios/pg65_audio3_1e.mp3";
import pg65_audio3_2e from "../assets/audios/pg65_audio3_2e.mp3";
import pg65_audio3_3e from "../assets/audios/pg65_audio3_3e.mp3";
import pg65_audio3_4e from "../assets/audios/pg65_audio3_4e.mp3";
import pg65_audio3_5e from "../assets/audios/pg65_audio3_5e.mp3";
import pg65_audio3_1p from "../assets/audios/pg65_audio3_1p.mp3";
import pg65_audio3_2p from "../assets/audios/pg65_audio3_2p.mp3";
import pg65_audio3_3p from "../assets/audios/pg65_audio3_3p.mp3";
import pg65_audio3_4p from "../assets/audios/pg65_audio3_4p.mp3";
import pg65_audio3_5p from "../assets/audios/pg65_audio3_5p.mp3";

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
        pg65_audio1_1p: pg65_audio1_1p,
        pg65_audio1_2p: pg65_audio1_2p,
        pg65_audio1_3p: pg65_audio1_3p,
        pg65_audio1_4p: pg65_audio1_4p,
        pg65_audio1_5p: pg65_audio1_5p,
        pg65_audio1_6p: pg65_audio1_6p,
        pg65_audio1_7p: pg65_audio1_7p,
        pg65_audio2_1e: pg65_audio2_1e,
        pg65_audio2_2e: pg65_audio2_2e,
        pg65_audio2_3e: pg65_audio2_3e,
        pg65_audio2_4e: pg65_audio2_4e,
        pg65_audio2_5e: pg65_audio2_5e,
        pg65_audio2_6e: pg65_audio2_6e,
        pg65_audio2_1p: pg65_audio2_1p,
        pg65_audio2_2p: pg65_audio2_2p,
        pg65_audio2_3p: pg65_audio2_3p,
        pg65_audio2_4p: pg65_audio2_4p,
        pg65_audio2_5p: pg65_audio2_5p,
        pg65_audio2_6p: pg65_audio2_6p,
        pg65_audio3_1e: pg65_audio3_1e,
        pg65_audio3_2e: pg65_audio3_2e,
        pg65_audio3_3e: pg65_audio3_3e,
        pg65_audio3_4e: pg65_audio3_4e,
        pg65_audio3_5e: pg65_audio3_5e,
        pg65_audio3_1p: pg65_audio3_1p,
        pg65_audio3_2p: pg65_audio3_2p,
        pg65_audio3_3p: pg65_audio3_3p,
        pg65_audio3_4p: pg65_audio3_4p,
        pg65_audio3_5p: pg65_audio3_5p,
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
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    Getting to Know Brazil
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio1_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio1_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    Brazil is a beautiful country in South America.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio1_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio1_2p")}
                                    />
                                </span>

                                <span>
                                    It <strong>is</strong> famous for its beautiful beaches
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio1_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio1_3p")}
                                    />
                                </span>

                                <span>
                                    culturally diverse,
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio1_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio1_4p")}
                                    />
                                </span>

                                <span>
                                    and delicious food.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio1_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio1_5p")}
                                    />
                                </span>

                                <span>
                                    The official language of Brazil is Portuguese.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio1_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio1_6p")}
                                    />
                                </span>

                                <span>
                                    People in Brazil <strong>are</strong> friendly and welcoming
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio1_7e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio1_7p")}
                                    />
                                </span>
                            </p>
                        </div>

                        <div className={styles["page65__image-container--first"]}>
                            <img src={pagina65Imagem1} alt="Brazil Image 1" className={styles["page65__image-small"]} />
                        </div>
                    </div>

                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--second"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My Family
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio2_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio2_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My family is small.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio2_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio2_2p")}
                                    />
                                </span>

                                <span>
                                    There <strong>are</strong> four people in my family:
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio2_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio2_3p")}
                                    />
                                </span>

                                <span>
                                    my father, my mother, my sister, and me.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio2_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio2_4p")}
                                    />
                                </span>

                                <span>
                                    My father is tall, and my mother <strong>is</strong> kind.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio2_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio2_5p")}
                                    />
                                </span>

                                <span>
                                    My sister <strong>is</strong> funny, and I <strong>am</strong> happy.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio2_6e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio2_6p")}
                                    />
                                </span>
                            </p>
                        </div>

                        <div className={styles["page65__image-container--second"]}>
                            <img src={pagina65Imagem2} alt="Brazil Image 2" className={styles["page65__image-small"]} />
                        </div>
                    </div>

                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--third"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    School
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio3_1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio3_1p")}
                                    />
                                </span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    My school is big and colorful.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio3_2e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio3_2p")}
                                    />
                                </span>

                                <span>
                                    There <strong>are</strong> many students and teachers.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio3_3e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio3_3p")}
                                    />
                                </span>

                                <span>
                                    The classrooms <strong>are</strong> bright, and the playground <strong>is</strong> fun.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio3_4e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio3_4p")}
                                    />
                                </span>

                                <span>
                                    I <strong>am</strong> excited to learn every day.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        className={styles["page65__audio-icon"]}
                                        onClick={() => playAudio("pg65_audio3_5e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Play Portuguese Audio"
                                        className={styles["page65__audio-iconP"]}
                                        onClick={() => playAudio("pg65_audio3_5p")}
                                    />
                                </span>
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
