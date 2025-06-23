import React, { useState, useRef } from 'react';
import styles from './pagina148.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina148_imagem1 from '../assets/images/pagina148_imagem1.webp';

// Imports dos áudios
import pg148_audio1e from '../assets/audios/pg148_audio1e.mp3';
import pg148_audio2e from '../assets/audios/pg148_audio2e.mp3';
import pg148_audio3e from '../assets/audios/pg148_audio3e.mp3';
import pg148_audio4e from '../assets/audios/pg148_audio4e.mp3';

// Mapa de áudios
const audioMap = {
    pg148_audio1e,
    pg148_audio2e,
    pg148_audio3e,
    pg148_audio4e
};

const Pagina148 = () => {
    const [inputValues, setInputValues] = useState(Array(3).fill(''));
    const [results, setResults] = useState(Array(3).fill(null));
    const [showAnswers, setShowAnswers] = useState(false);

    const currentAudioRef = useRef(null);

    const correctAnswers = [
        "He isn't working in the office.",
        "They aren't playing soccer now",
        "I’m not studying for my test."
    ];

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase()
        );
        setResults(newResults);
        setShowAnswers(true);
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

    return (
        <div className={styles["page148__container"]}>
            <h1 className={styles["page148__title"]}>
                <span className={styles["page148__title--red"]}>Exercises</span>
                <span className={styles["page148__icons-container"]}>
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page148__icon"]}
                        onClick={() => playAudio('pg148_audio1e')}
                    />
                    <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page148__icon"]} />
                </span>
            </h1>

            <h2 className={styles["page148__subtitle"]}>
                3. Rewrite these sentences in their negative form.
                <span className={styles["page148__icons-container"]}>
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page148__icon"]}
                        onClick={() => playAudio('pg148_audio1e')}
                    />
                    <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page148__icon"]} />
                </span>
            </h2>

            <div className={styles["page148__content"]}>
                <div className={styles["page148__questions-container"]}>
                    {[
                        "1. He is working in the office.",
                        "2. They are playing soccer now.",
                        "3. I am studying for my test."
                    ].map((question, index) => (
                        <div key={index} className={styles["page148__question"]}>
                            <span>{question}
                                <span className={styles["page148__icons-container"]}>
                                    <img
                                        src={eng_audio_icon}
                                        alt="English Audio"
                                        className={styles["page148__icon"]}
                                        onClick={() => playAudio(`pg148_audio${index + 2}e`)}
                                    />
                                    <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page148__icon"]} />
                                </span>
                            </span>

                            <div className={styles["page148__input-container"]}>
                                <input
                                    type="text"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    className={styles["page148__input-box"]}
                                />
                            </div>
                        </div>
                    ))}

                </div>

                <div className={styles["page148__image-container"]}>
                    <img
                        src={pagina148_imagem1}
                        alt="Soccer Team"
                        className={styles["page148__image"]}
                    />
                </div>
            </div>

            <button className={styles["page148__check-button"]} onClick={handleCheckClick}>
                <em>Check</em>
            </button>

            {showAnswers && (
                <div className={styles["page148__answers-section"]}>
                    <h2 className={styles["page148__answers-title"]}>Answers</h2>
                    <h3 className={styles["page148__answers-subtitle"]}>3. Rewrite in Negative Form</h3>
                    <ul className={styles["page148__answers-list"]}>
                        <li>
                            He <span className={styles["page148__answer-red"]}>isn't</span> working in the office.
                        </li>
                        <li>
                            They <span className={styles["page148__answer-red"]}>aren’t</span> playing soccer now.
                        </li>
                        <li>
                            <span className={styles["page148__answer-red"]}>I’m not</span> studying for my test.
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Pagina148;
