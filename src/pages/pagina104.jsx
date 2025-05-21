import React, { useState } from 'react';

import styles from './pagina104.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina104_imagem1 from '../assets/images/pagina104_imagem1.webp';

import pg104_audio1e from '../assets/audios/pg104_audio1e.mp3';
import pg104_audio1p from '../assets/audios/pg104_audio1p.mp3';
import pg104_audio2 from '../assets/audios/pg104_audio2.mp3';
import pg104_audio3 from '../assets/audios/pg104_audio3.mp3';
import pg104_audio4 from '../assets/audios/pg104_audio4.mp3';
import pg104_audio5 from '../assets/audios/pg104_audio5.mp3';

const audioMap = {
    pg104_audio1e,
    pg104_audio1p,
    pg104_audio2,
    pg104_audio3,
    pg104_audio4,
    pg104_audio5
};

const Pagina104 = () => {
    const [inputValues, setInputValues] = useState(
        Array(4).fill({ en: '', pt: '' })
    );


    const handleInputChange = (value, index, lang) => {
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = {
                ...newValues[index],
                [lang]: value
            };
            return newValues;
        });
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
        <div className={styles["page104__container"]}>
            <header className={styles["page104__header"]}>
                <h1 className={styles["page104__h1"]}>
                    Useful Expressions
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page104__header-icon"]}
                        onClick={() => playAudio("pg104_audio1e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page104__header-icon"]}
                        onClick={() => playAudio("pg104_audio1p")}
                    />
                </h1>
            </header>

            <main className={styles["page104__main"]}>
                <div className={styles["page104__container--questoes"]}>
                    <div className={styles["page104__questions"]}>
                        {[
                            ["How do you say", "in English?", "(Como se diz", "em inglês?)"],
                            ["How do you spell", "?", "(Como se soletra", "?)"],
                            ["What is the meaning of", "?", "(Qual é o significado de", "?)"],
                            ["What does", "mean?", "(O que", "significa?)"]
                        ].map((question, index) => {
                            const audioKey = `pg104_audio${index + 2}`;
                            return (
                                <div key={index} className={styles["page104__question"]}>
                                    <div>
                                        <span className={styles["page104__text--red"]}><em>{question[0]}</em></span>
                                        <input
                                            type="text"
                                            value={inputValues[index].en}
                                            onChange={(e) => handleInputChange(e.target.value, index, 'en')}
                                            className={styles["page104__input--box"]}
                                        />
                                        <span className={styles["page104__text--red"]}><em>{question[1]}</em></span>
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page104__additional--icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                    </div>
                                    <div>
                                        <span className={styles["page104__text--black"]}><strong>{question[2]}</strong></span>
                                        <input
                                            type="text"
                                            value={inputValues[index].pt}
                                            onChange={(e) => handleInputChange(e.target.value, index, 'pt')}
                                            className={styles["page104__input--box"]}
                                            placeholder={index === 0 ? "escola" : "school"}
                                        />
                                        <span className={styles["page104__text--black"]}><strong>{question[3]}</strong></span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles["page104__container--imagem"]}>
                        <img className={styles["page104__imagem"]} src={pagina104_imagem1} alt="Learning" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina104;
