import React, { useState } from 'react';

import styles from './pagina85.module.css';

import pg85IconNotes from '../assets/icons/notes_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina85_imagem1 from '../assets/images/pagina85_imagem1.webp';
import pagina85_imagem2 from '../assets/images/pagina85_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg85_audio1 from '../assets/audios/pg85_audio1.mp3';
import pg85_audio2 from '../assets/audios/pg85_audio2.mp3';
import pg85_audio3 from '../assets/audios/pg85_audio3.mp3';
import pg85_audio4 from '../assets/audios/pg85_audio4.mp3';
import pg85_audio5 from '../assets/audios/pg85_audio5.mp3';
import pg85_audio6 from '../assets/audios/pg85_audio6.mp3';
import pg85_audio7 from '../assets/audios/pg85_audio7.mp3';
import pg85_audio8 from '../assets/audios/pg85_audio8.mp3';
import pg85_audio9 from '../assets/audios/pg85_audio9.mp3';
import pg85_audio10 from '../assets/audios/pg85_audio10.mp3';
import pg85_audio1p from '../assets/audios/pg85_audio1p.mp3';
import pg85_audio2p from '../assets/audios/pg85_audio2p.mp3';
import pg85_audio3p from '../assets/audios/pg85_audio3p.mp3';
import pg85_audio4p from '../assets/audios/pg85_audio4p.mp3';
import pg85_audio5p from '../assets/audios/pg85_audio5p.mp3';
import pg85_audio6p from '../assets/audios/pg85_audio6p.mp3';
import pg85_audio7p from '../assets/audios/pg85_audio7p.mp3';
import pg85_audio8p from '../assets/audios/pg85_audio8p.mp3';
import pg85_audio9p from '../assets/audios/pg85_audio9p.mp3';
import pg85_audio10p from '../assets/audios/pg85_audio10p.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg85_audio1,
    pg85_audio2,
    pg85_audio3,
    pg85_audio4,
    pg85_audio5,
    pg85_audio6,
    pg85_audio7,
    pg85_audio8,
    pg85_audio9,
    pg85_audio10,
    pg85_audio1p,
    pg85_audio2p,
    pg85_audio3p,
    pg85_audio4p,
    pg85_audio5p,
    pg85_audio6p,
    pg85_audio7p,
    pg85_audio8p,
    pg85_audio9p,
    pg85_audio10p,
};

const Pagina85 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'is', 'is', 'is', 'are', 'are',
        'is not', 'are not', 'am not', 'is not', 'are not'
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
        <div className={styles["page85__container"]}>
            <header className={styles["page85__header"]}>
                <h1 className={styles["page85__header--h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page85__header--icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page85__header--icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <h2 className={styles["page85__header--h2"]}>
                Complete the sentences in the Simple Present Form of Verb Be after listening to the audio <br /> Complete as frases no Presente Simples do verbo "To Be" (ser/estar) após ouvir o áudio.
                </h2>
            </header>

            <main className={styles["page85__main"]}>
                <div className={styles["page85__table--afirmativa--container"]}>
                    <div className={styles["page85__table--header--afirmativa"]}>AFIRMATIVA</div>
                    <table className={styles["page85__styled--table--afirmativa"]}>
                        <thead className={styles["page85__thead"]}>
                            <tr className={styles["page85__cell--table"]}>
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

                <div className={styles["page85__container--questoes"]}>
                    <div className={styles["page85__questions--1"]}>
                        <div className={styles["page85__word-bank-header-1"]}>
                            <p>Use as formas completas do verbo. <br /> 
                            E as tabelas para formar as frases corretas.</p>
                        </div>
                        <p className={styles["page85__question--titulo"]}>
                            Affirmative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page85__header--icon"]}
                                onClick={() => playAudio("global_affirmativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page85__header--icon"]}
                                onClick={() => playAudio("global_affirmativep")}
                            />
                        </p>

                        {[
                            "Mathematics ____ my favorite subject.",
                            "The park ____ quiet in the morning.",
                            "He ____ a good dancer.",
                            "These shoes ____ comfortable.",
                            "The birds ____ singing happily."
                        ].map((question, index) => {
                            const audioKey = `pg85_audio${index + 1}`;

                            return (
                                <div key={index} className={styles["page85__question"]}>
                                    <span className={styles["page85__question--text"]}>
                                        <em >
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page85__input--container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page85__input--box"]}
                                        />
                                    </div>
                                    <span className={styles["page85__question--text"]}><em>{question.split('____')[1]}</em></span>
                                    <div className={styles["page85__icons--container"]}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page85__checkmark--image"]}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page85__additional--icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page85__additional--icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />

                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page85__additional--icon"]} ${isSpeedReduced[audioKey] ? styles["page85__additional--icon--pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["page85__container--imagem"]}>
                        <img className={styles["page85__image"]} src={pagina85_imagem1} alt="" />
                    </div>
                </div>

                <div className={styles["page85__table--negativa--container"]}>
                    <div className={styles["page85__table--header--negativa"]}>NEGATIVA</div>
                    <table className={styles["page85__styled--table--negativa"]}>
                        <thead className={styles["page85__thead"]}>
                            <tr className={styles["page85__cell--table"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>


                <div className={styles["page85__container--questoes"]}>
                    <div className={styles["page85__questions--2"]}>
                        <p className={styles["page85__question--titulo"]}>
                            Negative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page85__header--icon"]}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page85__header--icon"]}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>

                        {[
                            "Her cat ____ black.",
                            "The flowers ____ wilted.",
                            "I ____ a morning person.",
                            "The test ____ difficult.",
                            "Our neighbors ____ noisy."
                        ].map((question, index) => {
                            const audioKey = `pg85_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles["page85__question"]}>
                                    <span className={styles["page85__question--text"]}>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page85__input--container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles["page85__input--box"]}
                                        />
                                    </div>
                                    <span className={styles["page85__question--text"]}><em>{question.split('____')[1]}</em></span>
                                    <div className={styles["page85__icons--container"]}>

                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? correct_icon : wrong_icon}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles["page85__checkmark--image"]}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page85__additional--icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page85__additional--icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />

                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page85__additional--icon"]} ${isSpeedReduced[audioKey] ? styles["page85__additional--icon--pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles["page85__container--imagem"]}>
                        <img className={styles["page85__image"]} src={pagina85_imagem2} alt="" />
                    </div>
                </div>
                
                <button className={styles["page85__check--button"]} onClick={handleCheckClick}><em>Check</em></button>

            </main>
        </div>
    );
};

export default Pagina85;
