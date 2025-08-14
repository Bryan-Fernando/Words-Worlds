import React, { useState } from 'react';

import styles from './pagina3.module.css';

import eng_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pagina3_imagem1 from '../assets/images/pagina3_imagem1.gif';
import pagina3_imagem2 from '../assets/images/pagina3_imagem2.gif';
import pagina3_imagem3 from '../assets/images/pagina3_imagem3.gif';
import pagina3_imagem4 from '../assets/images/pagina3_imagem4.gif';

import pagina3_imagem1_img from '../assets/images/pagina3_imagem1.webp';
import pagina3_imagem2_img from '../assets/images/pagina3_imagem2.webp';
import pagina3_imagem3_img from '../assets/images/pagina3_imagem3.webp';
import pagina3_imagem4_img from '../assets/images/pagina3_imagem4.webp';

import pg3Audio1e from '../assets/audios/pg3_audio1e.mp3';
import pg3Audio1p from '../assets/audios/pg3_audio1p.mp3';
import pg3Audio2e from '../assets/audios/pg3_audio2e.mp3';
import pg3Audio2p from '../assets/audios/pg3_audio2p.mp3';
import pg3Audio3e from '../assets/audios/pg3_audio3e.mp3';
import pg3Audio3p from '../assets/audios/pg3_audio3p.mp3';
import pg3Audio4e from '../assets/audios/pg3_audio4e.mp3';
import pg3Audio4p from '../assets/audios/pg3_audio4p.mp3';
import pg3Audio5e from '../assets/audios/pg3_audio5e.mp3';
import pg3Audio5p from '../assets/audios/pg3_audio5p.mp3';
import pg3Audio6e from '../assets/audios/pg3_audio6e.mp3';
import pg3Audio6p from '../assets/audios/pg3_audio6p.mp3';

const Pagina3 = () => {
    const [currentAudio, setCurrentAudio] = useState(null);
    const [activeGif, setActiveGif] = useState(null);

    const playAudio = (audioSrc, imageId) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const newAudio = new Audio(audioSrc);

        if (imageId) {
            setActiveGif(imageId);

            newAudio.onended = () => {
                setActiveGif(null);
            };
        }

        newAudio.play();
        setCurrentAudio(newAudio);
    };

    return (
        <div className={styles["page3"]}>
            <div className={styles["page3__container"]}>
                <header className={styles["page3__header"]}>
                    <h1 className={styles["page3__header-title"]}>
                        People
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page3__icon"]}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg3Audio1e);
                            }}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page3__icon"]}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg3Audio1p);
                            }}
                        />
                    </h1>
                </header>

                <main className={styles["page3__main"]}>
                    <img
                        src={activeGif === 1 ? pagina3_imagem1 : pagina3_imagem1_img}
                        alt="Person 1"
                        className={styles["page3__image"]}
                    />
                    <img
                        src={activeGif === 2 ? pagina3_imagem2 : pagina3_imagem2_img}
                        alt="Person 2"
                        className={styles["page3__image"]}
                    />
                    <img
                        src={activeGif === 3 ? pagina3_imagem3 : pagina3_imagem3_img}
                        alt="Person 3"
                        className={styles["page3__image"]}
                    />
                    <img
                        src={activeGif === 4 ? pagina3_imagem4 : pagina3_imagem4_img}
                        alt="Person 4"
                        className={styles["page3__image"]}
                    />
                </main>

                <aside className={styles["page3__aside"]}>
                    <div className={styles["page3__aside-header"]}>
                        <h2 className={styles["page3__aside-title"]}>
                            Greetings and Introductions
                            <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page3__icon"]}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(pg3Audio2e);
                                }}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page3__icon"]}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(pg3Audio2p);
                                }}
                            />
                        </h2>
                    </div>

                    <div className={styles["page3__aside-list"]}>
                        <ol>
                            <li className={styles["page3__list-item"]}>
                                Hi, I am Ana Tereza. I am a college veterinary student.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio3e, 1);
                                    }}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio3p, 1);
                                    }}
                                />
                            </li>
                            <li className={styles["page3__list-item"]}>
                                Hello, I am Andrei. I am a University Teacher.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio4e, 2);
                                    }}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio4p, 2);
                                    }}
                                />
                            </li>
                            <li className={styles["page3__list-item"]}>
                                Hi, I am Emilia. I am a lawyer.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio5e, 3);
                                    }}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio5p, 3);
                                    }}
                                />
                            </li>
                            <li className={styles["page3__list-item"]}>
                            Hiya! I am Rafael, a 19-year-old English tutor.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio6e, 4);
                                    }}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page3__icon"]}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio6p, 4);
                                    }}
                                />
                            </li>
                        </ol>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina3;
