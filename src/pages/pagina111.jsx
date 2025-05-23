import React, { useState } from 'react';

import styles from './pagina111.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina111_imagem1 from '../assets/images/pagina111_imagem1.webp';
import pagina111_imagem2 from '../assets/images/pagina111_imagem2.webp';
import pagina111_imagem3 from '../assets/images/pagina111_imagem3.webp';
import pagina111_imagem4 from '../assets/images/pagina111_imagem4.webp';
import pagina111_imagem5 from '../assets/images/pagina111_imagem5.webp';
import pagina111_imagem6 from '../assets/images/pagina111_imagem6.webp';
import pagina111_imagem7 from '../assets/images/pagina111_imagem7.webp';
import pagina111_imagem8 from '../assets/images/pagina111_imagem8.webp';
import pagina111_imagem9 from '../assets/images/pagina111_imagem9.webp';
import pagina111_imagem10 from '../assets/images/pagina111_imagem10.webp';
import pagina111_imagem11 from '../assets/images/pagina111_imagem11.webp';
import pagina111_imagem12 from '../assets/images/pagina111_imagem12.webp';
import pagina111_imagem13 from '../assets/images/pagina111_imagem13.webp';
import pagina111_imagem14 from '../assets/images/pagina111_imagem14.webp';
import pagina111_imagem15 from '../assets/images/pagina111_imagem15.webp';
import pagina111_imagem16 from '../assets/images/pagina111_imagem16.webp';
import pagina111_imagem17 from '../assets/images/pagina111_imagem17.webp';
import pagina111_imagem18 from '../assets/images/pagina111_imagem18.webp';
import pagina111_imagem19 from '../assets/images/pagina111_imagem19.webp';
import pagina111_imagem20 from '../assets/images/pagina111_imagem20.webp';

import global_vocabularye from "../assets/audios/global_vocabularye.mp3";
import global_vocabularyp from "../assets/audios/global_vocabularyp.mp3";
import pg111_audio1 from "../assets/audios/pg111_audio1.mp3";
import pg111_audio2 from "../assets/audios/pg111_audio2.mp3";
import pg111_audio3 from "../assets/audios/pg111_audio3.mp3";
import pg111_audio4 from "../assets/audios/pg111_audio4.mp3";
import pg111_audio5 from "../assets/audios/pg111_audio5.mp3";
import pg111_audio6 from "../assets/audios/pg111_audio6.mp3";
import pg111_audio7 from "../assets/audios/pg111_audio7.mp3";
import pg111_audio8 from "../assets/audios/pg111_audio8.mp3";
import pg111_audio9 from "../assets/audios/pg111_audio9.mp3";
import pg111_audio10 from "../assets/audios/pg111_audio10.mp3";
import pg111_audio11 from "../assets/audios/pg111_audio11.mp3";
import pg111_audio12 from "../assets/audios/pg111_audio12.mp3";
import pg111_audio13 from "../assets/audios/pg111_audio13.mp3";
import pg111_audio14 from "../assets/audios/pg111_audio14.mp3";
import pg111_audio15 from "../assets/audios/pg111_audio15.mp3";
import pg111_audio16 from "../assets/audios/pg111_audio16.mp3";
import pg111_audio17 from "../assets/audios/pg111_audio17.mp3";
import pg111_audio18 from "../assets/audios/pg111_audio18.mp3";
import pg111_audio19 from "../assets/audios/pg111_audio19.mp3";
import pg111_audio20 from "../assets/audios/pg111_audio20.mp3";
import pg111_audio21 from "../assets/audios/pg111_audio21.mp3";

const Pagina111 = () => {

    const audioMap = {
        vocabularye: global_vocabularye,
        vocabularyp: global_vocabularyp,
        pg111_audio1, pg111_audio2, pg111_audio3, pg111_audio4, pg111_audio5,
        pg111_audio6, pg111_audio7, pg111_audio8, pg111_audio9, pg111_audio10,
        pg111_audio11, pg111_audio12, pg111_audio13, pg111_audio14, pg111_audio15,
        pg111_audio16, pg111_audio17, pg111_audio18, pg111_audio19, pg111_audio20,
        pg111_audio21
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
            <div className={styles["page111__container"]}>
                <header className={styles["page111__header"]}>
                    <h1 className={styles["page111__header-h1"]}>
                        Vocabulary
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page111__audio-icon"]}
                            onClick={() => playAudio("vocabularye")}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page111__audio-icon"]}
                            onClick={() => playAudio("vocabularyp")}
                        />
                    </h1>
                    <div>
                        <h2 className={styles["page111__header-h2"]} onClick={() => playAudio("pg111_audio1")}>
                            Clothing and Accessories
                        </h2>
                        <p>Roupas e acessórios</p>
                    </div>
                </header>

                <main className={styles["page111__main"]}>
                    <div className={styles["page111__images"]}>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem1} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio2")}>cap</p>
                            <p className={styles["page111__paragraph--black"]}>boné</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem2} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio3")}>hat</p>
                            <p className={styles["page111__paragraph--black"]}>chapéu</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem3} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio4")}>sneakers</p>
                            <p className={styles["page111__paragraph--black"]}>tênis</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem4} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio5")}>sandals</p>
                            <p className={styles["page111__paragraph--black"]}>sandálias</p>
                        </div>
                    </div>
                    <div className={styles["page111__images"]}>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem5} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio6")}>boxers</p>
                            <p className={styles["page111__paragraph--black"]}>cueca boxe</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem6} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio7")}>lingerie</p>
                            <p className={styles["page111__paragraph--black"]}>lingerie</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem7} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio8")}>socks</p>
                            <p className={styles["page111__paragraph--black"]}>meias</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem8} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio9")}>panties</p>
                            <p className={styles["page111__paragraph--black"]}>calçinha</p>
                        </div>
                    </div>

                    <div className={styles["page111__images"]}>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem9} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio10")}>dress</p>
                            <p className={styles["page111__paragraph--black"]}>vestido</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem10} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio11")}>top</p>
                            <p className={styles["page111__paragraph--black"]}>top feminino</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem11} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio12")}>wallet</p>
                            <p className={styles["page111__paragraph--black"]}>carteira</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem12} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio13")}>purse/handbag</p>
                            <p className={styles["page111__paragraph--black"]}>carteira feminina</p>
                        </div>
                    </div>
                    <div className={styles["page111__images"]}>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem13} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio14")}>flip-flops</p>
                            <p className={styles["page111__paragraph--black"]}>chinelo</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem14} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio15")}>sweatshirt</p>
                            <p className={styles["page111__paragraph--black"]}>moletom</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem15} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio16")}>coat</p>
                            <p className={styles["page111__paragraph--black"]}>casaco</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem16} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio17")}>skirt</p>
                            <p className={styles["page111__paragraph--black"]}>saia</p>
                        </div>
                    </div>
                    <div className={styles["page111__images"]}>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem17} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio18")}>sweater</p>
                            <p className={styles["page111__paragraph--black"]}>suéter</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem18} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio19")}>suit</p>
                            <p className={styles["page111__paragraph--black"]}>terno</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem19} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio20")}>jacket</p>
                            <p className={styles["page111__paragraph--black"]}>jaqueta</p>
                        </div>
                        <div>
                            <img className={styles["page111__image"]} src={pagina111_imagem20} alt="" />
                            <p className={styles["page111__paragraph--red"]} onClick={() => playAudio("pg111_audio21")}>overcoat</p>
                            <p className={styles["page111__paragraph--black"]}>sobretudo</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
export default Pagina111;
