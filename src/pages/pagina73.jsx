import React, { useState } from 'react';

import styles from './pagina73.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina73_imagem1 from '../assets/images/pagina73_imagem1.webp';
import pagina73_imagem2 from '../assets/images/pagina73_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_fillBlankse from '../assets/audios/global_exercise_fill_blanke.mp3';
import global_fillBlanksp from '../assets/audios/global_exercise_fill_blankp.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg73_audio1 from '../assets/audios/pg73_audio1.mp3';
import pg73_audio2 from '../assets/audios/pg73_audio2.mp3';
import pg73_audio3 from '../assets/audios/pg73_audio3.mp3';
import pg73_audio4 from '../assets/audios/pg73_audio4.mp3';
import pg73_audio5 from '../assets/audios/pg73_audio5.mp3';
import pg73_audio6 from '../assets/audios/pg73_audio6.mp3';
import pg73_audio7 from '../assets/audios/pg73_audio7.mp3';
import pg73_audio8 from '../assets/audios/pg73_audio8.mp3';
import pg73_audio9 from '../assets/audios/pg73_audio9.mp3';
import pg73_audio10 from '../assets/audios/pg73_audio10.mp3';
import pg73_audio1p from '../assets/audios/pg73_audio1p.mp3';
import pg73_audio2p from '../assets/audios/pg73_audio2p.mp3';
import pg73_audio3p from '../assets/audios/pg73_audio3p.mp3';
import pg73_audio4p from '../assets/audios/pg73_audio4p.mp3';
import pg73_audio5p from '../assets/audios/pg73_audio5p.mp3';
import pg73_audio6p from '../assets/audios/pg73_audio6p.mp3';
import pg73_audio7p from '../assets/audios/pg73_audio7p.mp3';
import pg73_audio8p from '../assets/audios/pg73_audio8p.mp3';
import pg73_audio9p from '../assets/audios/pg73_audio9p.mp3';
import pg73_audio10p from '../assets/audios/pg73_audio10p.mp3';


const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    global_fillBlankse,
    global_fillBlanksp,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg73_audio1,
    pg73_audio2,
    pg73_audio3,
    pg73_audio4,
    pg73_audio5,
    pg73_audio6,
    pg73_audio7,
    pg73_audio8,
    pg73_audio9,
    pg73_audio10,
    pg73_audio1p,
    pg73_audio2p,
    pg73_audio3p,
    pg73_audio4p,
    pg73_audio5p,
    pg73_audio6p,
    pg73_audio7p,
    pg73_audio8p,
    pg73_audio9p,
    pg73_audio10p,

};


const pagina73 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'am', 'is', 'are', 'are', 'is',
        'am not', 'is not', 'are not', 'are not', 'is not'
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value.toLowerCase() === correctAnswers[index]);
        setResults(newResults);
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
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };


    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey]
        }));
    };


    return (
        <div className={styles["page73__container"]}>
            <header className={styles["page73__header"]}>
                <h1 className={styles["page73__h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page73__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page73__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <p className={styles["page73__p"]}>
                    Exercise. Fill in the blanks with the correct form of the verb ‘be’ in the Simple Present tense
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page73__header-icon"]}
                        onClick={() => playAudio("global_fillBlankse")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page73__header-icon"]}
                        onClick={() => playAudio("global_fillBlanksp")}
                    />
                </p>
            </header>

            <main className={styles["page73__main"]}>
                <div className={styles["page73__tabela-afirmativa-container"]}>
                    <div className={styles["page73__table-header-afirmativa"]}>AFIRMATIVA</div>
                    <table className={styles["page73__styled-table-afirmativa"]}>
                        <thead className={styles["page73__thead"]}>
                            <tr className={styles["page73__celula-table"]}>
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

                <div className={styles["page73__tabela-negativa-container"]}>
                    <div className={styles["page73__table-header-negativa"]}>NEGATIVA</div>
                    <table className={styles["page73__styled-table-negativa"]}>
                        <thead className={styles["page73__thead"]}>
                            <tr className={styles["page73__celula-table"]}>
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

                <div className={styles["page73__container-questoes"]}>
                    <div className={styles["page73__questions1"]}>
                        <p className={styles["pg84__a-titulo-question"]}>
                            Affirmative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page73__header-icon"]}
                                onClick={() => playAudio("global_affirmativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page73__header-icon"]}
                                onClick={() => playAudio("global_affirmativep")}
                            />
                        </p>
                        {[
                            "I ____ a student.",
                            "She ____ my sister.",
                            "We ____ friends.",
                            "They ____ at home.",
                            "It ____ a beautiful day."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg73_audio${index + 1}`;

                            return (
                                <div key={index} className={styles["page73__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page73__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page73__input-box"]}
                                        />
                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles["page73__icons-container"]}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page73__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page73__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page73__additional-icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page73__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page73__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["page73__container-imagem"]}>
                        <img className={styles["page73__imagem1"]} src={pagina73_imagem1} alt="" />
                    </div>
                </div>



                <div className={styles["page73__container-questoes"]}>

                    <div className={styles["page73__questions2"]}>
                        <p className={styles["pg84__a-titulo-question"]}>
                            Negative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page73__header-icon"]}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page73__header-icon"]}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>

                        {[
                            "I ____ a teacher.",
                            "She ____ my mother.",
                            "We ____ late.",
                            "They ____ happy.",
                            "It ____ cold today."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg73_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles["page73__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page73__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles["page73__input-box"]}
                                        />
                                    </div>
                                    <span>
                                        <em>
                                            {parts[1].split('not')[0]}
                                            {parts[1].split('not')[1]}
                                        </em>
                                    </span>
                                    <div className={styles["page73__icons-container"]}>
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? correct_icon : wrong_icon}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles["page73__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page73__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page73__additional-icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page73__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page73__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles["page73__container-imagem"]}>
                        <img className={styles["page73__imagem2"]} src={pagina73_imagem2} alt="" />
                    </div>
                </div>
            </main>
            <button className={styles["page73__check-button"]} onClick={handleCheckClick}>
                <em>Check</em>
            </button>
        </div>
    );
};

export default pagina73;
