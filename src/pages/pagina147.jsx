import React, { useState, useRef } from 'react';
import styles from './pagina147.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina147_imagem1 from '../assets/images/pagina147_imagem1.gif';

import global_exercise_e from '../assets/audios/global_exercise_e.mp3';
import global_exercise_p from '../assets/audios/global_exercise_p.mp3';

import pg147_audio1e from '../assets/audios/pg147_audio1e.mp3';
import pg147_audio2e from '../assets/audios/pg147_audio2e.mp3';
import pg147_audio3e from '../assets/audios/pg147_audio3e.mp3';
import pg147_audio4e from '../assets/audios/pg147_audio4e.mp3';
import pg147_audio5e from '../assets/audios/pg147_audio5e.mp3';
import pg147_audio6e from '../assets/audios/pg147_audio6e.mp3';

import pg147_audio1p from '../assets/audios/pg147_audio1p.mp3';
import pg147_audio2p from '../assets/audios/pg147_audio2p.mp3';
import pg147_audio3p from '../assets/audios/pg147_audio3p.mp3';
import pg147_audio4p from '../assets/audios/pg147_audio4p.mp3';
import pg147_audio5p from '../assets/audios/pg147_audio5p.mp3';
import pg147_audio6p from '../assets/audios/pg147_audio6p.mp3';

const audioMap = {
    global_exercise_e,
    global_exercise_p,
    pg147_audio1e,
    pg147_audio1p,
    pg147_audio2e,
    pg147_audio2p,
    pg147_audio3e,
    pg147_audio3p,
    pg147_audio4e,
    pg147_audio4p,
    pg147_audio5e,
    pg147_audio5p,
    pg147_audio6e,
    pg147_audio6p,
};

const Pagina147 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const [showAnswers, setShowAnswers] = useState(false);
    const currentAudioRef = useRef(null);

    const correctAnswers = [
        'is cooking',
        'are studying',
        "aren't playing",
        'are you doing',
        'is reading'
    ];

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.trim().toLowerCase() === correctAnswers[index]
        );
        setResults(newResults);
        setShowAnswers(true);
    };

    const playAudio = (key) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioMap[key]);
        currentAudioRef.current = audio;
        audio.play();
    };

    return (
        <div className={styles["page147__container"]}>
            <h1 className={styles["page147__title"]}>
                <span className={styles["page147__title--red"]}>Exercises</span>
                <span className={styles["page147__icons-container"]}>
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page147__icon"]}
                        onClick={() => playAudio('global_exercise_e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page147__icon"]}
                        onClick={() => playAudio('global_exercise_p')}
                    />
                </span>
            </h1>

            <h2 className={styles["page147__subtitle"]}>
                2. Select the correct option for each sentence.
                <span className={styles["page147__icons-container"]}>
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page147__icon"]}
                        onClick={() => playAudio('pg147_audio1e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page147__icon"]}
                        onClick={() => playAudio('pg147_audio1p')}
                    />
                </span>
            </h2>

            <div className={styles["page147__content"]}>
                <div className={styles["page147__questions-container"]}>
                    {[
                        "1. She",
                        "2. We",
                        "3. They",
                        "4. What",
                        "5. He"
                    ].map((questionStart, index) => {
                        const options = [
                            "(is cooking / cooks) dinner at the moment.",
                            "(are studying / study) English this week.",
                            "(aren't playing / don't play) football now.",
                            "(are you doing / do you do) right now?",
                            "(is reading / reads) a new book these days."
                        ];

                        return (
                            <div key={index} className={styles["page147__question"]}>
                                <span>{questionStart}</span>
                                <div className={styles["page147__input-container"]}>
                                    <input
                                        type="text"
                                        value={inputValues[index]}
                                        onChange={(e) => handleInputChange(e.target.value, index)}
                                        className={styles["page147__input-box"]}
                                    />
                                    {results[index] !== null && (
                                        <img
                                            src={results[index] ? correct_icon : wrong_icon}
                                            alt={results[index] ? "Correct" : "Incorrect"}
                                            className={styles["page147__checkmark-image"]}
                                        />
                                    )}
                                </div>
                                <span> {options[index]}</span>
                                <span className={styles["page147__icons-container"]}>
                                    <img
                                        src={eng_audio_icon}
                                        alt="English Audio"
                                        className={styles["page147__icon"]}
                                        onClick={() => playAudio(`pg147_audio${index + 2}e`)}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese Audio"
                                        className={styles["page147__icon"]}
                                        onClick={() => playAudio(`pg147_audio${index + 2}p`)}
                                    />
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className={styles["page147__image-container"]}>
                    <img
                        src={pagina147_imagem1}
                        alt="Woman cooking"
                        className={styles["page147__image"]}
                    />
                </div>
            </div>

            <button className={styles["page147__check-button"]} onClick={handleCheckClick}>
                <em>Check</em>
            </button>

            {showAnswers && (
                <div className={styles["page147__answers-section"]}>
                    <h2 className={styles["page147__answers-title"]}>Answers</h2>
                    <h3 className={styles["page147__answers-subtitle"]}>2. Choose the Correct Option</h3>
                    <ul className={styles["page147__answers-list"]}>
                        <li>She is cooking dinner at the moment.</li>
                        <li>We are studying English this week.</li>
                        <li>They aren't playing football now.</li>
                        <li>What are you doing right now?</li>
                        <li>He is reading a new book these days.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Pagina147;
