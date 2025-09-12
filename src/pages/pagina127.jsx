import React, { useState, useRef } from 'react';

import styles from './pagina127.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_exercise_e from '../assets/audios/global_exercise_e.mp3';
import global_exercise_p from '../assets/audios/global_exercise_p.mp3';
import pg127_audio1e from '../assets/audios/pg127_audio1e.mp3';
import pg127_audio1p from '../assets/audios/pg127_audio1p.mp3';
import pg127_audio2e from '../assets/audios/pg127_audio2e.mp3';
import pg127_audio2p from '../assets/audios/pg127_audio2p.mp3';
import pg127_audio3e from '../assets/audios/pg127_audio3e.mp3';
import pg127_audio3p from '../assets/audios/pg127_audio3p.mp3';
import pg127_audio4e from '../assets/audios/pg127_audio4e.mp3';
import pg127_audio4p from '../assets/audios/pg127_audio4p.mp3';
import pg127_audio5e from '../assets/audios/pg127_audio5e.mp3';
import pg127_audio5p from '../assets/audios/pg127_audio5p.mp3';
import pg127_audio6e from '../assets/audios/pg127_audio6e.mp3';
import pg127_audio6p from '../assets/audios/pg127_audio6p.mp3';

const audioFiles = [
    { en: pg127_audio2e, pt: pg127_audio2p },
    { en: pg127_audio3e, pt: pg127_audio3p },
    { en: pg127_audio4e, pt: pg127_audio4p },
    { en: pg127_audio5e, pt: pg127_audio5p },
    { en: pg127_audio6e, pt: pg127_audio6p }
];

const correctAnswers = ['Would', 'would', 'Would', 'would', 'Would'];

const Pagina127 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const [showAnswersKey, setShowAnswersKey] = useState(false);
    const currentAudioRef = useRef(null);

    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play().catch(() => {});
    };

    const playQuestionAudio = (index, language) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioFiles[index][language]);
        currentAudioRef.current = audio;
        audio.play().catch(() => {});
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
        // limpa o resultado daquela linha ao editar
        setResults(prev => {
            const next = [...prev];
            next[index] = null;
            return next;
        });
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((val, i) => val.trim() === correctAnswers[i]);
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
        { label: 'a', text: 'Would' },
        { label: 'b', text: 'would' },
        { label: 'c', text: 'Would' },
        { label: 'd', text: 'would' },
        { label: 'e', text: 'Would' },
    ];

    return (
        <div className={styles["page127__container"]}>
            <h1 className={styles["page127__title"]}>
                Exercises
                <span>
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page127__icon--additional-h"]}
                        onClick={() => playAudio(global_exercise_e)}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page127__icon--additional-h"]}
                        onClick={() => playAudio(global_exercise_p)}
                    />
                </span>
            </h1>

            <h2 className={styles["page127__exercise-title"]}>
                1: Fill in the Blanks (Would)
                <span>
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page127__icon--additional-h"]}
                        onClick={() => playAudio(pg127_audio1e)}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page127__icon--additional-h"]}
                        onClick={() => playAudio(pg127_audio1p)}
                    />
                </span>
            </h2>

            <div className={styles["page127__questions-container"]}>
                {[
                    "____ you like some tea?",
                    "I ____ like a pepperoni pizza, please.",
                    "____ you help me with my homework?",
                    "She ____ like to go to the beach.",
                    "____ you like to play a game?"
                ].map((question, index) => {
                    const parts = question.split('____');
                    return (
                        <div key={index} className={styles["page127__question"]}>
                            <span>
                                <em><strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}</em>
                            </span>
                            <div className={styles["page127__input-container"]}>
                                <input
                                    type="text"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    className={styles["page127__input-box"]}
                                />
                            </div>
                            <span><em>{parts[1]}</em></span>
                            {results[index] !== null && (
                                <img
                                    src={results[index] ? correct_icon : wrong_icon}
                                    alt={results[index] ? "Correct" : "Incorrect"}
                                    className={styles["page127__checkmark-image"]}
                                />
                            )}
                            <div className={styles["page127__icons-container"]}>
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page127__icon--additional"]}
                                    onClick={() => playQuestionAudio(index, 'en')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page127__icon--additional"]}
                                    onClick={() => playQuestionAudio(index, 'pt')}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Ações: Check + Reset + Answers Key */}
            <div className={styles["page127__actions"]}>
                <button className={styles["page127__check-button"]} onClick={handleCheckClick}>
                    <em>Check</em>
                </button>

                <button className={styles["page127__reset-button"]} onClick={handleReset}>
                    <em>Reset</em>
                </button>

                <button
                    className={styles["page127__answersKey-button"]}
                    onClick={toggleAnswersKey}
                    aria-pressed={showAnswersKey ? 'true' : 'false'}
                >
                    <em>Answers Key</em>
                </button>
            </div>

            {/* Answers Key (curto) */}
            {showAnswersKey && (
                <div className={styles["page127__answersKey-box"]}>
                    {answersKeyItems.map((item, idx) => (
                        <div key={idx} className={styles["page127__answersKey-item"]}>
                            <div className={styles["page127__answersKey-num"]}>{item.label}</div>
                            <div className={styles["page127__answersKey-text"]}>{item.text}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Pagina127;
