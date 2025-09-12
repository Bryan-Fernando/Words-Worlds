import React, { useState, useRef } from 'react';

import styles from './pagina120.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg120_audio1e from '../assets/audios/pg120_audio1e.mp3';
import pg120_audio1p from '../assets/audios/pg120_audio1p.mp3';
import pg120_audio2e from '../assets/audios/pg120_audio2e.mp3';
import pg120_audio2p from '../assets/audios/pg120_audio2p.mp3';
import pg120_audio3e from '../assets/audios/pg120_audio3e.mp3';
import pg120_audio3p from '../assets/audios/pg120_audio3p.mp3';
import pg120_audio4e from '../assets/audios/pg120_audio4e.mp3';
import pg120_audio4p from '../assets/audios/pg120_audio4p.mp3';
import pg120_audio5e from '../assets/audios/pg120_audio5e.mp3';
import pg120_audio5p from '../assets/audios/pg120_audio5p.mp3';
import pg120_audio6e from '../assets/audios/pg120_audio6e.mp3';
import pg120_audio6p from '../assets/audios/pg120_audio6p.mp3';

const Pagina120 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const [showAnswersKey, setShowAnswersKey] = useState(false);
    const currentAudioRef = useRef(null);

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
        pg120_audio2e,
        pg120_audio2p,
        pg120_audio3e,
        pg120_audio3p,
        pg120_audio4e,
        pg120_audio4p,
        pg120_audio5e,
        pg120_audio5p,
        pg120_audio6e,
        pg120_audio6p,
    };

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioMap[audioKey]);
        currentAudioRef.current = audio;
        audio.play().catch(() => {});
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
        // limpa o resultado daquela linha
        setResults(prev => {
            const next = [...prev];
            next[index] = null;
            return next;
        });
    };

    // Aceita com ou sem ponto final (.), case-insensitive
    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;
            const user = value.trim().replace(/\.$/, '');
            const correct = correctAnswers[index].trim().replace(/\.$/, '');
            return user.toLowerCase() === correct.toLowerCase();
        });
        setResults(newResults);
    };

    const handleReset = () => {
        setInputValues(Array(5).fill(''));
        setResults(Array(5).fill(null));
        setShowAnswersKey(false);
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
            currentAudioRef.current = null;
        }
    };

    const toggleAnswersKey = () => setShowAnswersKey(v => !v);

    const answersKeyItems = [
        { label: '1', text: 'She is watching a movie now.' },
        { label: '2', text: 'We are studying for the test.' },
        { label: '3', text: 'They are not playing football at the moment.' },
        { label: '4', text: 'Why are you crying?' },
        { label: '5', text: 'I am going to the supermarket later.' },
    ];

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
                            { text: "She are watching a movie now.", eng: "pg120_audio2e", pt: "pg120_audio2p" },
                            { text: "We is studying for the test.", eng: "pg120_audio3e", pt: "pg120_audio3p" },
                            { text: "They not are playing football at the moment.", eng: "pg120_audio4e", pt: "pg120_audio4p" },
                            { text: "Why you is crying?", eng: "pg120_audio5e", pt: "pg120_audio5p" },
                            { text: "I am go to the supermarket later.", eng: "pg120_audio6e", pt: "pg120_audio6p" }
                        ].map((item, index) => (
                            <div key={index} className={styles["page120__question"]}>
                                <span className={styles["page120__question-text"]}>
                                    <em>{item.text}</em>
                                </span>
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
                                        alt="English Audio"
                                        className={styles["page120__additional-icon"]}
                                        onClick={() => playAudio(item.eng)}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese Audio"
                                        className={styles["page120__additional-icon"]}
                                        onClick={() => playAudio(item.pt)}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Ações: Check + Reset + Answers Key */}
                        <div className={styles["page120__actions"]}>
                            <button className={styles["page120__button--check"]} onClick={handleCheckClick}>
                                <em>Check</em>
                            </button>

                            <button className={styles["page120__reset-button"]} onClick={handleReset}>
                                <em>Reset</em>
                            </button>

                            <button
                                className={styles["page120__answersKey-button"]}
                                onClick={toggleAnswersKey}
                                aria-pressed={showAnswersKey ? 'true' : 'false'}
                            >
                                <em>Answers Key</em>
                            </button>
                        </div>

                        {showAnswersKey && (
                            <div className={styles["page120__answersKey-box"]}>
                                {answersKeyItems.map((item, idx) => (
                                    <div key={idx} className={styles["page120__answersKey-item"]}>
                                        <div className={styles["page120__answersKey-num"]}>{item.label}</div>
                                        <div className={styles["page120__answersKey-text"]}>{item.text}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina120;

