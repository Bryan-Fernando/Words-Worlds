import React, { useState } from 'react';
import styles from './pagina146.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina146_imagem1 from '../assets/images/pagina146_imagem1.webp';

const Pagina146 = () => {
    const [inputValues, setInputValues] = useState(Array(8).fill(''));
    const [results, setResults] = useState(Array(8).fill(null));
    const [showAnswers, setShowAnswers] = useState(false);

    const correctAnswers = [
        'is running',
        'are having',
        'am not watching',
        'are you crying',
        'are traveling',
        'is sleeping',
        'are always forgetting',
        'is changing'
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.trim().toLowerCase() === correctAnswers[index]
        );
        setResults(newResults);
        setShowAnswers(true);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    return (
        <div className={styles["page146__container"]}>
            <h1 className={styles["page146__title"]}>
                <span className={styles["page146__title--red"]}>Exercises</span>
                <span className={styles["page146__icons-container"]}>
                    <img src={eng_audio_icon} alt="English Audio" className={styles["page146__icon"]} />
                    <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page146__icon"]} />
                </span>
            </h1>

            <h2 className={styles["page146__exercise-instruction"]}>
                1. Fill in the blanks : Complete the sentences using the correct form of the Present Continuous in parentheses.
                <span className={styles["page146__icons-container"]}>
                    <img src={eng_audio_icon} alt="English Audio" className={styles["page146__icon"]} />
                </span>
            </h2>

            <p className={styles["page146__exercise-translation"]}>
                Complete os espaços vazios das frases usando a forma correta do presente contínuo – Gerúndio dos verbos entre parênteses.
            </p>

            <div className={styles["page146__content"]}>
                <div className={styles["page146__questions-container"]}>
                    {[
                        "1. Look! She ________ (run) in the park.",
                        "2. We ________ (have) dinner right now.",
                        "3. I ________ (not watch) TV at the moment.",
                        "4. Why ________ (you / cry)?",
                        "5. My parents ________ (travel) to Spain next month.",
                        "6. The baby ________ (sleep) now.",
                        "7. You ________ (always / forget) your keys!",
                        "8. The world ________ (change) fast."
                    ].map((question, index) => (
                        <div key={index} className={styles["page146__question"]}>
                            <span>{question.split('________')[0]}</span>
                            <div className={styles["page146__input-container"]}>
                                <input
                                    type="text"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    className={styles["page146__input-box"]}
                                />
                                {results[index] !== null && (
                                    <img
                                        src={results[index] ? correct_icon : wrong_icon}
                                        alt={results[index] ? "Correct" : "Incorrect"}
                                        className={styles["page146__checkmark-image"]}
                                    />
                                )}
                            </div>

                            <span>{question.split('________')[1]}</span>
                            <span className={styles["page146__icons-container"]}>
                                <img src={eng_audio_icon} alt="English Audio" className={styles["page146__icon"]} />
                                <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page146__icon"]} />
                            </span>
                        </div>
                    ))}
                </div>

                <div className={styles["page146__image-container"]}>
                    <img
                        src={pagina146_imagem1}
                        alt="Running Girl"
                        className={styles["page146__image"]}
                    />
                </div>
            </div>

            <button className={styles["page146__check-button"]} onClick={handleCheckClick}>
                <em>Check</em>
            </button>
            {showAnswers && (
                <div className={styles["page146__answers-section"]}>
                    <h2 className={styles["page146__answers-title"]}>Answers</h2>
                    <h3 className={styles["page146__answers-subtitle"]}>1. Fill in the blanks:</h3>
                    <ul className={styles["page146__answers-list"]}>
                        <li>Look! She is running in the park.</li>
                        <li>We are having dinner right now.</li>
                        <li>I am not watching TV at the moment.</li>
                        <li>Why are you crying?</li>
                        <li>My parents are traveling to Spain next month.</li>
                        <li>The baby is sleeping now.</li>
                        <li>You are always forgetting your keys!</li>
                        <li>The world is changing fast.</li>
                    </ul>
                </div>
            )}

        </div>
    );
};

export default Pagina146;
