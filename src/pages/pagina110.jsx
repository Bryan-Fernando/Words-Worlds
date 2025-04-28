import React from 'react';

import styles from './pagina110.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina110_imagem1 from '../assets/images/pagina110_imagem1.webp';
import pagina110_imagem2 from '../assets/images/pagina110_imagem2.webp';

import global_vocabularye from '../assets/audios/global_vocabularye.mp3';
import global_vocabularyp from '../assets/audios/global_vocabularyp.mp3';
import pg110_audio1 from '../assets/audios/pg110_audio1.mp3';
import pg110_audio2 from '../assets/audios/pg110_audio2.mp3';
import pg110_audio3 from '../assets/audios/pg110_audio3.mp3';
import pg110_audio4 from '../assets/audios/pg110_audio4.mp3';
import pg110_audio5 from '../assets/audios/pg110_audio5.mp3';
import pg110_audio6 from '../assets/audios/pg110_audio6.mp3';
import pg110_audio7 from '../assets/audios/pg110_audio7.mp3';
import pg110_audio8 from '../assets/audios/pg110_audio8.mp3';
import pg110_audio9 from '../assets/audios/pg110_audio9.mp3';
import pg110_audio10 from '../assets/audios/pg110_audio10.mp3';
import pg110_audio11 from '../assets/audios/pg110_audio11.mp3';
import pg110_audio12 from '../assets/audios/pg110_audio12.mp3';
import pg110_audio13 from '../assets/audios/pg110_audio13.mp3';
import pg110_audio14 from '../assets/audios/pg110_audio14.mp3';
import pg110_audio15 from '../assets/audios/pg110_audio15.mp3';
import pg110_audio16 from '../assets/audios/pg110_audio16.mp3';
import pg110_audio17 from '../assets/audios/pg110_audio17.mp3';
import pg110_audio18 from '../assets/audios/pg110_audio18.mp3';

const labelsWomen = [
    { text: 'bracelet\n(pulseira)', top: '8%', left: '9%', audio: "pg110_audio2" },
    { text: 'glasses\n(óculos)', top: '10%', left: '77%', audio: "pg110_audio3" },
    { text: 'earrings\n(brincos)', top: '17%', left: '65%', audio: "pg110_audio4" },
    { text: 't-shirt\n(camiseta)', top: '26%', left: '20%', audio: "pg110_audio5" },
    { text: 'jacket\n(jaqueta)', top: '31%', left: '78%', audio: "pg110_audio6" },
    { text: 'handbag\n(bolsa de mão)', top: '37%', left: '13%', audio: "pg110_audio7" },
    { text: 'shorts\n(Bermuda/shorts)', top: '45%', left: '74%', audio: "pg110_audio8" },
    { text: 'boots\n(botas)', top: '77%', left: '69%', audio: "pg110_audio9" }
];


const labelsMen = [
    { text: 'blazer\n(blazer)', top: '27%', left: '73%', backgroundColor: '#B9DCEF', audio: "pg110_audio10" },
    { text: 'shirt\n(camisa)', top: '22%', left: '28%', backgroundColor: '#B9DCEF', audio: "pg110_audio11" },
    { text: 'tie\n(gravata)', top: '31.3%', left: '29%', backgroundColor: '#B9DCEF', audio: "pg110_audio12" },
    { text: 'belt\n(cinto)', top: '41.5%', left: '27.3%', backgroundColor: '#B9DCEF', audio: "pg110_audio13" },
    { text: 'wrist watch\n(relógio de pulso)', top: '44%', left: '78%', width: '25%', backgroundColor: '#B9DCEF', audio: "pg110_audio14" },
    { text: 'sport pants\n(calças esportivas)', top: '58%', left: '70%', width: '25%', backgroundColor: '#B9DCEF', audio: "pg110_audio15" },
    { text: 'shoes\n(sapatos)', top: '85%', left: '75%', backgroundColor: '#B9DCEF', audio: "pg110_audio16" }
];


const Label = ({ text, top, left, backgroundColor, audio }) => (
    <div
        className={styles["page110__label"]}
        style={{ top, left, backgroundColor, position: 'absolute' }}
    >
        <p
            dangerouslySetInnerHTML={{ __html: text }}
            onClick={() => playAudio(audio)}
            style={{ cursor: "pointer" }}
        ></p>
        <div className={styles["page110__arrow"]}></div>
    </div>
);




const audioMap = {
    global_vocabularye, global_vocabularyp,
    pg110_audio1, pg110_audio2, pg110_audio3, pg110_audio4,
    pg110_audio5, pg110_audio6, pg110_audio7, pg110_audio8,
    pg110_audio9, pg110_audio10, pg110_audio11, pg110_audio12,
    pg110_audio13, pg110_audio14, pg110_audio15, pg110_audio16,
    pg110_audio17, pg110_audio18
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


const Pagina110 = () => {
    return (
        <div className={styles["page110__container"]}>
            <header className={styles["page110__header"]}>
                <h1 className={styles["page110__header-h1"]}>
                    Vocabulary
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page110__audio-icon"]}
                        onClick={() => playAudio("global_vocabularye")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page110__audio-icon"]}
                        onClick={() => playAudio("global_vocabularyp")}
                    />
                </h1>
                <div>
                    <h2 onClick={() => playAudio("pg110_audio1")} style={{ cursor: "pointer" }}>
                        Clothing
                    </h2>
                    <p>Roupas</p>
                </div>
            </header>

            <main className={styles["page110__main"]}>
                <div className={styles["page110__container-image-a"]}>
                    <img className={styles["page110__image"]} src={pagina110_imagem1} alt="Women's clothing" />
                    {labelsWomen.map((label, index) => (
                        <Label key={index} {...label} />
                    ))}
                    <div className={styles["page110__box-caption"]}>
                        <p onClick={() => playAudio("pg110_audio17")} style={{ cursor: 'pointer' }}>
                            Women’s clothing (Roupas femininas)
                        </p>
                    </div>
                </div>
                <div className={styles["page110__container-image-b"]}>
                    <img className={styles["page110__image"]} src={pagina110_imagem2} alt="Men's clothing" />
                    {labelsMen.map((label, index) => (
                        <Label key={index} {...label} />
                    ))}
                    <div className={styles["page110__box-caption"]}>
                        <p onClick={() => playAudio("pg110_audio18")} style={{ cursor: 'pointer' }}>
                            Men’s clothing (Roupas masculinas)
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina110;