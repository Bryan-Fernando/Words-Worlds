import React, { useState } from 'react';
import styles from './pagina215.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina215 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));

    const correctAnswers = [
        'How',
        'Who',
        'Where',
        'What',
        'When'
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!value.trim()) return false;
            const trimmedValue = value.trim().toLowerCase();
            const correctValue = correctAnswers[index].toLowerCase();
            return trimmedValue === correctValue;
        });
        setResults(newResults);
    };

    const handleInputChange = (value, index) => {
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    };

    return (
        <div className={styles.pg215Container}>
            <h1 className={styles.pg215Title}>Exercises</h1>

            <div className={styles.pg215ExerciseSection}>
                <h2 className={styles.pg215ExerciseTitle}>
                    2. Fill in the blanks by completing each question using:
                    <br />
                    What, Where, When, Who, or How.
                </h2>
                
                <div className={styles.pg215QuestionsBox}>
                    <div className={styles.pg215Question}>
                        <span>1.</span>
                        <input
                            type="text"
                            value={inputValues[0] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 0)}
                            className={styles.pg215InputBox}
                        />
                        <span>can you speak Spanish so well?</span>
                        {results[0] !== null && (
                            <img
                                src={results[0] ? correct_icon : wrong_icon}
                                alt={results[0] ? "Correct" : "Incorrect"}
                                className={styles.pg215CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg215Question}>
                        <span>2.</span>
                        <input
                            type="text"
                            value={inputValues[1] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 1)}
                            className={styles.pg215InputBox}
                        />
                        <span>can help me with my homework?</span>
                        {results[1] !== null && (
                            <img
                                src={results[1] ? correct_icon : wrong_icon}
                                alt={results[1] ? "Correct" : "Incorrect"}
                                className={styles.pg215CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg215Question}>
                        <span>3.</span>
                        <input
                            type="text"
                            value={inputValues[2] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 2)}
                            className={styles.pg215InputBox}
                        />
                        <span>can I find the nearest pharmacy?</span>
                        {results[2] !== null && (
                            <img
                                src={results[2] ? correct_icon : wrong_icon}
                                alt={results[2] ? "Correct" : "Incorrect"}
                                className={styles.pg215CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg215Question}>
                        <span>4.</span>
                        <input
                            type="text"
                            value={inputValues[3] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 3)}
                            className={styles.pg215InputBox}
                        />
                        <span>can you do with a computer?</span>
                        {results[3] !== null && (
                            <img
                                src={results[3] ? correct_icon : wrong_icon}
                                alt={results[3] ? "Correct" : "Incorrect"}
                                className={styles.pg215CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg215Question}>
                        <span>5.</span>
                        <input
                            type="text"
                            value={inputValues[4] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 4)}
                            className={styles.pg215InputBox}
                        />
                        <span>can I call you?</span>
                        {results[4] !== null && (
                            <img
                                src={results[4] ? correct_icon : wrong_icon}
                                alt={results[4] ? "Correct" : "Incorrect"}
                                className={styles.pg215CheckmarkImage}
                            />
                        )}
                    </div>
                </div>

                <button onClick={handleCheckClick} className={styles.pg215CheckButton}>
                    Check
                </button>
            </div>
        </div>
    );
};

export default Pagina215;