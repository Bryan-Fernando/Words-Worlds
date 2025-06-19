import React, { useState, useEffect } from 'react';
import styles from './pagina235.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina235 = () => {
  const leftColumn = ["1. 3:00", "2. 6:00", "3. 8:00", "4. 7:00", "5. 9:00"];
  const rightColumn = ["a) Nine o’clock", "b) Eight o’clock", "c) Seven o’clock", "d) Six o’clock", "e) Three o’clock"];
  const correctMatches = ["e", "d", "b", "c", "a"];

  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(''));
  const [results, setResults] = useState(Array(5).fill(null));
  const [shuffledRight, setShuffledRight] = useState([]);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    const shuffled = [...rightColumn].sort(() => Math.random() - 0.5);
    setShuffledRight(shuffled);
  }, []);

  const getOptionLetter = (optionText) => optionText.charAt(0);

  const handleSelect = (optionLetter) => {
    const alreadySelectedIndex = selectedOptions.indexOf(optionLetter);

    if (alreadySelectedIndex !== -1) {
      const newSelections = [...selectedOptions];
      newSelections[alreadySelectedIndex] = '';
      setSelectedOptions(newSelections);
    } else {
      const firstEmpty = selectedOptions.findIndex((val) => val === '');
      if (firstEmpty !== -1) {
        const newSelections = [...selectedOptions];
        newSelections[firstEmpty] = optionLetter;
        setSelectedOptions(newSelections);
      }
    }
  };

  const handleCheckClick = () => {
    const newResults = selectedOptions.map((value, index) => value === correctMatches[index]);
    setResults(newResults);
    setShowAnswerKey(true);
  };

  return (
    <div className={styles["page235__container"]}>
      <h1 className={styles["page235__title"]}>Exercises</h1>

      <h2 className={styles["page235__subtitle"]}>2. Match the time:</h2>

      <div className={styles["page235__content"]}>
        <div className={styles["page235__left-column"]}>
          {leftColumn.map((question, idx) => (
            <div key={idx} className={styles["page235__question"]}>
  <span>{question}</span>  {/* Este span agora pega o tamanho 2rem via CSS */}
  <div className={styles["page235__input-container"]}>
    <div className={styles["page235__input-box"]}>
      {selectedOptions[idx]}
    </div>
    {results[idx] !== null && (
      <img
        src={results[idx] ? correct_icon : wrong_icon}
        alt={results[idx] ? "Correct" : "Incorrect"}
        className={styles["page235__result-icon"]}
      />
    )}
  </div>
</div>

          ))}
        </div>

        <div className={styles["page235__right-column"]}>
          {shuffledRight.map((option, idx) => {
            const letter = getOptionLetter(option);
            const isSelected = selectedOptions.includes(letter);

            return (
              <div
                key={idx}
                onClick={() => handleSelect(letter)}
                className={`${styles["page235__option"]} ${isSelected ? styles["selected"] : ""}`}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>

      <button className={styles["page235__check-button"]} onClick={handleCheckClick}>
        <em>Check</em>
      </button>

      {showAnswerKey && (
        <div className={styles["page235__answer-key"]}>
          <h2 className={styles["page235__answer-key-title"]}>Check - Answer Key</h2>
          <p>1. 3:00 - e) Three o’clock</p>
          <p>2. 6:00 - d) Six o’clock</p>
          <p>3. 8:00 - b) Eight o’clock</p>
          <p>4. 7:00 - c) Seven o’clock</p>
          <p>5. 9:00 - a) Nine o’clock</p>
        </div>
      )}
    </div>
  );
};

export default Pagina235;
