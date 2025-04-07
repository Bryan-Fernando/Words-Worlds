import React, { useState } from 'react';

import styles from './pagina122.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg122_audio1e from '../assets/audios/pg94_audio1e.mp3';
import pg122_audio1p from '../assets/audios/pg94_audio1p.mp3';
import pg122_audio2 from '../assets/audios/pg94_audio2.mp3';
import pg122_audio3 from '../assets/audios/pg94_audio3.mp3';
import pg122_audio4 from '../assets/audios/pg94_audio4.mp3';
import pg122_audio5 from '../assets/audios/pg94_audio5.mp3';
import pg122_audio6 from '../assets/audios/pg94_audio6.mp3';
import pg122_audio7 from '../assets/audios/pg94_audio7.mp3';
import pg122_audio8 from '../assets/audios/pg94_audio8.mp3';
import pg122_audio9 from '../assets/audios/pg94_audio9.mp3';
import pg122_audio10 from '../assets/audios/pg94_audio10.mp3';
import pg122_audio11 from '../assets/audios/pg94_audio11.mp3';

const Pagina122 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

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
        pg122_audio1p,
        pg122_audio2,
        pg122_audio3,
        pg122_audio4,
        pg122_audio5,
        pg122_audio6,
        pg122_audio7,
        pg122_audio8,
        pg122_audio9,
        pg122_audio10,
        pg122_audio11
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
                        <br /> ( Put the words in the correct order to form a sentence )   
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
                            "2. (playing / they / not / soccer / are)",
                            "3. (listening / I / music / am / to)",
                            "4. (crying / is / the baby )",
                            "5. (next week / going / we / are / on vacation)"
                        ].map((question, index) => {
                            const answerAudio = `pg122_audio${index + 2}`;
                            const inputAudio = `pg122_audio${index + 7}`;

                            return (
                                <div key={index} className={styles["page122__question"]}>
                                    <div className={styles["page122__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page122__input-box"]}
                                        />
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page122__additional-icon"]}
                                            onClick={() => playAudio(inputAudio)}
                                        />
                                        {results[index] !== null ? (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page122__checkmark-image"]}
                                                style={{ display: "inline-block" }}
                                            />
                                        ) : (
                                            <span className={styles["page122__placeholder"]}></span>
                                        )}

                                    </div>
                                    <span
                                        className={styles["page122__question-text"]}
                                        onClick={() => playAudio(answerAudio)}
                                    >
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