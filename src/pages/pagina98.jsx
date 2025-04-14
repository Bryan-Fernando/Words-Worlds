import React, { useState } from 'react';

import styles from './pagina98.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina98_imagem1 from '../assets/images/pagina98_imagem1.webp';
import pagina98_imagem2 from '../assets/images/pagina98_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg98_audio1e from '../assets/audios/pg98_audio1e.mp3';
import pg98_audio1p from '../assets/audios/pg98_audio1p.mp3';
import pg98_audio2 from '../assets/audios/pg98_audio2.mp3';
import pg98_audio3 from '../assets/audios/pg98_audio3.mp3';
import pg98_audio4 from '../assets/audios/pg98_audio4.mp3';
import pg98_audio5 from '../assets/audios/pg98_audio5.mp3';
import pg98_audio6 from '../assets/audios/pg98_audio6.mp3';
import pg98_audio7e from '../assets/audios/pg98_audio7e.mp3';
import pg98_audio7p from '../assets/audios/pg98_audio7p.mp3';
import pg98_audio8 from '../assets/audios/pg98_audio8.mp3';
import pg98_audio9 from '../assets/audios/pg98_audio9.mp3';
import pg98_audio10 from '../assets/audios/pg98_audio10.mp3';
import pg98_audio11 from '../assets/audios/pg98_audio11.mp3';
import pg98_audio12 from '../assets/audios/pg98_audio12.mp3';
import pg98_audio13 from '../assets/audios/pg98_audio13.mp3';
import pg98_audio14 from '../assets/audios/pg98_audio14.mp3';
import pg98_audio15 from '../assets/audios/pg98_audio15.mp3';
import pg98_audio16 from '../assets/audios/pg98_audio16.mp3';
import pg98_audio17 from '../assets/audios/pg98_audio17.mp3';



const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg98_audio1e,
    pg98_audio1p,
    pg98_audio2,
    pg98_audio3,
    pg98_audio4,
    pg98_audio5,
    pg98_audio6,
    pg98_audio7e,
    pg98_audio7p,
    pg98_audio8,
    pg98_audio9,
    pg98_audio10,
    pg98_audio11,
    pg98_audio12,
    pg98_audio13,
    pg98_audio14,
    pg98_audio15,
    pg98_audio16,
    pg98_audio17,
};

const Pagina98 = () => {
    const [inputValues, setInputValues] = useState(Array(15).fill(''));
    const [results, setResults] = useState(Array(15).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});


    const correctAnswers = [
        'reads', 'play', 'drinks', 'rises', 'study', // Bloco 1
        'wake up', 'walks', 'practices', 'arrives', 'go', // Bloco 2
        ['Does', 'like'], // Bloco 3, linha 1
        ['Do', 'study'],  // Bloco 3, linha 2
        ['Does', 'work'], // Bloco 3, linha 3
        ['Do', 'play'],   // Bloco 3, linha 4
        ['Do', 'speak'],  // Bloco 3, linha 5
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

            const speed = isSpeedReduced[audioKey] ? 0.6 : 1;
            audio.playbackRate = speed;

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
        <div className={styles["page98__container"]}>
            <header className={styles["page98__header"]}>
                <h1 className={styles["page98__h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page98__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page98__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page98__main"]}>
                <div className={styles["page98__tabela-afirmativa-container"]}>
                    <div className={styles["page98__table-header-afirmativa"]}>AFIRMATIVA</div>
                    <table className={styles["page98__styled-table-afirmativa"]}>
                        <thead className={styles["page98__thead"]}>
                            <tr className={styles["page98__table-row"]}>
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

                <div className={styles["page98__primeiras-questoes"]}>
                    <div className={styles["page98__container-questoes"]}>
                        <div className={styles["page98__questions-1"]}>
                            <p className={styles["page98__a-titulo-question"]}>
                                Fill in the blanks with the correct form of the verb in the simple present tense:
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page98__header-icon"]}
                                    onClick={() => playAudio("pg98_audio1e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles["page98__header-icon"]}
                                    onClick={() => playAudio("pg98_audio1p")}
                                />
                            </p>
                            <p className={styles["page98__numero-question"]}>1.</p>
                            {["She ____ a book every night before bed.",
                                "They ____ basketball every Saturday morning.",
                                "He ____ a glass of water after every meal.",
                                "The sun ____ in the east.",
                                "We ____ English at school."
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg98_audio${index + 2}`; // Define corretamente os áudios

                                return (
                                    <div key={index} className={styles["page98__question"]}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles["page98__input-container"]}>
                                            <input
                                                type="text"
                                                value={inputValues[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                className={styles["page98__input-box"]}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles["page98__icons-container"]}>
                                            {results[index] !== null && (
                                                <img
                                                    src={results[index] ? correct_icon : wrong_icon}
                                                    alt={results[index] ? "Correct" : "Incorrect"}
                                                    className={styles["page98__checkmark-image"]}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio Icon"
                                                className={styles["page98__additional-icon"]}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={slow_audio_icon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles["page98__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page98__pulsing"] : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles["page98__container-imagem"]}>
                            <img className={styles["page98__imagem"]} src={pagina98_imagem1} alt="" />
                        </div>
                    </div>

                    <div className={styles["page98__container-questoes"]}>
                        <div className={styles["page98__questions-1"]}>
                            <p className={styles["page98__a-titulo-question"]}>
                                Complete the sentences with the correct form of the verbs in parentheses:
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page98__header-icon"]}
                                    onClick={() => playAudio("pg98_audio7e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles["page98__header-icon"]}
                                    onClick={() => playAudio("pg98_audio7p")}
                                />
                            </p>
                            <p className={styles["page98__numero-question"]}>2.</p>
                            {[
                                "Every morning, I ____ (wake up) at 6:00 AM.",
                                "My father ____ (walk) the dog after dinner.",
                                "Sarah ____ (practice) piano for an hour every day.",
                                "The bus ____ (arrive) at the station at 7:30 AM.",
                                "They ____ (go) to the gym three times a week."
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg98_audio${index + 8}`; // Começa no pg98_audio8

                                return (
                                    <div key={index} className={styles["page98__question"]}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles["page98__input-container"]}>
                                            <input
                                                type="text"
                                                value={inputValues[index + 5]}
                                                onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                                className={styles["page98__input-box"]}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles["page98__icons-container"]}>
                                            {results[index + 5] !== null && (
                                                <img
                                                    src={results[index + 5] ? correct_icon : wrong_icon}
                                                    alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                    className={styles["page98__checkmark-image"]}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio Icon"
                                                className={styles["page98__additional-icon"]}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={slow_audio_icon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles["page98__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page98__pulsing"] : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles["page98__container-imagem"]}>
                            <img className={styles["page98__imagem"]} src={pagina98_imagem2} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles["page98__table-interrogative-container"]}>
                    <div className={styles["page98__table-header-interrogative"]}>INTERROGATIVA</div>
                    <table className={styles["page98__styled-table-interrogative"]}>
                        <thead className={styles["page98__thead"]}>
                            <tr className={styles["page98__table-row"]}>
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

                <div className={styles["page98__container-questoes"]}>
                    <div className={styles["page98__questions-2"]}>
                        <p className={styles["page98__numero-question"]}>3.</p>
                        {[
                            "____ she ____ (like) coffee?",
                            "____ they ____ (study) French at school?",
                            "____ he ____ (work) on Saturdays?",
                            "____ the children ____ (play) every afternoon?",
                            "____ you ____ (speak) Spanish fluently?"
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg98_audio${index + 13}`; // Começa no pg98_audio13

                            return (
                                <div key={index + 10} className={styles["page98__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                        </em>
                                    </span>
                                    {parts.map((part, fieldIndex) => (
                                        <React.Fragment key={fieldIndex}>
                                            {fieldIndex === 0 && (
                                                <span className={styles["page98__spam-input"]}>
                                                    <input
                                                        type="text"
                                                        value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                        onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                        className={styles["page98__input-box"]}
                                                    />
                                                </span>
                                            )}
                                            {fieldIndex > 0 && fieldIndex < parts.length - 1 && (
                                                <>
                                                    <span>{part}</span>
                                                    <span className={styles["page98__spam-input"]}>
                                                        <input
                                                            type="text"
                                                            value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                            onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                            className={styles["page98__input-box"]}
                                                        />
                                                    </span>
                                                </>
                                            )}
                                            {fieldIndex === parts.length - 1 && <span>{part}</span>}
                                        </React.Fragment>
                                    ))}
                                    <div className={styles["page98__icons-container"]}>
                                        {results[index + 10] !== null && (
                                            <img
                                                src={results[index + 10] ? correct_icon : wrong_icon}
                                                alt={results[index + 10] ? "Correct" : "Incorrect"}
                                                className={styles["page98__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page98__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <button className={styles["page98__check-button"]} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina98;
