import React, { useState } from 'react';

import styles from './pagina101.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import Pagina101_imagem1 from '../assets/images/pagina101_imagem1.webp';
import Pagina101_imagem2 from '../assets/images/pagina101_imagem2.webp';

import pg101_audio1e from '../assets/audios/pg101_audio1e.mp3';
import pg101_audio1p from '../assets/audios/pg101_audio1p.mp3';
import pg101_audio12e from '../assets/audios/pg101_audio12e.mp3';
import pg101_audio12p from '../assets/audios/pg101_audio12p.mp3';
import pg101_audio2 from '../assets/audios/pg101_audio2.mp3';
import pg101_audio3 from '../assets/audios/pg101_audio3.mp3';
import pg101_audio4 from '../assets/audios/pg101_audio4.mp3';
import pg101_audio5 from '../assets/audios/pg101_audio5.mp3';
import pg101_audio6 from '../assets/audios/pg101_audio6.mp3';
import pg101_audio7 from '../assets/audios/pg101_audio7.mp3';
import pg101_audio8 from '../assets/audios/pg101_audio8.mp3';
import pg101_audio9 from '../assets/audios/pg101_audio9.mp3';
import pg101_audio10 from '../assets/audios/pg101_audio10.mp3';
import pg101_audio11 from '../assets/audios/pg101_audio11.mp3';
import pg101_audio2p from '../assets/audios/pg101_audio2p.mp3';
import pg101_audio3p from '../assets/audios/pg101_audio3p.mp3';
import pg101_audio4p from '../assets/audios/pg101_audio4p.mp3';
import pg101_audio5p from '../assets/audios/pg101_audio5p.mp3';
import pg101_audio6p from '../assets/audios/pg101_audio6p.mp3';
import pg101_audio7p from '../assets/audios/pg101_audio7p.mp3';
import pg101_audio8p from '../assets/audios/pg101_audio8p.mp3';
import pg101_audio9p from '../assets/audios/pg101_audio9p.mp3';
import pg101_audio10p from '../assets/audios/pg101_audio10p.mp3';
import pg101_audio11p from '../assets/audios/pg101_audio11p.mp3';
import pg101_audio13 from '../assets/audios/pg101_audio13.mp3';
import pg101_audio14 from '../assets/audios/pg101_audio14.mp3';
import pg101_audio15 from '../assets/audios/pg101_audio15.mp3';
import pg101_audio16 from '../assets/audios/pg101_audio16.mp3';
import pg101_audio17 from '../assets/audios/pg101_audio17.mp3';
import pg101_audio18 from '../assets/audios/pg101_audio18.mp3';
import pg101_audio19 from '../assets/audios/pg101_audio19.mp3';
import pg101_audio20 from '../assets/audios/pg101_audio20.mp3';
import pg101_audio21 from '../assets/audios/pg101_audio21.mp3';
import pg101_audio22 from '../assets/audios/pg101_audio22.mp3';
import pg101_audio13p from '../assets/audios/pg101_audio13p.mp3';
import pg101_audio14p from '../assets/audios/pg101_audio14p.mp3';
import pg101_audio15p from '../assets/audios/pg101_audio15p.mp3';
import pg101_audio16p from '../assets/audios/pg101_audio16p.mp3';
import pg101_audio17p from '../assets/audios/pg101_audio17p.mp3';
import pg101_audio18p from '../assets/audios/pg101_audio18p.mp3';
import pg101_audio19p from '../assets/audios/pg101_audio19p.mp3';
import pg101_audio20p from '../assets/audios/pg101_audio20p.mp3';
import pg101_audio21p from '../assets/audios/pg101_audio21p.mp3';
import pg101_audio22p from '../assets/audios/pg101_audio22p.mp3';

// Mapeamento de Áudio
const audioMap = {
    pg101_audio1e,
    pg101_audio1p,
    pg101_audio2,
    pg101_audio3,
    pg101_audio4,
    pg101_audio5,
    pg101_audio6,
    pg101_audio7,
    pg101_audio8,
    pg101_audio9,
    pg101_audio10,
    pg101_audio11,
    pg101_audio2p,
    pg101_audio3p,
    pg101_audio4p,
    pg101_audio5p,
    pg101_audio6p,
    pg101_audio7p,
    pg101_audio8p,
    pg101_audio9p,
    pg101_audio10p,
    pg101_audio11p,
    pg101_audio12e,
    pg101_audio12p,
    pg101_audio13,
    pg101_audio14,
    pg101_audio15,
    pg101_audio16,
    pg101_audio17,
    pg101_audio18,
    pg101_audio19,
    pg101_audio20,
    pg101_audio21,
    pg101_audio22,
    pg101_audio13p,
    pg101_audio14p,
    pg101_audio15p,
    pg101_audio16p,
    pg101_audio17p,
    pg101_audio18p,
    pg101_audio19p,
    pg101_audio20p,
    pg101_audio21p,
    pg101_audio22p
};

const Pagina101 = () => {
    const [inputValues, setInputValues] = useState(Array(20).fill(''));
    const [results, setResults] = useState(Array(20).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'am', 'is', 'are', 'are', 'is', 'is', 'is', 'are', 'are', 'is',
        'am not', 'is not', 'are not', 'are not', 'is not', 'is not', 'is not', 'is not', 'are not', 'is not'
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            const trimmedValue = value.trim().toLowerCase();
            const correctValue = correctAnswers[index].toLowerCase();
            return trimmedValue !== "" && trimmedValue === correctValue;
        });

        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        setInputValues(prevValues => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    };


    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.playbackRate = isSpeedReduced[audioKey] ? 0.6 : 1;
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey]
        }));
    };
    return (
        <div className={styles["page101__container"]}>
            <main className={styles["page101__main"]}>
                {/* Tabela Afirmativa */}
                <div className={styles["page101__tabela-afirmativa-container"]}>
                    <div className={styles["page101__table-header-afirmativa"]}>AFIRMATIVA</div>
                    <table className={styles["page101__styled-table-afirmativa"]}>
                        <thead>
                            <tr className={styles["page101__celula-table"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {/* Primeira parte - Afirmativa */}
                <div className={styles["page101__container-questoes"]}>
                    <div className={styles["page101__questions-1"]}>
                        <p className={styles["page101__a-titulo-question"]}>
                            C) Use the complete (or full) affirmative form of the verb to be in the simple present:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page101__header-icon"]}
                                onClick={() => playAudio("pg101_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page101__header-icon"]}
                                onClick={() => playAudio("pg101_audio1p")}
                            />
                        </p>
                        <br />

                        {[
                            "I ____ a student.",
                            "She ____ a doctor.",
                            "They ____ my friends.",
                            "We ____ from Italy.",
                            "The book ____ on the table.",
                            "John ____ at home right now.",
                            "Alice ____ a doctor.",
                            "Tom and Emily ____ in the park.",
                            "We ____ students.",
                            "The party ____ tonight."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg101_audio${index + 2}`;
                            const audioKeyP = `pg101_audio${index + 2}p`;

                            return (
                                <div key={index} className={styles["page101__question"]}>
                                    <span><em><strong>{index + 1}.</strong> {parts[0]}</em></span>
                                    <div className={styles["page101__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page101__input-box"]}
                                        />
                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles["page101__icons-container"]}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page101__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page101__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page101__additional-icon"]}
                                            onClick={() => playAudio(audioKeyP)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page101__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page101__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["page101__container-imagem"]}>
                        <img className={styles["page101__imagem"]} src={Pagina101_imagem1} alt="" />
                    </div>
                </div>

                {/* Tabela Negativa */}
                <div className={styles["page101__tabela-negativa-container"]}>
                    <div className={styles["page101__table-header-negativa"]}>NEGATIVA</div>
                    <table className={styles["page101__styled-table-negativa"]}>
                        <thead>
                            <tr className={styles["page101__celula-table"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br /> Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {/* Segunda parte - Negativa */}
                <div className={styles["page101__container-questoes"]}>
                    <div className={styles["page101__questions-2"]}>
                        <p className={styles["page101__a-titulo-question"]}>
                            D) Use the complete (or full) negative form of the verb to be in the simple present:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page101__header-icon"]}
                                onClick={() => playAudio("pg101_audio12e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page101__header-icon"]}
                                onClick={() => playAudio("pg101_audio12p")}
                            />
                        </p>
                        <br />
                        {[
                            "I ____ late for class.",
                            "He ____ at home right now.",
                            "They ____ happy with the result.",
                            "We ____ in the same class.",
                            "The computer ____ on the desk.",
                            "Kate ____ from Spain.",
                            "David ____ here at the moment.",
                            "The children ____ happy with the result.",
                            "They ____ in the office.",
                            "The store ____ open yet."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg101_audio${index + 13}`;
                            const audioKeyP = `pg101_audio${index + 13}p`;

                            return (
                                <div key={index} className={styles["page101__question"]}>
                                    <span><em><strong>{index + 1}.</strong> {parts[0]}</em></span>
                                    <div className={styles["page101__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 10] || ""}
                                            onChange={(e) => handleInputChange(e.target.value, index + 10)}

                                            className={styles["page101__input-box"]}
                                        />
                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles["page101__icons-container"]}>
                                        {results[index + 10] !== null && (
                                            <img
                                                src={results[index + 10] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page101__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page101__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page101__additional-icon"]}
                                            onClick={() => playAudio(audioKeyP)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page101__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page101__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["page101__container-imagem"]}>
                        <img className={styles["page101__imagem"]} src={Pagina101_imagem2} alt="" />
                    </div>
                </div>
                <button className={styles["page101__check-button"]} onClick={handleCheckClick}><em>Check</em></button>
            </main>
        </div>
    );
};

export default Pagina101;
