import React, { useState, useRef } from 'react';
import styles from './pagina122.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg122_audio1e from '../assets/audios/pg122_audio1e.mp3';
import pg122_audio2e from '../assets/audios/pg122_audio2e.mp3';
import pg122_audio3e from '../assets/audios/pg122_audio3e.mp3';
import pg122_audio4e from '../assets/audios/pg122_audio4e.mp3';
import pg122_audio5e from '../assets/audios/pg122_audio5e.mp3';
import pg122_audio6e from '../assets/audios/pg122_audio6e.mp3';

import pg122_audio1p from '../assets/audios/pg122_audio1p.mp3';
import pg122_audio2p from '../assets/audios/pg122_audio2p.mp3';
import pg122_audio3p from '../assets/audios/pg122_audio3p.mp3';
import pg122_audio4p from '../assets/audios/pg122_audio4p.mp3';
import pg122_audio5p from '../assets/audios/pg122_audio5p.mp3';
import pg122_audio6p from '../assets/audios/pg122_audio6p.mp3';

const Pagina122 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const [showAnswersKey, setShowAnswersKey] = useState(false);
    const currentAudioRef = useRef(null);

    const correctAnswers = [
        "She is writing an email now.",
        "They aren't playing soccer now.",
        "I'm listening to music.",
        "The baby is crying.",
        "We are going on vacation next week."
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg122_audio1e,
        pg122_audio1p,
        pg122_audio2e,
        pg122_audio2p,
        pg122_audio3e,
        pg122_audio3p,
        pg122_audio4e,
        pg122_audio4p,
        pg122_audio5e,
        pg122_audio5p,
        pg122_audio6e,
        pg122_audio6p
    };

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            currentAudioRef.current = audio;
            audio.play().catch((error) =>
                console.error("Erro ao reproduzir o áudio:", error)
            );
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
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

    // Aceita com ou sem ponto final
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
        { label: '1', text: "She is writing an email now." },
        { label: '2', text: "They aren't playing soccer now." },
        { label: '3', text: "I'm listening to music." },
        { label: '4', text: "The baby is crying." },
        { label: '5', text: "We are going on vacation next week." }
    ];

    return (
        <div className={styles["page122__container"]}>
            <header className={styles["page122__header"]}>
                <h1 className={styles["page122__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page122__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page122__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>

            <main className={styles["page122__main"]}>
                <div className={styles["page122__content-flex"]}>
                    <div className={styles["page122__questions-container"]}>
                        <h2 className={styles["page122__questions-title"]}>
                            <span className={styles["page122__text-red"]}>3. Sentence Ordering</span>
                            <br />
                            (Put the words in the correct order to form a sentence)
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page122__header-icon"]}
                                onClick={() => playAudio("pg122_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page122__header-icon"]}
                                onClick={() => playAudio("pg122_audio1p")}
                            />
                        </h2>

                        {[
                            "1. (is / writing / she / an email / now)",
                            "2. (playing / they / now / soccer / aren't)",
                            "3. (listening / I / music / am / to)",
                            "4. (crying / is / the baby)",
                            "5. (next week / going / we / are / on vacation)"
                        ].map((question, index) => {
                            const engKey = `pg122_audio${index + 2}e`;
                            const ptKey = `pg122_audio${index + 2}p`;
                            return (
                                <div key={index} className={styles["page122__question"]}>
                                    <span className={styles["page122__question-text"]}>
                                        <em>{question}</em>
                                    </span>
                                    <div className={styles["page122__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page122__input-box"]}
                                        />
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page122__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page122__additional-icon"]}
                                            onClick={() => playAudio(engKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page122__additional-icon"]}
                                            onClick={() => playAudio(ptKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                        {/* Ações */}
                        <div className={styles["page122__actions"]}>
                            <button className={styles["page122__button--check"]} onClick={handleCheckClick}>
                                <em>Check</em>
                            </button>

                            <button className={styles["page122__reset-button"]} onClick={handleReset}>
                                <em>Reset</em>
                            </button>

                            <button
                                className={styles["page122__answersKey-button"]}
                                onClick={toggleAnswersKey}
                                aria-pressed={showAnswersKey ? 'true' : 'false'}
                            >
                                <em>Answers Key</em>
                            </button>
                        </div>

                        {/* Answers Key */}
                        {showAnswersKey && (
                            <div className={styles["page122__answersKey-box"]}>
                                {answersKeyItems.map((item, idx) => (
                                    <div key={idx} className={styles["page122__answersKey-item"]}>
                                        <div className={styles["page122__answersKey-num"]}>{item.label}</div>
                                        <div className={styles["page122__answersKey-text"]}>{item.text}</div>
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

export default Pagina122;

