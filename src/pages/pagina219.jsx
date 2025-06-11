import React, { useState } from 'react';
import styles from './pagina219.module.css';

const Pagina219 = () => {
  const leftColumn = [
    { id: 1, text: "Can you play" },
    { id: 2, text: "Can she open" },
    { id: 3, text: "Can they visit" },
    { id: 4, text: "Can he use" }
  ];

  const rightColumn = [
    { id: "a", text: "the window, please?", correctMatch: 2 },
    { id: "b", text: "the museum today?", correctMatch: 3 },
    { id: "c", text: "the computer?", correctMatch: 4 },
    { id: "d", text: "the piano?", correctMatch: 1 }
  ];

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleLeftClick = (item) => {
    if (showResults) return;
    setSelectedLeft(item);
  };

  const handleRightClick = (item) => {
    if (showResults || !selectedLeft) return;

    setMatches(prev => ({
      ...prev,
      [selectedLeft.id]: item.id
    }));
    setSelectedLeft(null);
  };

  const checkAnswers = () => {
    if (Object.keys(matches).length === leftColumn.length) {
      setShowResults(true);
    } else {
      alert('Please complete all matches before checking!');
    }
  };

  const resetExercise = () => {
    setMatches({});
    setSelectedLeft(null);
    setShowResults(false);
  };

  const isCorrectMatch = (leftId) => {
    if (!showResults || !matches[leftId]) return null;
    const rightItem = rightColumn.find(item => item.id === matches[leftId]);
    return rightItem?.correctMatch === leftId;
  };

  const getItemClassName = (item, isLeft) => {
    const baseClass = `${styles.pg219Item} ${styles.clickable}`;
    if (isLeft) {
      if (selectedLeft?.id === item.id) return `${baseClass} ${styles.selected}`;
      if (showResults) {
        return `${baseClass} ${isCorrectMatch(item.id) ? styles.correctMatch : styles.incorrectMatch}`;
      }
      return baseClass;
    } else {
      if (showResults) {
        const matchedLeft = Object.entries(matches).find(([_, rightId]) => rightId === item.id);
        if (matchedLeft) {
          return `${baseClass} ${isCorrectMatch(Number(matchedLeft[0])) ? styles.correctMatch : styles.incorrectMatch}`;
        }
      }
      return baseClass;
    }
  };

  return (
    <div className={styles.pg219Container}>
      <h1 className={styles.pg219Title}>Exercises</h1>

      <div className={styles.pg219ExerciseSection}>
        <h2 className={styles.pg219ExerciseTitle}>6. Match columns</h2>
        
        <div className={styles.pg219Instructions}>
          Click an item in the left column, then click its match in the right column.
        </div>

        <div className={styles.pg219ColumnsContainer}>
          <div className={styles.pg219Column}>
            {leftColumn.map((item) => (
              <div 
                key={item.id} 
                className={getItemClassName(item, true)}
                onClick={() => handleLeftClick(item)}
              >
                <span className={styles.pg219Number}>{item.id}.</span>
                <span className={styles.pg219Text}>{item.text}</span>
                {matches[item.id] && (
                  <span className={styles.pg219Match}>
                    → {rightColumn.find(r => r.id === matches[item.id])?.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.pg219Column}>
            {rightColumn.map((item) => (
              <div 
                key={item.id} 
                className={getItemClassName(item, false)}
                onClick={() => handleRightClick(item)}
              >
                <span className={styles.pg219Letter}>{item.id}.</span>
                <span className={styles.pg219Text}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pg219ButtonContainer}>
          <button 
            className={styles.pg219Button} 
            onClick={checkAnswers}
            disabled={showResults}
          >
            Check
          </button>
          <button 
            className={styles.pg219Button} 
            onClick={resetExercise}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina219;