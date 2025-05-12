import React, { useState } from 'react';

import styles from './pagina83.module.css';

import pg83IconNotes from '../assets/icons/notes_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina83_imagem1 from '../assets/images/pagina83_imagem1.webp';
import pagina83_imagem2 from '../assets/images/pagina83_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg83_audio1 from '../assets/audios/pg83_audio1.mp3';
import pg83_audio2 from '../assets/audios/pg83_audio2.mp3';
import pg83_audio3 from '../assets/audios/pg83_audio3.mp3';
import pg83_audio4 from '../assets/audios/pg83_audio4.mp3';
import pg83_audio5 from '../assets/audios/pg83_audio5.mp3';
import pg83_audio6 from '../assets/audios/pg83_audio6.mp3';
import pg83_audio7 from '../assets/audios/pg83_audio7.mp3';
import pg83_audio8 from '../assets/audios/pg83_audio8.mp3';
import pg83_audio9 from '../assets/audios/pg83_audio9.mp3';
import pg83_audio10 from '../assets/audios/pg83_audio10.mp3';
import pg83_audio1p from '../assets/audios/pg83_audio1p.mp3';
import pg83_audio2p from '../assets/audios/pg83_audio2p.mp3';
import pg83_audio3p from '../assets/audios/pg83_audio3p.mp3';
import pg83_audio4p from '../assets/audios/pg83_audio4p.mp3';
import pg83_audio5p from '../assets/audios/pg83_audio5p.mp3';
import pg83_audio6p from '../assets/audios/pg83_audio6p.mp3';
import pg83_audio7p from '../assets/audios/pg83_audio7p.mp3';
import pg83_audio8p from '../assets/audios/pg83_audio8p.mp3';
import pg83_audio9p from '../assets/audios/pg83_audio9p.mp3';
import pg83_audio10p from '../assets/audios/pg83_audio10p.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg83_audio1,
    pg83_audio2,
    pg83_audio3,
    pg83_audio4,
    pg83_audio5,
    pg83_audio6,
    pg83_audio7,
    pg83_audio8,
    pg83_audio9,
    pg83_audio10,
    pg83_audio1p,
    pg83_audio2p,
    pg83_audio3p,
    pg83_audio4p,
    pg83_audio5p,
    pg83_audio6p,
    pg83_audio7p,
    pg83_audio8p,
    pg83_audio9p,
    pg83_audio10p,

};

const Pagina83 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'is', 'are', 'am', 'are', 'is',
        'is not', 'is not', 'are not', 'are not', 'is not'
    ];

    const handleCheckClick = () => {
        setResults(inputValues.map((value, index) =>
            value.trim() === correctAnswers[index]
        ));
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
        <div className={styles["page83__container"]}>
    <header className={styles["page83__header"]}>
        <h1 className={styles["page83__header--h1"]}>
            Learning Language Exercises
            <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page83__header--icon"]}
                onClick={() => playAudio("global_learning_le_e")}
            />
            <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page83__header--icon"]}
                onClick={() => playAudio("global_learning_le_p")}
            />
        </h1>
        <h2 className={styles["page83__header--h2"]}>
        Complete the sentences in the Simple Present Form of Verb Be after listening to the audio <br /> Complete as frases no Presente Simples do verbo "To Be" (ser/estar) após ouvir o áudio.
        </h2>
    
    </header>

    <main className={styles["page83__main"]}>
        <div className={styles["page83__tabela--afirmativa--container"]}>
            <div className={styles["page83__table--header--afirmativa"]}>AFIRMATIVA</div>
            <table className={styles["page83__styled--table--afirmativa"]}>
                <thead className={styles["page83__thead"]}>
                    <tr className={styles["page83__celula--table"]}>
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
        <div className={styles["page83__container--questoes"]}>
            <div className={styles["page83__questions--1"]}>
                        <div className={styles["page83__word-bank-header-1"]}>
                            <p>Use as formas completas do verbo. <br /> 
                            E as tabelas para formar as frases corretas.</p>
                        </div>
                <p className={styles["page83__titulo--question"]}>
                    Affirmative:
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page83__header--icon"]}
                        onClick={() => playAudio("global_affirmativee")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page83__header--icon"]}
                        onClick={() => playAudio("global_affirmativep")}
                    />
                </p>
                {[
                    "The new project ____ exciting.",
                    "They ____ from Canada",
                    "I ____ a good swimmer",
                    "My parents ____ proud of me.",
                    "That car ____ fast"
                ].map((question, index) => {
                    const audioKey = `pg83_audio${index + 1}`;

                    return (
                        <div key={index} className={styles["page83__question"]}>
                            <span>
                                <em>
                                    <strong>{String.fromCharCode(97 + index)}.</strong> {question.split("____")[0]}
                                </em>
                            </span>
                            <div className={styles["page83__input--container"]}>
                                <input
                                    type="text"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    className={styles["page83__input--box"]}
                                />
                            </div>
                            <span><em>{question.split("____")[1]}</em></span>
                            <div className={styles["page83__icons--container"]}>
                                {/* Ícones de Correção */}
                                {results[index] !== null && (
                                    <img
                                        src={results[index] ? correct_icon : wrong_icon}
                                        alt={results[index] ? "Correct" : "Incorrect"}
                                        className={styles["page83__checkmark--image"]}
                                    />
                                )}

                                {/* Ícone de Áudio */}
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio Icon"
                                    className={styles["page83__additional--icon"]}
                                    onClick={() => playAudio(audioKey)}
                                />

                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page83__additional--icon"]}
                                    onClick={() => playAudio(`${audioKey}p`)}
                                />

                                {/* Ícone de Volume Reduzido */}
                                <img
                                    src={slow_audio_icon}
                                    alt="Volume Reduced Icon"
                                    className={`${styles["page83__additional--icon"]} ${isSpeedReduced[audioKey] ? styles["page83__additional--icon--pulsing"] : ""}`}
                                    onClick={() => toggleSpeedReduction(audioKey)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles["page83__container--imagem"]}> <img className={styles["page83__image"]} src={pagina83_imagem1} alt="" /></div>
        </div>

        <div className={styles["page83__table--negativa--container"]}>
    <div className={styles["page83__table--header--negativa"]}>NEGATIVA</div>
    <table className={styles["page83__styled--table--negativa"]}>
        <thead className={styles["page83__thead"]}>
            <tr className={styles["page83__celula--table"]}>
                <th>Introdução</th>
                <th>Sujeito</th>
                <th>Verbo <br /> Auxiliar</th>
                <th> <span style={{ color: "red" }}>Not</span> <br />Advérbio</th>
                <th>Verbo(s)</th>
                <th>Objeto <br /> Complemento</th>
            </tr>
        </thead>
    </table>
</div>
<div className={styles["page83__container--questoes"]}>
    <div className={styles["page83__questions--2"]}>
        <p className={styles["page83__titulo--question"]}>
            Negative:
            <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page83__header--icon"]}
                onClick={() => playAudio("global_negativee")}
            />
            <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page83__header--icon"]}
                onClick={() => playAudio("global_negativep")}
            />
        </p>
        {[
            "The meeting ____ boring.",
            "She ____ at home right now.",
            "We ____ late for the train.",
            "The kittens ____ hungry.",
            "My phone ____ old."
        ].map((question, index) => {
            const audioKey = `pg83_audio${index + 6}`;

            return (
                <div key={index + 5} className={styles["page83__question"]}>
                    <span>
                        <em>
                            <strong>{String.fromCharCode(102 + index)}.</strong> {question.split("____")[0]}
                        </em>
                    </span>
                    <div className={styles["page83__input--container"]}>
                        <input
                            type="text"
                            value={inputValues[index + 5]}
                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                            className={styles["page83__input--box"]}
                        />
                    </div>
                    <span><em>{question.split("____")[1]}</em></span>
                    <div className={styles["page83__icons--container"]}>
                        {/* Ícones de Correção */}
                        {results[index + 5] !== null && (
                            <img
                                src={results[index + 5] ? correct_icon : wrong_icon}
                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                className={styles["page83__checkmark--image"]}
                            />
                        )}

                        {/* Ícone de Áudio */}
                        <img
                            src={eng_audio_icon}
                            alt="Audio Icon"
                            className={styles["page83__additional--icon"]}
                            onClick={() => playAudio(audioKey)}
                        />

                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page83__additional--icon"]}
                            onClick={() => playAudio(`${audioKey}p`)}
                        />

                        {/* Ícone de Volume Reduzido */}
                        <img
                            src={slow_audio_icon}
                            alt="Volume Reduced Icon"
                            className={`${styles["page83__additional--icon"]} ${isSpeedReduced[audioKey] ? styles["page83__additional--icon--pulsing"] : ""}`}
                            onClick={() => toggleSpeedReduction(audioKey)}
                        />
                    </div>
                </div>
            );
        })}
    </div>
    <div className={styles["page83__container--imagem"]}><img className={styles["page83__image"]} src={pagina83_imagem2} alt="" /></div>
</div>

<button className={styles["page83__check--button"]} onClick={handleCheckClick}><em>Check</em></button>

            </main>
        </div>
    );
};

export default Pagina83;
