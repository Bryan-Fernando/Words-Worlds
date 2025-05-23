import React, { useState } from 'react';

import styles from './pagina100.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg100_audio1e from '../assets/audios/pg100_audio1e.mp3';
import pg100_audio1p from '../assets/audios/pg100_audio1p.mp3';
import pg100_audio2 from '../assets/audios/pg100_audio2.mp3';
import pg100_audio3 from '../assets/audios/pg100_audio3.mp3';
import pg100_audio4 from '../assets/audios/pg100_audio4.mp3';
import pg100_audio5 from '../assets/audios/pg100_audio5.mp3';
import pg100_audio6 from '../assets/audios/pg100_audio6.mp3';
import pg100_audio7 from '../assets/audios/pg100_audio7.mp3';
import pg100_audio8 from '../assets/audios/pg100_audio8.mp3';
import pg100_audio9 from '../assets/audios/pg100_audio9.mp3';
import pg100_audio10e from '../assets/audios/pg100_audio10e.mp3';
import pg100_audio10p from '../assets/audios/pg100_audio10p.mp3';
import pg100_audio11 from '../assets/audios/pg100_audio11.mp3';
import pg100_audio12 from '../assets/audios/pg100_audio12.mp3';
import pg100_audio13 from '../assets/audios/pg100_audio13.mp3';
import pg100_audio14 from '../assets/audios/pg100_audio14.mp3';
import pg100_audio15 from '../assets/audios/pg100_audio15.mp3';
import pg100_audio16 from '../assets/audios/pg100_audio16.mp3';
import pg100_audio17 from '../assets/audios/pg100_audio17.mp3';
import pg100_audio18 from '../assets/audios/pg100_audio18.mp3';
import pg100_audio2p from '../assets/audios/pg100_audio2p.mp3';
import pg100_audio3p from '../assets/audios/pg100_audio3p.mp3';
import pg100_audio4p from '../assets/audios/pg100_audio4p.mp3';
import pg100_audio5p from '../assets/audios/pg100_audio5p.mp3';
import pg100_audio6p from '../assets/audios/pg100_audio6p.mp3';
import pg100_audio7p from '../assets/audios/pg100_audio7p.mp3';
import pg100_audio8p from '../assets/audios/pg100_audio8p.mp3';
import pg100_audio9p from '../assets/audios/pg100_audio9p.mp3';
import pg100_audio11p from '../assets/audios/pg100_audio11p.mp3';
import pg100_audio12p from '../assets/audios/pg100_audio12p.mp3';
import pg100_audio13p from '../assets/audios/pg100_audio13p.mp3';
import pg100_audio14p from '../assets/audios/pg100_audio14p.mp3';
import pg100_audio15p from '../assets/audios/pg100_audio15p.mp3';
import pg100_audio16p from '../assets/audios/pg100_audio16p.mp3';
import pg100_audio17p from '../assets/audios/pg100_audio17p.mp3';
import pg100_audio18p from '../assets/audios/pg100_audio18p.mp3';

// Mapeamento dos áudios
const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg100_audio1e,
    pg100_audio1p,
    pg100_audio2,
    pg100_audio3,
    pg100_audio4,
    pg100_audio5,
    pg100_audio6,
    pg100_audio7,
    pg100_audio8,
    pg100_audio9,
    pg100_audio10e,
    pg100_audio10p,
    pg100_audio11,
    pg100_audio12,
    pg100_audio13,
    pg100_audio14,
    pg100_audio15,
    pg100_audio16,
    pg100_audio17,
    pg100_audio18,
    pg100_audio2p,
    pg100_audio3p,
    pg100_audio4p,
    pg100_audio5p,
    pg100_audio6p,
    pg100_audio7p,
    pg100_audio8p,
    pg100_audio9p,
    pg100_audio11p,
    pg100_audio12p,
    pg100_audio13p,
    pg100_audio14p,
    pg100_audio15p,
    pg100_audio16p,
    pg100_audio17p,
    pg100_audio18p,

};

const Pagina100 = () => {
    const [inputValues, setInputValues] = useState(Array(16).fill(''));
    const [results, setResults] = useState(Array(16).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        "'m not", "aren't", "aren't", "isn't", "aren't",
        "isn't", "isn't", "aren't", "am not", "is not",
        "is not", "is not", "are not", "is not", "is not", "are not"
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!value) return false;

            const userAnswer = value.trim().toLowerCase().replace(/'/g, "").replace(/\s+/g, " ");
            const correctAnswer = correctAnswers[index].toLowerCase().replace(/'/g, "").replace(/\s+/g, " ");

            return userAnswer === correctAnswer;
        });

        setResults(newResults);
    };



    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value.toString();
        setInputValues(newValues);
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
        <div className={styles["page100__container"]}>
            <header className={styles["page100__header"]}>
                <h1 className={styles["page100__h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page100__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page100__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>

            <main className={styles["page100__main"]}>
                <div className={styles["page100__tabela-negativa-container"]}>
                    <div className={styles["page100__table-header-negativa"]}>NEGATIVA</div>
                    <table className={styles["page100__styled-table-negativa"]}>
                        <thead className={styles["page100__thead"]}>
                            <tr className={styles["page100__table-row"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th> <span style={{ color: 'red' }}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page100__container-questoes"]}>
                    <div className={styles["page100__questions-1"]}>
                        <p className={styles["page100__a-titulo-question"]}>
                            A) Fill in the blanks with the negative form, using the contracted forms: (I'm not, isn't, or aren't).
                            <span className={styles["page100__icons-container"]}>
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page100__header-icon"]}
                                    onClick={() => playAudio("pg100_audio1e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles["page100__header-icon"]}
                                    onClick={() => playAudio("pg100_audio1p")}
                                />
                            </span>
                        </p>
                        <div className={styles["page100__questions-1"]}>
                            {[
                                "I ____ married.",
                                "We ____ at the club.",
                                "You ____ Portuguese.",
                                "It ____ hot.",
                                "They ____ available.",
                                "She ____ hungry.",
                                "He ____ a musician.",
                                "We ____ in London."
                            ].map((question, index) => {
                                const audioKey = `pg100_audio${index + 2}`;
                                const audioKeyP = `pg100_audio${index + 2}p`;
                                return (
                                    <div key={index} className={styles["page100__question"]}>
                                        <span><em>{question.split('____')[0]}</em></span>
                                        <div className={styles["page100__input-container"]}>
                                            <input
                                                type="text"
                                                value={inputValues[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                className={styles["page100__input-box"]}
                                            />
                                        </div>
                                        <span><em>{question.split('____')[1]}</em></span>
                                        <div className={styles["page100__icons-container"]}>
                                            {results[index] !== null && (
                                                <img
                                                    src={results[index] ? correct_icon : wrong_icon}
                                                    alt={results[index] ? "Correct" : "Incorrect"}
                                                    className={styles["page100__checkmark-image"]}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio Icon"
                                                className={styles["page100__additional-icon"]}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={ptbr_audio_icon}
                                                alt="Audio Icon"
                                                className={styles["page100__additional-icon"]}
                                                onClick={() => playAudio(audioKeyP)}
                                            />
                                            <img
                                                src={slow_audio_icon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles["page100__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page100__pulsing"] : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Tabela NEGATIVA */}
                <div className={styles["page100__tabela-negativa-container"]}>
                    <div className={styles["page100__table-header-negativa"]}>NEGATIVA</div>
                    <table className={styles["page100__styled-table-negativa"]}>
                        <thead className={styles["page100__thead"]}>
                            <tr className={styles["page100__table-row"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th> <span style={{ color: 'red' }}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page100__container-questoes"]}>
                    <div className={styles["page100__questions-1"]}>
                        <p className={styles["page100__a-titulo-question"]}>
                            B) Change into the <span style={{color: 'blue'}}>Negative Full Form,</span> using (not).
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page100__header-icon"]}
                                onClick={() => playAudio("pg100_audio10e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page100__header-icon"]}
                                onClick={() => playAudio("pg100_audio10p")}
                            />
                        </p>

                        {[
                            "We are in Rio de Janeiro.",
                            "She is my cousin.",
                            "He is a nurse.",
                            "We are early.",
                            "It is hot.",
                            "She is at school.",
                            "He is sad.",
                            "I am sleepy"
                        ].map((sentence, index) => (
                            <div key={index + 8} className={styles["page100__question"]}>
                                <span><em><strong>{index + 1}.</strong> {sentence}</em></span>
                            </div>
                        ))}
                    </div>

                    <div className={styles["page100__questions-1"]}>
                        {[
                            "I ____ sleepy.",
                            "He ____ sad.",
                            "She ____ at school.",
                            "It ____ hot.",
                            "We ____ early.",
                            "He ____ a nurse.",
                            "She ____ my cousin.",
                            "We ____ in Rio de Janeiro."
                        ].map((question, index) => {
                            const audioKey = `pg100_audio${index + 11}`;
                            const audioKeyP = `pg100_audio${index + 11}p`;
                            return (
                                <div key={index + 8} className={styles["page100__question"]}>
                                    <span><em>{question.split('____')[0]}</em></span>
                                    <div className={styles["page100__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 8]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 8)}
                                            className={styles["page100__input-box"]}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles["page100__icons-container"]}>
                                        {results[index + 8] !== null && (
                                            <img
                                                src={results[index + 8] ? correct_icon : wrong_icon}
                                                alt={results[index + 8] ? "Correct" : "Incorrect"}
                                                className={styles["page100__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page100__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page100__additional-icon"]}
                                            onClick={() => playAudio(audioKeyP)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page100__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page100__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </main>
            <button className={styles["page100__check-button"]} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina100;
