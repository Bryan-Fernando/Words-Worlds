import React from 'react';

import styles from './pagina90.module.css';

import pagina90_imagem1 from '../assets/images/pagina90_imagem1.webp';
import pagina90_imagem2 from '../assets/images/pagina90_imagem2.webp';
import pagina90_imagem3 from '../assets/images/pagina90_imagem3.webp';
import pagina90_imagem4 from '../assets/images/pagina90_imagem4.webp';
import pagina90_imagem5 from '../assets/images/pagina90_imagem5.webp';
import pagina90_imagem6 from '../assets/images/pagina90_imagem6.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import pg90_audio1 from '../assets/audios/pg90_audio1.mp3';
import pg90_audio2 from '../assets/audios/pg90_audio2.mp3';
import pg90_audio3 from '../assets/audios/pg90_audio3.mp3';
import pg90_audio4 from '../assets/audios/pg90_audio4.mp3';
import pg90_audio5 from '../assets/audios/pg90_audio5.mp3';
import pg90_audio6 from '../assets/audios/pg90_audio6.mp3';

const Pagina90 = () => {

    const audioMap = {
        global_grammar,
        pg90_audio1,
        pg90_audio2,
        pg90_audio3,
        pg90_audio4,
        pg90_audio5,
        pg90_audio6
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles["page90__container"]}>
            <header className={styles["page90__header"]}>
                <h1 className={styles["page90__title"]}>
                    Grammar
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page90__audio-icon"]}
                        onClick={() => playAudio("global_grammar")}
                    />
                </h1>
                <div>
                    <h2 className={styles["page90__subtitle"]}>No Indefinite Articles (Plural) - Vocabulary</h2>
                    <p className={styles["page90__description"]}>Plural sem artigos indefinidos (um/uma)</p>
                </div>
            </header>
            <main className={styles["page90__main"]}>
                <div className={styles["page90__images-container"]}>
                    <div className={styles["page90__images-row"]}>
                        <div>
                            <img className={styles["page90__image"]} src={pagina90_imagem1} alt="" />
                            <p className={styles["page90__text--red"]}>
                                sneakers
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page90__audio-icon"]}
                                    onClick={() => playAudio("pg90_audio1")}
                                />
                            </p>
                            <p className={styles["page90__text--black"]}>tênis</p>
                        </div>
                        <div>
                            <img className={styles["page90__image"]} src={pagina90_imagem2} alt="" />
                            <p className={styles["page90__text--red"]}>
                                flip-flops
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page90__audio-icon"]}
                                    onClick={() => playAudio("pg90_audio2")}
                                />
                            </p>
                            <p className={styles["page90__text--black"]}>chinelos</p>
                        </div>
                        <div>
                            <img className={styles["page90__image"]} src={pagina90_imagem3} alt="" />
                            <p className={styles["page90__text--red"]}>
                                sunglasses
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page90__audio-icon"]}
                                    onClick={() => playAudio("pg90_audio3")}
                                />
                            </p>
                            <p className={styles["page90__text--black"]}>óculos de sol</p>
                        </div>
                    </div>

                    <div className={styles["page90__images-row"]}>
                        <div>
                            <img className={styles["page90__image"]} src={pagina90_imagem4} alt="" />
                            <p className={styles["page90__text--red"]}>
                                pants
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page90__audio-icon"]}
                                    onClick={() => playAudio("pg90_audio4")}
                                />
                            </p>
                            <p className={styles["page90__text--black"]}>calças</p>
                        </div>
                        <div>
                            <img className={styles["page90__image"]} src={pagina90_imagem5} alt="" />
                            <p className={styles["page90__text--red"]}>
                                gloves
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page90__audio-icon"]}
                                    onClick={() => playAudio("pg90_audio5")}
                                />
                            </p>
                            <p className={styles["page90__text--black"]}>luvas</p>
                        </div>
                        <div>
                            <img className={styles["page90__image"]} src={pagina90_imagem6} alt="" />
                            <p className={styles["page90__text--red"]}>
                                sandals
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page90__audio-icon"]}
                                    onClick={() => playAudio("pg90_audio6")}
                                />
                            </p>
                            <p className={styles["page90__text--black"]}>sandálias</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina90;
