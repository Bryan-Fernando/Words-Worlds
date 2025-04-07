import React, { useState } from 'react';

import styles from './pagina126.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg124_audio1e from '../assets/audios/pg94_audio1e.mp3';
import pg124_audio1p from '../assets/audios/pg94_audio1p.mp3';
import pg124_audio2 from '../assets/audios/pg94_audio2.mp3';
import pg124_audio3 from '../assets/audios/pg94_audio3.mp3';
import pg124_audio4 from '../assets/audios/pg94_audio4.mp3';
import pg124_audio5 from '../assets/audios/pg94_audio5.mp3';
import pg124_audio6 from '../assets/audios/pg94_audio6.mp3';
import pg124_audio7 from '../assets/audios/pg94_audio7.mp3';
import pg124_audio8 from '../assets/audios/pg94_audio8.mp3';
import pg124_audio9 from '../assets/audios/pg94_audio9.mp3';
import pg124_audio10 from '../assets/audios/pg94_audio10.mp3';
import pg124_audio11 from '../assets/audios/pg94_audio11.mp3';

const Pagina126 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg124_audio1e,
        pg124_audio1p,
        pg124_audio2,
        pg124_audio3,
        pg124_audio4,
        pg124_audio5,
        pg124_audio6,
        pg124_audio7,
        pg124_audio8,
        pg124_audio9,
        pg124_audio10,
        pg124_audio11
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;

            const isCorrect = value.trim().toLowerCase() === correctAnswers[index].toLowerCase();

            return isCorrect;
        });
        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    return (
        <div className={styles["page126__container"]}>
            <header className={styles["page126__header"]}>
                <h1 className={styles["page126__title"]}>
                    Grammar - <spam className={styles["page126__text-black"]}>Would</spam>
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page126__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page126__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page126__main"]}>

                <div>
                    <div className={styles["page126__titulo-table"]}>
                        <h3>Forma Contraída: Negativa</h3>
                    </div>
                    <div className={styles.pg126tabelaNegativaContainer}>
                        <div className={styles.pg126tableHeaderNegativa}>Forma contraída: Negativa</div>
                        <table className={styles.pg126styledTableNegativa}>
                            <thead className={styles.pg126Thead}>
                                <tr className={styles.pg126celulatable}>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th> <span className={styles["highlight"]}>Not</span> <br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                                <tr className={styles.pg126celulatable}>
                                    <th className={styles["page126__celulacolor"]}></th>
                                    <th className={styles["page126__celulacolor"]}>I</th>
                                    <th className={styles["page126__celulacolor"]}>wouldn’t</th>
                                    <th className={styles["page126__celulacolor"]}></th>
                                    <th className={styles["page126__celulacolor"]}>go out</th>
                                    <th className={styles["page126__celulacolor"]}>in this heavy rain.</th>
                                </tr>
                                <tr className={styles.pg126celulatable}>
                                    <th className={styles["page126__celulacolor"]}></th>
                                    <th className={styles["page126__celulacolor"]}>I</th>
                                    <th className={styles["page126__celulacolor"]}>would</th>
                                    <th className={styles["page126__celulacolor"]}>not</th>
                                    <th className={styles["page126__celulacolor"]}>go out</th>
                                    <th className={styles["page126__celulacolor"]}>in this heavy rain. ( Antiquado )</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                <div>
                    <div className={styles["page126__titulo-table"]}>
                        <h3>Forma Contraída: Interrogativa Negativa</h3>
                    </div>
                    <div className={styles["page126__table-interrogative-container"]}>
                        <div className={styles["page126__table-header-interrogative"]}>Forma contraída: Interrogativa Negativa</div>
                        <table className={styles["page126__styled-table-interrogative"]}>
                            <thead className={styles["page126__thead"]}>
                                <tr className={styles.pg126celulatable}>
                                    <th>Palavras <br /> Interrogativas</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th><span className={styles["highlight"]}>Not</span> <br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                                <tr className={styles.pg126celulatable}>
                                    <th className={styles["page126__celulacolor"]}></th>
                                    <th className={styles["page126__celulacolor"]}>Wouldn’t</th>
                                    <th className={styles["page126__celulacolor"]}>you</th>
                                    <th className={styles["page126__celulacolor"]}></th>
                                    <th className={styles["page126__celulacolor"]}>like</th>
                                    <th className={styles["page126__celulacolor"]}>some tea ?</th>
                                </tr>
                                <tr className={styles.pg126celulatable}>
                                    <th className={styles["page126__celulacolor"]}></th>
                                    <th className={styles["page126__celulacolor"]}>Would</th>
                                    <th className={styles["page126__celulacolor"]}>you</th>
                                    <th className={styles["page126__celulacolor"]}>not</th>
                                    <th className={styles["page126__celulacolor"]}>like</th>
                                    <th className={styles["page126__celulacolor"]}>some tea ? ( Antiquado )</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Pagina126;