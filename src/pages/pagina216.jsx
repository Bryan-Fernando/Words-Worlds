import React, { useState } from 'react';
import styles from './pagina216.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina216 = () => {
    const [inputValues, setInputValues] = useState(Array(4).fill(''));
    const [results, setResults] = useState(Array(4).fill(null));

    const correctAnswers = [
        'What',
        'Who',
        'When',
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
        <div className={styles.pg216Container}>
            <h1 className={styles.pg216Title}>Exercises</h1>

            <div className={styles.pg216ExerciseSection}>
                <h2 className={styles.pg216ExerciseTitle}>
                    3. Fill in the blanks by completing each question using:
                    <br />
                    What, Where, When, Who, or How.
                </h2>
                
                <div className={styles.pg216QuestionsBox}>
                    <div className={styles.pg216Question}>
                        <span>1.</span>
                        <input
                            type="text"
                            value={inputValues[0] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 0)}
                            className={styles.pg216InputBox}
                        />
                        <span>can you do with your phone?</span>
                        {results[0] !== null && (
                            <img
                                src={results[0] ? correct_icon : wrong_icon}
                                alt={results[0] ? "Correct" : "Incorrect"}
                                className={styles.pg216CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg216Question}>
                        <span>2.</span>
                        <input
                            type="text"
                            value={inputValues[1] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 1)}
                            className={styles.pg216InputBox}
                        />
                        <span>can help me?</span>
                        {results[1] !== null && (
                            <img
                                src={results[1] ? correct_icon : wrong_icon}
                                alt={results[1] ? "Correct" : "Incorrect"}
                                className={styles.pg216CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg216Question}>
                        <span>3.</span>
                        <input
                            type="text"
                            value={inputValues[2] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 2)}
                            className={styles.pg216InputBox}
                        />
                        <span>can we go to the park?</span>
                        {results[2] !== null && (
                            <img
                                src={results[2] ? correct_icon : wrong_icon}
                                alt={results[2] ? "Correct" : "Incorrect"}
                                className={styles.pg216CheckmarkImage}
                            />
                        )}
                    </div>

                    <div className={styles.pg216Question}>
                        <span>4.</span>
                        <input
                            type="text"
                            value={inputValues[3] || ""}
                            onChange={(e) => handleInputChange(e.target.value, 3)}
                            className={styles.pg216InputBox}
                        />
                        <span>can they speak English faster?</span>
                        {results[3] !== null && (
                            <img
                                src={results[3] ? correct_icon : wrong_icon}
                                alt={results[3] ? "Correct" : "Incorrect"}
                                className={styles.pg216CheckmarkImage}
                            />
                        )}
                    </div>
                </div>

                <button onClick={handleCheckClick} className={styles.pg216CheckButton}>
                    Check
                </button>
            </div>
        </div>
    );
};

export default Pagina216;
