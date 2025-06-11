import React, { useState } from 'react';
import styles from './pagina221.module.css';

const Pagina221 = () => {
  const questions = [
    {
      id: 1,
      text: "Can she drive a car?",
      options: ["Yes, she can;", "No, he can't;", "Yes, we can"],
      correctAnswer: "Yes, she can;"
    },
    {
      id: 2,
      text: "Can you speak Spanish?",
      options: ["Yes, I do;", "Yes, I can;", "No, I am not"],
      correctAnswer: "Yes, I can;"
    },
    {
      id: 3,
      text: "Can they swim?",
      options: ["Yes, they can;", "Yes, they are;", "No, they doesn't"],
      correctAnswer: "Yes, they can;"
    },
    {
      id: 4,
      text: "Can he play football?",
      options: ["Yes, he can;", "Yes, he is;", "No, he don't"],
      correctAnswer: "Yes, he can;"
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionId, option) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const checkAnswers = () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      alert('Please answer all questions before checking!');
      return;
    }
    setShowResults(true);
  };

  const resetExercise = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const isCorrectAnswer = (questionId, option) => {
    if (!showResults) return null;
    const question = questions.find(q => q.id === questionId);
    return question.correctAnswer === option;
  };

  return (
    <div className={styles.pg221Container}>
      <h1 className={styles.pg221Title}>Exercises</h1>

      <div className={styles.pg221ExerciseSection}>
        <h2 className={styles.pg221ExerciseTitle}>8. Multiple choice</h2>
        
        <div className={styles.pg221QuestionsContainer}>
          {questions.map((question) => (
            <div key={question.id} className={styles.pg221QuestionBlock}>
              <div className={styles.pg221Question}>
                <span className={styles.pg221Number}>{question.id}.</span>
                <span className={styles.pg221QuestionText}>{question.text}</span>
              </div>
              <div className={styles.pg221Options}>
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`${styles.pg221Option} ${
                      selectedAnswers[question.id] === option ? styles.selected : ''
                    } ${
                      showResults
                        ? isCorrectAnswer(question.id, option)
                          ? styles.correct
                          : selectedAnswers[question.id] === option
                          ? styles.incorrect
                          : ''
                        : ''
                    }`}
                    onClick={() => handleOptionSelect(question.id, option)}
                    disabled={showResults}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pg221ButtonsContainer}>
          <button
            className={styles.pg221CheckButton}
            onClick={checkAnswers}
            disabled={showResults}
          >
            Check
          </button>
          <button
            className={styles.pg221ResetButton}
            onClick={resetExercise}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina221;