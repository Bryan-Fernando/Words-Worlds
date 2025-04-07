import React, { useState } from 'react';

import styles from './pagina120.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg120_audio1e from '../assets/audios/pg94_audio1e.mp3';
import pg120_audio1p from '../assets/audios/pg94_audio1p.mp3';
import pg120_audio2 from '../assets/audios/pg94_audio2.mp3';
import pg120_audio3 from '../assets/audios/pg94_audio3.mp3';
import pg120_audio4 from '../assets/audios/pg94_audio4.mp3';
import pg120_audio5 from '../assets/audios/pg94_audio5.mp3';
import pg120_audio6 from '../assets/audios/pg94_audio6.mp3';
import pg120_audio7 from '../assets/audios/pg94_audio7.mp3';
import pg120_audio8 from '../assets/audios/pg94_audio8.mp3';
import pg120_audio9 from '../assets/audios/pg94_audio9.mp3';
import pg120_audio10 from '../assets/audios/pg94_audio10.mp3';
import pg120_audio11 from '../assets/audios/pg94_audio11.mp3';

const Pagina120 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

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
        pg120_audio1p,
        pg120_audio2,
        pg120_audio3,
        pg120_audio4,
        pg120_audio5,
        pg120_audio6,
        pg120_audio7,
        pg120_audio8,
        pg120_audio9,
        pg120_audio10,
        pg120_audio11
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
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
                            "She are watching a movie now.",
                            "We is studying for the test.",
                            "They not are playing football at the moment.",
                            "Why you is crying?",
                            "I am go to the supermarket later."
                        ].map((question, index) => {
                            const answerAudio = `pg120_audio${index + 2}`;
                            const inputAudio = `pg120_audio${index + 7}`;

                            return (
                                <div key={index} className={styles["page120__question"]}>
                                    <div className={styles["page120__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page120__input-box"]}
                                        />
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page120__additional-icon"]}
                                            onClick={() => playAudio(inputAudio)}
                                        />
                                        {results[index] !== null ? (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page120__checkmark-image"]}
                                                style={{ display: "inline-block" }}
                                            />
                                        ) : (
                                            <span className={styles["page120__placeholder"]}></span>
                                        )}

                                    </div>
                                    <span
                                        className={styles["page120__question-text"]}
                                        onClick={() => playAudio(answerAudio)}
                                    >
                                        <em>{question}</em>
                                    </span>
                                </div>
                            );
                        })}

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
