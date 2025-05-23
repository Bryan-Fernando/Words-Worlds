import React, { useState } from 'react';

import styles from './pagina97.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import Pagina97_imagem1 from '../assets/images/pagina97_imagem1.webp';
import Pagina97_imagem2 from '../assets/images/pagina97_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg97_audio1e from '../assets/audios/pg97_audio1e.mp3';
import pg97_audio1p from '../assets/audios/pg97_audio1p.mp3';
import pg97_audio2 from '../assets/audios/pg97_audio2.mp3';
import pg97_audio3 from '../assets/audios/pg97_audio3.mp3';
import pg97_audio4 from '../assets/audios/pg97_audio4.mp3';
import pg97_audio5 from '../assets/audios/pg97_audio5.mp3';
import pg97_audio6 from '../assets/audios/pg97_audio6.mp3';
import pg97_audio7 from '../assets/audios/pg97_audio7.mp3';
import pg97_audio8 from '../assets/audios/pg97_audio8.mp3';
import pg97_audio9 from '../assets/audios/pg97_audio9.mp3';
import pg97_audio10 from '../assets/audios/pg97_audio10.mp3';
import pg97_audio11 from '../assets/audios/pg97_audio11.mp3';
import pg97_audio12 from '../assets/audios/pg97_audio12.mp3';
import pg97_audio13 from '../assets/audios/pg97_audio13.mp3';
import pg97_audio2p from '../assets/audios/pg97_audio2p.mp3';
import pg97_audio3p from '../assets/audios/pg97_audio3p.mp3';
import pg97_audio4p from '../assets/audios/pg97_audio4p.mp3';
import pg97_audio5p from '../assets/audios/pg97_audio5p.mp3';
import pg97_audio6p from '../assets/audios/pg97_audio6p.mp3';
import pg97_audio7p from '../assets/audios/pg97_audio7p.mp3';
import pg97_audio8p from '../assets/audios/pg97_audio8p.mp3';
import pg97_audio9p from '../assets/audios/pg97_audio9p.mp3';
import pg97_audio10p from '../assets/audios/pg97_audio10p.mp3';
import pg97_audio11p from '../assets/audios/pg97_audio11p.mp3';
import pg97_audio12p from '../assets/audios/pg97_audio12p.mp3';
import pg97_audio13p from '../assets/audios/pg97_audio13p.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg97_audio1e,
    pg97_audio1p,
    pg97_audio2,
    pg97_audio3,
    pg97_audio4,
    pg97_audio5,
    pg97_audio6,
    pg97_audio7,
    pg97_audio8,
    pg97_audio9,
    pg97_audio10,
    pg97_audio11,
    pg97_audio12,
    pg97_audio13,
    pg97_audio2p,
    pg97_audio3p,
    pg97_audio4p,
    pg97_audio5p,
    pg97_audio6p,
    pg97_audio7p,
    pg97_audio8p,
    pg97_audio9p,
    pg97_audio10p,
    pg97_audio11p,
    pg97_audio12p,
    pg97_audio13p,
};


const Pagina97 = () => {
    const [inputValues, setInputValues] = useState(
        Array(12).fill('').map((_, index) => (index >= 8 ? ['', ''] : ''))
    );

    const [results, setResults] = useState(Array(15).fill(null));

    const correctAnswers = [
        'works', 'sleeps', 'reads', 'watch', 'arrives',
        'boils', 'has', 'need',
        ['Does', 'like'],
        ['Do', 'study'],
        ['Does', 'work'],
        ['Do', 'play'],
        ['Does', 'drink'],
        ['Do', 'enjoy'],
    ];


    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (Array.isArray(correctAnswers[index])) {

                return Array.isArray(value) && correctAnswers[index].every(
                    (answer, subIndex) =>
                        value[subIndex]?.trim().toLowerCase() === answer.toLowerCase()
                );
            }

            return value?.trim().toLowerCase() === correctAnswers[index].toLowerCase();
        });
        setResults(newResults.map((res) => res !== true ? false : true));
    };


    const handleInputChange = (value, index, subIndex = null) => {
        const newValues = [...inputValues];
        if (subIndex !== null) {
            if (!Array.isArray(newValues[index])) {
                newValues[index] = ['', ''];
            }
            newValues[index][subIndex] = value;
        } else {
            newValues[index] = value;
        }
        setInputValues(newValues);
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
        <div className={styles["page97__container"]}>
            <header className={styles["page97__header"]}>
                <h1 className={styles["page97__h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page97__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page97__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>

            <main className={styles["page97__main"]}>
                <div className={styles["page97__tabela-afirmativa-container"]}>
                    <div className={styles["page97__table-header-afirmativa"]}>AFIRMATIVA</div>
                    <table className={styles["page97__styled-table-afirmativa"]}>
                        <thead className={styles["page97__thead"]}>
                            <tr className={styles["page97__table-row"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles["page97__primeiras-questoes"]}>
                    <div className={styles["page97__container-questoes"]}>
                        <div className={styles["page97__questions-1"]}>
                            <p className={styles["page97__a-titulo-question"]}>
                                Complete the sentences with the correct form of the verbs in parentheses:
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page97__header-icon"]}
                                    onClick={() => playAudio("pg97_audio1e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles["page97__header-icon"]}
                                    onClick={() => playAudio("pg97_audio1p")}
                                />
                            </p>
                            <p className={styles["page97__numero-question"]}>1.</p>
                            {["He ____  (work) at a restaurant as a waiter.",
                                "The cat ____ (sleep) on the sofa all afternoon.",
                                "She ____ (read) a novel every evening before bed.",
                                "We ____ (watch) our favorite TV show every Friday night.",
                                "The train ____ (arrive) at the station at 9:00 AM sharp"
                            ].map((question, index) => {
                                const parts = question.split('____');

                                let audioKey;
                                if (index === 0) {
                                    audioKey = 'pg97_audio2';
                                } else if (index === 1) {
                                    audioKey = 'pg97_audio3';
                                } else if (index === 2) {
                                    audioKey = 'pg97_audio4';
                                } else if (index === 3) {
                                    audioKey = 'pg97_audio5';
                                } else {
                                    audioKey = 'pg97_audio6';
                                }

                                let audioKeyP;
                                if (index === 0) {
                                    audioKeyP = 'pg97_audio2p';
                                } else if (index === 1) {
                                    audioKeyP = 'pg97_audio3p';
                                } else if (index === 2) {
                                    audioKeyP = 'pg97_audio4p';
                                } else if (index === 3) {
                                    audioKeyP = 'pg97_audio5p';
                                } else {
                                    audioKeyP = 'pg97_audio6p';
                                }

                                return (
                                    <div key={index} className={styles["page97__question"]}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles["page97__input-container"]}>
                                            <input
                                                type="text"
                                                value={inputValues[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                className={styles["page97__input-box"]}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles["page97__icons-container"]}>
                                            {results[index] !== null && (
                                                <img
                                                    src={results[index] ? correct_icon : wrong_icon}
                                                    alt={results[index] ? "Correct" : "Incorrect"}
                                                    className={styles["page97__checkmark-image"]}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio English"
                                                className={styles["page97__additional-icon"]}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={ptbr_audio_icon}
                                                alt="Portuguese Audio"
                                                className={styles["page97__additional-icon"]}
                                                onClick={() => playAudio(audioKeyP)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles["page97__container-imagem"]}>
                            <img className={styles["page97__imagem"]} src={Pagina97_imagem1} alt="" />
                        </div>
                    </div>

                    <div className={styles["page97__container-questoes"]}>
                        <div className={styles["page97__questions-1"]}>
                            <p className={styles["page97__numero-question"]}>2.</p>
                            {["Water ____ (boil) at 100 degrees Celsius.",
                                "English ____ (have) many irregular verbs.",
                                "Plants ____ (need) sunlight to grow."
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg97_audio${index + 7}`;
                                const audioKeyP = `pg97_audio${index + 7}p`;

                                return (
                                    <div key={index} className={styles["page97__question"]}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles["page97__input-container"]}>
                                            <input
                                                type="text"
                                                value={inputValues[index + 5]}
                                                onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                                className={styles["page97__input-box"]}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles["page97__icons-container"]}>
                                            {results[index + 5] !== null && (
                                                <img
                                                    src={results[index + 5] ? correct_icon : wrong_icon}
                                                    alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                    className={styles["page97__checkmark-image"]}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio English"
                                                className={styles["page97__additional-icon"]}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={ptbr_audio_icon}
                                                alt="Portuguese Audio"
                                                className={styles["page97__additional-icon"]}
                                                onClick={() => playAudio(audioKeyP)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles["page97__container-imagem"]}>
                            <img className={styles["page97__imagem"]} src={Pagina97_imagem2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles["page97__table-interrogative-container"]}>
                    <div className={styles["page97__table-header-interrogative"]}>INTERROGATIVA</div>
                    <table className={styles["page97__styled-table-interrogative"]}>
                        <thead className={styles["page97__thead"]}>
                            <tr className={styles["page97__table-row"]}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span className={styles["highlight"]}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles["page97__container-questoes"]}>
                    <div className={styles["page97__questions-2"]}>
                        <p className={styles["page97__numero-question"]}>3.</p>
                        {[
                            "____ she ____ (work) at the hospital?",
                            "____ they ____ (play) soccer on weekends?",
                            "____ he ____ (drink) coffee in the morning?",
                            "____ you ____ (enjoy) hiking in the mountains?"
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg97_audio${index + 10}`;
                            const audioKeyP = `pg97_audio${index + 10}p`;
                            return (
                                <div key={index + 10} className={styles["page97__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                        </em>
                                    </span>
                                    {parts.map((part, fieldIndex) => (
                                        <React.Fragment key={fieldIndex}>
                                            {fieldIndex === 0 && (
                                                <span className={styles["page97__spam-input"]}>
                                                    <input
                                                        type="text"
                                                        value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                        onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                        className={styles["page97__input-box"]}
                                                    />
                                                </span>
                                            )}
                                            {fieldIndex > 0 && fieldIndex < parts.length - 1 && (
                                                <>
                                                    <span>{part}</span>
                                                    <span className={styles["page97__spam-input"]}>
                                                        <input
                                                            type="text"
                                                            value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                            onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                            className={styles["page97__input-box"]}
                                                        />
                                                    </span>
                                                </>
                                            )}
                                            {fieldIndex === parts.length - 1 && <span>{part}</span>}
                                        </React.Fragment>
                                    ))}
                                    <div className={styles["page97__icons-container"]}>
                                        {results[index + 10] !== null && (
                                            <img
                                                src={results[index + 10] ? correct_icon : wrong_icon}
                                                alt={results[index + 10] ? "Correct" : "Incorrect"}
                                                className={styles["page97__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page97__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page97__additional-icon"]}
                                            onClick={() => playAudio(audioKeyP)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <button className={styles["page97__check-button"]} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina97;
