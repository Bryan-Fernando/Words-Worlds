import React, { useState } from 'react';

import styles from './pagina87.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina87_imagem1 from '../assets/images/pagina87_imagem1.webp';
import pagina87_imagem2 from '../assets/images/pagina87_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg87_audio1 from '../assets/audios/pg87_audio1.mp3';
import pg87_audio2 from '../assets/audios/pg87_audio2.mp3';
import pg87_audio3 from '../assets/audios/pg87_audio3.mp3';
import pg87_audio4 from '../assets/audios/pg87_audio4.mp3';
import pg87_audio5 from '../assets/audios/pg87_audio5.mp3';
import pg87_audio6 from '../assets/audios/pg87_audio6.mp3';
import pg87_audio1p from '../assets/audios/pg87_audio1p.mp3';
import pg87_audio2p from '../assets/audios/pg87_audio2p.mp3';
import pg87_audio3p from '../assets/audios/pg87_audio3p.mp3';
import pg87_audio4p from '../assets/audios/pg87_audio4p.mp3';
import pg87_audio5p from '../assets/audios/pg87_audio5p.mp3';


const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg87_audio1,
    pg87_audio2,
    pg87_audio3,
    pg87_audio4,
    pg87_audio5,
    pg87_audio6,
    pg87_audio1p,
    pg87_audio2p,
    pg87_audio3p,
    pg87_audio4p,
    pg87_audio5p,
};

const Pagina87 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = ['The', 'The', 'The', 'The', 'The'];

    const handleCheckClick = () => {
        setResults(inputValues.map((value, index) => {

            const userAnswer = (value && value.trim()) ? value.trim() : '';
            const correctAnswer = correctAnswers[index] ? correctAnswers[index].trim() : '';

            return userAnswer === correctAnswer;
        }));
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
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
        <div className={styles["page87__container"]}>
            <header className={styles["page87__header"]}>
                <h1 className={styles["page87__header--title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page87__header--icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page87__header--icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <h2 className={styles["page87__header--subtitle"]}>
                    Fill in the blanks with the definite article “The / the” after listening to the audios.
                </h2>

                <h2 className={styles["page87__header--subtitle--black"]}>
                    Preencha os espaços em branco com o artigo definido "O / o, Os / os, A / a, as / as" após ouvir os áudios.
                </h2>
            </header>

            <main className={styles["page87__main"]}>
                <div className={styles["page87__table--afirmativa--container"]}>
                    <div className={styles["page87__table--header--afirmativa"]}>AFIRMATIVA</div>
                    <table className={styles["page87__styled--table--afirmativa"]}>
                        <thead className={styles["page87__thead"]}>
                            <tr className={styles["page87__cell--table"]}>
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

                <div className={styles["page87__questions--container"]}>

                    <div className={styles["page87__questions--list"]}>
                        {[
                            " ____ alarm clock is set for 6:00 AM every day.",
                            " ____ cat is on the roof",
                            " ____ sky is blue today.",
                            " ____ laptop is on my desk",
                            " ____ dog is sleeping under the tree."
                        ].map((question, index) => {
                            const audioKey = `pg87_audio${index + 1}`;

                            return (
                                <div key={index} className={styles["page87__question--item"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page87__input--container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page87__input"]}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles["page87__icons--container"]}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page87__icon--check"]}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page87__icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page87__icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />

                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page87__icon"]} ${isSpeedReduced[audioKey] ? styles["page87__icon--pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles["page87__images--container"]}>
                        <div className={styles["page87__image-wrapper--rotate1"]}>
                            <img className={styles["page87__image"]} src={pagina87_imagem1} alt="" />
                        </div>
                        <div className={styles["page87__image-wrapper--rotate2"]}>
                            <img className={styles["page87__image"]} src={pagina87_imagem2} alt="" />
                        </div>
                    </div>
                </div>

                <button className={styles["page87__button--check"]} onClick={handleCheckClick}>
                    <em>Check</em>
                </button>
            </main>
        </div>

    );
};

export default Pagina87;
