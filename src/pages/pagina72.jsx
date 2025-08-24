import React, { useState } from 'react';

import styles from './pagina72.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina72_imagem1 from '../assets/images/pagina72_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_exercise_fill_blanke from '../assets/audios/global_exercise_fill_blanke.mp3';
import global_exercise_fill_blankp from '../assets/audios/global_exercise_fill_blankp.mp3';
import pg72_audio1e from '../assets/audios/pg72_audio1e.mp3';
import pg72_audio1p from '../assets/audios/pg72_audio1p.mp3';
import pg72_audio2 from '../assets/audios/pg72_audio2.mp3';
import pg72_audio3 from '../assets/audios/pg72_audio3.mp3';
import pg72_audio4 from '../assets/audios/pg72_audio4.mp3';
import pg72_audio5 from '../assets/audios/pg72_audio5.mp3';
import pg72_audio6 from '../assets/audios/pg72_audio6.mp3';
import pg72_audio7e from '../assets/audios/pg72_audio7e.mp3';
import pg72_audio7p from '../assets/audios/pg72_audio7p.mp3';
import pg72_audio8 from '../assets/audios/pg72_audio8.mp3';
import pg72_audio9 from '../assets/audios/pg72_audio9.mp3';
import pg72_audio10 from '../assets/audios/pg72_audio10.mp3';
import pg72_audio11 from '../assets/audios/pg72_audio11.mp3';
import pg72_audio12 from '../assets/audios/pg72_audio12.mp3';
import pg72_audio2p from '../assets/audios/pg72_audio2p.mp3';
import pg72_audio3p from '../assets/audios/pg72_audio3p.mp3';
import pg72_audio4p from '../assets/audios/pg72_audio4p.mp3';
import pg72_audio5p from '../assets/audios/pg72_audio5p.mp3';
import pg72_audio6p from '../assets/audios/pg72_audio6p.mp3';
import pg72_audio8p from '../assets/audios/pg72_audio8p.mp3';
import pg72_audio9p from '../assets/audios/pg72_audio9p.mp3';
import pg72_audio10p from '../assets/audios/pg72_audio10p.mp3';
import pg72_audio11p from '../assets/audios/pg72_audio11p.mp3';
import pg72_audio12p from '../assets/audios/pg72_audio12p.mp3';
import pg72_audio13e from '../assets/audios/pg72_audio13e.mp3';
import pg72_audio14e from '../assets/audios/pg72_audio14e.mp3';
import pg72_audio15e from '../assets/audios/pg72_audio15e.mp3';
import pg72_audio16e from '../assets/audios/pg72_audio16e.mp3';
import pg72_audio17e from '../assets/audios/pg72_audio17e.mp3';
import pg72_audio18e from '../assets/audios/pg72_audio18e.mp3';
import pg72_audio19e from '../assets/audios/pg72_audio19e.mp3';
import pg72_audio20e from '../assets/audios/pg72_audio20e.mp3';
import pg72_audio21e from '../assets/audios/pg72_audio21e.mp3';
import pg72_audio22e from '../assets/audios/pg72_audio22e.mp3';
import pg72_audio23e from '../assets/audios/pg72_audio23e.mp3';
import pg72_audio24e from '../assets/audios/pg72_audio24e.mp3';
import pg72_audio25e from '../assets/audios/pg72_audio25e.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    global_exercise_fill_blanke,
    global_exercise_fill_blankp,
    pg72_audio1e,
    pg72_audio1p,
    pg72_audio2,
    pg72_audio3,
    pg72_audio4,
    pg72_audio5,
    pg72_audio6,
    pg72_audio7e,
    pg72_audio7p,
    pg72_audio8,
    pg72_audio9,
    pg72_audio10,
    pg72_audio11,
    pg72_audio12,
    pg72_audio2p,
    pg72_audio3p,
    pg72_audio4p,
    pg72_audio5p,
    pg72_audio6p,
    pg72_audio8p,
    pg72_audio9p,
    pg72_audio10p,
    pg72_audio11p,
    pg72_audio12p,
    pg72_audio13e,
    pg72_audio14e,
    pg72_audio15e,
    pg72_audio16e,
    pg72_audio17e,
    pg72_audio18e,
    pg72_audio19e,
    pg72_audio20e,
    pg72_audio21e,
    pg72_audio22e,
    pg72_audio23e,
    pg72_audio24e,
    pg72_audio25e,
};


const pagina72 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});
    const [showAnswersKey, setShowAnswersKey] = useState(false);

    const correctAnswers = [
        'am', 'is', 'is', 'are', 'is',
        'is not', 'are not', 'is not', 'am not', 'are not'
    ];

    const questions = [
        { text: "I ____ creative.", fullAnswer: "I am creative." },
        { text: "She ____ intelligent.", fullAnswer: "She is intelligent." },
        { text: "He ____ ambitious.", fullAnswer: "He is ambitious." },
        { text: "They ____ helpful.", fullAnswer: "They are helpful." },
        { text: "The team ____ united.", fullAnswer: "The team is united." },
        { text: "He ____ talkative.", fullAnswer: "He is not talkative." },
        { text: "They ____ organized.", fullAnswer: "They are not organized." },
        { text: "She ____ shy.", fullAnswer: "She is not shy." },
        { text: "I ____ lazy.", fullAnswer: "I am not lazy." },
        { text: "The students ____ disrespectful.", fullAnswer: "The students are not disrespectful." }
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.toLowerCase() === correctAnswers[index]
        );
        setResults(newResults);
    };

    const handleReset = () => {
        setInputValues(Array(10).fill(''));
        setResults(Array(10).fill(null));
        setIsSpeedReduced({});
        setShowAnswersKey(false);
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
            audio.play().catch(() => {});
        }
    };

    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey]
        }));
    };

    return (
        <div className={styles["page72__container"]}>
            <header className={styles["page72__header"]}>
                <h1 className={styles["page72__h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page72__header-audio-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page72__header-audio-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <p className={styles["page72__p"]}>
                    <strong>EXERCISE.</strong> Fill in the blanks with the correct forms of the verb 'be' in the Simple Present Tense <strong>after listening to the audio.</strong>
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page72__header-audio-icon"]}
                        onClick={() => playAudio("global_exercise_fill_blanke")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page72__header-audio-icon"]}
                        onClick={() => playAudio("global_exercise_fill_blankp")}
                    />
                </p>
            </header>

            <main className={styles["page72__main"]}>
                <div className={styles["page72__container-questoes"]}>
                    <div className={styles["page72__questions1"]}>
                        <p className={styles["pg84__a-titulo-question"]}>
                            <p className={styles["page72__p"]}>Use as formas completas do verbo.
                                E as tabelas caso seja necessário, para formar as frases corretas.</p>
                            Affirmative form:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page72__header-audio-icon"]}
                                onClick={() => playAudio("pg72_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page72__header-audio-icon"]}
                                onClick={() => playAudio("pg72_audio1p")}
                            />
                        </p>

                        {[
                            "I ____ creative.",
                            "She ____ intelligent.",
                            "He ____ ambitious.",
                            "They ____ helpful.",
                            "The team ____ united."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg72_audio${index + 2}`;
                            return (
                                <div key={index} className={styles["page72__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page72__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page72__input-box"]}
                                        />
                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles["page72__icons-container"]}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page72__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page72__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page72__additional-icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page72__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page72__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles["page72__notes-container"]}>
                        <div className={styles["page72__word-bank-header-1"]}>
                            <p>Use as tabelas para formar as frases corretas.</p>
                        </div>

                        <div className={styles["page72__table-header-afirmativa"]}>AFIRMATIVA</div>
                        <table className={styles["page72__styled-table-afirmativa"]}>
                            <thead className={styles["page72__thead"]}>
                                <tr className={styles["page72__celula-table"]}>
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
                </div>

                <div className={styles["page72__container-questoes"]}>
                    <div className={styles["page72__questions2"]}>
                        <p className={styles["pg84__a-titulo-question"]}>
                            <p className={styles["page72__p"]}>Use as formas completas do verbo.
                                E as tabelas caso seja necessário, para formar as frases corretas.</p>
                            Negative form:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page72__header-audio-icon"]}
                                onClick={() => playAudio("pg72_audio7e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page72__header-audio-icon"]}
                                onClick={() => playAudio("pg72_audio7p")}
                            />
                        </p>

                        {[
                            "He ____ talkative.",
                            "They ____ organized.",
                            "She ____ shy.",
                            "I ____ lazy.",
                            "The students ____ disrespectful."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg72_audio${index + 8}`;
                            return (
                                <div key={index + 5} className={styles["page72__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page72__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles["page72__input-box"]}
                                        />
                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles["page72__icons-container"]}>
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? correct_icon : wrong_icon}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles["page72__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page72__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page72__additional-icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page72__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page72__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles["page72__tabela-negativa-container"]}>
                        <div className={styles["page72__table-header-negativa"]}>NEGATIVA</div>
                        <table className={styles["page72__styled-table-negativa"]}>
                            <thead className={styles["page72__thead"]}>
                                <tr className={styles["page72__celula-table"]}>
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
                </div>
            </main>

            <div className={styles["page72__buttons-container"]}>
                <button className={styles["page72__check-button"]} onClick={handleCheckClick}>
                    <em>Check</em>
                </button>
                <button className={styles["page72__reset--button"]} onClick={handleReset}>
                    Reset
                </button>
                <button
                    className={styles["page72__answersKey--button"]}
                    onClick={() => setShowAnswersKey(v => !v)}
                    aria-expanded={showAnswersKey}
                    aria-controls="answers-key-box-72"
                >
                    Answers Key
                </button>
            </div>

            {showAnswersKey && (
                <div
                    id="answers-key-box-72"
                    className={styles["page72__answersKey-box"]}
                    role="region"
                    aria-label="Gabarito completo"
                >
                    {questions.map((q, i) => (
                        <div key={i} className={styles["page72__answersKey-item"]}>
                            <span className={styles["page72__answersKey-num"]}>{i + 1}.</span>
                            <span className={styles["page72__answersKey-text"]}>{q.fullAnswer}</span>
                        </div>
                    ))}
                </div>
            )}

            <aside className={styles["page72__word-bank"]}>
                <div className={styles["page72__word-bank-container"]}>
                    <div className={styles["page72__word-bank-header"]}>
                        <p>Word Bank</p>
                    </div>
                    <div className={styles["page72__word-bank-content"]}>
                        <div className={styles["page72__word-row"]}>
                            <div className={styles["page72__word-column"]}>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Friendly
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio13e')}
                                        />
                                    </strong> <span>(amigável)</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Happy
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio14e')}
                                        />
                                    </strong> <span>(feliz)</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Hardworking
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio15e')}
                                        />
                                    </strong> <span>(trabalhador(a))</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Outgoing
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio16e')}
                                        />
                                    </strong> <span>(extrovertido(a))</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Creative
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio17e')}
                                        />
                                    </strong> <span>(criativo(a))</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Intelligent
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio18e')}
                                        />
                                    </strong> <span>(inteligente)</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Ambitious
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio19e')}
                                        />
                                    </strong> <span>(ambicioso(a))</span>
                                </p>
                            </div>

                            <div className={styles["page72__word-column"]}>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Helpful
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio20e')}
                                        />
                                    </strong> <span>(prestativo(a))</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Talkative
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio21e')}
                                        />
                                    </strong> <span>(pessoa que fala muito)</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Organized
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio22e')}
                                        />
                                    </strong> <span>(organizado(a))</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Shy
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio23e')}
                                        />
                                    </strong> <span>(tímido(a))</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Lazy
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio24e')}
                                        />
                                    </strong> <span>(preguiçoso(a))</span>
                                </p>
                                <p>
                                    <strong className={styles["page72__red-text"]}>
                                        Disrespectful
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page72__icon"]}
                                            onClick={() => playAudio('pg72_audio25e')}
                                        />
                                    </strong> <span>(desrespeitoso(a))</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <div className={styles["page72__container-imagem"]}>
                <img className={styles["page72__imagem"]} src={pagina72_imagem1} alt="" />
            </div>
        </div>
    );
};

export default pagina72;

