import React, { useState, useRef } from 'react';

import styles from './pagina127.module.css';

import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg41_audio1e from '../assets/audios/pg41_audio1e.mp3';
import pg41_audio1p from '../assets/audios/pg41_audio1p.mp3';
import pg41_audio2e from '../assets/audios/pg41_audio2e.mp3';
import pg41_audio3e from '../assets/audios/pg41_audio3e.mp3';
import pg41_audio4e from '../assets/audios/pg41_audio4e.mp3';
import pg41_audio5e from '../assets/audios/pg41_audio5e.mp3';
import pg41_audio6e from '../assets/audios/pg41_audio6e.mp3';
import pg41_audio7e from '../assets/audios/pg41_audio7e.mp3';
import pg41_audio8e from '../assets/audios/pg41_audio8e.mp3';
import pg41_audio9e from '../assets/audios/pg41_audio9e.mp3';
import pg41_audio10e from '../assets/audios/pg41_audio10e.mp3';
import pg41_audio11e from '../assets/audios/pg41_audio11e.mp3';
import pg41_audio2p from '../assets/audios/pg41_audio2p.mp3';
import pg41_audio3p from '../assets/audios/pg41_audio3p.mp3';
import pg41_audio4p from '../assets/audios/pg41_audio4p.mp3';
import pg41_audio5p from '../assets/audios/pg41_audio5p.mp3';
import pg41_audio6p from '../assets/audios/pg41_audio6p.mp3';
import pg41_audio7p from '../assets/audios/pg41_audio7p.mp3';
import pg41_audio8p from '../assets/audios/pg41_audio8p.mp3';
import pg41_audio9p from '../assets/audios/pg41_audio9p.mp3';
import pg41_audio10p from '../assets/audios/pg41_audio10p.mp3';
import pg41_audio11p from '../assets/audios/pg41_audio11p.mp3';

const audioFiles = [
    { en: pg41_audio2e, pt: pg41_audio2p },
    { en: pg41_audio3e, pt: pg41_audio3p },
    { en: pg41_audio4e, pt: pg41_audio4p },
    { en: pg41_audio5e, pt: pg41_audio5p },
    { en: pg41_audio6e, pt: pg41_audio6p },
];

const correctAnswers = ['Would', 'would', 'Would', 'would', 'Would'];

const Pagina127 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState(Array(5).fill(false));

    const playHeaderAudio = (audioFile) => {
        const audio = new Audio(audioFile);
        audio.play();
    };

    const playAudio = (index, language) => {
        const audio = new Audio(audioFiles[index][language]);
        audio.playbackRate = isSpeedReduced[index] ? 0.6 : 1;
        audio.play();
    };

    const toggleSpeedReduction = (index) => {
        const newSpeedState = [...isSpeedReduced];
        newSpeedState[index] = !newSpeedState[index];
        setIsSpeedReduced(newSpeedState);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.trim() === correctAnswers[index]
        );
        setResults(newResults);
    };

    return (
        <div className={styles["page127__container"]}>
            <h1 className={styles["page127__title"]}>
                Exercises
                <span>
                    <img src={eng_audio_icon} alt="English Audio" onClick={() => playHeaderAudio(global_learning_le_e)} />
                    <img src={ptbr_audio_icon} alt="Portuguese Audio" onClick={() => playHeaderAudio(global_learning_le_p)} />
                </span>
            </h1>

            <h2 className={styles["page127__exercise-title"]}>
                1: Fill in the Blanks (Would / Would Like)
                <span>
                    <img src={eng_audio_icon} alt="English Audio" onClick={() => playHeaderAudio(pg41_audio1e)} />
                    <img src={ptbr_audio_icon} alt="Portuguese Audio" onClick={() => playHeaderAudio(pg41_audio1p)} />
                </span>
            </h2>

            <div className={styles["page127__questions-container"]}>
                {[
                    "____ you like some tea?",
                    "I ____ like a pizza, please.",
                    "____ you help me with my homework?",
                    "She ____ like to go to the beach.",
                    "____ you like to play a game?"
                ].map((question, index) => {
                    const parts = question.split('____');
                    return (
                        <div key={index} className={styles["page127__question"]}>
                            <span><em><strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}</em></span>
                            <div className={styles["page127__input-container"]}>
                                <input
                                    type="text"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    className={styles["page127__input-box"]}
                                />
                                {results[index] !== null && (
                                    <img
                                        src={results[index] ? correct_icon : wrong_icon}
                                        alt={results[index] ? "Correct" : "Incorrect"}
                                        className={styles["page127__checkmark-image"]}
                                    />
                                )}
                            </div>
                            <span><em>{parts[1]}</em></span>
                            <div className={styles["page127__icons-container"]}>
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page127__icon--additional"]}
                                    onClick={() => playAudio(index, "en")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page127__icon--additional"]}
                                    onClick={() => playAudio(index, "pt")}
                                />
                                <img
                                    src={slow_audio_icon}
                                    alt="Slow Audio"
                                    className={`${styles["page127__icon--additional"]} ${isSpeedReduced[index] ? styles["page127__icon--pulsing"] : ''}`}
                                    onClick={() => toggleSpeedReduction(index)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className={styles["page127__check-button"]} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina127;
