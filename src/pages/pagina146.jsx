import React, { useState, useRef } from 'react';
import styles from './pagina146.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina146_imagem1 from '../assets/images/pagina146_imagem1.webp';

import global_exercise_e from '../assets/audios/global_exercise_e.mp3';
import global_exercise_p from '../assets/audios/global_exercise_p.mp3';

import pg146_audio1e from '../assets/audios/pg146_audio1e.mp3';
import pg146_audio2e from '../assets/audios/pg146_audio2e.mp3';
import pg146_audio2p from '../assets/audios/pg146_audio2p.mp3';
import pg146_audio3e from '../assets/audios/pg146_audio3e.mp3';
import pg146_audio3p from '../assets/audios/pg146_audio3p.mp3';
import pg146_audio4e from '../assets/audios/pg146_audio4e.mp3';
import pg146_audio4p from '../assets/audios/pg146_audio4p.mp3';
import pg146_audio5e from '../assets/audios/pg146_audio5e.mp3';
import pg146_audio5p from '../assets/audios/pg146_audio5p.mp3';
import pg146_audio6e from '../assets/audios/pg146_audio6e.mp3';
import pg146_audio6p from '../assets/audios/pg146_audio6p.mp3';
import pg146_audio7e from '../assets/audios/pg146_audio7e.mp3';
import pg146_audio7p from '../assets/audios/pg146_audio7p.mp3';
import pg146_audio8e from '../assets/audios/pg146_audio8e.mp3';
import pg146_audio8p from '../assets/audios/pg146_audio8p.mp3';
import pg146_audio9e from '../assets/audios/pg146_audio9e.mp3';
import pg146_audio9p from '../assets/audios/pg146_audio9p.mp3';

const audioMap = {
    global_exercise_e,
    global_exercise_p,
    pg146_audio1e,
    pg146_audio2e, pg146_audio2p,
    pg146_audio3e, pg146_audio3p,
    pg146_audio4e, pg146_audio4p,
    pg146_audio5e, pg146_audio5p,
    pg146_audio6e, pg146_audio6p,
    pg146_audio7e, pg146_audio7p,
    pg146_audio8e, pg146_audio8p,
    pg146_audio9e, pg146_audio9p
};

const Pagina146 = () => {
    const [inputValues, setInputValues] = useState(Array(8).fill(''));
    const [results, setResults] = useState(Array(8).fill(null));
    const [showAnswers, setShowAnswers] = useState(false);

    const currentAudioRef = useRef(null);

    const correctAnswers = [
        'is running',
        'are having',
        'am not watching',
        'are you crying?',
        'are traveling',
        'is sleeping',
        'are always forgetting',
        'is changing'
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.trim().toLowerCase() === correctAnswers[index]
        );
        setResults(newResults);
        setShowAnswers(true);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioMap[audioKey]);
        currentAudioRef.current = audio;
        audio.play();
    };

    const renderIcons = (engKey, ptKey) => (
        <span className={styles["page146__icons-container"]}>
            {engKey && audioMap[engKey] && (
                <img
                    src={eng_audio_icon}
                    alt="English Audio"
                    className={styles["page146__icon"]}
                    onClick={() => playAudio(engKey)}
                />
            )}
            {ptKey && audioMap[ptKey] && (
                <img
                    src={ptbr_audio_icon}
                    alt="Portuguese Audio"
                    className={styles["page146__icon"]}
                    onClick={() => playAudio(ptKey)}
                />
            )}
        </span>
    );

    return (
        <div className={styles["page146__container"]}>
            <h1 className={styles["page146__title"]}>
                <span className={styles["page146__title--red"]}>Exercises</span>
                {renderIcons('global_exercise_e', 'global_exercise_p')}
            </h1>

            <h2 className={styles["page146__exercise-instruction"]}>
                1. Fill in the blanks : Complete the sentences using the correct form of the Present Continuous in parentheses.
                {renderIcons('pg146_audio1e', null)}
            </h2>

            <p className={styles["page146__exercise-translation"]}>
                Complete os espaços vazios das frases usando a forma correta do presente contínuo – Gerúndio dos verbos entre parênteses.
            </p>

            <div className={styles["page146__content"]}>
                <div className={styles["page146__questions-container"]}>
                    {[
                        "1. Look! She ________ (run) in the park.",
                        "2. We ________ (have) dinner right now.",
                        "3. I ________ (not watch) TV at the moment.",
                        "4. Why ________ (you / cry)?",
                        "5. My parents ________ (travel) to Spain next month.",
                        "6. The baby ________ (sleep) now.",
                        "7. You ________ (always / forget) your keys!",
                        "8. The world ________ (change) fast."
                    ].map((question, index) => (
                        <div key={index} className={styles["page146__question"]}>
                            <span>{question.split('________')[0]}</span>
                            <div className={styles["page146__input-container"]}>
                                <input
                                    type="text"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    className={styles["page146__input-box"]}
                                />
                                {results[index] !== null && (
                                    <img
                                        src={results[index] ? correct_icon : wrong_icon}
                                        alt={results[index] ? "Correct" : "Incorrect"}
                                        className={styles["page146__checkmark-image"]}
                                    />
                                )}
                            </div>
                            <span>{question.split('________')[1]}</span>
                            {renderIcons(`pg146_audio${index + 2}e`, `pg146_audio${index + 2}p`)}
                        </div>
                    ))}
                </div>

                <div className={styles["page146__image-container"]}>
                    <img
                        src={pagina146_imagem1}
                        alt="Running Girl"
                        className={styles["page146__image"]}
                    />
                </div>
            </div>

            <button className={styles["page146__check-button"]} onClick={handleCheckClick}>
                <em>Check</em>
            </button>

            {showAnswers && (
                <div className={styles["page146__answers-section"]}>
                    <h2 className={styles["page146__answers-title"]}>Answers</h2>
                    <h3 className={styles["page146__answers-subtitle"]}>1. Fill in the blanks:</h3>
                    <ul className={styles["page146__answers-list"]}>
                        <li>Look! She is running in the park.</li>
                        <li>We are having dinner right now.</li>
                        <li>I am not watching TV at the moment.</li>
                        <li>Why are you crying?</li>
                        <li>My parents are traveling to Spain next month.</li>
                        <li>The baby is sleeping now.</li>
                        <li>You are always forgetting your keys!</li>
                        <li>The world is changing fast.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Pagina146;
