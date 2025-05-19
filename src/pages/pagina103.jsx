import React, { useState } from 'react';

import styles from './pagina103.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina103_imagem1 from '../assets/images/pagina103_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg103_audio1e from '../assets/audios/pg103_audio1e.mp3';
import pg103_audio1p from '../assets/audios/pg103_audio1p.mp3';
import pg103_audio2 from '../assets/audios/pg103_audio2.mp3';
import pg103_audio3 from '../assets/audios/pg103_audio3.mp3';
import pg103_audio4 from '../assets/audios/pg103_audio4.mp3';
import pg103_audio5 from '../assets/audios/pg103_audio5.mp3';
import pg103_audio6 from '../assets/audios/pg103_audio6.mp3';
import pg103_audio2p from '../assets/audios/pg103_audio2p.mp3';
import pg103_audio3p from '../assets/audios/pg103_audio3p.mp3';
import pg103_audio4p from '../assets/audios/pg103_audio4p.mp3';
import pg103_audio5p from '../assets/audios/pg103_audio5p.mp3';
import pg103_audio6p from '../assets/audios/pg103_audio6p.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg103_audio1e,
    pg103_audio1p,
    pg103_audio2,
    pg103_audio3,
    pg103_audio4,
    pg103_audio5,
    pg103_audio6,
    pg103_audio2p,
    pg103_audio3p,
    pg103_audio4p,
    pg103_audio5p,
    pg103_audio6p
};

const Pagina103 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));

    const correctAnswers = [
        "No, I’m not.",
        "Yes, she is.",
        "Yes, we are.",
        "No, it’s not.",
        "No, they aren’t."
    ];

    const options = [
        ["No, I’m not.", "Yes, we are.", "Yes, she is."],
        ["Yes, she is.", "No, they aren’t.", "No, I’m not."],
        ["Yes, we are.", "No, it’s not.", "Yes, she is."],
        ["No, it’s not.", "Yes, we are.", "No, they aren’t."],
        ["No, they aren’t.", "No, I’m not.", "Yes, she is."]
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value === correctAnswers[index]);
        setResults(newResults);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles["page103__container"]}>
    <header className={styles["page103__header"]}>
        <h1 className={styles["page103__h1"]}>
            Learning Language Exercises
            <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page103__header--icon"]}
                onClick={() => playAudio("global_learning_le_e")}
            />
            <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page103__header--icon"]}
                onClick={() => playAudio("global_learning_le_p")}
            />
        </h1>
    </header>

    <main className={styles["page103__main"]}>
        <div className={styles["page103__container--questoes"]}>
            <div className={styles["page103__questions"]}>
                <p className={styles["page103__titulo--question"]}>
                    Match the questions with the correct answers.
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page103__header--icon"]}
                        onClick={() => playAudio("pg103_audio1e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page103__header--icon"]}
                        onClick={() => playAudio("pg103_audio1p")}
                    />
                    <br />
                    Questions:
                </p>
                <br />
                {[
                    "Are you a teacher?",
                    "Is she your neighbor?",
                    "Are we going to the park?",
                    "Is it raining outside?",
                    "Are they from Japan?"
                ].map((question, index) => {
                    const audioKey = `pg103_audio${index + 2}`;
                    const audioKeyP = `pg103_audio${index + 2}p`;
                    return (
                        <div key={index} className={styles["page103__question"]}>
                            <span><strong>{index + 1}.</strong> {question}</span>

                            <select
                                className={styles["page103__select--box"]}
                                value={inputValues[index]}
                                onChange={(e) => handleInputChange(e.target.value, index)}
                            >
                                <option value="">Select an answer</option>
                                {options[index].map((option, optIndex) => (
                                    <option key={optIndex} value={option}>{option}</option>
                                ))}
                            </select>

                            {results[index] !== null && (
                                <img
                                    src={results[index] ? correct_icon : wrong_icon}
                                    alt={results[index] ? "Correct" : "Incorrect"}
                                    className={styles["page103__checkmark--image"]}
                                />
                            )}

                            <div className={styles["page103__icons--container"]}>
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio Icon"
                                    className={styles["page103__additional--icon"]}
                                    onClick={() => playAudio(audioKey)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Audio Icon"
                                    className={styles["page103__additional--icon"]}
                                    onClick={() => playAudio(audioKeyP)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles["page103__container--imagem"]}>
                <img className={styles["page103__imagem"]} src={pagina103_imagem1} alt="Learning" />
            </div>
        </div>
    </main>

    <button className={styles["page103__check--button"]} onClick={handleCheckClick}><em>Check</em></button>
</div>

    );
};

export default Pagina103;
