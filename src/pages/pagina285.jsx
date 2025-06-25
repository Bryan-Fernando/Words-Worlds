import React, { useState, useEffect } from 'react';
import styles from './pagina285.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina285 = () => {
  const correctAnswers = [
    "I wake up at six o’clock",
    "I go to school at seven o’clock",
    "The meeting is at nine o’clock",
    "It passes at eight o’clock",
    "I eat lunch at eleven o’clock"
  ];

  const [inputValues, setInputValues] = useState(Array(5).fill(''));
  const [usedOptions, setUsedOptions] = useState([]);
  const [results, setResults] = useState(Array(5).fill(null));
  const [showAnswers, setShowAnswers] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const shuffled = [...correctAnswers].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, []);

  const handleSelectOption = (text) => {
    const indexInUsed = usedOptions.indexOf(text);

    if (indexInUsed !== -1) {
      const newValues = inputValues.map((val) => (val === text ? '' : val));
      setInputValues(newValues);
      setUsedOptions(usedOptions.filter((opt) => opt !== text));
    } else {
      const firstEmpty = inputValues.findIndex((val) => val === '');
      if (firstEmpty !== -1) {
        const newValues = [...inputValues];
        newValues[firstEmpty] = text;
        setInputValues(newValues);
        setUsedOptions([...usedOptions, text]);
      }
    }
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map(
      (ans, index) => ans.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase()
    );
    setResults(newResults);
    setShowAnswers(true);
  };

  return (
    <div className={styles["page285__container"]}>
      <h1 className={styles["page285__title"]}>Exercises</h1>

      <h2 className={styles["page285__subtitle"]}>
        1. Answer the question according to the pictures:
      </h2>

      <div className={styles["page285__questions-container"]}>
        {[
          "a) What time do you wake up?",
          "a) What time do you go to school?",
          "a) What time is the meeting?",
          "a) What time does the bus pass?",
          "a) What time do you eat lunch?"
        ].map((question, index) => (
          <div key={index} className={styles["page285__question-block"]}>
            <p>{question}</p>
            <div className={styles["page285__input-container"]}>
              <input
                type="text"
                value={inputValues[index]}
                readOnly
                className={styles["page285__input-box"]}
              />
              {showAnswers && (
                <img
                  src={results[index] ? correct_icon : wrong_icon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles["page285__result-icon"]}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles["page285__answer-column"]}>
        {shuffledOptions.map((option, idx) => (
          <div
            key={idx}
            onClick={() => handleSelectOption(option)}
            className={`${styles["page285__answer-option"]} ${inputValues.includes(option) ? styles["selected"] : ""
              }`}
          >
            {option}
          </div>
        ))}
      </div>

      <button className={styles["page285__check-button"]} onClick={handleCheckClick}>
        <em>Check</em>
      </button>

      {showAnswers && (
        <div className={styles["page285__answers-section"]}>
          <h2 className={styles["page285__answers-title"]}>Answers</h2>
          <ul className={styles["page285__answers-list"]}>
            {correctAnswers.map((ans, idx) => (
              <li key={idx}>{ans}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles["page285__note"]}>
        <div className={styles["page285__note-header"]}>
          Nota
        </div>
        <div className={styles["page285__note-content"]}>
          Usar a preposição <span className={styles["page285__red-bold"]}>at</span> antes de hora cheia para definir horários<br />
          Ex: What time is our English class?<br />
          It is <span className={styles["page285__red-bold"]}>at</span> <span className={styles["page285__blue-bold"]}>9:00 a.m.</span>
        </div>
      </div>

    </div>
  );
};

export default Pagina285;
