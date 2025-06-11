import React, { useState } from 'react';
import styles from './pagina214.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina214 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

    const correctAnswers = [
        'What',
        'Where',
        'When',
        'Who',
        'Why',
        'How'
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
        <div className={styles.pg214Container}>
            <h1 className={styles.pg214Title}>Exercises</h1>

            <div className={styles.pg214ExerciseSection}>
                <h2 className={styles.pg214ExerciseTitle}>
                    1. Fill in the blanks by completing each question using:
                    <br />
                    What, Where, When, Who, Why, or How.
                </h2>
                
                <div className={styles.pg214QuestionsBox}>
                    <div className={styles.pg214Question}>
                        <span>1.</span>
                        <input
                            type="text"
                            value={inputValues[0] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 0)}
                            className={styles.pg214InputBox}
                        />
                        <span>can you cook really well?</span>
                        {results[0] !== null && (
                            <img
                                src={results[0] ? correct_icon : wrong_icon}
                                alt={results[0] ? "Correct" : "Incorrect"}
                                className={styles.pg214CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg214Question}>
                        <span>2.</span>
                        <input
                            type="text"
                            value={inputValues[1] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 1)}
                            className={styles.pg214InputBox}
                        />
                        <span>can we park the car?</span>
                        {results[1] !== null && (
                            <img
                                src={results[1] ? correct_icon : wrong_icon}
                                alt={results[1] ? "Correct" : "Incorrect"}
                                className={styles.pg214CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg214Question}>
                        <span>3.</span>
                        <input
                            type="text"
                            value={inputValues[2] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 2)}
                            className={styles.pg214InputBox}
                        />
                        <span>can I visit your office?</span>
                        {results[2] !== null && (
                            <img
                                src={results[2] ? correct_icon : wrong_icon}
                                alt={results[2] ? "Correct" : "Incorrect"}
                                className={styles.pg214CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg214Question}>
                        <span>4.</span>
                        <input
                            type="text"
                            value={inputValues[3] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 3)}
                            className={styles.pg214InputBox}
                        />
                        <span>can answer this question?</span>
                        {results[3] !== null && (
                            <img
                                src={results[3] ? correct_icon : wrong_icon}
                                alt={results[3] ? "Correct" : "Incorrect"}
                                className={styles.pg214CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg214Question}>
                        <span>5.</span>
                        <input
                            type="text"
                            value={inputValues[4] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 4)}
                            className={styles.pg214InputBox}
                        />
                        <span>can't she come to the party?</span>
                        {results[4] !== null && (
                            <img
                                src={results[4] ? correct_icon : wrong_icon}
                                alt={results[4] ? "Correct" : "Incorrect"}
                                className={styles.pg214CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg214Question}>
                        <span>6.</span>
                        <input
                            type="text"
                            value={inputValues[5] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 5)}
                            className={styles.pg214InputBox}
                        />
                        <span>can I get to the train station?</span>
                        {results[5] !== null && (
                            <img
                                src={results[5] ? correct_icon : wrong_icon}
                                alt={results[5] ? "Correct" : "Incorrect"}
                                className={styles.pg214CheckmarkImage}
                            />
                        )}
                    </div>
                </div>

                <button onClick={handleCheckClick} className={styles.pg214CheckButton}>
                    Check
                </button>
            </div>
        </div>
    );
};

export default Pagina214;