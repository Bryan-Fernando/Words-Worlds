import React, { useState, useRef } from 'react';

import styles from './pagina120.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg120_audio1e from '../assets/audios/pg120_audio1e.mp3';
import pg120_audio2e from '../assets/audios/pg120_audio2e.mp3';
import pg120_audio3e from '../assets/audios/pg120_audio3e.mp3';
import pg120_audio4e from '../assets/audios/pg120_audio4e.mp3';
import pg120_audio5e from '../assets/audios/pg120_audio5e.mp3';
import pg120_audio6e from '../assets/audios/pg120_audio6e.mp3';

const Pagina120 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const currentAudioRef = useRef(null);  // Para controlar o áudio atual

    

    const correctAnswers = [
        'She is watching a movie now.',
        'We are studying for the test.',
        'They are not playing football at the moment.',
        'Why are you crying?',
        'I am going to the supermarket later.'
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg120_audio1e,
        pg120_audio2e,
        pg120_audio3e,
        pg120_audio4e,
        pg120_audio5e,
        pg120_audio6e,
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

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;

            const isCorrect = value.trim().toLowerCase() === correctAnswers[index].toLowerCase();

            return isCorrect;
        });
        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    return (
        <div className={styles["page120__container"]}>
            <header className={styles["page120__header"]}>
                <h1 className={styles["page120__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page120__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page120__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page120__main"]}>
                <div className={styles["page120__content-flex"]}>
                    <div className={styles["page120__questions-container"]}>
                        <h2 className={styles["page120__questions-title"]}>
                            <span className={styles["page120__text-red"]}>1. Correct the Mistakes</span>
                            <br /> Each sentence has a mistake. Find and correct it.
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page120__header-icon"]}
                                onClick={() => playAudio("pg120_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page120__header-icon"]}
                                onClick={() => playAudio("pg120_audio1p")}
                            />
                        </h2>

                        {[
                            { text: "She are watching a movie now.", audio: "pg120_audio2e" },
                            { text: "We is studying for the test.", audio: "pg120_audio3e" },
                            { text: "They not are playing football at the moment.", audio: "pg120_audio4e" },
                            { text: "Why you is crying?", audio: "pg120_audio5e" },
                            { text: "I am go to the supermarket later.", audio: "pg120_audio6e" }
                        ].map((questionItem, index) => (
                            <div key={index} className={styles["page120__question"]}>
                                <div className={styles["page120__input-container"]}>
                                    <input
                                        type="text"
                                        value={inputValues[index]}
                                        onChange={(e) => handleInputChange(e.target.value, index)}
                                        className={styles["page120__input-box"]}
                                    />
                                    {results[index] !== null ? (
                                        <img
                                            src={results[index] ? correct_icon : wrong_icon}
                                            alt={results[index] ? "Correct" : "Incorrect"}
                                            className={styles["page120__checkmark-image"]}
                                        />
                                    ) : (
                                        <span className={styles["page120__placeholder"]}></span>
                                    )}
                                    <img
                                        src={eng_audio_icon}
                                        alt="Audio Icon"
                                        className={styles["page120__additional-icon"]}
                                        onClick={() => playAudio(questionItem.audio)}
                                    />
                                    
                                </div>
                                <span className={styles["page120__question-text"]}>
                                    <em>{questionItem.text}</em>
                                </span>
                            </div>
                        ))}
                        <button className={styles["page120__button--check"]} onClick={handleCheckClick}>
                            <em>Check</em>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina120;
