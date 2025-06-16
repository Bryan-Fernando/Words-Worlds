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

const Pagina122 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const currentAudioRef = useRef(null);

    const correctAnswers = [
        'She is writing an email now.',
        'They aren’t playing soccer now.',
        'I’m listening to music.',
        'The baby is crying.',
        'We are going on vacation next week.'
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg122_audio1e,
        pg122_audio2e,
        pg122_audio3e,
        pg122_audio4e,
        pg122_audio5e,
        pg122_audio6e
    };

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            currentAudioRef.current = audio;
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;
            return value.trim().toLowerCase() === correctAnswers[index].toLowerCase();
        });
        setResults(newResults);
    };

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
                            const answerAudio = `pg122_audio${index + 2}e`;
                            return (
                                <div key={index} className={styles["page122__question"]}>
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
                                            alt="Audio Icon"
                                            className={styles["page122__additional-icon"]}
                                            onClick={() => playAudio(answerAudio)}
                                        />
                                    </div>
                                    <span className={styles["page122__question-text"]}>
                                        <em>{question}</em>
                                    </span>
                                </div>
                            );
                        })}

                        <button className={styles["page122__button--check"]} onClick={handleCheckClick}>
                            <em>Check</em>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina122;
